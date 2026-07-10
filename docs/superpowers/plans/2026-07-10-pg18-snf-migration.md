# PostgreSQL 18 SNF Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Audit and update every SNF definition so PostgreSQL 18 is the repository's sole syntax authority.

**Architecture:** Work directory-by-directory, using each file's PostgreSQL 18 command page as the primary source and the PG 18 release notes as a cross-check. Record file-level completion in `docs/pg18-migration-checklist.md`, update only syntax and source references relevant to PG 18, and commit each logical directory batch separately.

**Tech Stack:** SNF grammar files, YAML parameter metadata, Markdown audit records, Git, PostgreSQL 18 official HTML documentation.

## Global Constraints

- PostgreSQL 18 is the only compatibility target; do not preserve PG 17 alternatives.
- Review all 180 `.snf` files and `defind/parameter.yaml`, including files whose synopsis appears unchanged.
- Use only fixed `https://www.postgresql.org/docs/18/` documentation links.
- Preserve the existing `alert/` and `defind/` directory names and established SNF notation.
- Do not run tests or type checks automatically.
- Mark a checklist item complete only after its individual official-source comparison.

---

### Task 1: Create statement definitions

**Files:** Modify every `.snf` path under the `create/` section of `docs/pg18-migration-checklist.md`; update the corresponding checklist entries.

- [x] Compare each command's PG 17 and PG 18 synopsis, then read the PG 18 parameter details for additions or restrictions.
- [x] Update each source URL to `/docs/18/` and edit SNF productions to match PG 18.
- [x] Mark all 42 `create/` entries complete only after individual review.
- [x] Run `rg -n 'docs/(17|current)' create docs/pg18-migration-checklist.md` and expect no matches in `create/`.
- [x] Run `git diff --check -- create docs/pg18-migration-checklist.md`, review the complete batch diff, and commit with `feat: update create definitions for pg18`.

### Task 2: Alter statement definitions

**Files:** Modify every `.snf` path under the `alert/` section of `docs/pg18-migration-checklist.md`; update the corresponding checklist entries.

- [x] Compare every ALTER command page and all helper productions with PG 18.
- [x] Update source URLs and PG 18-only syntax, including constraint, publication, subscription, and table changes.
- [x] Mark all 41 `alert/` entries complete after individual review.
- [x] Run `rg -n 'docs/(17|current)' alert` and expect no matches.
- [x] Run `git diff --check -- alert docs/pg18-migration-checklist.md`, review the batch diff, and commit with `feat: update alter definitions for pg18`.

### Task 3: Drop statement definitions

**Files:** Modify every `.snf` path under the `drop/` section of `docs/pg18-migration-checklist.md`; update the corresponding checklist entries.

- [x] Compare all DROP command synopses with PG 18, including object lists, `IF EXISTS`, and dependency behavior syntax.
- [x] Update all source URLs and any changed productions.
- [x] Mark all 43 `drop/` entries complete after individual review.
- [x] Run `rg -n 'docs/(17|current)' drop` and expect no matches.
- [x] Run `git diff --check -- drop docs/pg18-migration-checklist.md`, review the batch diff, and commit with `feat: update drop definitions for pg18`.

### Task 4: Query definitions

**Files:** Modify every `.snf` path under the `query/` section of `docs/pg18-migration-checklist.md`; update the corresponding checklist entries.

- [x] Compare all seven DML/query command pages with PG 18.
- [x] Implement PG 18 `RETURNING` old/new aliases and any command-specific synopsis changes.
- [x] Mark all seven `query/` entries complete after individual review.
- [x] Run `rg -n 'docs/(17|current)' query` and expect no matches.
- [x] Run `git diff --check -- query docs/pg18-migration-checklist.md`, review the batch diff, and commit with `feat: update query definitions for pg18`.

### Task 5: Transaction definitions

**Files:** Modify every `.snf` path under the `transaction/` section of `docs/pg18-migration-checklist.md`; update the corresponding checklist entries.

- [x] Compare all 12 transaction command pages and aliases with PG 18.
- [x] Update all source URLs and any changed productions.
- [x] Mark all 12 `transaction/` entries complete after individual review.
- [x] Run `rg -n 'docs/(17|current)' transaction` and expect no matches.
- [x] Run `git diff --check -- transaction docs/pg18-migration-checklist.md`, review the batch diff, and commit with `feat: update transaction definitions for pg18`.

### Task 6: Authorization definitions

**Files:** Modify `auth/grant.snf`, `auth/revoke.snf`, and their checklist entries.

- [x] Compare GRANT and REVOKE object and role forms with PG 18.
- [x] Update source URLs and all privilege/object alternatives.
- [x] Mark both `auth/` entries complete.
- [x] Run `rg -n 'docs/(17|current)' auth` and expect no matches.
- [x] Run `git diff --check -- auth docs/pg18-migration-checklist.md`, review the batch diff, and commit with `feat: update authorization definitions for pg18`.

### Task 7: Other utility definitions

**Files:** Modify every `.snf` path under the `other/` section of `docs/pg18-migration-checklist.md`; update the corresponding checklist entries.

- [x] Compare all 33 utility command pages with PG 18.
- [x] Apply PG 18 changes including `ANALYZE/VACUUM ONLY`, COPY rejection/logging options, and any changed utility syntax.
- [x] Mark all 33 `other/` entries complete after individual review.
- [x] Run `rg -n 'docs/(17|current)' other` and expect no matches.
- [x] Run `git diff --check -- other docs/pg18-migration-checklist.md`, review the batch diff, and commit with `feat: update utility definitions for pg18`.

### Task 8: Shared parameters and final audit

**Files:** Modify `defind/parameter.yaml`, `docs/pg18-migration-checklist.md`, and any definition found incomplete during the final cross-check.

- [x] Compare every YAML option group with the PG 18 parameter sections used by its referenced commands.
- [x] Add, remove, or update parameter values and `belong` metadata for PG 18.
- [x] Mark `defind/parameter.yaml` complete.
- [x] Confirm all 181 checklist items are marked `[x]`.
- [x] Run `rg -n 'postgresql\\.org/docs/(17|current)/' -g '*.snf' -g '*.yaml'` and expect no matches.
- [x] Resolve every `/docs/18/` URL and require HTTP success.
- [x] Run `git diff --check`, inspect the migration commits, and commit the final audit with `feat: complete pg18 definition audit`.
