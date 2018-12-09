> 这是YS同学的rehooker-schema-form库，这个库的作用是

# 目录
1. 项目结构(##项目结构)
2. 为什么写这个库(##Why)

## 项目结构
```

├─__test__                            # 测试用例
|    ├─theme-test.js
|    ├─theme-test.js.map
|    ├─theme-test.tsx
|    ├─antd
|    |  ├─antd.spec.js
|    |  ├─antd.spec.js.map
|    |  └antd.spec.tsx
├─styles
|   └antd-components.css
├─src                                 # 项目目录   
|  ├─constants.ts                     ## 存放常量函数
|  ├─field-array.tsx
|  ├─field.tsx
|  ├─form.tsx                         # 
|  ├─index.ts                         # 将模块统一导出
|  ├─inject-submittable.tsx
|  ├─mutations.ts
|  ├─resolve-maybe-promise.tsx
|  ├─utils.ts
|  ├─antd
|  |  ├─antd-components.tsx
|  |  ├─declarations.d.ts
|  |  └index.ts
├─docs                                # 文档目录
|  └README.md                         ## 主文档，概览性
├─dist                                # 编译后的文件目录
|  ├─constants.d.ts
|  ├─constants.js
|  ├─constants.js.map
|  ├─field-array.d.ts
|  ├─field-array.js
|  ├─field-array.js.map
|  ├─field.d.ts
|  ├─field.js
|  ├─field.js.map
|  ├─form.d.ts
|  ├─form.js
|  ├─form.js.map
|  ├─index.d.ts
|  ├─index.js
|  ├─index.js.map
|  ├─inject-submittable.d.ts
|  ├─inject-submittable.js
|  ├─inject-submittable.js.map
|  ├─mutations.d.ts
|  ├─mutations.js
|  ├─mutations.js.map
|  ├─resolve-maybe-promise.d.ts
|  ├─resolve-maybe-promise.js
|  ├─resolve-maybe-promise.js.map
|  ├─utils.d.ts
|  ├─utils.js
|  ├─utils.js.map
|  ├─antd
|  |  ├─antd-components.d.ts
|  |  ├─antd-components.js
|  |  ├─antd-components.js.map
|  |  ├─index.d.ts
|  |  ├─index.js
|  |  └index.js.map
├─demo                                # 示例
|  ├─example-antd.js
|  ├─example-antd.js.map
|  ├─example-antd.tsx
|  ├─index.html
|  ├─options.json
|  ├─schema-example.js
|  ├─schema-example.js.map
|  ├─schema-example.tsx
|  ├─tsconfig.json
|  └webpack.config.js
├─.gitignore                          # git忽略内容
├─.npmignore                          # npm忽略内容
├─.travis.yml                         # 
├─CHANGELOG.MD                        # 项目变更日志
├─LICENSE.MD                          # 项目证书
├─package.json                        # 项目依赖
├─README.MD                           # YS的文档
├─tsconfig.json                       # ts配置文件
├─yarn.lock                           # yarn版本固定文件

```

## 为什么写这个库
这个库思想来自redux-form，但不在依赖于redux-form。提供每个表单域（field）的状态在运行时能够被表单的值改变。比如，基于另一个field的值隐藏或展示一个表单域。

## 如何使用
- 接受一个自创的`schema`格式用于生成form表单
- 表单的状态由`rehooker`管理
- 预定义了一些ant design风格的小组件，因此你不需要每个表单都要去写一遍：
  - number
  - text
  - password
  - email
  - date
  - file
  - checkbox
  - select
  - autocomplete
  - autocomplete-async
  - autocomplete-text
  - array
  - group
- 你能通过`addType`方法添加更多的小组件
- 你可以用`setButtons` 和 `injectSubmittable` 方法使用自定义按钮

具体代码演示：
```js
import {SchemaForm,injectSubmittable} from "rehooker-schema-form"
import "rehooker-schema-form/src/ant-design"

const schema = [
    {
        key:"name",
        label:"Name",
        type:"text",
        ...others// other props are passed to underlying component, such as required and multiLine
    },{
        key:"password",
        label:"Password"
        type:"password"
    },{
        key:"fieldWithState",
        label:"this field changed when Name changed",
        type:"text",
        listens:[
            {
                to:()=>["Company Name"],
                then:([value])=>{
                    if(value === 'Some Company')
                        return {
                            label:"Name Illegal"
                        }
                    else
                        return {
                            label:"this field changed when Name changed"
                        }
                }
            }
        ]
    }
]

function FormWithDefaultButtons(){ //Default buttons are chinese
    return <SchemaForm
        form="my-form" 
        schema={schema}
        {...others}
    />
}

function FormWithCustomButtons(){
    return <div>
        <SchemaForm
            form="foo1" 
            schema={schema}
            noButton
            {...others}
        />
        <CustomSubmitButton>Submit Form</CustomSubmitButton>
        <CustomResetButton>Reset Fields</CustomResetButton>
    </div>
}
```
