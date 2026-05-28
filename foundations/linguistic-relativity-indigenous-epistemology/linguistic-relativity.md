# Linguistic Relativity & Ethnolinguistics

## Foundations Packet for the Narrative Context Protocol

**Date:** 2026-05-28
**Scope:** Linguistic/grammatical layer — how language pre-structures what can be said about narrative
**Audience:** NCP contributors, narrative designers, Indigenous knowledge keepers, protocol engineers
**Boundaries:** This document does not cover Indigenous research methodology, speech act theory, or specific NCP schema extensions (handled by other packets).

---

## 1. Overview: Why Linguistics Matters for Protocol Design

The Narrative Context Protocol aspires to transport *authorial intent* across systems. But authorial intent is not language-neutral. Every grammar encodes a particular way of carving up experience — who acts, what counts as an event, how knowledge is sourced, whether time flows forward or backward, whether a rock has agency. When a protocol formalizes narrative structure using categories derived from one linguistic tradition (English, via Dramatica theory), it risks making those categories invisible and universal-seeming, when they are in fact *one particular way of encoding narrative meaning among many*.

This document surveys the academic evidence for that claim. It draws on linguistic relativity (the Sapir-Whorf hypothesis), ethnolinguistics, linguistic anthropology, and computational ontology to establish the following:

1. **Grammatical structure shapes habitual thought**, especially during language production (the "thinking for speaking" effect).
2. **Different languages encode narrative-critical categories differently**: agency, evidentiality, time, causation, relational structure.
3. **Formal schemas and protocols embed the linguistic assumptions of their designers**, often without acknowledgment.
4. **The NCP's current categories** — perspectives, dynamics, vectors, appreciations — reflect English-derived, Western narrative-theoretical commitments that may not map onto non-Western narrative traditions without loss or distortion.

The goal is not to invalidate the NCP's existing architecture but to make its linguistic assumptions *visible* so they can be addressed through principled protocol extension.

---

## 2. The Sapir-Whorf Hypothesis: Current Academic Status

### 2.1 Historical Formation

The "Sapir-Whorf hypothesis" was never formulated as a unified theory by either Edward Sapir or Benjamin Lee Whorf. The strong/weak distinction was introduced retrospectively by Roger Brown and Eric Lenneberg in the 1950s (Brown, 1958). The intellectual lineage extends further back to Wilhelm von Humboldt's concept of *Weltanschauung* embedded in language structure:

> "The diversity of languages is not a diversity of signs and sounds but a diversity of views of the world."
> — Humboldt, 1836/1988

Sapir wrote that language "powerfully conditions all our thinking about social problems and processes" (Sapir, 1929, p. 209), but also rejected hard determinism. Whorf argued that "users of markedly different grammars are pointed by their grammars toward different types of observations and different evaluations of externally similar acts of observation" (Whorf, 1956, p. 221).

### 2.2 Strong Version (Linguistic Determinism) — Rejected

The strong claim — that language *determines* thought and constrains what can be conceived — is rejected by contemporary linguistics. Evidence against it includes:

- Cognitive universals across all languages (causality, reference, predication)
- Cross-linguistic translatability (imperfect but possible)
- Successful second-language acquisition
- Berlin and Kay's (1969) finding of universal focal color categories regardless of how many color terms a language has

### 2.3 Weak Version (Linguistic Relativity) — Supported with Nuance

The moderate claim — that grammatical and lexical structures *influence habitual thought patterns* — is well-supported empirically, particularly in domains of spatial reasoning, temporal conceptualization, and event encoding. The neo-Whorfian consensus emerged after Gumperz and Levinson's (1996) landmark anthology revived the debate on empirical grounds.

**Key experimental findings:**

| Study | Finding | Domain |
|-------|---------|--------|
| Boroditsky (2001) | Mandarin speakers (vertical time metaphors) verify vertical temporal sequences faster; English speakers (horizontal metaphors) verify horizontal ones faster | Time-space mapping |
| Lucy (1992a, 1992b) | Yucatec Maya speakers classify objects by *material* (due to numeral classifiers); English speakers classify by *shape* | Object classification |
| Levinson (2003); Haviland (1998) | Guugu Yimithirr speakers (absolute directional reference only: N/S/E/W) maintain geocentric orientation even indoors | Spatial cognition |
| Bylund & Athanasopoulos (2017) | Swedish and Spanish speakers (with grammatical aspect marking) differ from English speakers in duration estimation tasks | Temporal perception |

### 2.4 The Hopi Time Controversy

