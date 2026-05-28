# Indigenous Epistemology & Research Methodology

## Foundations Packet for the Narrative Context Protocol

> **Date:** 2026-05-28
> **Scope:** Epistemological and methodological foundations — how Indigenous knowledge systems validate, authorize, and transmit knowledge, with emphasis on narrative knowledge.
> **Audience:** NCP contributors, narrative designers, Indigenous knowledge keepers, protocol engineers.
> **Boundaries:** This document does not cover linguistic relativity, speech act theory, or specific NCP schema changes. Those are addressed in companion packets.

> **Ethical Note:** This document synthesizes published Indigenous scholarship to inform protocol design. It is not a substitute for direct engagement with Indigenous communities. Any implementation of concepts described here *must* involve partnership with and governance by the Indigenous communities whose knowledge systems are referenced. The authors cited below are overwhelmingly Indigenous scholars who have chosen to publish in academic venues; their work is cited here with respect for the conditions under which it was shared. Nothing in this document authorizes extraction, replication, or digitization of specific Indigenous knowledge without community consent.

---

## Table of Contents

1. [Overview: Why Indigenous Epistemology Matters for NCP](#1-overview)
2. [Indigenous Epistemology: Foundations](#2-indigenous-epistemology)
3. [Knowledge Classification in Indigenous Systems](#3-knowledge-classification)
4. [Community Authorization and Relational Provenance](#4-community-authorization)
5. [The Indigenous Knowledge Validation Workflow](#5-validation-workflow)
6. [Indigenous Research Methodology: Core Texts](#6-indigenous-research-methodology)
7. [OCAP® Principles: First Nations Data Governance](#7-ocap-principles)
8. [Two-Eyed Seeing (Etuaptmumk)](#8-two-eyed-seeing)
9. [Ethical Protocols for Digital Systems](#9-ethical-protocols)
10. [Engineering Implications for Protocol Design](#10-engineering-implications)
11. [Ethical Cautions](#11-ethical-cautions)
12. [Source List](#12-source-list)

---

<a id="1-overview"></a>
## 1. Overview: Why Indigenous Epistemology Matters for NCP

The Narrative Context Protocol (NCP) is a schema for transporting authorial intent across multi-agent storytelling systems. It tracks narrative contributions, preserves creative voice, and maintains structural coherence through what the project describes as a "blockchain-for-subtext." This architecture — layered, provenance-aware, community-attentive — has deep structural parallels with how Indigenous knowledge systems have operated for millennia.

Indigenous epistemologies offer the NCP project three things that Western narrative theory alone cannot provide:

1. **A mature model for knowledge that is not universally accessible.** Indigenous systems have sophisticated, time-tested protocols for knowledge that requires relationship, role, ceremony, or life stage to access. Western computing defaults to "open by default, restrict by exception." Indigenous systems default to "protocol-governed by default, share when conditions are met." This inversion is directly relevant to how NCP handles subtext, authorial intent, and restricted narrative layers.

2. **A relational model of provenance.** Western attribution asks "who authored this?" Indigenous provenance asks "who is accountable for this knowledge, to whom, under what conditions, and with what obligations?" This is richer than bibliographic metadata — it encodes the living relationships that authorize knowledge transmission.

3. **A validation framework grounded in community, context, and relationship** — not solely in structural compliance or peer review. Stories in Indigenous traditions are validated by their fidelity to community protocols, their appropriateness to context, the readiness of the receiver, and the integrity of the form. This maps to a validation workflow that NCP could formalize.

This document lays the epistemological and methodological foundations for that work. It does not propose schema changes. It establishes the intellectual grounding that makes responsible schema extension possible.

---

<a id="2-indigenous-epistemology"></a>
## 2. Indigenous Epistemology: Foundations

### 2.1 What Makes Indigenous Epistemology Distinct

Indigenous epistemologies are not a single system. They are diverse, nation-specific, and place-rooted. However, Indigenous scholars have identified shared characteristics that distinguish them from Western positivist epistemology. The following synthesis draws primarily from Leroy Little Bear (Blackfoot/Kainai), Gregory Cajete (Tewa/Santa Clara Pueblo), Shawn Wilson (Opaskwayak Cree), and Margaret Kovach (Plains Cree/Saulteaux).

| Dimension | Western Positivist Epistemology | Indigenous Epistemologies |
|---|---|---|
| **Ontology** | Reality is fixed, material, mechanistic | Reality is relational, animate, in constant flux |
| **Knower** | Detached, objective observer | Participant in a web of relationships |
| **Knowledge** | Propositional, context-independent, abstractable | Relational, place-based, context-dependent |
| **Validation** | Replicability, peer review, falsification | Community accountability, ceremonial integrity, long-term ecological/social function |
| **Time** | Linear, progressive | Cyclical, seasonal, renewal-oriented |
| **Language** | Noun-based (things, categories) | Verb-based (processes, relationships) |
| **Scope** | Universal claims | Particular to place, people, and relationship |

### 2.2 Relational Knowing

Shawn Wilson's concept of **relational ontology** is foundational. In an Indigenist research paradigm, reality itself is constituted by relationships — not by discrete objects that happen to interact. Knowledge is not extracted from the world by a detached observer; it emerges from *being in relationship* with land, community, ancestors, and the more-than-human world (Wilson, 2008).

This means that the *knower cannot be separated from the known*. The validity of knowledge depends on the quality and integrity of the relationship from which it arises. A story told by someone who has no relationship to its source community is epistemically different — not just socially inappropriate, but *different in knowledge content* — from the same story told by a knowledge keeper within that community.

### 2.3 Place-Based Knowing

Gregory Cajete's *Native Science* (2000) establishes that Indigenous knowledge is fundamentally place-based. Knowledge arises from sustained, multigenerational relationship with specific ecosystems, landscapes, and territories. The phrase "look to the mountain" (from Tewa/Pueblo tradition) encodes the principle that the natural world is the primary curriculum. Knowledge separated from its place of origin loses essential meaning — not metaphorically, but epistemically (Cajete, 2000).

Robin Wall Kimmerer (Potawatomi) extends this in *Braiding Sweetgrass* (2013): Traditional Ecological Knowledge (TEK) is "based on long-term observation, relationship, and cultural/spiritual accountability — an empirical tradition with its own rigorous standards, not folk belief." The standard of validity is not laboratory replicability but *ecological and communal flourishing over time* (Kimmerer, 2013).

### 2.4 Ceremony-Based Knowing

Wilson's central thesis — "research is ceremony" — is not metaphorical. Ceremony creates the relational conditions under which certain knowledge can emerge, be transmitted, and be validated. Knowledge that arises in ceremony is validated *by* the ceremony: by the integrity of the relational context, the authority of the knowledge keepers present, and the protocols that govern transmission (Wilson, 2008).

This has direct implications for digital systems: some knowledge is inseparable from its ceremonial context. Digitizing the *content* without the *ceremony* does not preserve the knowledge — it transforms it into something categorically different.

### 2.5 Jagged Worldviews Colliding

Leroy Little Bear's essay "Jagged Worldviews Colliding" (2000) articulates why these differences cannot be smoothed over. The Blackfoot/Indigenous worldview (constant motion, animacy, interrelatedness, cyclical time, renewal through ceremony) and the Eurocentric worldview (linearity, materialism, dualism, individuality) rest on fundamentally different premises. When they encounter each other, the collision is "jagged" — not a smooth dialogue but a dissonant clash of foundational assumptions (Little Bear, 2000).

Little Bear further argues that Indigenous languages encode different ontologies. Blackfoot is verb-based: reality is processes and relationships, not fixed things and essences. Language is not merely communication — it is epistemology. Translation into English is never epistemologically neutral (Little Bear, 2000; 2012).

---

<a id="3-knowledge-classification"></a>
## 3. Knowledge Classification in Indigenous Systems

Indigenous knowledge systems do not treat all knowledge as uniformly accessible. A well-documented classification distinguishes three tiers, each with different protocols for access, transmission, and digital representation.

### 3.1 Transmissible Knowledge

**Definition:** Knowledge that is freely shareable, appropriate for general audiences, and may be actively shared for outreach, education, or relationship-building.

**Examples:** Public origin stories (those versions intended for external audiences), place names, general ecological observations, welcome protocols, publicly performed songs and dances.

**Digital correspondence:** In the Local Contexts TK Label taxonomy, this corresponds to the **TK Open (TK O)** attribute — "This material is free to use with attribution" (Local Contexts, n.d.).

**Characteristics:**
- Attribution is still required (knowledge has a source community)
- The community has chosen to make this knowledge available
- The form may be adapted for the audience
- The knowledge retains its integrity even when transmitted outside its origin context

### 3.2 Protocol-Gated Knowledge

**Definition:** Knowledge accessible only within defined relational contexts, under specific social conditions. Access requires satisfying one or more conditions: relationship to the knowledge-holding community, completion of ceremony or initiation, specific gender or moiety, life stage, seasonal timing, or role within the community.

**Examples:** Initiation narratives, healing songs, ceremonial procedures, sacred site information, gender-specific teachings, seasonal ceremony knowledge.

**TK Label correspondences** (Local Contexts):
- **TK Secret/Sacred (TK SS)** — restricted from general circulation; not for public use
- **TK Community Use Only (TK CO)** — circulation appropriate only within the originating community
- **TK Men General / TK Women General (TK MG / TK WG)** — gender-restricted transmission protocols
- **TK Seasonal (TK S)** — appropriate only at specific times of year
- **TK Ceremonial (TK CE)** — appropriate only in ceremonial context

**Characteristics:**
- Access is not denied — it is *conditional*
- Conditions are relational, not bureaucratic (you don't fill out a form; you develop a relationship)
- The knowledge-holding community determines when conditions are met
- Unauthorized access does not merely violate a rule — it distorts the knowledge itself

### 3.3 Enacted Knowledge

**Definition:** Knowledge that is inseparable from its performance context. It exists only *in the doing*, not as transmissible propositional content. Recording the content without the enactment does not preserve the knowledge — it creates a different artifact entirely.

**Examples:** Ceremonial knowledge that activates through performance, healing practices inseparable from the healer's relationship to patient and place, dances whose meaning is constituted by the bodily and communal act of dancing, oral narratives whose meaning depends on the teller's presence, timing, and relationship to the audience.

**Characteristics:**
- Cannot be fully digitized without fundamental transformation
- The "content" is necessary but not sufficient — the relational and embodied context *is part of the knowledge*
- Shawn Wilson describes this as knowledge that is "relational — it exists as a set of relationships, not objects" (Wilson, 2008)
- This is the category most endangered by digitization

### 3.4 Implications for Narrative Knowledge

Stories in Indigenous traditions can exist at all three levels simultaneously. A single narrative may have:

- A **public version** (transmissible) told to outsiders for education or entertainment
- A **deeper version** (protocol-gated) available only to community members who have reached a certain life stage or ceremonial standing
- An **enacted dimension** that exists only when the story is told by a specific knowledge keeper, in a specific place, at a specific time, with specific ceremonial protocols observed

A protocol that treats stories as having a single, fixed content — extractable and universally transmissible — fundamentally misrepresents how narrative knowledge works in Indigenous systems.

---

<a id="4-community-authorization"></a>
## 4. Community Authorization and Relational Provenance

### 4.1 Custodianship vs. Ownership

A critical distinction in Indigenous knowledge governance: knowledge holders are **custodians**, not owners in the Western intellectual property sense.

| Western IP Model | Indigenous Custodianship Model |
|---|---|
| Creator → owner → can alienate, sell, license | Holder → accountable to community → must transmit appropriately or not at all |
| Rights attach to an individual | Responsibilities attach to relationships |
| Copyright expires; knowledge enters public domain | Custodianship obligations are perpetual |
| Default: open access; restriction is an exception | Default: protocol-governed; sharing requires authorization |

The Local Contexts TK Label system explicitly encodes custodianship: labels specify "this is held by [community/family/knowledge keeper] and governed by [specific conditions]," not "this is owned by X" (Anderson & Christen, 2013).

### 4.2 Relational Accountability

Wilson's concept of **relational accountability** transforms what "authorship" means. The researcher/storyteller is not primarily accountable to abstract methodological standards or institutional review boards. They are accountable to *all their relations* — the community, the land, the ancestors, the knowledge itself, and future generations (Wilson, 2008).

This means provenance in Indigenous knowledge systems is not bibliographic (who published what) but **relational** (to whom are you accountable for holding this knowledge, and what relationships authorize your access?). Knowledge does not belong to individuals — it belongs to networks of relationships that include land, ancestors, community members, and future generations.

### 4.3 The Two-Row Wampum as Epistemic Model

The Haudenosaunee Two-Row Wampum (Kaswentha) provides a model for how different knowledge systems can coexist without one subsuming the other. Two nations travel parallel paths in separate canoes — neither colonizing the other's vessel.

Latulippe (2015) applies this to research methodology: Western and Indigenous knowledge systems can coexist in the same institutional (or digital) space without one assimilating the other, provided the protocols explicitly maintain parallel sovereignty. Each system retains its own validation standards, governance structures, and transmission protocols (Latulippe, 2015).

### 4.4 Who Has the Right to Share

In Indigenous systems, the right to share knowledge is not determined by authorship, publication, or institutional affiliation. It is determined by:

1. **Relational standing** — your relationship to the community that holds the knowledge
2. **Role** — your position within the community (Elder, knowledge keeper, initiated member, etc.)
3. **Authorization** — explicit permission from the knowledge holders, often through ceremony or formal community process
4. **Context** — whether the current situation (place, time, audience, purpose) is appropriate for this knowledge to be shared
5. **Capacity** — whether you have the knowledge, experience, and relational integrity to transmit accurately

Jo-Ann Archibald's (Q'um Q'um Xiiem) *Indigenous Storywork* (2008) establishes that Elders are the primary knowledge authorities and validators. Elder teaching is the epistemological standard — not academic peer review. Stories are not data to be extracted; they are living transmissions whose validity depends on the relational integrity of the teller and the protocols observed in the telling (Archibald, 2008).

---

<a id="5-validation-workflow"></a>
## 5. The Indigenous Knowledge Validation Workflow

Indigenous knowledge validation operates through a multi-stage workflow that differs fundamentally from Western academic validation (peer review, replicability, falsification). The following synthesis draws from multiple sources to articulate a composite model.

### 5.1 The Four-Stage Workflow

```
┌─────────────────────────┐
│  COMMUNITY AUTHORIZATION │
│  Who has the right to    │
│  share this knowledge?   │
└──────────┬──────────────┘
           │
           ▼
┌─────────────────────────┐
│    CONTEXTUAL FIT        │
│  Is this the right time, │
│  place, and audience?    │
└──────────┬──────────────┘
           │
           ▼
┌─────────────────────────┐
│   RECEIVER READINESS     │
│  Is the receiver prepared│
│  to hold this knowledge? │
└──────────┬──────────────┘
           │
           ▼
┌─────────────────────────┐
│     FORM FIDELITY        │
│  Is the knowledge being  │
│  transmitted in its      │
│  correct form?           │
└──────────┴──────────────┘
```

### 5.2 Stage 1: Community Authorization

**Question:** Does this person have the relational standing, role, and explicit authorization to transmit this knowledge?

**Validated by:** Elders, knowledge keepers, community governance structures, ceremonial authorities.

**Mechanism:** Not institutional (no forms, no IRB approval). Relational — built through sustained engagement, demonstrated accountability, and formal or informal community processes.

**OCAP® parallel:** The "Control" principle — "First Nations, their communities, and representative bodies have the right to seek control over all aspects of research and information management" (FNIGC, 2023).

### 5.3 Stage 2: Contextual Fit

**Question:** Is this the right time, place, and audience for this knowledge to be shared?

**Validated by:** Cultural protocols specific to the knowledge type — seasonal restrictions, ceremonial requirements, geographic appropriateness.

**Examples:**
- Winter stories in many Indigenous traditions must only be told during winter (TK Seasonal)
- Certain knowledge is appropriate only in ceremony (TK Ceremonial)
- Some knowledge is appropriate only on specific territories
- Teaching stories may be appropriate for children; their deeper layers may not be

**Key principle:** Context is not incidental to knowledge — it is constitutive. Knowledge shared in the wrong context is not the same knowledge. A winter story told in summer is not merely a rule violation; it is an epistemic transformation of the knowledge itself.

### 5.4 Stage 3: Receiver Readiness

**Question:** Is the person receiving this knowledge prepared — relationally, experientially, ceremonially — to hold it responsibly?

**Validated by:** The transmitter's assessment of the receiver's relational maturity, ceremonial standing, life experience, and capacity for accountability.

**Key principle:** Not all knowledge is appropriate for all people at all stages of life. This is not gatekeeping in the pejorative sense — it is care. Knowledge transmitted to someone unready to hold it responsibly can cause harm to the receiver, the community, and the knowledge itself.

**Archibald's framework:** The seven principles of Indigenous Storywork — respect, responsibility, reciprocity, reverence, holism, interrelatedness, and synergy — describe the conditions that make a receiver ready. A receiver who cannot embody these principles in relation to the knowledge is not yet ready to receive it (Archibald, 2008).

### 5.5 Stage 4: Form Fidelity

**Question:** Is the knowledge being transmitted in its correct form — the right words, the right sequence, the right embodied practice, the right relational context?

**Validated by:** Elder authority, community witness networks, cross-generational verification.

**Mechanism:** Oral tradition functions as a **distributed consensus protocol**. Multiple knowledge holders carry the authoritative version; knowledge must be consistent across witnesses. This is structurally analogous to blockchain validation, but the "hash" being validated is relational and contextual, not cryptographic.

**Key principle:** Form is not separable from content in Indigenous knowledge. A story told in the wrong sequence, with the wrong emphasis, or stripped of its ceremonial framing is not the same story — even if the "words" are identical. Jo-Ann Archibald's concept of storywork establishes story as methodology, not merely data (Archibald, 2008).

### 5.6 The Validation Loop Is Bidirectional

The CARE Principles add a critical dimension: **retroactive validation**. The "R" (Responsibility) component requires that "those working with Indigenous data have a responsibility to share how those data are used to support Indigenous Peoples' self-determination and collective benefit" (Carroll et al., 2020). The validation loop does not end at transmission — it requires reporting back on how the knowledge was used, creating ongoing accountability.

---

<a id="6-indigenous-research-methodology"></a>
## 6. Indigenous Research Methodology: Core Texts

### 6.1 Linda Tuhiwai Smith — *Decolonizing Methodologies* (1999; 3rd ed. 2021)

The foundational text. Smith (Ngāti Awa and Ngāti Porou, Māori) opens with the provocation: "The word itself, 'research,' is probably one of the dirtiest words in the indigenous world's vocabulary." She argues that Western research paradigms are "inextricably linked to European imperialism and colonialism" — framing research itself as a colonial instrument (Smith, 1999/2021).

**Key contributions:**
- Critiques 25 Western "research projects" applied to Indigenous peoples (naming, classifying, mapping, etc.) as forms of knowledge extraction
- Introduces **Kaupapa Māori research** — a framework grounded in Māori cultural values, *tikanga* (customs), and *whakapapa* (relational genealogy)
- Proposes 25 Indigenous research projects (claiming, testimonying, celebrating survival, etc.) as decolonizing counterweights
- Establishes that who gets to "know," validate, and own knowledge about Indigenous peoples was structurally determined by imperialism

**Impact:** Over 283,000 citations as of 2023 (Royal Society Te Apārangi). Translated into five languages. The most-cited text in Indigenous research methodology. Smith received the Rutherford Medal (New Zealand's top science honour) in 2023.

### 6.2 Shawn Wilson — *Research is Ceremony* (2008)

Wilson (Opaskwayak Cree) articulates a complete **Indigenist research paradigm** with four interconnected elements:

- **Axiology** (relational ethics): Knowledge must serve the relationship. Researchers are accountable to *all their relations*.
- **Ontology** (relational reality): Reality is relational and constantly co-created through relationships.
- **Epistemology** (relational knowing): Knowing emerges from *being in relationship*, not from an objective observer stance.
- **Methodology** (relational accountability in practice): Methods must embody and enact relational accountability.

Wilson challenges the fundamental assumption of the researcher as separate, objective knower. The self is always relational, always situated. Knowledge is validated *relationally* — by whether it honors, strengthens, and serves the web of relationships from which it emerges. Community accountability and ceremonial integrity are epistemic standards (Wilson, 2008).

### 6.3 Margaret Kovach — *Indigenous Methodologies* (2009; 2nd ed. 2021)

Kovach (Plains Cree and Saulteaux) provides the most detailed methodological framework:

- **Tribal epistemologies** as the anchoring concept: research methodology must be rooted in and accountable to a specific tribal/nation knowledge tradition, not a generic "Indigenous" category
- **Conversational methods** as epistemologically appropriate for Indigenous knowledge — oral, relational interview practices grounded in community protocols
- **Self-location** as a methodological requirement: researchers must locate themselves relationally (family, community, nation, land) before the research begins
- **Story as method** — rigorous protocols around gathering, honoring, and representing stories in research

Kovach establishes that validity in Indigenous methodologies is determined by fidelity to tribal epistemological protocols — the standards of knowing specific to a nation's tradition (Kovach, 2009/2021).

### 6.4 Bagele Chilisa — *Indigenous Research Methodologies* (2012; 2nd ed. 2019)

Chilisa (Bantu, University of Botswana) provides the most globally comprehensive treatment, drawing from African, Indigenous American, Māori, and Pacific traditions alongside post-colonial theory.

**Key contributions:**
- Articulates a **post-colonial Indigenous research paradigm** with its own ontology (relational, connected reality), epistemology (relational ways of knowing, oral traditions, ceremony), and methodology (story, community-based participatory approaches)
- Introduces **research as a healing process** — Indigenous research should repair the damage done by colonial research
- Develops the **Batho Pele** ("People First") framework for research ethics in African contexts
- Standards of rigor are: community accountability, relational integrity, transformative potential, and spiritual responsibility (Chilisa, 2012/2019)

### 6.5 Jo-Ann Archibald (Q'um Q'um Xiiem) — *Indigenous Storywork* (2008)

Archibald (Sto:lo First Nation) establishes **Indigenous Storywork** as a full research methodology:

- **Seven principles of storywork** developed with Elders: respect, responsibility, reciprocity, reverence, holism, interrelatedness, and synergy
- Elders are knowledge authorities and validators — Elder teaching is the epistemological standard
- Story is *methodology*, not merely data or illustration
- First Nations stories encode epistemological, ontological, ethical, and pedagogical knowledge simultaneously — not separable into Western academic categories
- The "heart, mind, body, and spirit" framework demands engagement across all four dimensions (Archibald, 2008)

### 6.6 Gregory Cajete — *Native Science* (2000) and *Look to the Mountain* (1994)

Cajete (Tewa, Santa Clara Pueblo) provides a systematic account of **Native science** as a complete knowledge system:

- Indigenous peoples of the Americas have "a lived and creative relationship with the natural world" and "a heightened awareness of the subtle qualities of a place"
- Native science encompasses crop cultivation, astronomy, ecology, medicine, architecture, mathematics, and ceremony
- Indigenous science is relational, spiritual, and place-based — operating from different foundational assumptions than Western science, not from inferior ones
- Knowledge is validated by its *functional relationship to place and community survival*, not by laboratory replicability (Cajete, 1994; 2000)

---

<a id="7-ocap-principles"></a>
## 7. OCAP® Principles: First Nations Data Governance

### 7.1 Origin and Institutional Context

The **OCAP® Principles** (Ownership, Control, Access, Possession) were established in **1998** by the National Steering Committee for the First Nations Regional Longitudinal Health Survey (RHS). They are administered by the **First Nations Information Governance Centre (FNIGC)**, an independent non-profit operating under a special mandate from the Assembly of First Nations' Chiefs-in-Assembly.

**OCAP® is a registered trademark of FNIGC**, trademarked specifically "to protect the principles from misuse and improper interpretation that could distort their original intent."

FNIGC Vision: *"Every First Nation will achieve data sovereignty in alignment with its distinct worldview."*

### 7.2 The Four Principles

| Principle | Definition |
|---|---|
| **Ownership** | A First Nations community or group owns information collectively in the same way an individual owns their personal information. Ownership affirms the relationship between a community and its cultural knowledge, data, and information. |
| **Control** | First Nations, their communities, and representative bodies have the right to seek control over all aspects of research and information management — including resources, review processes, planning, and management of information. |
| **Access** | First Nations must have access to information and data about themselves regardless of where it is held. Communities also have the right to manage and make decisions about who else may access their collective information. |
| **Possession** | The physical control of data. Possession is the *mechanism* by which ownership is asserted and protected. While ownership identifies the relationship in principle, possession makes it concrete. |

### 7.3 Significance for Protocol Design

OCAP® establishes that the validity and legitimacy of research involving First Nations data is determined by First Nations communities themselves — through community ownership, control of processes, access rights, and physical stewardship of data. Research that violates OCAP® principles is epistemically and ethically invalid by this framework, regardless of Western academic standards.

The "Possession" principle has particular implications for digital systems: data must not only be governed by Indigenous communities in policy, but *physically held* by them in practice. Cloud-hosted data controlled by non-Indigenous institutions, even with community consent, may not satisfy this principle.

---

<a id="8-two-eyed-seeing"></a>
## 8. Two-Eyed Seeing (Etuaptmumk)

### 8.1 Origin

**Etuaptmumk** (Two-Eyed Seeing) was formally articulated in **2004** by **Elder Albert D. Marshall** (Moose Clan, Eskasoni First Nation, Unama'ki/Cape Breton Island, Nova Scotia), in collaboration with **Elder Murdena Marshall** (1942–2018, Bear Clan, Eskasoni) and **Dr. Cheryl Bartlett** (biologist, Cape Breton University).

Elder Marshall's definition: viewing the world *"from one eye with the strengths of Indigenous ways of knowing, and from the other eye with the strengths of Western ways of knowing, and to use both of these eyes together"* — not as a hierarchy or synthesis, but as co-equal, distinct, mutually illuminating perspectives (Bartlett, Marshall & Marshall, 2012).

### 8.2 Critical Distinctions

Two-Eyed Seeing is:
- **Not synthesis** — it does not merge two systems into one hybrid
- **Not parallelism** — it does not merely maintain two systems side by side in isolation
- **Integrative without being assimilative** — each knowledge system retains its integrity while both are used together
- Neither eye dominates; neither goes blind

### 8.3 Institutional Adoption

The framework emerged from the **Integrative Science** (BScCS) degree program at Cape Breton University, conceptualized in the mid-1990s and formally accredited in 2001. It has since been adopted by the Canadian Institutes of Health Research (CIHR) and incorporated into multiple institutional and government strategic plans.

### 8.4 Application to Protocol Design

Two-Eyed Seeing, applied to a protocol like NCP, suggests a design requirement: the schema must be able to simultaneously hold and honor two epistemological frameworks for narrative without forcing choice between them.

| Western Eye | Indigenous Eye |
|---|---|
| Dramatica storyform structure (objective/formal) | Relational/community-situated narrative (contextual/relational) |
| Algorithmic validation (schema compliance) | Elder/witness validation (relational consensus) |
| Property rights (authorship = ownership) | Custodianship (authorship = accountability) |
| Universal theory (Dramatica applies to all stories) | Particularity (this story belongs to this community/tradition) |
| Digital permanence (records persist indefinitely) | Temporal knowledge (some knowledge is seasonal/contextual) |

A Two-Eyed Seeing protocol would provide schema fields that can carry *both* types of metadata simultaneously, and validation workflows that can apply *either or both* validation logics depending on context (Reid et al., 2021; Tremblay & Martin, 2023).

---

<a id="9-ethical-protocols"></a>
## 9. Ethical Protocols for Digital Systems

### 9.1 The CARE Principles for Indigenous Data Governance

The **CARE Principles** were created in **2019** by the International Indigenous Data Sovereignty Interest Group (IIDSIG) of the Research Data Alliance, under the umbrella of the **Global Indigenous Data Alliance (GIDA)**.

CARE was explicitly developed as a complement to the FAIR Principles (Findable, Accessible, Interoperable, Reusable). FAIR focuses on data infrastructure but is insufficient for Indigenous data because it does not address power dynamics, rights, or community governance. CARE is *people- and purpose-oriented* rather than *data-oriented*.

| Principle | Core Meaning |
|---|---|
| **C — Collective Benefit** | Data ecosystems shall be designed to enable Indigenous Peoples to derive benefit from the data. |
| **A — Authority to Control** | Indigenous Peoples' rights and authority to control their data must be recognized and empowered. |
| **R — Responsibility** | Those working with Indigenous data must share how the data is used to support Indigenous self-determination. |
| **E — Ethics** | Indigenous Peoples' rights and wellbeing must be the primary concern at all stages of the data life cycle. Minimizing harm is insufficient; actively generating benefit is required. |

Carroll et al. (2021) demonstrate that CARE and FAIR are complementary: a dataset can be FAIR (technically findable/accessible) while violating CARE (unauthorized, non-beneficial, harmful use). Ethical data infrastructure requires both.

### 9.2 Local Contexts: TK Labels and Notices

**Local Contexts** was founded in 2010 by Dr. Jane Anderson (NYU) and Dr. Kim Christen (Washington State University), growing from the Mukurtu CMS project. It was incorporated in 2022 as a 501(c)(3) nonprofit under Navajo Nation law.

#### Traditional Knowledge (TK) Labels

Community-controlled, community-customizable digital labels that allow Indigenous communities to express conditions for sharing and engaging with their knowledge, consistent with existing community governance protocols. The labels address:

- Sacred/ceremonial material (TK Secret/Sacred)
- Gender-restricted material (TK Men General, TK Women General)
- Seasonal conditions (TK Seasonal)
- Community-only material (TK Community Use Only)
- Outreach material (TK Open)
- And others specific to community needs

**Key design principle:** Labels are applied *by Indigenous communities* asserting their own authority. They are educative (teaching non-community users about significance) and jurisdictional (asserting community authority over access and use).

#### Notices (for Institutions and Researchers)

| Notice Type | Purpose |
|---|---|
| **Engagement Notice** | Signals commitment to equitable partnerships and invites community engagement |
| **Disclosure Notices** | Identifies collections where cultural rights and protocols may apply |
| **Collections Care Notices** | Recognizes cultural protocols governing care, display, and access |

**Key distinction:** Labels are applied *by communities*. Notices are applied *by institutions*, signaling their relationship to Indigenous materials and openness to community governance.

#### IEEE Standard (2026)

In January 2026, the IEEE published *"IEEE Recommended Practice for Provenance of Indigenous Peoples' Data"* — the first international standard requiring appropriate disclosure of Indigenous peoples' data provenance. Local Contexts contributed foundational frameworks.

### 9.3 Mukurtu CMS: A Working Model

**Mukurtu CMS** (mukurtu.org) is an open-source Drupal-based content management system built specifically for Indigenous communities to manage digital heritage. It was developed beginning in 2007 with the **Warumungu community** of Tennant Creek, Northern Territory, Australia, whose digitized materials in distant archives contained secret-sacred content that standard archive software (open access by default) could not appropriately govern.

Mukurtu's architecture operationalizes Indigenous knowledge protocols:

- **Communities → Cultural Protocols → Digital Heritage Items** — a three-level governance hierarchy
- `field_access_mode: "open"` → public/transmissible knowledge
- `field_access_mode: "strict"` → protocol-gated knowledge (requires membership in a Cultural Protocol group)
- `sharing_setting: "any"` or `"all"` → OR/AND logic across multiple protocol assignments
- Local Contexts Hub integration (read-only sync) — the community controls what the labels say; the software cannot modify them

**Architectural lesson:** The archive's implicit assumption that access defaults to "open" is itself a colonial structure. The ethical baseline for Indigenous digital heritage is **protocol-controlled access, not open access with exceptions**.

---

<a id="10-engineering-implications"></a>
## 10. Engineering Implications for Protocol Design

The following implications emerge from the epistemological and methodological foundations described above. They are not schema proposals — they are design principles that should inform future schema work.

### 10.1 Access Control at the Semantic Layer, Not the Data Layer

Standard digital access control operates at the data layer: files are public or private, users have permissions or they don't. Indigenous knowledge governance requires access control at the **semantic layer**: the *meaning* and *appropriate use* of knowledge is governed by relational, contextual, and temporal conditions that cannot be reduced to file permissions.

**Implication:** A protocol handling Indigenous narrative knowledge needs metadata fields that encode *conditions of appropriate access* — not just who can see the data, but under what relational, temporal, and contextual conditions the knowledge may be appropriately engaged with.

### 10.2 Relational Provenance, Not Just Attribution

Western attribution asks "who authored this?" Relational provenance asks:
- Who is accountable for this knowledge?
- To whom are they accountable?
- Under what conditions was this knowledge authorized for transmission?
- What obligations accompany its reception?
- What feedback loops ensure accountability after transmission?

**Implication:** Provenance metadata should encode *networks of accountability*, not just creator identifiers. A `perspective` or `storybeat` exists in relationship to a community of knowledge holders; the schema could encode not just *who* created something but *under what relational conditions* it was authorized.

### 10.3 Temporal and Contextual Conditions

Some knowledge is appropriate only at certain times (seasonal), in certain places (territorial), under certain circumstances (ceremonial), or for certain audiences (role-gated). These are not arbitrary restrictions — they are constitutive of the knowledge itself.

**Implication:** Protocol metadata should support temporal conditions (valid-from, valid-until, seasonal), spatial conditions (territory, place), and contextual conditions (ceremonial, pedagogical, public) as first-class properties, not afterthought access controls.

### 10.4 Non-Extractability as a Design Principle

Some knowledge resists digitization not because of technical limitations but because of ontological characteristics — it is enacted, embodied, relational, and inseparable from its performance context. A protocol should be able to *acknowledge* this knowledge without claiming to *contain* it.

**Implication:** The schema should support "pointer" or "reference" entries that say "knowledge exists here, governed by these protocols, accessible through these relationships" without attempting to encode the knowledge itself. This is a metadata-about-knowledge approach rather than a knowledge-containment approach.

### 10.5 Community Sovereignty Over Schema Extension

If the NCP schema is extended to handle Indigenous narrative knowledge, the extension must be designed, governed, and controlled by Indigenous communities — not by protocol engineers working from published scholarship.

**Implication:** OCAP® and CARE principles apply to the schema itself, not just to the data it contains. Schema extensions for Indigenous knowledge should be owned, controlled, and stewarded by the communities whose knowledge systems they represent.

### 10.6 Parallel Validation Workflows

Two-Eyed Seeing suggests that the protocol should support *parallel* validation systems — structural/formal validation (Dramatica-derived schema compliance) and relational/community validation (Elder authorization, community consensus, ceremonial integrity) — without requiring one to subsume the other.

**Implication:** Validation should be extensible and context-dependent. A story validated by community protocols is *valid* by those standards even if it does not conform to every Dramatica structural expectation, and vice versa.

---

<a id="11-ethical-cautions"></a>
## 11. Ethical Cautions

### 11.1 The Danger of Extractive Digitization

The most serious ethical risk in applying Indigenous epistemological insights to digital protocol design is **extractive digitization** — treating Indigenous knowledge systems as a source of ideas to be extracted, abstracted, and implemented without ongoing relationship, governance, or benefit to Indigenous communities.

Linda Tuhiwai Smith's foundational critique applies directly: research that treats Indigenous peoples as subjects and Indigenous knowledge as raw material replicates colonial extraction patterns, regardless of the researcher's good intentions (Smith, 1999/2021).

### 11.2 The Decontextualization Problem

Digitizing Indigenous knowledge risks stripping it from the relational, ceremonial, and ecological contexts that constitute its meaning:

- A healing song recorded in a database is no longer a healing song; it is an audio file
- Seasonal knowledge extracted as "facts" loses the calendrical relationships that make it actionable
- Origin stories published as texts lose the performative context that activates their authority

This is not a side effect of digitization — it is the central epistemic problem. The "content" is necessary but not sufficient; the relational and embodied context *is part of the knowledge*.

### 11.3 The "Inspired By" Problem

There is a specific risk relevant to NCP: a protocol might be "inspired by" Indigenous knowledge governance concepts (e.g., protocol-gated access, relational provenance, contextual validation) without actually serving Indigenous communities. This could create the appearance of Indigenous-inclusive design while extracting Indigenous intellectual contributions without governance, attribution, or benefit.

**Mitigation:** Any use of these concepts in NCP should:
- Explicitly credit Indigenous sources with full citations
- Distinguish between "informed by Indigenous scholarship" and "designed with/for Indigenous communities"
- Not claim to implement Indigenous governance without Indigenous community partnership
- Provide mechanisms for Indigenous communities to govern their own use of the protocol

### 11.4 Data Colonialism

Couldry and Mejias (2018) argue that contemporary data practices constitute a new colonial frontier: they appropriate human social life as data without consent or compensation. For Indigenous communities, this is not abstract — digital archives, ethnographic databases, and AI training sets have absorbed enormous quantities of Indigenous knowledge with no mechanism for community control, benefit-sharing, or protocol compliance.

A protocol that enables more efficient extraction of Indigenous narrative knowledge — even unintentionally — would be ethically unacceptable.

### 11.5 The CARE Standard

The baseline ethical standard for any digital system handling Indigenous knowledge is the CARE Principles (Carroll et al., 2020):
- **Collective Benefit:** Does this system benefit Indigenous communities?
- **Authority to Control:** Do Indigenous communities control how their knowledge is represented and used?
- **Responsibility:** Are the system's builders accountable to Indigenous communities for how the system is used?
- **Ethics:** Are Indigenous peoples' rights and wellbeing the primary concern at all stages?

If the answer to any of these questions is "no," the system is not ready for Indigenous knowledge.

---

<a id="12-source-list"></a>
## 12. Source List

### Foundational Texts

- Archibald, Jo-Ann (Q'um Q'um Xiiem). *Indigenous Storywork: Educating the Heart, Mind, Body, and Spirit*. Vancouver: UBC Press, 2008. ISBN: 978-0-7748-1421-2.

- Cajete, Gregory. *Look to the Mountain: An Ecology of Indigenous Education*. Durango, CO: Kivaki Press, 1994. ISBN: 978-1-882308-65-1.

- Cajete, Gregory. *Native Science: Natural Laws of Interdependence*. Santa Fe: Clear Light Publishing, 2000 (2nd ed. 2016). ISBN: 978-1-57416-041-3.

- Chilisa, Bagele. *Indigenous Research Methodologies*. 2nd ed. Los Angeles: SAGE Publications, 2019. ISBN: 978-1-5063-8033-0. Publisher: https://us.sagepub.com/en-us/nam/indigenous-research-methodologies/book257984

- Kimmerer, Robin Wall. *Braiding Sweetgrass: Indigenous Wisdom, Scientific Knowledge, and the Teachings of Plants*. Minneapolis: Milkweed Editions, 2013. ISBN: 978-1-57131-335-5. Publisher: https://milkweed.org/book/braiding-sweetgrass

- Kovach, Margaret. *Indigenous Methodologies: Characteristics, Conversations, and Contexts*. 2nd ed. Toronto: University of Toronto Press, 2021. ISBN: 978-1-4875-2491-3. Publisher: https://utorontopress.com/9781487524913/indigenous-methodologies/

- Little Bear, Leroy. "Jagged Worldviews Colliding." In Marie Battiste (Ed.), *Reclaiming Indigenous Voice and Vision*, pp. 77–85. Vancouver: UBC Press, 2000. ISBN: 978-0-7748-0846-4.

- Little Bear, Leroy. "Traditional Knowledge and Humanities: A Perspective by a Blackfoot." *Journal of Chinese Philosophy* 39, no. 4 (2012): 518–527. DOI: [10.1111/j.1540-6253.2012.01742.x](https://doi.org/10.1111/j.1540-6253.2012.01742.x)

- Smith, Linda Tuhiwai. *Decolonizing Methodologies: Research and Indigenous Peoples*. 3rd ed. London: Zed Books, 2021. ISBN: 978-1-78699-812-5. (1st ed. 1999.)

- Wilson, Shawn. *Research is Ceremony: Indigenous Research Methods*. Halifax & Winnipeg: Fernwood Publishing, 2008. ISBN: 978-1-55266-323-3.

### Frameworks and Governance Documents

- Carroll, Stephanie Russo, et al. "The CARE Principles for Indigenous Data Governance." *Data Science Journal* 19 (2020): 43. DOI: [10.5334/dsj-2020-043](https://doi.org/10.5334/dsj-2020-043) (Open Access)

- Carroll, Stephanie Russo, et al. "Operationalizing the CARE and FAIR Principles for Indigenous Data Futures." *Scientific Data* 8, no. 1 (2021): 108. DOI: [10.1038/s41597-021-00892-0](https://doi.org/10.1038/s41597-021-00892-0) (Open Access)

- First Nations Information Governance Centre (FNIGC). *The First Nations Principles of OCAP®*. Ottawa: FNIGC, 2023. https://fnigc.ca/ocap-training/

- First Nations Information Governance Centre. "First Nations Data Sovereignty in Canada." *Statistical Journal of the IAOS* 35, no. 1 (2019): 47–69. DOI: [10.3233/SJI-180478](https://doi.org/10.3233/SJI-180478)

### Two-Eyed Seeing

- Bartlett, Cheryl, Murdena Marshall, and Albert Marshall. "Two-Eyed Seeing and Other Lessons Learned within a Co-Learning Journey of Bringing Together Indigenous and Mainstream Knowledges and Their Ways of Knowing." *Journal of Environmental Studies and Sciences* 2, no. 4 (2012): 331–340. DOI: [10.1007/s13412-012-0086-8](https://doi.org/10.1007/s13412-012-0086-8)

- Reid, Andrea J., et al. "'Two-Eyed Seeing': An Indigenous Framework to Transform Fisheries Research and Management." *Fish and Fisheries* 22, no. 2 (2021): 243–261. DOI: [10.1111/faf.12516](https://doi.org/10.1111/faf.12516)

- Abu, Razak, Maureen G. Reed, and Timothy D. Jardine. "Two-Eyed Seeing: A Case Study of the Inclusion of Indigenous Ecological Knowledge in Environmental Assessment." *International Journal of Water Resources Development* 35, no. 3 (2019): 390–408. DOI: [10.1080/07900627.2018.1558050](https://doi.org/10.1080/07900627.2018.1558050)

- Tremblay, Crystal, and Deborah Martin. "Two-Eyed Seeing and Indigenous Digital Technologies." In *Indigenous Digital Technologies*. Springer, 2023. DOI: [10.1007/978-3-031-20401-2_10](https://doi.org/10.1007/978-3-031-20401-2_10)

### Ethics, Digital Systems, and Data Colonialism

- Anderson, Jane, and Kim Christen. "'Chuck a Copyright on it': Dilemmas of Digital Return and the Possibilities for Traditional Knowledge Licenses and Labels." *International Journal of Cultural Property* 20, no. 2 (2013): 131–169.

- Couldry, Nick, and Ulises A. Mejias. "Data Colonialism: Rethinking Big Data's Relation to the Contemporary Subject." *Television & New Media* 20, no. 4 (2018): 336–349. DOI: [10.1177/1527476418796632](https://doi.org/10.1177/1527476418796632)

- Latulippe, Nicole. "Bridging Parallel Rows: Epistemic Difference and Relational Accountability in Cross-Cultural Research." *International Indigenous Policy Journal* 6, no. 2 (2015). DOI: [10.18584/iipj.2015.6.2.7](https://doi.org/10.18584/iipj.2015.6.2.7)

- Mecredy, Graham, Rachel Sutherland, and Chandrakant Jones. "First Nations Data Governance, Privacy, and the Importance of the OCAP® Principles." *International Journal of Population Data Science* 3, no. 4 (2018). DOI: [10.23889/ijpds.v3i4.911](https://doi.org/10.23889/ijpds.v3i4.911) (Open Access)

### Digital Platforms

- **Local Contexts** — https://localcontexts.org/ | TK Labels: https://localcontexts.org/labels/traditional-knowledge-labels/
- **Mukurtu CMS** — https://mukurtu.org/ | GitHub: https://github.com/MukurtuCMS/Mukurtu-CMS
- **Global Indigenous Data Alliance (GIDA)** — https://www.gida-global.org/
- **FNIGC** — https://fnigc.ca/

### Journals

- *AlterNative: An International Journal of Indigenous Peoples* — ISSN: 1177-1801 (print), 1174-1740 (online). Published by Ngā Pae o te Māramatanga / SAGE. https://journals.sagepub.com/loi/ALN
- *International Indigenous Policy Journal* — Open Access. ISSN: 1916-5781. https://ojs.lib.uwo.ca/index.php/iipj
- *American Indian Culture and Research Journal* — UCLA American Indian Studies Center.

---

*This document was compiled from published Indigenous scholarship for the purpose of informing protocol design. It does not claim to represent any specific Indigenous community's knowledge or governance system. Any implementation of concepts described here must involve direct partnership with and governance by the Indigenous communities whose knowledge systems would be affected.*
