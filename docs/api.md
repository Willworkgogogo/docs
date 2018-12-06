# API

| 参数            | 说明                               | 类型                       | 默认值 |
| --------------- | ---------------------------------- | -------------------------- | ------ |
| disableResubmit | 表单提交成功后禁用提交按钮         | boolean                    | -      |
| noButton        | 隐藏提交和取消按钮                 | boolean                    | false  |
| children        | 内容将被放在表单域和按钮之间       | function                   | -      |
| schema          | 一定规则的用于生成 form 表单的配置 | array（FormFieldSchema[]） | -      |
|                 |                                    |                            |        |

## FormFieldSchema API

| 参数  | 说明                                      | 类型    | 默认值 | isRequired |
| ----- | ----------------------------------------- | ------- | ------ | ---------- |
| key   | 代表传入数据的 key 字段，用于取值         | string  | -      | Y          |
| label | 表单中用于展示的域名称                    | string  | -      | Y          |
| type  | 表单域的类型，比如`select`,`text`,`email` | string  | -      | Y          |
| hide  |                                           | boolean | -      | N          |
|       |                                           |         |        |            |
