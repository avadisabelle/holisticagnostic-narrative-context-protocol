# Synthesis — NCP Decolonization: Protocol Extensions

> *"Data colonialism is not a metaphor. It is an emerging order for the appropriation of human life through data."*
> — Nick Couldry & Ulises Mejias, *The Costs of Connection* (2019)

---

## Part I: Decolonial Critique of the Current NCP

### 1.1 What the NCP Inherits from Dramatica

The NCP is grounded in Dramatica theory — a narrative model developed by Melanie Anne Phillips and Chris Huntley in the early 1990s. Dramatica is among the most rigorous Western narrative frameworks, modeling conflict through a comprehensive "story mind" that treats narrative as a single problem-solving process viewed from multiple perspectives.

The NCP specification states: *"Perspectives enable authors to explore thematic conflicts from specific authorial viewpoints"* and defines four structural points of view: `i`, `you`, `we`, `they` (SPECIFICATION.md, lines 97–100). Its dynamics encode binary choices: `change`/`steadfast`, `success`/`failure`, `good`/`bad` (ncp-schema.json, lines 139–170).

This framework carries the following assumptions, each of which excludes specific narrative traditions:

#### a. Individual Protagonist as Default Unit

Dramatica models narrative conflict through a "Main Character" who faces a personal dilemma. The NCP's perspective system (`i`, `you`, `we`, `they`) maps to Dramatica's four throughlines: Main Character, Influence Character, Relationship Story, and Objective Story.

**What this excludes**: Narrative traditions where the protagonist is a collective — a village, a clan, a landscape, a set of ancestors acting as one. In many Indigenous Australian narratives, the Dreaming stories have no individual protagonist; the land itself is the agent. In West African *griot* traditions, the subject may be a lineage rather than an individual. The NCP's `we` perspective partially accommodates this, but the surrounding framework still assumes a problem-solving individual at the center.

#### b. Linear-Causal Structure

Dramatica's story model assumes temporal progression through signposts (sequential numbered storybeats) and causal drivers (`action`/`decision`). The NCP's storybeat schema requires a `sequence` field (integer) that enforces linear ordering.

**What this excludes**: Cyclical narratives common across Indigenous traditions worldwide — stories that return to their beginning because the point is the cycle, not the resolution. Polynesian creation narratives, Aboriginal songlines, and many Mesoamerican codex narratives operate on cyclical or spiral temporalities that resist sequential numbering. The storybeat sequence field cannot model a narrative whose beats exist simultaneously or in non-linear relationship to one another.

#### c. Conflict as Central Engine

Dramatica's model treats conflict as the fundamental engine of narrative. Every narrative function in the NCP is, by definition, a "process that shapes the story's meaning" through conflict (SPECIFICATION.md, line 163).

**What this excludes**: Narrative traditions built on harmony, balance, relational repair, or ecological attunement rather than conflict. The Japanese aesthetic *kishōtenketsu* structures narrative through introduction, development, twist, and reconciliation — without requiring conflict. Many Indigenous stories function as teachings about proper relationship (*right relation*) rather than as problems to be solved. The NCP's entire taxonomy of over 100 narrative functions (ncp-schema.json, lines 232–381) is organized around conflict dynamics; there is no equivalent taxonomy for harmony, reciprocity, or relational balance.

#### d. The Subtext/Storytelling Binary

The NCP's foundational distinction — Subtext (deep meaning) vs. Storytelling (presentation) — assumes these are separable layers. The specification explicitly argues for this separation: *"the true value resides in the structural coherence provided by subtext, the very heart of the narrative"* (SPECIFICATION.md, line 150).

**What this excludes**: Traditions where meaning cannot be separated from telling. In oral traditions, as documented extensively in the `oral-tradition-storywork` foundations packet, the *how* of telling IS the *what* of meaning. Thomas King demonstrates that the same story told differently is a different story (King, 2003). Archibald's storywork methodology treats stories as living entities whose meaning emerges in the relationship between teller, listener, and context — not as content with a separable deep structure.

### 1.2 What JSON Schema Itself Assumes

Beyond Dramatica's specific narrative theory, the choice of JSON as the encoding format introduces its own epistemological assumptions:

#### a. Noun-Centric Ontology

JSON models the world as objects with properties — nouns with attributes. The NCP represents perspectives, players, storypoints, and dynamics as objects in arrays.

Many Indigenous languages are verb-centric. In Navajo (*Diné Bizaad*), reality is expressed primarily through verbs — processes and actions — not through nouns and their properties. In Hopi, as Benjamin Lee Whorf famously (if controversially) argued, the language does not objectify time as a substance but expresses it as a process. A JSON object with properties is already a translation into a noun-centric worldview.

#### b. Hierarchical Containment

JSON structures data through nesting: a story contains narratives, which contain subtext, which contains perspectives. This tree structure models knowledge as contained, bounded, and hierarchical.

