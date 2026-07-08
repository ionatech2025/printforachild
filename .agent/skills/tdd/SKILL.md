---
name: tdd
description: This skill enforces **strict Test-Driven Development (TDD)** while maintaining a **Ports and Adapters (Hexagonal Architecture)** codebase.

The primary goals are to:

- Write tests before production code.
- Keep the Core Domain completely independent of frameworks.
- Produce highly testable software.
- Maintain clear architectural boundaries.
- Follow SOLID principles.
- Follow Clean Code principles.
- Keep business logic inside the domain.
- Minimize coupling and maximize maintainability.

The agent must **never bypass the TDD cycle**.
---

# Architecture Principles

The project strictly follows **Ports and Adapters (Hexagonal Architecture)** and the mandatory **Clean Architecture** package structure.

## Mandatory Package Structure

```text
backend/

domain/
├── model
├── valueobjects
├── events
├── exceptions

application/
├── ports
│   ├── api # input ports (use cases interfaces)
│   └── spi # output ports (infrastructure interfaces)
├── services
├── mappers

adapters/
├── in
│   └── rest
├── out
│   ├── persistence
│   ├── messaging
│   ├── storage
│   └── external

configuration/
```

No feature may bypass this structure.

## Dependency Rule

Dependencies always point inward.

```
Infrastructure
      │
Application
      │
Core Domain
```

The Core Domain knows nothing about:

- Spring
- Jakarta EE
- Hibernate
- JPA
- Jackson
- REST
- Databases
- HTTP
- Messaging
- Framework annotations
- Dependency Injection frameworks

The Core Domain must compile as plain Java without any external framework.

---

# Mandatory Development Workflow

Every implementation must follow this exact sequence.

## 1. Understand the Requirement

Before generating any code:

- Identify the business problem.
- Identify business rules.
- Identify domain concepts.
- Identify aggregates.
- Identify entities.
- Identify value objects.
- Identify domain services.
- Identify repository ports.
- Identify external dependencies.

If requirements are ambiguous, ask clarifying questions before implementation.

Never guess business rules.

---

## 2. Design Before Coding

Determine:

- Which layer owns the behavior.
- Which objects collaborate.
- Which ports are required.
- Which adapters are required.
- Which invariants must be protected.

Business rules always belong in the Domain.

---

## 3. Identify Required Tests

Determine the appropriate test categories.

### Domain Unit Tests

Characteristics:

- Pure Java
- No Spring
- No framework
- No database
- Fast
- Deterministic

Examples:

- UserTest
- SubscriptionTest
- CourseTest
- EnrollmentTest
- PaymentPolicyTest

---

### Application Service Tests

Characteristics:

- Test use cases
- Mock repository ports
- Mock external ports
- No Spring context

Examples:

- RegisterUserUseCaseTest
- PublishCourseUseCaseTest
- EnrollStudentUseCaseTest

---

### Adapter Tests

Examples:

- JpaUserRepositoryTest
- RestUserControllerTest
- EmailAdapterTest

Framework usage is allowed here.

---

### Integration Tests

Only when interaction between multiple components must be verified.

Do not replace unit tests with integration tests.

---

# Strict TDD Cycle

Every feature follows Red → Green → Refactor.

## RED

Generate failing tests first.

Do not generate production code before tests exist.

Tests should describe expected behavior.

---

## GREEN

Write the smallest amount of production code necessary to satisfy the tests.

Avoid:

- speculative abstractions
- unnecessary generalization
- future-proofing

Implement only what the tests require.

---

## REFACTOR

Once all tests pass:

- Remove duplication.
- Improve naming.
- Simplify code.
- Improve readability.
- Preserve behavior.

All tests must remain green.

---

# Code Generation Order

Always generate work in this order:

1. Requirement analysis
2. Domain design
3. Required tests
4. Failing tests
5. Production implementation
6. Refactoring suggestions

Never reverse this order.

---

# Core Domain Rules

The Core Domain contains:

- Entities
- Value Objects
- Domain Services
- Repository Ports
- External Service Ports
- Domain Events
- Business Policies

Nothing else.

---

## Allowed Dependencies

Only standard Java libraries such as:

- java.util
- java.time
- java.math
- java.util.UUID
- Optional
- Collections

---

## Forbidden Dependencies

Never import:

- org.springframework.*
- jakarta.*
- javax.persistence.*
- org.hibernate.*
- com.fasterxml.jackson.*
- retrofit.*
- feign.*
- servlet APIs

No framework annotations.

Forbidden examples:

```java
@Entity
@Service
@Repository
@Component
@RestController
@Autowired
@Transactional
```

---

# Entities

Entities should:

- protect invariants
- expose behavior
- avoid setters
- encapsulate state

Prefer:

```java
user.changeEmail(newEmail);

course.publish();

student.completeLesson();
```

Instead of:

```java
setEmail(...);

setPublished(...);

setCompleted(...);
```

---

# Value Objects

Value Objects must:

- be immutable
- validate themselves
- implement equals()
- implement hashCode()

Examples:

- Email
- Money
- PhoneNumber
- CourseTitle
- Percentage

Never expose invalid state.

---

# Domain Services

Only create a Domain Service when behavior does not naturally belong inside an Entity or Value Object.

Do not create service classes for every entity.

---

# Output Ports (spi)