Whorf's famous claim that Hopi has "no words, grammatical forms, constructions or expressions that refer directly to what we call 'time'" was substantially challenged by Malotki (1983), who demonstrated that Hopi has a productive future/non-future tense distinction (*-ni* suffix) and rich temporal vocabulary. However, Whorf's deeper claim — about *cyclical vs. linear* temporal metaphysics — was not entirely falsified, and the debate remains instructive about the difficulty of characterizing another language's ontology from outside.

### 2.5 Current Consensus

The neo-Whorfian position (post-1996) holds that:

- Language influences cognition in **specific domains** (color, time, number, space, motion)
- Effects are strongest in **online cognitive processing** (during speaking) rather than in offline non-linguistic cognition
- Effects are **habitual** rather than deterministic — they shape default patterns, not absolute limits
- **Cross-linguistic differences are real and measurable** but modest in effect size

> **NCP implication:** When the protocol encodes narrative categories in English-derived terms, it creates default cognitive patterns for users who interact with those terms. These defaults are not neutral.

---

## 3. Ethnolinguistics: Language as Cultural Worldview

### 3.1 Natural Semantic Metalanguage (NSM)

Anna Wierzbicka's Natural Semantic Metalanguage framework proposes that all human languages share a finite set of **universal semantic primes** — irreducible conceptual atoms expressible in every natural language — that can paraphrase any meaning without circularity or cultural bias (Wierzbicka, 1972; Goddard & Wierzbicka, 2002).

The current inventory comprises **65 primes** across 14 categories, including:

| Category | Primes |
|----------|--------|
| Substantives | I, YOU, SOMEONE, SOMETHING, PEOPLE, BODY |
| Mental predicates | THINK, KNOW, WANT, FEEL, SEE, HEAR |
| Actions/events | DO, HAPPEN, MOVE |
| Time | WHEN, NOW, BEFORE, AFTER, A LONG TIME, A SHORT TIME |
| Logical | NOT, MAYBE, CAN, BECAUSE, IF |
| Taxonomy | KIND OF, PART OF |

These primes have been tested for lexical expressibility across typologically diverse languages (Goddard & Wierzbicka, 2014).

### 3.2 "Key Words" as Cultural Windows

Wierzbicka (1997) argues that culturally salient words resistant to translation — Russian *toska* (yearning/anguish), Japanese *amae* (dependence), German *Schadenfreude* — encode culture-specific emotional and relational scripts not directly mappable onto English categories. NSM paraphrases allow cross-cultural comparison without privileging any single language's categories.

### 3.3 "Imprisoned in English"

Wierzbicka's (2013) *Imprisoned in English* argues that English has become an implicit default metalanguage in linguistics, cognitive science, and AI, introducing hidden biases:

> Standard psychological and linguistic categories (e.g., "anger," "sadness," "belief," "time") are English-specific folk categories, not universals; when used as metalanguage tools in cross-cultural research, they produce ethnocentric distortions.

> **NCP implication:** Terms like "perspective," "dynamic," "vector," and "appreciation" are English-language folk categories from a specific Western narrative theory. They are not neutral descriptors of universal narrative phenomena. A protocol that treats them as universal risks the same ethnocentric distortion Wierzbicka identifies in psychology and cognitive science.

---

## 4. Grammatical Categories That Shape Narrative Meaning

This section surveys specific grammatical systems in Indigenous and non-Indo-European languages that encode narrative-critical information differently from English. Each system represents a dimension of meaning that the NCP's current schema does not accommodate.

### 4.1 Animacy in Algonquian Languages

All Algonquian languages grammaticalize a fundamental **animate/inanimate noun classification** that governs verb agreement, pronoun selection, and demonstrative choice (Bloomfield, 1946; Mithun, 1999).

**Key features:**
- Every noun is classified as animate or inanimate
- Classification is not entirely predictable from biological animacy: in Ojibwe, *asin* ("rock") is grammatically animate, as are *mitig* ("tree/stick") and *ozhaawashkwaa* ("blueberry")
- Four verb classes cross-cut transitivity and animacy: **Transitive Animate (TA)**, **Transitive Inanimate (TI)**, **Intransitive Animate (AI)**, **Intransitive Inanimate (II)** — each with distinct agreement paradigms (Wolfart, 1973)
- Anthropological linguists argue that animate nouns correlate with entities possessing spiritual agency or cultural significance in Algonquian worldviews

**The proximate/obviative distinction:** Algonquian languages track discourse prominence through a grammaticalized **proximate/obviative** system — the most discourse-prominent third-person referent is marked proximate; a less prominent one is marked obviative (Dahlstrom, 1991). This is a grammaticalized system of *narrative focus* with no equivalent in Indo-European languages.

