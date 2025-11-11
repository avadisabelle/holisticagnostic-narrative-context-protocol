# RISE Specifications Directory

## Purpose

This directory contains RISE (Reverse-engineer → Intent-extract → Specify → Export) specifications for all components, pages, and services in the NCP Story Studio application.

## What are RISE Specs?

RISE specifications are **codebase-agnostic** documents that describe:
- **Desired Outcomes**: What users want to create
- **Structural Tension**: The gap between current reality and desired state
- **Natural Progression**: How features enable advancement toward goals
- **Creative Advancement Scenarios**: Outcome-focused user flows

## Spec-to-Code Parity

**Every implemented feature has a corresponding specification.**

This ensures:
- Clear understanding of creative intent
- Ability to re-implement from scratch
- Consistent advancement patterns
- Preserved authorial vision

## Using These Specs

### For Implementation
1. Read the spec completely
2. Understand desired outcomes
3. Implement supporting structural dynamics
4. Validate against Creative Advancement Scenarios

### For Modification
1. Update spec first with new desired outcomes
2. Ensure changes support advancing patterns
3. Maintain creative orientation focus
4. Update implementation to match

### For LLM Collaboration
- These specs enable AI assistants to understand creative intent
- Specs are autonomous from codebase
- Another LLM could rebuild the entire application from these specs alone

## Specification Structure

Each spec follows this format:

```markdown
# [Feature Name] Specification

## Desired Outcome Definition
What users want to create and why it's valuable

## Natural Language Functional Description
How the feature enables creative advancement

## Structural Tension Dynamics
Current reality → Desired outcome → Natural progression

## Creative Advancement Scenarios
Concrete examples of users achieving desired outcomes

## Technical Requirements
Supporting infrastructure needed (not implementation details)

## Quality Criteria
- ✅ Creating Focus
- ✅ Structural Dynamics
- ✅ Advancing Patterns
- ✅ Desired Outcomes
- ✅ Natural Progression
```

## Specification Index

### Application
- [`app.spec.md`](./app.spec.md) - Overall application architecture and philosophy

### Pages
- [`pages/home.spec.md`](./pages/home.spec.md) - Landing page and orientation
- [`pages/stories.spec.md`](./pages/stories.spec.md) - Story browser and list view
- [`pages/story-viewer.spec.md`](./pages/story-viewer.spec.md) - Multi-view story exploration
- [`pages/terminology.spec.md`](./pages/terminology.spec.md) - Interactive concept browser

### Components
- [`components/story-card.spec.md`](./components/story-card.spec.md) - Story preview component
- [`components/perspectives-view.spec.md`](./components/perspectives-view.spec.md) - Four throughlines display
- [`components/storybeats-timeline.spec.md`](./components/storybeats-timeline.spec.md) - Sequential beats visualization
- [`components/graph-view.spec.md`](./components/graph-view.spec.md) - Relationship mapping

### API
- [`api/story-operations.spec.md`](./api/story-operations.spec.md) - Story CRUD operations
- [`api/terminology-api.spec.md`](./api/terminology-api.spec.md) - Terminology data access
- [`api/validation.spec.md`](./api/validation.spec.md) - Schema validation

## Anti-Patterns to Avoid

❌ **Implementation Details in Specs**: Specs describe outcomes, not code structure
❌ **Reactive Language**: Focus on what users create, not problems solved
❌ **Force-Based Thinking**: Natural progression, not forced workflows
❌ **Technology Lock-In**: Specs are implementation-agnostic

## Creative Orientation Principles

All specifications follow these principles from the RISE framework:

1. **Focus on Creation**: What does this enable users to create?
2. **Structural Dynamics**: How does tension naturally progress?
3. **Advancing Patterns**: Does this support inevitable movement toward goals?
4. **Desired Outcomes**: Are results specific and achievable?
5. **Natural Progression**: Does advancement happen through structure, not force?

## Contributing

When adding new features:

1. **Write the spec first**
   - Define desired outcomes
   - Map structural dynamics
   - Create advancement scenarios

2. **Review for creative orientation**
   - Check against quality criteria
   - Ensure advancing patterns
   - Remove reactive language

3. **Implement the feature**
   - Code should fulfill spec's desired outcomes
   - Test against Creative Advancement Scenarios
   - Maintain spec-to-code parity

4. **Update the spec if needed**
   - Document discovered insights
   - Refine desired outcomes
   - Preserve creative intent

## Resources

- [RISE Framework](../__llms/llms-rise-framework.txt)
- [Creative Orientation Principles](../__llms/llms-rise-framework.txt#creative-orientation)
- [Structural Tension Dynamics](../__llms/llms-rise-framework.txt#structural-tension)
- [NCP Specification](../SPECIFICATION.md)

---

**Remember**: Specifications exist to preserve creative intent. They describe what users want to create and how features enable that creation through natural structural progression.
