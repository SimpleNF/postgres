# Repository Guidelines

## Project Structure & Module Organization

This repository stores SNF definitions for PostgreSQL statements rather than application source code. Definitions are grouped by statement family: `create/`, `alter/`, `drop/`, `query/`, `transaction/`, `auth/`, and `other/`. Shared PostgreSQL option metadata lives in `definition/parameter.yaml`. Keep new definitions in the matching family and use one lowercase, hyphenated file per statement, such as `create/materialized-view.snf`.

Each SNF file should begin with a comment linking to the relevant PostgreSQL documentation. Preserve the existing sections (`CASE`, `WHERE`, and similar clauses) so definitions remain easy to compare with the upstream grammar.

## Build, Test, and Development Commands

The project currently has no build, test, lint, or runtime scripts in `package.json`; it contains package metadata only. Useful repository checks are:

- `git diff --check` — finds whitespace errors in edited definitions.
- `rg --files -g '*.snf'` — lists all grammar definition files.
- `git diff -- create/table.snf` — reviews a focused grammar change.

Do not add undocumented tool commands to contributor workflows. If automation is introduced, add the corresponding `package.json` script and document it here.

## Coding Style & Naming Conventions

Write PostgreSQL keywords in uppercase and grammar placeholders in lowercase. Use four-space indentation for wrapped alternatives and YAML mappings; do not use tabs. Keep optional syntax in square brackets, alternatives separated by `|`, repetitions as `[...]`, and related helper productions close to the statement they support. Follow surrounding whitespace and section-comment patterns instead of reformatting unrelated definitions.

Use `name` only for the primary object represented by the current definition and `new_name` only when that primary object is renamed. Every secondary object must use its semantic type, such as `constraint`, `index`, `new_index`, `colname`, `window`, or `tablespace`.

Name grammar nodes by their actual role: suffix complete executable or fully nestable SQL with `_statement`; value-producing, boolean, or relational expressions with `_expression`; and column, constraint, argument, partition, or other object-structure declarations with `_definition`. Use `_clause` for a keyword-bearing, position-specific statement fragment that cannot execute independently. Use `_option` for one optional setting or alternative and `_options` for a composable group of settings. Use `_action` for an operation fragment that depends on its parent statement. Keep identifiers named by their object type, and never force clauses, options, or actions into the statement, expression, or definition categories. For example, `order_by_clause` includes the `ORDER BY` keywords while `order_by_expression` is one sort item; a targetless `UPDATE SET` inside MERGE is an `update_action`, not an `update_statement`.

Use a context-qualified `_alias` for aliases, `_target` for operation or clause targets, `_assignment` for complete assignment structures, `_parameter` for configuration parameter names, and `_item`/`_list` for one member versus a homogeneous member list. Use `_mode` for behavioral or state selections, `_method` for implementation or algorithm selections, and `_value` only for values or enumerations that are not arbitrary SQL expressions. Avoid generic `config`; choose `_option`, `_options`, `_parameter`, or `_definition` by role. Prefer the referenced object's semantic type, such as `table`, `constraint`, or `referenced_table`, over a generic `_reference`. Reserve `_condition` for structured condition grammar such as `join_condition`; use `boolean_expression` for ordinary predicates.

## Testing Guidelines

There is no checked-in test framework or coverage requirement. Validate changes by comparing them with the linked PostgreSQL 17 syntax page, checking balanced delimiters, and reviewing every alternative and optional clause in the diff. Keep edits narrowly scoped so grammar changes can be reviewed independently.

## Commit & Pull Request Guidelines

Recent history uses short Conventional Commit-style subjects, primarily `feat: ...` and `fix: ...`. Use an imperative, specific summary, for example `fix: correct create table partition syntax`. Pull requests should explain the affected statement families, link the authoritative PostgreSQL documentation, and call out intentional deviations or compatibility assumptions. Include generated-output diffs only when they help reviewers verify the grammar.

## Agent-Specific Instructions

After modifying files, agents must not run tests or type checks automatically. The user will trigger those checks when needed.