Many Indigenous knowledge systems model relationships as webs, not trees. Knowledge exists in relationship to other knowledge, not contained within it. A songline crosses clan boundaries; a Dreaming story connects places separated by hundreds of kilometers. The containment model of JSON cannot natively express knowledge that exists *between* containers rather than *within* them.

#### c. Extractability

JSON is designed to be machine-readable, transmissible, and transformable. Any JSON document can be parsed, queried, copied, and sent anywhere. This is a feature for data interchange; it is a threat to knowledge systems that depend on controlled, conditional transmission.

The assumption that all represented knowledge is extractable — that if you can serialize it, you can send it — conflicts directly with knowledge systems where certain knowledge is not meant to leave certain contexts. The NCP, by encoding stories as JSON, implicitly treats them as extractable by default.

### 1.3 Knowledge Systems Currently Excluded

The NCP, as designed, cannot adequately represent:

| Tradition | What Cannot Be Modeled | Why |
|-----------|----------------------|-----|
| Australian Aboriginal songlines | Knowledge encoded in landscape, traversal-order-dependent meaning, custodial responsibilities | No spatial encoding, no traversal model, no custodial metadata |
| West African *griot* traditions | Hereditary authorization to tell, lineage-bound knowledge, multi-generational transmission chains | No teller authorization, no lineage tracking, no hereditary access |
| Māori *whakapapa* | Genealogical narratives that constitute identity and land rights, not just "stories" | No legal/political force modeling, no genealogical schema |
| Indigenous American oral traditions | Seasonal restrictions, ceremonial context requirements, listener preparation obligations | No temporal/ceremonial context, no receiver conditions |
| Polynesian navigation chants | Knowledge inseparable from embodied performance (star reading, wave reading, body memory) | No performativity layer, no embodiment constraints |
| Japanese *rakugo* and *noh* | Form-content unity, master-apprentice transmission, performance as the text | No form requirements, no apprenticeship/readiness modeling |

---

## Part II: Proposed Protocol Extensions

### Design Principles

Before proposing specific schema extensions, five design principles constrain the work:

1. **Expression, not enforcement**: The protocol should be *capable of expressing* that conditions exist, not responsible for *enforcing* them. Enforcement is a community function, not a protocol function.
2. **Optional, not required**: All extensions are additive. Existing NCP documents remain valid without them. No existing consumer breaks.
3. **Community sovereignty**: The extensions create space for communities to specify their own conditions. The protocol does not define what those conditions should be.
4. **Anti-extraction by design**: The extensions should make it *harder*, not easier, to extract knowledge from its governing context.
5. **Humility of representation**: Some knowledge cannot be represented in JSON. The protocol should be able to say so.

### 2.1 Transmission Conditions Layer

**Rationale**: Every oral tradition is a transmission protocol specifying who may tell, who may listen, under what conditions, and in what form (as documented in `foundations/oral-tradition-storywork/synthesis.md`). Speech act theory (Austin, 1962; Searle, 1969) formalizes this as "felicity conditions" — the conditions that must be met for an utterance to succeed as an act, not just as a sentence. A story told by the wrong person, in the wrong season, without the right preparation, has not been transmitted — it has been violated.

```json
"transmission": {
  "teller_requirements": [
    {
      "type": "authorization",
      "description": "Must be an initiated member of the relevant clan",
      "verifiable_by": "community_authority"
    },
    {
      "type": "hereditary",
      "description": "Knowledge passes through maternal lineage",
      "verifiable_by": "genealogical_record"
    }
  ],
  "receiver_requirements": [
    {
      "type": "preparation",
      "description": "Listener must have completed coming-of-age ceremony",
      "verifiable_by": "community_authority"
    },
    {
      "type": "relationship",
      "description": "Listener must have an existing relationship with the teller",
      "verifiable_by": "relational_context"
    }
  ],
  "contextual_conditions": [
    {
      "type": "temporal",
      "description": "May only be told during winter months when snow is on the ground"
    },
    {
      "type": "spatial",
      "description": "Must be told at or within sight of the ancestral place it references"
    },
    {
      "type": "ceremonial",
      "description": "Requires active ceremonial context; not for casual or educational settings"
    }
  ],
  "form_requirements": [
    {
      "type": "medium",
      "description": "Must be sung, not spoken"
    },
    {
      "type": "language",
      "description": "Must be transmitted in the source language; translation voids authorization"
    }
  ],
  "receiver_obligations": [
    {
      "type": "stewardship",
      "description": "Receiver becomes a steward of this knowledge with duty to transmit correctly"
    },
    {
      "type": "reciprocity",
      "description": "Receiver must offer a story or gift in return"
    },
    {
      "type": "restriction",
      "description": "Receiver may not record, transcribe, or digitize without separate authorization"
    }
  ]
}
```

