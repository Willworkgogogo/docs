> 这是YS同学的rehooker-schema-form库，闻到有先后，向大牛虚心学习。就以完成这个库的文档开始吧。从多个维度来看这个库，当然第一步是按文件功能实现逐个看。后面熟练后将会切换角度。

# 目录
1. 项目结构(## 项目结构)

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
|  ├─constants.ts                     ## 
|  ├─field-array.tsx
|  ├─field.tsx
|  ├─form.tsx
|  ├─index.ts
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