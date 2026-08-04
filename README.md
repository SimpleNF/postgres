# POSTGRES SNF

`POSTGRES` 语句的 `SNF` 定义。

## 定义规则

- `# CASE name`：完整语法的顶层分支。同一文件有多个顶层语法时，每个分支都需要标记。
- `# WHERE name`：单个可复用语法定义；可以使用逗号同时定义多个名称。
- `# ONEOFIS name`：每个物理行是一个候选分支，语义等同于 `{ a | b }`。
- `# PARTOFIS name`：每个空行分隔的 block 是一个候选分支，适用于需要跨多行的候选。
- `# STATEMENT name`：可嵌套 statement 的类型说明，不作为当前文件的顶层语法。

主语句的独立 clause 使用四个空格缩进并按行展示。`ONEOFIS` 的单个候选不能换行；需要换行时改用 `PARTOFIS`。

当前定义的主对象使用 `name`，主对象的重命名目标使用 `new_name`。定义内部出现的其他对象不得复用 `name`，必须使用对应的语义类型，例如 `constraint`、`index`、`new_index`、`colname`、`window` 或 `tablespace`。

语法节点按真实角色统一命名：

- 可独立执行或完整嵌套的 SQL 使用 `_statement`。
- 产生值、布尔结果或关系的表达式使用 `_expression`。
- 声明列、约束、参数、分区等对象结构的定义使用 `_definition`。
- 带有自身关键字和固定位置、但不能独立执行的语句子句使用 `_clause`。
- 单个可选配置或候选分支使用 `_option`；一组可组合配置使用 `_options`。
- 依赖父语句、不能独立执行的操作片段使用 `_action`。
- 对象在当前语句中的别名使用带对象上下文的 `_alias`，例如 `table_alias`、`col_alias`。
- 操作或子句的目标结构使用 `_target`；完整的左值、赋值运算符和右值结构使用 `_assignment`。
- 配置参数名使用 `_parameter`；单个成员和同类成员列表分别使用 `_item`、`_list`。
- 行为或状态选择使用 `_mode`，实现方法或算法选择使用 `_method`。
- 非任意 SQL 表达式的值或枚举值使用 `_value`；能够接受一般 SQL 表达式时必须使用 `_expression`。

标识符继续使用对象类型名。不得为了统一后缀而把 clause、option 或 action 误标成 statement、expression 或 definition。例如，`order_by_clause` 包含完整的 `ORDER BY` 子句，`order_by_expression` 只表示其中一个排序项；MERGE 中缺少独立目标表的 `UPDATE SET` 应属于 `update_action`，而不是 `update_statement`。

避免使用含义过宽的 `config`；应根据实际角色改用 `_option`、`_options`、`_parameter` 或 `_definition`。引用已有对象时优先直接使用对象类型名，例如 `table`、`constraint`、`referenced_table`，而不是泛化的 `_reference`。`_condition` 仅用于 `join_condition` 这类包含自身语法结构的条件节点；普通判断条件使用 `boolean_expression`。