> **NCP implication:** The NCP's "players" system assigns roles like "protagonist" and "antagonist" — categories that presuppose a particular (Western) theory of character function. An Algonquian-informed narrative system might instead track *animacy status* and *proximate/obviative relations* — who has agency, who is foregrounded, how discourse salience shifts. The NCP's current `author_structural_pov` values ("i", "you", "they", "we") partially gesture toward perspectival tracking but do not capture animacy or obviative marking.

### 4.2 Evidentiality Markers

Evidentiality — grammatical encoding of a speaker's **evidence source** for a proposition — is mandatory inflection in approximately 25% of the world's languages (Aikhenvald, 2004). It is concentrated in the Americas, the Caucasus, and parts of Asia.

Aikhenvald identifies five universal semantic categories:

1. **Visual evidence** — speaker saw the event
2. **Non-visual sensory evidence** — speaker heard, smelled, felt the event
3. **Inferential (results)** — speaker infers from physical traces
4. **Inferential (reasoning)** — speaker deduces from logic/assumptions
5. **Reported/hearsay** — speaker was told by someone else

**Examples:**
- **Eastern Pomo** (California): four-way system — *-ink'e* (non-visual sensory), *-ine* (inferential from trace), *-·le* (hearsay), *-ya* (direct visual) (McLendon, 2003)
- **Turkish**: two-way past tense distinction — *-di* (direct, speaker witnessed) vs. *-miş* (indirect, speaker infers or reports). Mythological narratives obligatorily take *-miş*.
- **Quechua**: independent marking of both evidentiality (knowledge source) and epistemic modality (degree of certainty)

Evidentiality is conceptually distinct from epistemic modality: evidentiality marks the *source* of evidence; modality marks the speaker's *degree of certainty* (Aikhenvald & Dixon, 2003).

> **NCP implication:** The NCP has no mechanism for encoding *how a narrator knows what they narrate*. English narratives handle this through prose conventions ("he saw," "she heard," "they say"), but in evidential languages, this is *grammatically mandatory*. A narrative protocol aiming for cross-linguistic fidelity would need an evidentiality layer — marking whether story events are presented as witnessed, inferred, reported, or mythologically received. This is especially critical for oral traditions where the epistemological status of a narrative is part of its meaning.

### 4.3 Polysynthetic Relational Verb Systems: Mohawk

Mohawk (Iroquoian) is a canonical **polysynthetic** language in which an entire proposition — subject, object, verb, incorporated noun, aspectual modifiers — can be expressed as a single phonological word (Mithun, 1984).

**Key features:**
- The verb template (pre-pronominal prefix → pronominal prefix → reflexive/reciprocal → incorporated noun root → verb root → aspect/tense suffixes) generates words that correspond to full English clauses
- **Noun incorporation** reduces transitivity, manipulates discourse structure, and classifies entities — Mithun (1986) proposes a four-type taxonomy from lexical compounding to classificatory incorporation
- **Time is encoded primarily through aspect** (perfective, imperfective, stative) rather than tense; past/future reference is achieved through aspectual choice plus adverbials (Mithun, 1999)

The Mohawk system represents a fundamentally **verb-centric ontology**: the language's basic unit of meaning is the event-complex encoded in the verb, not the noun/entity. Relationships between participants are expressed *within* the verb morphology, not through independent noun phrases linked by syntactic rules.

> **NCP implication:** The NCP's schema is organized around *nouns* — perspectives, players, storypoints, storybeats, dynamics, appreciations. These are all entity-like objects in a JSON structure, reflecting English's noun-centric grammar. A Mohawk-informed protocol might organize narrative structure around *verb complexes* — events that inherently encode their participants, aspects, and relational structures. The difference is not cosmetic; it reflects a fundamentally different ontological commitment about what narrative *is*.

### 4.4 Temporal Encoding: Aymara's Reversed Time

Aymara (Bolivia/Peru/Chile; ~2 million speakers) reverses the near-universal spatial metaphor for time: **the past is in front** (known/visible) and **the future is behind** (unknown/unseen) (Núñez & Sweetser, 2006).

- *nayra* ("eye/front/sight") refers to past events
- *qhipa* ("back/behind") refers to future events
- Co-speech gestures confirm this is a genuine cognitive-spatial orientation, not merely linguistic metaphor

This is the opposite of English, Spanish, Mandarin, and virtually all other documented languages.

