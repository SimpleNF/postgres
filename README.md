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