**Alignment with Archibald's storywork**: The `receiver_obligations` field directly models Archibald's principles of responsibility and reciprocity. The `teller_requirements` field models the authorization structures that oral traditions maintain. The `contextual_conditions` field models the temporal, spatial, and ceremonial constraints documented by Basso, King, and Cruikshank (see `oral-tradition-storywork/synthesis.md`, sections 5–6).

### 2.2 Relational Provenance Layer

**Rationale**: Standard data provenance tracks who created, edited, or transformed a document. But in Indigenous knowledge systems, the relevant question is not "who typed this into a computer?" but "who authorized this knowledge to exist in digital form, and through what chain of relationships did that authorization travel?" Western provenance models (W3C PROV, Dublin Core) track document history. Relational provenance tracks *permission history*.

```json
"provenance": {
  "community_authorization": {
    "authorizing_community": "Name or identifier of the originating community",
    "authorization_type": "collective_decision | elder_authority | hereditary_right | gifted",
    "authorization_date": "2026-01-15",
    "authorization_scope": "Description of what was authorized (e.g., 'digital representation for educational use within community networks')",
    "authorization_limitations": "What was NOT authorized (e.g., 'commercial use, AI training data, public internet access')",
    "contact": "How to reach the authorizing community for questions or disputes"
  },
  "relational_chain": [
    {
      "from": "Elder name or role (redacted if necessary)",
      "to": "Receiver name or role",
      "relationship": "mentor-apprentice | elder-community | clan-member | gifted",
      "date": "2025-06-01",
      "conditions": "Conditions attached to this specific transfer"
    }
  ],
  "consent_protocol": {
    "consent_type": "free_prior_informed | ongoing | revocable | conditional",
    "fpic_documented": true,
    "review_cycle": "Annual review by community council",
    "consent_contact": "Point of contact for consent questions"
  },
  "revocation_conditions": [
    {
      "trigger": "Community council vote to withdraw authorization",
      "effect": "All digital representations must be removed within 30 days",
      "notification_method": "Direct contact to all known holders"
    },
    {
      "trigger": "Misuse detected (commercial exploitation, decontextualized reproduction)",
      "effect": "Immediate revocation of all downstream access",
      "notification_method": "Automated notification if technically feasible; direct contact otherwise"
    }
  ]
}
```

**Alignment with CARE and OCAP**: The `community_authorization` field implements CARE's "Authority to Control" and OCAP's "Control" and "Ownership" principles. The `consent_protocol` field implements the principle of Free, Prior, and Informed Consent (FPIC) recognized in UNDRIP. The `revocation_conditions` field ensures that consent is not a one-time extraction but an ongoing, revocable relationship.

### 2.3 Linguistic Frame Layer

**Rationale**: The NCP's categories — `perspectives`, `dynamics`, `appreciations`, `narrative_functions` — are English-language concepts derived from Dramatica theory. They represent one linguistic community's way of carving up narrative experience. The Sapir-Whorf hypothesis (in its moderate form, supported by substantial empirical evidence) holds that the structure of a language influences how its speakers conceptualize reality. The NCP's over 100 enumerated narrative functions (faith, desire, control, logic, etc.) are English-language psychological concepts. They do not translate without loss.

A story told in Diné Bizaad (Navajo) operates within a verb-centric grammar where events, processes, and relationships are primary and noun-like objects are derived. Translating that story into the NCP's noun-centric schema (`storypoints`, `players`, `dynamics` as objects with properties) is already a conceptual transformation — not just a language translation.

```json
"linguistic_frame": {
  "source_language": {
    "name": "Diné Bizaad",
    "iso_639_3": "nav",
    "family": "Athabaskan / Na-Dené",
    "grammatical_profile": "verb-centric, aspectual rather than tense-based, classificatory verb stems"
  },
  "grammatical_features": [
    {
      "feature": "verb-centricity",
      "description": "Reality is expressed primarily through verb forms; nouns are secondary",
      "schema_impact": "The NCP's object-with-properties model inverts the source language's ontology"
    },
    {
      "feature": "evidentiality",
      "description": "The source language grammatically marks the source of knowledge (direct experience, hearsay, inference)",
      "schema_impact": "The NCP has no equivalent of evidentiality marking for storypoints or storybeats"
    },
    {
      "feature": "animacy hierarchy",
      "description": "The source language grammatically distinguishes levels of animacy that affect agency and narrative role",
      "schema_impact": "The NCP's player model does not distinguish between animate and inanimate agents"
    }
  ],
  "untranslatable_concepts": [
    {
      "term": "hózhó",
      "approximate_gloss": "beauty, balance, harmony, order — but none of these capture the concept",
      "description": "A state of being in right relationship with all things; the goal of many Diné narratives. No NCP narrative function or dynamic captures this because the NCP's categories are organized around conflict, not harmony.",
      "ncp_mapping_attempt": "None adequate. Closest might be 'Story Judgment: Good' but this reduces a cosmological concept to a binary outcome.",
      "semantic_loss": "severe"
    }
  ],
  "semantic_losses": [
    {
      "area": "temporal structure",
      "description": "The source language does not objectify time as a linear sequence. The NCP's storybeat sequence model imposes a temporal structure that does not exist in the source narrative.",
      "severity": "high",
      "mitigation": "Storybeat sequence field should be optional for narratives from non-linear-temporal traditions"
    },
    {
      "area": "agency model",
      "description": "The source narrative distributes agency across human, animal, plant, landscape, and spiritual actors. The NCP's player model assumes human-like individual agents.",
      "severity": "moderate",
      "mitigation": "Player schema could be extended with an 'agency_type' field allowing 'individual', 'collective', 'landscape', 'ancestral', 'spiritual', 'ecological'"
    }
  ]
}
```