> **NCP implication:** The NCP's "storybeats" system assumes a sequential/linear temporal ordering. While the `Problem-Solving Style` dynamic distinguishes "Linear" from "Holistic" approaches, the schema's fundamental JSON array structure still imposes a linear sequence. A language community whose temporal ontology places the known past in front and the unknown future behind might structure narrative progression differently — not as forward movement toward resolution but as backward movement from established knowledge.

### 4.5 Athabaskan/Dene Verb Morphology

Athabaskan (Na-Dene family; ~53 languages) has the most complex verb morphology of any known language family, with up to 12 distinct prefix position classes preceding the stem (Rice, 1989).

**Key features:**
- **Classificatory stem system**: verb stems change depending on the shape or consistency of the object being handled — separate stems for round, long, flat, granular, animate, and contained objects (Young & Morgan, 1987). In Navajo, "to pick up" has at least nine distinct stems: *-'aah* (roundish solid), *-łééh* (slender flexible), *-tih* (slender rigid), *-jaaʼ* (plural/granular), etc.
- **Morpheme ordering reflects semantic scope**: outer affixes have wider scope over inner affixes, and this principle predicts ordering across morphological phenomena (Rice, 2000)
- Physical ontology is encoded directly into the verb — speakers must classify objects by their physical properties to form grammatical utterances

> **NCP implication:** The Athabaskan system demonstrates that some languages require speakers to commit to a physical-ontological classification of objects *in every utterance involving them*. The NCP's narrative functions (Ability, Acceptance, Accurate, etc.) are abstract English-language categories. An Athabaskan-informed narrative system might require that narrative elements be classified by their *material and relational properties* rather than their abstract functional roles.

---

## 5. Semantic Shift: What Is Lost in Translation

When narrative concepts migrate between languages with different grammars, specific types of meaning are systematically lost or distorted:

### 5.1 Loss of Relational Valence

Polysynthetic languages encode relationships *within* morphological structures. When these are translated into English (or into English-derived data schemas), the relational information is disaggregated into separate noun phrases and predicates, losing the integrated quality of the original.

**Example:** A Mohawk verb form that encodes "she-and-I are in a state of mutual understanding about this thing" as a single word becomes, in English, a multi-word construction that separates the agent, patient, relationship type, and object into independent syntactic units. The *unity* of the relational event is lost.

### 5.2 Loss of Evidential Status

When narratives from evidential languages are translated into English, the grammatically encoded knowledge-source information is either dropped entirely or converted into optional lexical hedging ("they say," "apparently," "it is said"). The *obligatory epistemological commitment* of the original is reduced to an *optional stylistic choice*.

### 5.3 Loss of Animacy/Agency Marking

When Algonquian narratives are rendered in English, the grammatical animate/inanimate distinction — which carries ontological weight about what has agency in the world — collapses into English's biological animate/inanimate divide. A rock that is grammatically animate (and narratively agentive) in Ojibwe becomes grammatically inanimate in English, losing its narrative agency.

### 5.4 Slobin's "Thinking for Speaking"

Dan Slobin's (1987, 1996) **"thinking for speaking"** hypothesis provides the theoretical framework for understanding these losses. The hypothesis holds that preparing to speak requires selecting and *packaging* prelinguistic content into the grammatical categories mandated by a particular language, creating language-specific *rhetorical styles* for encoding events.

**Key evidence from the "frog story" project:** Slobin and colleagues elicited narratives from speakers of 10+ languages describing a wordless picture book. Results showed systematic differences in how speakers structured their narratives:

- **Satellite-framed languages** (English, German): encode *path* in particles/satellites and *manner* in the verb root ("he *ran* out") — producing manner-rich narratives
- **Verb-framed languages** (Spanish, Japanese): encode *path* in the verb root and *manner* in optional adjuncts ("he *exited* running") — producing path-focused narratives with less manner detail

(Talmy, 1985; Slobin, 2003; Berman & Slobin, 1994)

This is not strong Whorfianism — when speakers perform *non-verbal* tasks, cross-linguistic differences largely disappear (Papafragou, Massey, & Gleitman, 2002). The effect is specifically *online*, during the act of linguistic production.

> **NCP implication:** Slobin's work directly predicts that when AI systems generate narratives using NCP schemas, the English-derived categories will produce English-style rhetorical packaging — manner-focused, entity-decomposed, linearly sequenced. This is not a bug in the AI but a structural consequence of the schema's linguistic commitments. An NCP extension for verb-framed or polysynthetic language traditions would produce differently structured narratives, not just translated ones.

---

## 6. Linguistic Relativity in Computational and Protocol Contexts

### 6.1 Ontologies as Encoded Conceptualization

