# Intent Understanding — NCP Decolonization: Protocol Extensions

## Why This Packet Exists

The Narrative Context Protocol models narrative structure with precision and depth. Its separation of Subtext (authorial intent) from Storytelling (audience presentation) is a genuine contribution. Its Dramatica-derived framework captures aspects of narrative conflict that most systems ignore entirely.

But precision within one tradition is not universality. The NCP currently embeds the assumptions of a specific intellectual lineage — Aristotelian dramatic theory as filtered through Dramatica, encoded in English-language JSON — and presents that lineage as the architecture of narrative itself.

This is not a failure of intent. It is a structural inheritance. Every protocol begins somewhere, in some language, shaped by some tradition. The question is whether the protocol remains tethered to those origins or builds extension points that allow other traditions to participate on their own terms.

This packet exists to ask: **what would it take for the NCP to support narrative knowledge systems that do not share Dramatica's assumptions — without requiring those systems to translate themselves into Dramatica's categories?**

## Intended Audience

| Audience | What They Need from This Packet |
|----------|-------------------------------|
| **NCP contributors** | A clear-eyed critique of what the current schema assumes and excludes; concrete extension proposals with rationale |
| **Narrative designers** | Awareness of how their tools shape the stories they can tell; practical concepts for cross-cultural narrative work |
| **Indigenous knowledge keepers** | Assurance that the NCP community is engaging with decolonial scholarship seriously, not performatively; evidence that proposed extensions center community sovereignty |
| **Protocol engineers** | Concrete schema structures, backward-compatible design patterns, and clear boundaries between what the protocol can express and what it must not enforce |

## Current Reality

The NCP schema captures:
- Narrative structure through Dramatica-derived categories (perspectives, players, storypoints, storybeats, dynamics)
- The subtext/storytelling distinction (deep meaning vs. audience presentation)
- Thematic conflict through appreciations and narrative functions
- Custom terminology mapping via namespaces

The NCP schema does **not** currently capture:
- Conditions under which a narrative may be transmitted
- Who authorized this knowledge to be digitized and shared
- The language-specific assumptions embedded in its categories
- Whether the narrative can exist outside its performed context
- Community governance over digital representations of stories
- Obligations placed on anyone who accesses the narrative
- The difference between a story that has been archived and a story that is being transmitted

## Structural Tension

**Current state**: The NCP treats narratives as structured documents — objects with properties that can be created, stored, queried, and transmitted without restriction. Any story can be represented; any agent can consume the representation.

**Desired state**: The NCP could also express that some narratives carry conditions: they have authorized tellers, qualified receivers, seasonal restrictions, community governance, linguistic frames, and embodiment requirements. These conditions are not optional metadata — they are constitutive of the narrative itself.

**Tension**: A protocol designed for unrestricted machine readability conflicts with knowledge systems designed for conditional, relational, contextualized transmission. Extending the NCP without addressing this tension risks making it a more efficient tool for extracting knowledge that was never meant to be extracted.

## Decisions This Packet Supports

1. Whether the NCP should introduce a **transmission conditions layer** that specifies felicity conditions for story delivery
2. Whether the NCP should include a **relational provenance layer** tracking who authorized knowledge to travel in digital form
3. Whether the NCP should acknowledge the **linguistic frame** of its own categories and provide extension points for non-English narrative systems
4. Whether the NCP should support a **performativity layer** for knowledge that cannot be extracted from its enacted form
5. Whether the NCP should implement **semantic access control** that distinguishes between transmissible, protocol-gated, and enacted knowledge
6. How to align these extensions with existing governance frameworks (CARE, OCAP, TK Labels, UNDRIP)
7. How to prevent the extensions themselves from becoming tools for digital colonialism

## What Success Makes Easier Downstream

- Indigenous communities can evaluate the NCP as a tool that respects their protocols, rather than one that requires them to abandon those protocols to participate
- Narrative designers working cross-culturally can express the constraints and conditions that their source communities require
- AI agents transmitting narrative knowledge can be bound by protocol-level conditions, not just data-level permissions
- The NCP community can engage with decolonial scholarship as a source of design insight, not just as a compliance obligation
- Integration with systems like Mukurtu CMS, Local Contexts TK Labels, and community-governed repositories becomes architecturally possible