**Theoretical grounding**: This layer operationalizes what linguist-anthropologist Dell Hymes called "communicative competence" — the knowledge required to use language appropriately in context, which includes knowing what can and cannot be said in a given linguistic frame (Hymes, 1972). It also connects to the work of linguistic anthropologists like Keith Basso, who demonstrated that the relationship between language, place, and moral knowledge is not incidental but constitutive (Basso, 1996).

### 2.4 Performativity Layer

**Rationale**: Some knowledge exists only in enactment. A ceremony is not a text that is performed; the performance IS the knowledge. Separating the "content" from the "performance" is not simplification — it is destruction.

Richard Bauman's performance theory (1977) establishes that performed narratives are not recitations of pre-existing texts but emergent events whose meaning arises in the interaction of performer, audience, and context. Dell Hymes's concept of "breakthrough into performance" (1975) identifies the moment when ordinary communication transforms into a heightened speech event that carries social and spiritual authority.

The current NCP models narrative as content that can be represented independently of its delivery. For many traditions, this is not possible.

```json
"performativity": {
  "enactment_required": true,
  "enactment_description": "This narrative exists as a performed ceremony involving song, dance, body painting, and landscape traversal. The JSON representation is a reference marker, not a representation of the knowledge itself.",

  "medium_constraints": [
    {
      "medium": "song",
      "description": "Specific melodic patterns encode knowledge that cannot be represented in text",
      "substitutable": false
    },
    {
      "medium": "dance",
      "description": "Body movements encode astronomical and ecological knowledge",
      "substitutable": false
    },
    {
      "medium": "landscape_traversal",
      "description": "The narrative must be experienced by walking through the landscape it describes",
      "substitutable": false
    }
  ],

  "embodiment_notes": [
    "The performers must have undergone specific physical and spiritual preparation",
    "The audience must be physically present; remote observation is not participation",
    "The ceremony includes silence, waiting, and stillness that carry meaning"
  ],

  "cannot_be_extracted": true,
  "extraction_note": "This flag indicates that the knowledge referenced by this NCP document cannot be fully represented in any digital format. The document serves as a pointer, not a container. Any system consuming this document should treat it as a reference to knowledge that exists elsewhere, in embodied practice, not as the knowledge itself.",

  "reference_only": {
    "what_this_document_contains": "Metadata about the narrative's existence, conditions, and governance",
    "what_this_document_does_not_contain": "The narrative itself, which exists only in performance",
    "why": "Extraction would cause harm — to the knowledge, to the community, and to the relationship between them"
  }
}
```

**Critical distinction**: This layer does not attempt to encode performed knowledge in JSON. It creates a way for JSON to *point at* knowledge that exists outside of JSON, and to declare that the pointing is all that is appropriate. This is the difference between a map and the territory — and the declaration that, in this case, the map must not attempt to replace the territory.

### 2.5 Semantic Access Control Layer

**Rationale**: Standard access control operates at the data level: can this user read this file? Can this API key access this endpoint? But Indigenous knowledge systems operate access control at the *meaning* level: some knowledge is freely shareable, some is accessible under specific conditions, and some is inseparable from its context of enactment.

This is not a technical access control list. It is a semantic declaration about the *kind* of knowledge a narrative represents, which informs how any consuming system should handle it.