Thomas Gruber's (1993) foundational definition — "an ontology is a specification of a conceptualization" — reveals the inescapably linguistic nature of formal knowledge representation. Any formal ontology encodes the conceptual choices of its designers' linguistic and cultural background:

- OWL/RDF ontologies require every class to be named, every property to be typed, every relation to be labeled — all choices that embed natural language semantics
- When built from English-language sources by English-speaking engineers, ontologies inherit English folk-category boundaries
- The "ontology merging" problem in computer science is, at its root, a linguistic relativity problem (Noy & Musen, 2000)

### 6.2 Subject-Verb-Object as Default Architecture

Most data schemas, including JSON-based protocols like NCP, embed an **SVO (Subject-Verb-Object)** assumption:

```json
{
  "player": "Main Character",     // Subject (noun)
  "action": "resolves",           // Verb
  "target": "central conflict"    // Object (noun)
}
```

This structure naturalizes English word order. Languages with different basic orders — SOV (Japanese, Turkish, Hindi), VSO (Welsh, Arabic, Mohawk), VOS (Malagasy) — and especially polysynthetic languages where "subject," "verb," and "object" are not separable units, do not decompose events this way.

### 6.3 Noun-Centric vs. Verb-Centric Ontologies

The NCP schema is **noun-centric**: its top-level organizational categories are all nominal (perspectives, players, storypoints, storybeats, dynamics, appreciations). Each is an entity with properties. This reflects English's strong noun-verb distinction and its tendency to nominalize processes.

A **verb-centric** schema — more natural for polysynthetic and verb-heavy languages — might instead organize narrative around *event complexes* that inherently encode participants, aspects, evidential status, and relational structure:

| Noun-Centric (current NCP) | Verb-Centric (hypothetical) |
|---|---|
| Player: "Main Character" | Event-complex: experiencing-conflict-from-within |
| Perspective: "Main Character Throughline" | Event-complex: being-challenged-by-alternate-approach |
| Dynamic: "Main Character Resolve" | Event-complex: holding-or-releasing-central-orientation |
| Storybeat: { transit, description } | Event-complex: { process-type, participants-encoded, aspect, evidential-status } |

### 6.4 AI Systems and English-Default Bias

Large language models trained primarily on English data systematically:
- Underperform on low-resource languages (Bender et al., 2021)
- Encode English-specific conceptual structures into supposedly universal representations
- Propagate English-derived narrative conventions when generating stories

As Weizenbaum (1976) argued, computer programs "embody law" — they enforce specific ways of solving problems based on the designer's assumptions. The NCP, as a protocol consumed by AI systems, will shape how those systems conceptualize and generate narrative. Its linguistic commitments are therefore not merely academic — they are *engineering decisions with downstream consequences*.

---

## 7. Implications for NCP Protocol Design

### 7.1 What the Current Schema Assumes

The NCP's existing architecture makes the following linguistically-specific assumptions (mapped to the terminology in `docs/terminology/`):

| NCP Category | Linguistic Assumption | What It Excludes |
|---|---|---|
| **Perspectives** (I/You/They/We) | Pronominal person system (English-typical) | Proximate/obviative tracking; animate/inanimate perspectival splits; dual/trial number systems |
| **Dynamics** (Resolve, Growth, Approach) | Nominalized processes with binary outcomes (Change/Steadfast, Start/Stop) | Aspect-based progression; non-binary resolution patterns; relational (non-individual) dynamics |
| **Vectors** (Change, Steadfast, Linear, Holistic) | Abstract English-language categories | Process-oriented categories; evidentially-marked progression; verb-encoded directional change |
| **Storybeats** (sequential array) | Linear temporal ordering | Non-linear temporal ontologies (Aymara past-in-front); cyclical/spiral narrative structures; aspect-primary (rather than sequence-primary) event encoding |
| **Narrative Functions** (Ability, Acceptance, Accurate...) | English-language nominalized abstractions | Verb-stem-classified events; animacy-governed functions; relationally-encoded processes |
| **Players** (protagonist/antagonist framework) | Character-as-entity (noun-centric) | Character-as-process (verb-centric); communal/collective protagonist; kinship-relation-defined roles |

### 7.2 Design Questions for Protocol Extension

Based on the linguistic evidence surveyed, any effort to extend the NCP for cross-linguistic narrative traditions should address:

