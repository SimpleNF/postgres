# PostgreSQL 18 SNF Migration Design

## Goal

Make PostgreSQL 18 the sole authoritative syntax baseline for this repository. Review every one of the 180 `.snf` definitions and `defind/parameter.yaml` against the PostgreSQL 18 documentation, without preserving PostgreSQL 17 compatibility variants.

## Authoritative Sources

- PostgreSQL 18 SQL command reference: <https://www.postgresql.org/docs/18/sql-commands.html>
- PostgreSQL 18 release notes: <https://www.postgresql.org/docs/18/release-18.html>
- The command-specific `/docs/18/sql-*.html` page linked from each definition

Command synopsis sections are authoritative for accepted syntax. Parameter sections and the release notes are secondary sources for option values, semantic restrictions, renamed concepts, and additions that share helper productions.

## Migration Method

Review definitions in this order: `create/`, `alert/`, `drop/`, `query/`, `transaction/`, `auth/`, and `other/`, followed by `defind/parameter.yaml`. Preserve the repository's existing directory names and SNF notation.

For every `.snf` file:

1. Replace `/docs/17/` or `/docs/current/` links with the matching `/docs/18/` page.
2. Compare every main synopsis form with the file's top-level productions.
3. Compare auxiliary productions such as `CASE`, `WHERE`, and option lists.
4. Add, remove, or reshape syntax so the result describes PostgreSQL 18 only.
5. Normalize placeholders and layout only where needed to accurately represent the PG 18 synopsis; avoid unrelated reformatting.

The review must not treat unchanged synopsis text as permission to skip a file. Each file receives an explicit source comparison.

## Known PG 18 Change Areas

The audit must cover, but is not limited to:

- virtual generated columns and the changed default form;
- `RETURNING` support for `OLD` and `NEW` aliases in DML;
- temporal `PRIMARY KEY`, `UNIQUE`, and foreign key syntax using `WITHOUT OVERLAPS` and `PERIOD`;
- `ENFORCED` and `NOT ENFORCED` constraint syntax;
- named and inheritable `NOT NULL` constraints;
- `CREATE FOREIGN TABLE ... LIKE`;
- `ONLY` for `VACUUM` and `ANALYZE`;
- `COPY` options including `REJECT_LIMIT` and `LOG_VERBOSITY silent`;
- PostgreSQL 18 publication, subscription, and storage parameter changes.

## Validation and Completion Criteria

No tests or type checks will be run automatically, per repository instructions. Completion is established by:

- all 180 `.snf` files recorded as reviewed;
- no remaining PostgreSQL 17 or `current` documentation URLs;
- all linked PostgreSQL 18 pages resolving successfully;
- a focused diff review against each changed command synopsis;
- `git diff --check` reporting no whitespace errors;
- shared parameter definitions matching the options documented for PostgreSQL 18.

Changes will be split into logical commits by statement family or closely related syntax area so the migration remains reviewable.