```json
"semantic_access": {
  "knowledge_tier": "protocol-gated",
  "tier_definitions": {
    "transmissible": "This knowledge may travel freely. No special conditions on access or use beyond standard attribution.",
    "protocol-gated": "This knowledge may be accessed under specific conditions defined in the transmission layer. Consuming systems must check transmission conditions before rendering, displaying, or processing.",
    "enacted": "This knowledge exists only in performance. This document is a reference marker. Consuming systems must not attempt to render, display, or process the narrative content — because there is no narrative content in this document to render."
  },

  "access_conditions": [
    {
      "condition": "Community membership verification",
      "description": "Access requires verified membership in the originating community",
      "enforcement": "social",
      "technical_support": "Integration with community identity systems (e.g., Mukurtu CMS community protocols)"
    },
    {
      "condition": "Developmental readiness",
      "description": "Listener must have reached a culturally defined stage of readiness",
      "enforcement": "social",
      "technical_support": "None — this condition cannot be technically enforced and should not be"
    }
  ],

  "readiness_requirements": [
    {
      "requirement": "Prior knowledge",
      "description": "Receiver must have already received and understood the prerequisite teachings",
      "prerequisite_references": ["narrative_id_of_prerequisite_teaching"]
    },
    {
      "requirement": "Relational standing",
      "description": "Receiver must have an established relationship with an authorized teller",
      "technical_support": "None — relational standing is a social fact, not a data point"
    }
  ],

  "tk_labels": [
    {
      "label": "TK Community Use Only",
      "uri": "https://localcontexts.org/label/tk-community-use-only/",
      "description": "This material is for use within the originating community only"
    },
    {
      "label": "TK Seasonal",
      "uri": "https://localcontexts.org/label/tk-seasonal/",
      "description": "This material is connected to specific seasons or times of year"
    }
  ]
}
```

**Integration with TK Labels**: The `tk_labels` array directly references the Local Contexts TK Labels system, providing interoperability with the most established Indigenous metadata framework currently in use. This is not a reinvention but an integration — the NCP does not define its own labels but references the ones communities have already developed.

---

## Part III: Alignment with Existing Governance Frameworks

### 3.1 CARE Principles for Indigenous Data Governance

The CARE Principles were developed by the Global Indigenous Data Alliance (GIDA) to complement the FAIR data principles with an explicit focus on Indigenous rights and interests.

| CARE Principle | Proposed NCP Extension | How Aligned |
|----------------|----------------------|-------------|
| **Collective Benefit** | `provenance.community_authorization.authorization_scope` | Requires specification of how the digital representation benefits the community, not just researchers or technologists |
| **Authority to Control** | `provenance.community_authorization` + `provenance.revocation_conditions` | Community retains authority to grant, condition, and revoke authorization; the protocol models this authority explicitly |
| **Responsibility** | `transmission.receiver_obligations` | Makes explicit that accessing narrative knowledge creates obligations, not just permissions |
| **Ethics** | `provenance.consent_protocol` + `semantic_access` | Embeds ethical requirements into the protocol layer rather than leaving them to institutional review boards |

### 3.2 OCAP Principles (First Nations Information Governance)

The OCAP principles — Ownership, Control, Access, Possession — were developed by the First Nations Information Governance Centre (FNIGC) as the standard for First Nations data governance in Canada.

| OCAP Principle | Proposed NCP Extension | How Aligned |
|----------------|----------------------|-------------|
| **Ownership** | `provenance.community_authorization.authorizing_community` | Identifies the community that owns the knowledge, distinct from whoever typed it into a database |
| **Control** | `provenance.community_authorization` + `provenance.revocation_conditions` | Community controls how the knowledge is represented, shared, and potentially recalled |
| **Access** | `semantic_access.access_conditions` + `transmission.receiver_requirements` | Access is conditional and community-governed, not default-open |
| **Possession** | `performativity.cannot_be_extracted` + `performativity.reference_only` | For enacted knowledge, the NCP document is explicitly NOT possession of the knowledge — only a reference to it |

### 3.3 Traditional Knowledge Labels (Local Contexts)

The TK Labels system, developed by Jane Anderson and Kim Christen through the Local Contexts project, provides standardized metadata labels for communicating Indigenous expectations about digital materials.

The proposed `semantic_access.tk_labels` array provides direct integration with the TK Labels system. NCP documents can carry TK Labels as first-class metadata, ensuring that any system consuming NCP documents can also consume and respect the community's TK Label declarations.

Relevant TK Labels for NCP integration include:
- **TK Attribution** (TK A) — requires attribution to the originating community
- **TK Non-Commercial** (TK NC) — prohibits commercial use
- **TK Community Use Only** (TK CO) — restricts use to community members
- **TK Culturally Sensitive** (TK CS) — flags content requiring special cultural handling
- **TK Seasonal** (TK S) — restricts access/use to specific seasons
- **TK Men Restricted** / **TK Women Restricted** — gender-based access restrictions
- **TK Secret/Sacred** (TK SS) — content with high-level restrictions

### 3.4 UNDRIP Alignment

The United Nations Declaration on the Rights of Indigenous Peoples (UNDRIP), adopted in 2007, provides the international legal framework for Indigenous rights.

**Article 31(1)**: *"Indigenous peoples have the right to maintain, control, protect and develop their cultural heritage, traditional knowledge and traditional cultural expressions..."*