Repositories and external systems needed by the Application are defined as output ports in `application/ports/spi`.

Example:

```java
public interface CourseRepositoryPort {

    Optional<User> findById(UserId id);

    User save(User user);

}
```

No implementation belongs in the Core or Application layers.

---

# Input Ports (api)

Business capabilities are defined as input ports in `application/ports/api`.

Example:

```java
public interface EnrollStudent {
    EnrollmentResult enroll(Command command);
}
```

---

# Application Layer Rules

The Application layer orchestrates business use cases.

Contains:
- **Input Ports (`application/ports/api`)**: Define business capabilities / use cases.
- **Output Ports (`application/ports/spi`)**: Define infrastructure requirements the system needs from external providers.
- **Application Services (`application/services`)**: Implement `api` ports and use `spi` ports.
- **Mappers (`application/mappers`)**: MapStruct interfaces to translate between DTOs, Commands, and Entities.

Application Services:

- orchestrate workflows
- coordinate ports
- enforce business rules (delegating to domain)
- manage transactions (outside the Core)

Application services may depend on Domain and Ports (`spi`).
Application Services must never depend directly on Repositories, JPA, Controllers, or External APIs.

Business logic belongs in the Domain.

---

# Infrastructure Rules

Adapters implement ports.

Adapters are responsible for translating between:
- HTTP ↔ Application
- Database ↔ Domain
- External API ↔ Domain

Adapters must never contain business logic.

Examples:

```text
JpaUserRepository
implements CourseRepositoryPort
```

```text
SpringEmailAdapter
implements EmailSenderPort
```

Controllers are thin adapters.
- Under 150 lines
- Under 10 endpoints per controller
- No business logic or repository access

Infrastructure depends on the Application and Core.

Never the opposite.

---

# Testing Rules

Testing is mandatory. Code without tests is incomplete.

## Domain Tests

Domain logic must be tested independently.

Should never use:

- SpringBootTest
- SpringExtension
- Embedded databases
- Containers

Most Domain tests require no mocks.

---

## Application Tests

Mock only:

- output ports (`spi`) such as repository ports and external ports

Never mock entities.

Correct:

```java
when(courseRepositoryPort.findById(id))
```

Incorrect:

```java
when(user.changeEmail(...))
```

---

## Adapter Tests

Test adapter behavior separately.
Framework usage is acceptable.

Examples:

- `@WebMvcTest` for REST controllers
- `@DataJpaTest` for repositories
- WireMock for external APIs

Only for adapter verification. Avoid loading the entire application context. Use test slices where appropriate.

---

## Integration Tests

Integration tests verify:

- Adapter wiring
- Persistence mappings
- Transaction boundaries

Use **Testcontainers** for database integration tests.
Do not replace unit tests with integration tests.

---

# Test Naming

Use descriptive behavior-driven names.

Good:

- shouldRejectDuplicateEmail()
- shouldPublishApprovedCourse()
- shouldPreventEnrollmentWhenCourseIsClosed()

Bad:

- test1()
- save()
- works()

---

# Assertions

Prefer expressive assertions.

Example:

```java
assertThat(user.getStatus())
    .isEqualTo(UserStatus.ACTIVE);
```

Avoid vague assertions when clearer alternatives exist.

Each test should verify one logical behavior.

---

# Coverage Expectations

Every business rule must have at least one test.

Every bug fix starts with a failing regression test.

Aim for very high Domain coverage.

Do not write tests only to increase coverage percentages.

Avoid testing:

- trivial getters
- trivial setters
- generated code

---

# Refactoring Guidelines

After tests pass:

- improve names
- eliminate duplication
- simplify algorithms
- improve cohesion
- reduce coupling

Behavior must remain unchanged.

---

# SOLID Requirements

Generated code must follow:

- Single Responsibility Principle
- Open/Closed Principle
- Liskov Substitution Principle
- Interface Segregation Principle
- Dependency Inversion Principle

---

# Clean Code Requirements

Generated code should:

- have intention-revealing names
- use small methods (Target: Less than 20 lines when practical)
- use small classes (File Sizes must be under 500 lines of code)
- avoid deep nesting (Maximum nesting depth of 2)
- avoid magic numbers
- avoid duplicated logic
- avoid unnecessary comments (Prefer clear code over comments. Never comment obvious code)
- express intent through code
- always use dedicated mappers (MapStruct preferred) instead of manual scattered mappings

---

# Anti-Patterns to Reject

Never generate:

- Anemic Domain Models
- God Objects
- Fat Controllers
- Business Logic inside Repositories
- Business Logic inside Controllers
- Framework dependencies inside the Core
- Static utility classes replacing domain behavior
- Mutable Value Objects

---

# Definition of Done

A feature is complete only if:

- Requirements are understood.
- Domain model is identified.
- Failing tests were written first.
- Minimal implementation makes tests pass.
- Code has been refactored.
- All tests pass.
- Core has zero framework dependencies.
- Business rules reside in the Domain.
- Infrastructure is isolated behind Ports.
- SOLID, DRY, and SRP principles are respected.
- Clean Code principles are respected.
- Architecture boundaries remain intact.

---

# Final Rule

Whenever implementing a feature, always think in this order:

> Business Rules → Domain Model → Tests → Production Code → Refactoring

Never think:

> Controller → Database → Domain

The Domain is the heart of the system. Everything else exists to serve it.