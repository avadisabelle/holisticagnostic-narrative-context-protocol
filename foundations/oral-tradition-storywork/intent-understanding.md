# Intent Understanding — Oral Tradition Studies & Storywork Methodology

## Why This Packet Exists

The Narrative Context Protocol (NCP) currently models narrative structure — perspectives, dynamics, storybeats, appreciations — as a schema for describing stories. But a schema for *describing* stories is not the same as a protocol for *transmitting* them.

Oral traditions have maintained narrative knowledge across thousands of years, across cultures, without schemas, databases, or version control. They have done so through **embedded protocols**: rules about who tells, who listens, when, where, in what season, with what preparation, and with what obligations on the receiver.

If the NCP is to support not just story description but story *transmission* — the movement of narrative knowledge between agents, systems, or people — it must reckon with the fact that oral traditions already solved this problem. The question is: what can protocol engineering learn from the oldest transmission systems on earth?

## Intended Audience

| Audience | What They Need from This Packet |
|----------|-------------------------------|
| **NCP contributors** | Understanding of transmission as distinct from description; metadata categories they haven't considered |
| **Narrative designers** | Awareness that story context is not optional metadata but part of the message itself |
| **Indigenous knowledge keepers** | Assurance that the NCP community is engaging seriously with oral tradition scholarship, not extracting |
| **Protocol engineers** | Concrete engineering implications: what fields, conditions, and access controls a transmission-aware protocol would need |

## Current Reality

The NCP schema captures:
- Narrative structure (perspectives, throughlines, storybeats)
- Character relationships (players, dynamics)
- Thematic content (appreciations, narrative functions)

The NCP schema does **not** currently capture:
- Conditions under which a story should be told
- Obligations placed on the receiver of a story
- Contextual prerequisites (season, ceremony, age, relationship)
- The distinction between a story's content and its transmission protocol
- Whether a story is being archived or transmitted

## Structural Tension

**Current state**: The NCP treats stories as documents — structured, describable, storable. A story is a JSON object with properties.

**Desired state**: The NCP could also treat stories as *transmissions* — living events with protocols governing their movement. A story is not just what it contains but how it travels.

**Tension**: Document-oriented protocols flatten the relational, contextual, and ethical dimensions that oral traditions preserve. If the NCP only models content, it reproduces the archival paradigm that strips stories of their transmission protocols.

## Decisions This Packet Supports

1. Whether the NCP should introduce a `transmission` layer distinct from the existing structural schema
2. What metadata categories a transmission layer would require (context, access, obligations, roles)
3. How to model the listener/receiver as an active participant rather than a passive consumer
4. Whether the NCP should support conditional visibility or access based on contextual criteria
5. How to distinguish between story archiving and story transmission at the protocol level

## What Success Makes Easier Downstream

- Extensions to the NCP that honor Indigenous knowledge protocols
- Integration with systems like Mukurtu CMS that already implement cultural protocol metadata
- Design of AI-agent-to-AI-agent story transmission that preserves contextual conditions
- Collaboration with Indigenous communities that does not reduce their stories to extractable data
- A richer understanding of "narrative protocol" that goes beyond structural description