The proposed extensions align with Article 31 by:
- Providing mechanisms for communities to maintain control (`provenance.community_authorization`)
- Protecting knowledge from unauthorized extraction (`performativity.cannot_be_extracted`)
- Supporting development of cultural heritage on communities' own terms (`linguistic_frame` allows communities to define their own narrative categories)

**Article 11(1)**: *"Indigenous peoples have the right to practise and revitalize their cultural traditions and customs..."*

The `performativity` layer explicitly supports this by declaring that some narratives exist only in practice and cannot be reduced to digital representations.

---

## Part IV: Anti-Extraction Safeguards

### 4.1 The Problem of Performative Decolonization

The greatest risk of this entire effort is that it becomes *performative* — adding decolonial labels to a colonial structure, changing the vocabulary without changing the power dynamics. Ruha Benjamin's concept of the "New Jim Code" (Benjamin, 2019) warns that technologies can embed discrimination precisely through the appearance of neutrality or progress. Safiya Noble's research on algorithmic oppression (Noble, 2018) demonstrates that search systems reproduce racial hierarchies even when designed with inclusive intent.

The NCP extensions proposed here face the same risk: that a `transmission.teller_requirements` field becomes a checkbox that institutions fill out to claim compliance, while continuing to extract and circulate knowledge without genuine community governance.

### 4.2 Specific Safeguards

#### The `cannot_be_extracted` Flag

When `performativity.cannot_be_extracted` is `true`, consuming systems SHOULD:
- Not attempt to render, display, or summarize the narrative content
- Treat the NCP document as a pointer, not a container
- Not include the document's content in training data, search indices, or content aggregators
- Display the `extraction_note` to any user or agent accessing the document

When `cannot_be_extracted` is `true`, consuming systems MUST NOT:
- Use the document's metadata to reconstruct or approximate the narrative
- Treat the absence of content as a gap to be filled by inference
- Generate, summarize, or paraphrase the narrative from contextual clues

**Enforcement reality**: This flag is a declaration, not a technical lock. It cannot prevent a determined bad actor from ignoring it. But protocols shape norms, and norms shape behavior at scale. HTTP's `robots.txt` is not enforced by law, but it governs the behavior of every major search engine. The `cannot_be_extracted` flag operates in the same normative space.

#### Community Veto Power

The `provenance.revocation_conditions` array implements community veto power. A community can:
- Revoke authorization at any time for any reason
- Trigger removal of all digital representations
- Modify access conditions after sharing

This is not merely a "delete" function. It models the ongoing, living relationship between a community and its knowledge — the same relationship that Archibald's storywork methodology calls *stewardship* and that the oral tradition packet identifies as fundamental to transmission ethics.

#### Right to Revoke, Modify, or Restrict Post-Sharing

The `provenance.consent_protocol.consent_type` field includes `revocable` as an explicit option. Combined with `revocation_conditions`, this ensures that consent to digitize is not a one-time extraction event but an ongoing relationship that the community can modify.

This directly addresses the colonial pattern identified by Linda Tuhiwai Smith (2021): research practices that treat informed consent as a signature on a form rather than an ongoing ethical relationship.

### 4.3 Protocol Support vs. Protocol Enforcement

A critical distinction: **the NCP can support Indigenous knowledge protocols but cannot and should not enforce them.**

Enforcement is a community function. It requires relational knowledge, cultural authority, and contextual judgment that no protocol can automate. If the NCP attempted to enforce transmission conditions — to technically prevent unauthorized access — it would be claiming an authority it does not have and substituting mechanical compliance for relational accountability.

What the NCP CAN do:
- Express that conditions exist
- Declare what those conditions are (as defined by the community)
- Provide a standard way for consuming systems to discover and respect those conditions
- Make it visible when conditions are being violated (by making the conditions machine-readable)

What the NCP CANNOT and SHOULD NOT do:
- Determine whether a specific person meets the conditions
- Enforce access restrictions through technical means (encryption, DRM)
- Substitute protocol compliance for community relationship
- Define what the conditions should be for any specific tradition

This is the difference between a sign that says "this land is sacred — visitors must have permission" and a locked gate. The sign respects the community's authority. The gate replaces it with a mechanism.

---

## Part V: Implementation Considerations

### 5.1 Backward Compatibility

All proposed extensions are **additive and optional**. The existing NCP schema structure remains unchanged:

```json
{
  "story": {
    "narratives": [{
      "subtext": { ... },
      "storytelling": { ... },

      "transmission": { ... },
      "provenance": { ... },
      "linguistic_frame": { ... },
      "performativity": { ... },
      "semantic_access": { ... }
    }]
  }
}
```

Existing NCP consumers that do not recognize the new fields will ignore them per standard JSON processing. No existing functionality breaks. The extensions are opt-in per narrative.

### 5.2 Schema Placement

