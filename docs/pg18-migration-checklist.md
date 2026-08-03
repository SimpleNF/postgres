# PostgreSQL 18 SNF Audit Checklist

Every item is marked complete only after comparing the file with its PostgreSQL 18 command page, updating its fixed-version documentation URL, and applying any required syntax changes.

## create/

- [x] `create/access-method.snf`
- [x] `create/aggregate.snf`
- [x] `create/cast.snf`
- [x] `create/collation.snf`
- [x] `create/conversion.snf`
- [x] `create/database.snf`
- [x] `create/domain.snf`
- [x] `create/event-trigger.snf`
- [x] `create/extension.snf`
- [x] `create/foreign-data.snf`
- [x] `create/foreign-table.snf`
- [x] `create/function.snf`
- [x] `create/group.snf`
- [x] `create/index.snf`
- [x] `create/language.snf`
- [x] `create/materialized-view.snf`
- [x] `create/operator-class.snf`
- [x] `create/operator-family.snf`
- [x] `create/operator.snf`
- [x] `create/policy.snf`
- [x] `create/procedure.snf`
- [x] `create/publication.snf`
- [x] `create/role.snf`
- [x] `create/rule.snf`
- [x] `create/schema.snf`
- [x] `create/sequence.snf`
- [x] `create/server.snf`
- [x] `create/statistics.snf`
- [x] `create/subscription.snf`
- [x] `create/table-as.snf`
- [x] `create/table.snf`
- [x] `create/tablespace.snf`
- [x] `create/text-search-configuration.snf`
- [x] `create/text-search-dictionary.snf`
- [x] `create/text-search-parser.snf`
- [x] `create/text-search-template.snf`
- [x] `create/transform.snf`
- [x] `create/trigger.snf`
- [x] `create/type.snf`
- [x] `create/user-mapping.snf`
- [x] `create/user.snf`
- [x] `create/view.snf`

## alter/

- [x] `alter/aggregate.snf`
- [x] `alter/collation.snf`
- [x] `alter/conversion.snf`
- [x] `alter/database.snf`
- [x] `alter/domain.snf`
- [x] `alter/event-trigger.snf`
- [x] `alter/extension.snf`
- [x] `alter/foreign-data.snf`
- [x] `alter/function.snf`
- [x] `alter/group.snf`
- [x] `alter/index.snf`
- [x] `alter/language.snf`
- [x] `alter/large-object.snf`
- [x] `alter/materialized-view.snf`
- [x] `alter/operator-class.snf`
- [x] `alter/operator-family.snf`
- [x] `alter/operator.snf`
- [x] `alter/policy.snf`
- [x] `alter/privileges.snf`
- [x] `alter/procedure.snf`
- [x] `alter/publication.snf`
- [x] `alter/role.snf`
- [x] `alter/routine.snf`
- [x] `alter/rule.snf`
- [x] `alter/schema.snf`
- [x] `alter/sequence.snf`
- [x] `alter/server.snf`
- [x] `alter/statistics.snf`
- [x] `alter/subscription.snf`
- [x] `alter/system.snf`
- [x] `alter/table.snf`
- [x] `alter/tablespace.snf`
- [x] `alter/text-search-configuration.snf`
- [x] `alter/text-search-dictionary.snf`
- [x] `alter/text-search-parser.snf`
- [x] `alter/text-search-template.snf`
- [x] `alter/trigger.snf`
- [x] `alter/type.snf`
- [x] `alter/user-mapping.snf`
- [x] `alter/user.snf`
- [x] `alter/view.snf`

## drop/

- [x] `drop/access-method.snf`
- [x] `drop/aggregate.snf`
- [x] `drop/cast.snf`
- [x] `drop/collation.snf`
- [x] `drop/conversion.snf`
- [x] `drop/database.snf`
- [x] `drop/domain.snf`
- [x] `drop/event-trigger.snf`
- [x] `drop/extension.snf`
- [x] `drop/foreign-data.snf`
- [x] `drop/foreign-table.snf`
- [x] `drop/function.snf`
- [x] `drop/group.snf`
- [x] `drop/index.snf`
- [x] `drop/language.snf`
- [x] `drop/materialized-view.snf`
- [x] `drop/operator-class.snf`
- [x] `drop/operator-family.snf`
- [x] `drop/operator.snf`
- [x] `drop/owned.snf`
- [x] `drop/policy.snf`
- [x] `drop/procedure.snf`
- [x] `drop/publication.snf`
- [x] `drop/role.snf`
- [x] `drop/routine.snf`
- [x] `drop/rule.snf`
- [x] `drop/schema.snf`
- [x] `drop/sequence.snf`
- [x] `drop/server.snf`
- [x] `drop/statistics.snf`
- [x] `drop/subscription.snf`
- [x] `drop/table.snf`
- [x] `drop/tablespace.snf`
- [x] `drop/text-search-configuration.snf`
- [x] `drop/text-search-dictionary.snf`
- [x] `drop/text-search-parser.snf`
- [x] `drop/text-search-template.snf`
- [x] `drop/transform.snf`
- [x] `drop/trigger.snf`
- [x] `drop/type.snf`
- [x] `drop/user-mapping.snf`
- [x] `drop/user.snf`
- [x] `drop/view.snf`

## query/

- [x] `query/delete.snf`
- [x] `query/insert.snf`
- [x] `query/merge.snf`
- [x] `query/select-into.snf`
- [x] `query/select.snf`
- [x] `query/update.snf`
- [x] `query/values.snf`

## transaction/

- [x] `transaction/abort.snf`
- [x] `transaction/begin.snf`
- [x] `transaction/commit-prepared.snf`
- [x] `transaction/commit.snf`
- [x] `transaction/end.snf`
- [x] `transaction/prepare-transaction.snf`
- [x] `transaction/release-savepoint.snf`
- [x] `transaction/rollback-prepared.snf`
- [x] `transaction/rollback-to.snf`
- [x] `transaction/rollback.snf`
- [x] `transaction/save-point.snf`
- [x] `transaction/set-transaction.snf`

## auth/

- [x] `auth/grant.snf`
- [x] `auth/revoke.snf`

## other/

- [x] `other/analyze.snf`
- [x] `other/call.snf`
- [x] `other/checkpoint.snf`
- [x] `other/close.snf`
- [x] `other/cluster.snf`
- [x] `other/comment.snf`
- [x] `other/copy.snf`
- [x] `other/deallocate.snf`
- [x] `other/declare.snf`
- [x] `other/discard.snf`
- [x] `other/do.snf`
- [x] `other/execute.snf`
- [x] `other/explain.snf`
- [x] `other/fetch.snf`
- [x] `other/import-foreign-schema.snf`
- [x] `other/listen.snf`
- [x] `other/load.snf`
- [x] `other/lock.snf`
- [x] `other/move.snf`
- [x] `other/notify.snf`
- [x] `other/prepare.snf`
- [x] `other/reassign-owned.snf`
- [x] `other/refresh-materialized-view.snf`
- [x] `other/reindex.snf`
- [x] `other/reset.snf`
- [x] `other/security-label.snf`
- [x] `other/set-constraints.snf`
- [x] `other/set-role.snf`
- [x] `other/set-session-authorization.snf`
- [x] `other/set.snf`
- [x] `other/truncate.snf`
- [x] `other/unlisten.snf`
- [x] `other/vacuum.snf`

## defind/

- [x] `defind/parameter.yaml`
