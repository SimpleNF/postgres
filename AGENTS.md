# Repository Guidelines

## Project Structure & Module Organization

This repository stores SNF definitions for PostgreSQL statements rather than application source code. Definitions are grouped by statement family: `create/`, `alert/`, `drop/`, `query/`, `transaction/`, `auth/`, and `other/`. Shared PostgreSQL option metadata lives in `defind/parameter.yaml`. Keep new definitions in the matching family and use one lowercase, hyphenated file per statement, such as `create/materialized-view.snf`.

Each SNF file should begin with a comment linking to the relevant PostgreSQL documentation. Preserve the existing sections (`CASE`, `WHERE`, and similar clauses) so definitions remain easy to compare with the upstream grammar.

## Build, Test, and Development Commands

The project currently has no build, test, lint, or runtime scripts in `package.json`; it contains package metadata only. Useful repository checks are:

- `git diff --check` — finds whitespace errors in edited definitions.
- `rg --files -g '*.snf'` — lists all grammar definition files.
- `git diff -- create/table.snf` — reviews a focused grammar change.

Do not add undocumented tool commands to contributor workflows. If automation is introduced, add the corresponding `package.json` script and document it here.

## Coding Style & Naming Conventions

Write PostgreSQL keywords in uppercase and grammar placeholders in lowercase. Use four-space indentation for wrapped alternatives and YAML mappings; do not use tabs. Keep optional syntax in square brackets, alternatives separated by `|`, repetitions as `[...]`, and related helper productions close to the statement they support. Follow surrounding whitespace and section-comment patterns instead of reformatting unrelated definitions.

## Testing Guidelines

There is no checked-in test framework or coverage requirement. Validate changes by comparing them with the linked PostgreSQL 17 syntax page, checking balanced delimiters, and reviewing every alternative and optional clause in the diff. Keep edits narrowly scoped so grammar changes can be reviewed independently.

## Commit & Pull Request Guidelines

Recent history uses short Conventional Commit-style subjects, primarily `feat: ...` and `fix: ...`. Use an imperative, specific summary, for example `fix: correct create table partition syntax`. Pull requests should explain the affected statement families, link the authoritative PostgreSQL documentation, and call out intentional deviations or compatibility assumptions. Include generated-output diffs only when they help reviewers verify the grammar.

## Agent-Specific Instructions

After modifying files, agents must not run tests or type checks automatically. The user will trigger those checks when needed.