The five proposed layers exist at the **narrative** level, not the story level. This is intentional: a single story document might contain multiple narratives, some with transmission conditions and some without. A story that combines a publicly shareable overview with a protocol-gated ceremonial narrative should be able to express both within the same document.

### 5.3 Optional vs. Required Fields

Within each extension layer:
- **No field is required by the NCP schema.** Communities decide what to fill in.
- **Some fields should be marked as "strongly recommended" in documentation** — specifically `provenance.community_authorization` and `semantic_access.knowledge_tier`, because without these, the other fields lose their governance context.
- Fields left empty are not interpreted as "no conditions apply" but as "conditions are unspecified." This distinction matters: absence of metadata should not be read as absence of restrictions.

### 5.4 Avoiding Performative Decolonization

The extensions must be evaluated by whether they change **power structures**, not just **labels**. Key tests:

1. **The extraction test**: Does the extension make it *harder* to extract knowledge from its governing context? Or does it just add a label to knowledge that remains extractable?
2. **The veto test**: Can a community use the extension to *stop* something from happening? Or can institutions fill it in and proceed regardless?
3. **The reciprocity test**: Does the extension model *obligations on the receiver*, not just *permissions for the sender*?
4. **The sovereignty test**: Does the extension defer to community authority? Or does it create a new authority (the protocol itself) that displaces community governance?
5. **The humility test**: Does the extension acknowledge what it *cannot* represent? Or does it create the illusion that everything has been captured?

### 5.5 Relationship to Mukurtu CMS

Mukurtu CMS, developed by Kim Christen and colleagues, is the most established digital system implementing Indigenous cultural protocol metadata. The proposed NCP extensions should be designed for interoperability with Mukurtu's protocol system:

- Mukurtu's cultural protocols (governing who can access materials based on community-defined criteria) map to the NCP's `semantic_access.access_conditions`
- Mukurtu's TK Labels integration maps directly to `semantic_access.tk_labels`
- Mukurtu's community governance model maps to `provenance.community_authorization`

The NCP should not replicate Mukurtu but should be able to reference, import, and interoperate with Mukurtu's metadata.

### 5.6 AI-Agent Considerations

The NCP is designed for "multi-agentic systems" (ncp-schema.json, line 4). The proposed extensions have specific implications for AI agents:

1. **AI agents must respect `cannot_be_extracted`**: An AI agent consuming an NCP document with `performativity.cannot_be_extracted: true` must not attempt to summarize, paraphrase, or reconstruct the narrative. It should report: "This narrative exists in embodied practice and is referenced but not contained in this document."

2. **AI agents must check `transmission.receiver_requirements`**: Before rendering or processing a protocol-gated narrative, an AI agent should verify (or defer to human verification of) whether the current context satisfies the transmission conditions.

3. **AI agents must not use protocol-gated narratives as training data**: The `semantic_access.knowledge_tier` field provides a machine-readable signal that certain narratives are not available for general-purpose processing.

4. **AI agents should propagate provenance**: When an AI agent transmits or transforms a narrative, it should preserve and extend the `provenance.relational_chain`, adding itself as a link with the conditions under which it received access.

---

## Part VI: Source List

### Primary Decolonial and Critical Data Studies Texts

| Source | Author(s) | Year | Key Contribution | URL/DOI |
|--------|-----------|------|-------------------|---------|
| *The Costs of Connection: How Data Is Colonizing Human Life and Appropriating It for Capitalism* | Nick Couldry, Ulises Mejias | 2019 | Framework for understanding data colonialism as an extension of historical colonialism | DOI: 10.1515/9781503609754 |
| *Algorithms of Oppression: How Search Engines Reinforce Racism* | Safiya Umoja Noble | 2018 | Demonstrates how algorithmic systems reproduce racial hierarchies through seemingly neutral technical design | DOI: 10.18574/nyu/9781479833641.001.0001 |
| *Race After Technology: Abolitionist Tools for the New Jim Code* | Ruha Benjamin | 2019 | The "New Jim Code" concept — technology that encodes discrimination through the appearance of neutrality | ISBN: 978-1509526406 |
| *Decolonizing Methodologies: Research and Indigenous Peoples* (3rd ed.) | Linda Tuhiwai Smith | 2021 | Foundational critique of extractive research practices; Indigenous research sovereignty | ISBN: 978-1786998132 |
| *Indigenous Data Sovereignty: Toward an Agenda* | Tahu Kukutai, John Taylor (eds.) | 2016 | Establishes the concept and political framework of Indigenous data sovereignty | DOI: 10.22459/CAEPR38.11.2016 |
| *Data for Black Lives* | Yeshimabeit Milner et al. | ongoing | Movement using data science for racial justice; challenges data-as-neutral framing | https://d4bl.org/ |

### Indigenous Data Governance Frameworks