1. **Animacy layer:** Can the protocol represent entities with culturally-determined agency status, not just biological animacy? (Algonquian evidence)
2. **Evidentiality layer:** Can narrative events be marked with their epistemological source — witnessed, inferred, reported, mythologically received? (Aikhenvald's typology)
3. **Aspectual flexibility:** Can narrative progression be encoded through aspect (perfective/imperfective/stative) rather than (or alongside) temporal sequence? (Mohawk, Iroquoian evidence)
4. **Verb-centric alternative:** Can the protocol support event-complex-centered organization alongside its current noun-centric structure? (Polysynthetic language evidence)
5. **Non-binary dynamics:** Can resolution patterns accommodate non-binary, processual, or relational outcomes rather than Change/Steadfast dichotomies?
6. **Discourse prominence tracking:** Can the protocol track shifting salience (proximate/obviative relations) rather than fixed character roles?
7. **Temporal ontology flexibility:** Can narrative time be encoded in ways that do not presuppose linear forward progression? (Aymara evidence)

### 7.3 NSM as a Possible Foundation

Wierzbicka's Natural Semantic Metalanguage offers a potential path forward: if NCP categories can be paraphrased in semantic primes expressible in every natural language, the protocol's cross-linguistic validity can be evaluated empirically rather than assumed. For example:

- "Main Character Resolve" → *someone thinks something for a long time; after this, this someone does something different / this someone does the same thing* (NSM paraphrase avoiding English-specific "resolve" concept)
- "Objective Story Throughline" → *many people are in the same place; something bad is happening to all of them; because of this, they do many things* (NSM paraphrase of collective conflict)

If a narrative concept *cannot* be paraphrased in semantic primes, it may be culturally specific rather than universal — which does not invalidate it but identifies it as requiring explicit cultural context.

---

## 8. Cautions and Limitations

### 8.1 Effect Sizes Are Modest

Neo-Whorfian experimental effects, while statistically significant, are typically modest in magnitude. Language influences habitual cognition but does not determine it. Pullum and others have critiqued the tendency to overstate findings (Pullum, 1991).

### 8.2 The Algonquian Animacy-Spirituality Link Is Debated

Whether Algonquian animate noun classification reflects spiritual/cultural significance or is primarily a formal syntactic feature remains a productive scholarly debate. Structuralist linguists argue against reading ontological commitments from grammatical gender-like systems. Both positions have merit; protocol designers should avoid collapsing the debate in either direction.

### 8.3 Whorf's Hopi Claims Were Substantially Weakened

Malotki's (1983) detailed analysis undermined Whorf's strongest claims about Hopi temporal concepts. The Hopi case should be cited carefully — it demonstrates the *difficulty* of cross-linguistic characterization more than it proves linguistic determinism.

### 8.4 Replication Concerns

Some neo-Whorfian experiments (notably Boroditsky's 2003 grammatical gender study) have faced replication challenges. The field is robust overall but individual findings should be weighted by replication status.

### 8.5 Avoiding Reverse Essentialism

Linguistic relativity research should not be used to essentialize Indigenous or non-Western languages as fundamentally "different" in ways that reinforce othering. All languages are complex, fully expressive systems. The point is not that some languages are "more relational" or "more holistic" by nature, but that *different grammars make different categories obligatory*, and protocol design should accommodate that variation.

### 8.6 Competence vs. Authority

This document surveys linguistic evidence from a technical perspective. It does not substitute for engagement with Indigenous language communities about how their narrative traditions should or should not be represented in protocol form. Linguistic description is not the same as cultural authority.

---

## 9. Source List

### Primary Theoretical Works

1. Sapir, Edward. (1929). "The Status of Linguistics as a Science." *Language*, 5(4), 207–214. DOI: [10.2307/408996](https://doi.org/10.2307/408996)

2. Whorf, Benjamin Lee. (1956). *Language, Thought, and Reality: Selected Writings of Benjamin Lee Whorf*, ed. J.B. Carroll. Cambridge, MA: MIT Press. ISBN 0-262-73006-5.

3. Humboldt, Wilhelm von. (1836/1988). *On Language: The Diversity of Human Language Structure and Its Influence on the Mental Development of Mankind*, trans. P. Heath. Cambridge: Cambridge University Press. ISBN 0-521-36981-5.

### Neo-Whorfian Experimental Research

4. Boroditsky, Lera. (2001). "Does Language Shape Thought? Mandarin and English Speakers' Conceptions of Time." *Cognitive Psychology*, 43(1), 1–22. DOI: [10.1006/cogp.2001.0748](https://doi.org/10.1006/cogp.2001.0748)

5. Boroditsky, Lera, and Paul H. Thibodeau. (2013). "Metaphors We Think With: The Role of Metaphor in Reasoning." *PLoS ONE*, 8(2), e52961. DOI: [10.1371/journal.pone.0052961](https://doi.org/10.1371/journal.pone.0052961)

6. Bylund, Emanuel, and Panos Athanasopoulos. (2017). "The Whorfian Time Warp: Representing Duration Through the Language Hourglass." *Journal of Experimental Psychology: General*, 146(7), 911–916. DOI: [10.1037/xge0000314](https://doi.org/10.1037/xge0000314)

7. Lucy, John A. (1992a). *Language Diversity and Thought: A Reformulation of the Linguistic Relativity Hypothesis*. Cambridge: Cambridge University Press. ISBN 0-521-38797-3.

8. Lucy, John A. (1992b). *Grammatical Categories and Cognition: A Case Study of the Linguistic Relativity Hypothesis*. Cambridge: Cambridge University Press. ISBN 0-521-38798-1.

9. Lucy, John A. (1997). "Linguistic Relativity." *Annual Review of Anthropology*, 26, 291–312. DOI: [10.1146/annurev.anthro.26.1.291](https://doi.org/10.1146/annurev.anthro.26.1.291)

10. Gumperz, John J., and Stephen C. Levinson, eds. (1996). *Rethinking Linguistic Relativity*. Cambridge: Cambridge University Press. ISBN 0-521-44890-0.

11. Levinson, Stephen C. (2003). *Space in Language and Cognition: Explorations in Cognitive Diversity*. Cambridge: Cambridge University Press. ISBN 0-521-53260-6.

12. Haviland, John B. (1998). "Guugu Yimithirr Cardinal Directions." *Ethos*, 26(1), 25–47. DOI: [10.1525/eth.1998.26.1.25](https://doi.org/10.1525/eth.1998.26.1.25)

### Thinking for Speaking

13. Slobin, Dan I. (1987). "Thinking for Speaking." *Proceedings of the Thirteenth Annual Meeting of the Berkeley Linguistics Society*, 435–444.

14. Slobin, Dan I. (1996). "From 'Thought and Language' to 'Thinking for Speaking.'" In J.J. Gumperz and S.C. Levinson (eds.), *Rethinking Linguistic Relativity*. Cambridge: Cambridge University Press, pp. 70–96.

15. Slobin, Dan I. (2003). "Language and Thought Online: Cognitive Consequences of Linguistic Relativity." In D. Gentner and S. Goldin-Meadow (eds.), *Language in Mind: Advances in the Study of Language and Thought*. Cambridge: MIT Press, pp. 157–192.

16. Berman, Ruth A., and Dan I. Slobin. (1994). *Relating Events in Narrative: A Crosslinguistic Developmental Study*. Hillsdale, NJ: Lawrence Erlbaum. ISBN 0-8058-1435-3.

17. Talmy, Leonard. (1985). "Lexicalization Patterns: Semantic Structure in Lexical Forms." In T. Shopen (ed.), *Language Typology and Syntactic Description*, Vol. 3. Cambridge: Cambridge University Press, pp. 57–149.

18. Papafragou, Anna, Christine Massey, and Lila Gleitman. (2002). "Shake, Rattle, 'n' Roll: The Representation of Motion in Language and Cognition." *Cognition*, 84(2), 189–219. DOI: [10.1016/S0010-0277(02)00046-X](https://doi.org/10.1016/S0010-0277(02)00046-X)

### Ethnolinguistics and NSM

19. Wierzbicka, Anna. (1972). *Semantic Primitives*. Frankfurt: Athenäum.

20. Wierzbicka, Anna. (1997). *Understanding Cultures through Their Key Words: English, Russian, Polish, German, and Japanese*. Oxford: Oxford University Press. ISBN 0-19-512220-X.

21. Wierzbicka, Anna. (2013). *Imprisoned in English: The Hazards of English as a Default Language*. Oxford: Oxford University Press. ISBN 9780199321490.

22. Goddard, Cliff, and Anna Wierzbicka, eds. (2002). *Meaning and Universal Grammar: Theory and Empirical Findings* (2 vols.). Amsterdam: John Benjamins. ISBN 9781588112644.

23. Goddard, Cliff, and Anna Wierzbicka. (2014). *Words and Meanings: Lexical Semantics Across Domains, Languages, and Cultures*. Oxford: Oxford University Press. ISBN 9780199668434.

### Indigenous Language Grammars and Typology

24. Bloomfield, Leonard. (1946). "Algonquian." In Harry Hoijer (ed.), *Linguistic Structures of Native America*. New York: Viking Fund Publications in Anthropology, pp. 85–129.

25. Mithun, Marianne. (1984). "The Evolution of Noun Incorporation." *Language*, 60(4), 847–894. DOI: [10.1353/lan.1984.0038](https://doi.org/10.1353/lan.1984.0038)

26. Mithun, Marianne. (1986). "On the Nature of Noun Incorporation." *Language*, 62(1), 32–38. DOI: [10.1353/lan.1986.0017](https://doi.org/10.1353/lan.1986.0017)

27. Mithun, Marianne. (1999). *The Languages of Native North America*. Cambridge: Cambridge University Press. ISBN 0-521-23228-7.

28. Wolfart, H.C. (1973). *Plains Cree: A Grammatical Study*. Transactions of the American Philosophical Society 63(5). Philadelphia: APS.

29. Dahlstrom, Amy. (1991). *Plains Cree Morphosyntax*. New York: Garland. ISBN 0-8240-7164-6.

30. Rice, Keren. (1989). *A Grammar of Slave*. Berlin: Mouton de Gruyter. ISBN 978-3-11-010779-1.

31. Rice, Keren. (2000). *Morpheme Order and Semantic Scope: Word Formation in the Athapaskan Verb*. Cambridge: Cambridge University Press. ISBN 0-521-58354-5.

32. Young, Robert W., and William Morgan. (1987). *The Navajo Language: A Grammar and Colloquial Dictionary*. Albuquerque: University of New Mexico Press. ISBN 0-8263-1014-1.

### Evidentiality

33. Aikhenvald, Alexandra Y. (2004). *Evidentiality*. Oxford: Oxford University Press. ISBN 0-19-926388-5.

34. Aikhenvald, Alexandra Y., and R.M.W. Dixon, eds. (2003). *Studies in Evidentiality*. Amsterdam: John Benjamins. ISBN 9027229554.

35. McLendon, Sally. (2003). "Evidentials in Eastern Pomo with a comparative survey of the category in other Pomoan languages." In A.Y. Aikhenvald and R.M.W. Dixon (eds.), *Studies in Evidentiality*. Amsterdam: John Benjamins, pp. 101–129.

### Temporal Cognition

36. Núñez, Rafael E., and Eve Sweetser. (2006). "With the Future Behind Them: Convergent Evidence from Aymara Language and Gesture in the Crosslinguistic Comparison of Spatial Construals of Time." *Cognitive Science*, 30(3), 401–450. DOI: [10.1207/s15516709cog0000_62](https://doi.org/10.1207/s15516709cog0000_62)

37. Malotki, Ekkehart. (1983). *Hopi Time: A Linguistic Analysis of the Temporal Concepts in the Hopi Language*. Berlin: Mouton de Gruyter. ISBN 3-11-008578-3.

38. Berlin, Brent, and Paul Kay. (1969). *Basic Color Terms: Their Universality and Evolution*. Berkeley: University of California Press.

### Computational Ontology and Bias

39. Gruber, Thomas R. (1993). "A Translation Approach to Portable Ontology Specifications." *Knowledge Acquisition*, 5(2), 199–220. DOI: [10.1006/knac.1993.1008](https://doi.org/10.1006/knac.1993.1008)

40. Noy, Natalya F., and Mark A. Musen. (2000). "PROMPT: Algorithm and Tool for Automated Ontology Merging and Alignment." *Proceedings of AAAI-2000*. URL: [https://www.aaai.org/Papers/AAAI/2000/AAAI00-009.pdf](https://www.aaai.org/Papers/AAAI/2000/AAAI00-009.pdf)

41. Bender, Emily M., et al. (2021). "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?" *FAccT '21: Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency*, pp. 610–623. DOI: [10.1145/3442188.3445922](https://doi.org/10.1145/3442188.3445922)

42. Weizenbaum, Joseph. (1976). *Computer Power and Human Reason: From Judgment to Calculation*. San Francisco: W.H. Freeman. ISBN 0-7167-0463-3.

43. Friedman, Batya, and Helen Nissenbaum. (1996). "Bias in Computer Systems." *ACM Transactions on Information Systems*, 14(3), 330–347. DOI: [10.1145/230538.230561](https://doi.org/10.1145/230538.230561)

### Additional References

44. Brown, Roger. (1958). *Words and Things*. Glencoe, IL: The Free Press.

45. Pullum, Geoffrey K. (1991). *The Great Eskimo Vocabulary Hoax and Other Irreverent Essays on the Study of Language*. Chicago: University of Chicago Press. ISBN 0-226-68534-9.

---

*This document is part of the NCP Foundations series. It provides academic grounding for protocol design decisions and should be read alongside companion packets on Indigenous research methodology, speech act theory, and NCP schema extensions.*
