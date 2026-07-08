---
name: write-issues
description: Generate well-structured, actionable development issues for bugs, feature requests, or technical tasks, ensuring they strictly align with the project's Hexagonal Architecture, Clean Code, and strict TDD standards. Use this when breaking down general requests into architectural or logical issues.
---

# Write Issues

Convert a feature request, bug report, or technical debt into independently-workable issues, written as local markdown files in the `issues/` directory. Unlike `prd-to-issues` which focuses on end-to-end vertical slices from a PRD, this skill breaks down work with a strong emphasis on the project's **Ports and Adapters (Hexagonal Architecture)** and **Strict TDD Cycle**.

## Process

### 1. Analyze the Request

Ask the user for the feature description, bug report, or technical task.
Clarify any ambiguous business rules. Do not guess business rules; always confirm with the user.

### 2. Draft the Architectural Breakdown

Break the request into issues. Depending on the size of the request, you can either:
- Create **Vertical Slices** (if the feature is small and can be done end-to-end in one issue while respecting boundaries).
- Create **Horizontal Slices** based on the architecture (Domain first, Application second, Adapters third) if the feature is complex.

**Crucial Architectural Constraints to enforce in the breakdown:**
- The **Domain** must have zero framework dependencies (no Spring, JPA, REST).
- **Application Services** must only implement Input Ports (`api`) and use Output Ports (`spi`).
- **Adapters** (REST controllers, JPA repositories) must use dedicated mappers (MapStruct) and must not contain business logic.
- **TDD is mandatory** (Domain unit tests, Application mock tests, Adapter slice tests with Testcontainers).

### 3. Quiz the user

Present the proposed breakdown as a numbered list. For each issue, show:
- **Title**: short descriptive name
- **Layer(s) Affected**: (e.g., Core Domain, Application, Adapters, or Full Vertical Slice)
- **Blocked by**: which other issues must complete first (e.g., Domain blocks Application; Application blocks Adapters)

Ask the user:
- Does the breakdown align with your expectations?
- Are the architectural boundaries correctly assigned?
- Should any issues be merged or split further?

Iterate until the user approves the breakdown.

### 4. Create the issue files

For each approved issue, write a markdown file in `issues/` using the naming pattern `issues/NNN-short-title.md` (e.g. `issues/002-domain-course-enrollment.md`). 

Number issues starting from the next available number (check what files already exist in `issues/`). Create files in dependency order (blockers first) so you can reference real filenames in the "Blocked by" field.

Do NOT use `gh issue create` or any GitHub CLI commands. Use local filenames for all cross-references.

<issue-template>
## Objective

A concise description of the bug, feature, or refactoring task. Describe the end goal of this specific issue.

## Architectural Context

Specify exactly which layers are involved and must be modified/created:
- **Core Domain**: Entities, Value Objects, Domain Services, Events (No Frameworks allowed).
- **Application**: Use Cases, `api` ports, `spi` ports, Application Services, Mappers.
- **Adapters**: Controllers (`in/rest`), Repositories (`out/persistence`), External Clients.

## Technical Constraints & Clean Code

Ensure the implementation strictly follows:
- **File Limits**: Keep files < 500 lines.
- **Methods**: Target < 20 lines, max nesting depth 2.
- **Controllers**: Thin (< 150 lines, max 10 endpoints), absolutely no business logic.
- **Mappers**: Use MapStruct for all DTO/Entity transitions (no scattered manual mappings).

## Acceptance Criteria & TDD Checklist

List the criteria and the required tests to satisfy them following Red-Green-Refactor:
- [ ] Write **Domain Tests** for business invariants (Pure Java, no mocks).
- [ ] Write **Application Tests** with mocked `spi` ports.
- [ ] Write **Adapter Tests** using Test Slices (`@WebMvcTest`, `@DataJpaTest`) or Testcontainers for integration.
- [ ] Implement the minimal production code to pass tests.
- [ ] Refactor for duplication, intention-revealing naming, and cohesion.

## Blocked by

- Blocked by `issues/NNN-title.md` (if any)

Or "None - can start immediately" if no blockers.
</issue-template>