| Source | Organization | Year | Key Contribution | URL |
|--------|-------------|------|-------------------|-----|
| CARE Principles for Indigenous Data Governance | Global Indigenous Data Alliance (GIDA) | 2019 | Collective Benefit, Authority to Control, Responsibility, Ethics | https://www.gida-global.org/care |
| OCAP Principles | First Nations Information Governance Centre (FNIGC) | 2014 | Ownership, Control, Access, Possession for First Nations data governance | https://fnigc.ca/ocap-training/ |
| Traditional Knowledge (TK) Labels | Local Contexts (Jane Anderson, Kim Christen) | 2010– | Metadata labels for Indigenous expectations about digital content | https://localcontexts.org/labels/traditional-knowledge-labels/ |
| Mukurtu CMS | Kim Christen et al. | 2007– | Cultural protocol implementation in digital repository systems | https://mukurtu.org/ |
| UN Declaration on the Rights of Indigenous Peoples (UNDRIP) | United Nations General Assembly | 2007 | Articles 31, 11: Indigenous rights to cultural heritage, traditional knowledge, and self-determination | https://www.un.org/development/desa/indigenouspeoples/wp-content/uploads/sites/19/2018/11/UNDRIP_E_web.pdf |

### Linguistic Relativity and Speech Act Theory

| Source | Author(s) | Year | Key Contribution | DOI/ISBN |
|--------|-----------|------|-------------------|----------|
| *How to Do Things with Words* | J.L. Austin | 1962 | Speech act theory; felicity conditions for performative utterances | ISBN: 978-0674411524 |
| *Speech Acts: An Essay in the Philosophy of Language* | John Searle | 1969 | Formalized felicity conditions; illocutionary force | DOI: 10.1017/CBO9781139173438 |
| *Language, Thought, and Reality* | Benjamin Lee Whorf | 1956 | Linguistic relativity hypothesis; Hopi time concepts | ISBN: 978-0262730068 |
| "Linguistic Relativity" | Lera Boroditsky | 2011 | Empirical evidence for moderate Sapir-Whorf effects across languages | DOI: 10.1017/CBO9781139013468.026 |
| "On Communicative Competence" | Dell Hymes | 1972 | Communicative competence beyond Chomskyan grammatical competence | In *Sociolinguistics*, ed. Pride & Holmes |

### Decolonial Computing and Protocol Design

| Source | Author(s) | Year | Key Contribution | DOI/URL |
|--------|-----------|------|-------------------|---------|
| "Does Information Really Want to be Free? Indigenous Knowledge Systems and the Question of Openness" | Kimberly Christen | 2012 | Challenges the assumption that open access is universally beneficial; argues for community-governed access | *International Journal of Communication* 6 (2012) |
| "'Chuck a Copyright on It': Dilemmas of Digital Return and the Possibilities for Traditional Knowledge Labels" | Jane Anderson, Kim Christen | 2019 | TK Labels as practical tools for Indigenous governance in digital contexts | *DHQ: Digital Humanities Quarterly* |
| "Opening Archives: Respectful Repatriation" | Kimberly Christen | 2011 | Digital repatriation as respectful archival practice; Mukurtu's development rationale | DOI: 10.17723/aarc.74.1.4233nv6nv6428521 |
| "Seeing Yourself in History: Community Archives and the Fight Against Symbolic Annihilation" | Michelle Caswell | 2014 | Community-centered archiving; representational justice | *The Public Historian* 36(4) |

### Oral Tradition and Performance Theory (Cross-referenced from oral-tradition-storywork packet)

| Source | Author(s) | Year | Key Contribution |
|--------|-----------|------|-------------------|
| *Indigenous Storywork* | Jo-Ann Archibald | 2008 | Seven principles of storywork; stories as living entities |
| *Orality and Literacy* | Walter J. Ong | 1982 | Psychodynamics of orality; orality as technology |
| *Wisdom Sits in Places* | Keith Basso | 1996 | Place as mnemonic anchor; landscape as knowledge storage |
| *Verbal Art as Performance* | Richard Bauman | 1977 | Performance frame; emergent meaning in oral performance |
| *The Truth About Stories* | Thomas King | 2003 | Irreducibility of context; stories as constitutive of identity |
| *Life Lived Like a Story* | Julie Cruikshank | 1990 | Active listener role; narrative as knowledge construction |

---

## Closing Note

This packet does not claim to speak for any Indigenous community. It claims only that the NCP, as currently designed, cannot speak *with* them — because it lacks the vocabulary, the structures, and the humility to express that some stories have conditions, some knowledge has custodians, and some meaning cannot be serialized.

The proposed extensions are not solutions. They are *invitations* — architectural openings that make it possible for communities to bring their own protocols into the NCP space, if they choose to, on their own terms.

Whether those invitations are accepted depends entirely on whether the NCP community demonstrates, through its actions and relationships, that it is worthy of trust. No protocol can substitute for that.
