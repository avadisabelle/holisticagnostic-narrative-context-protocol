# Speech Act Theory & Pragmatics: Foundations for the Narrative Context Protocol

> **NCP Foundations Packet — Academic Grounding Document**
> **Date**: 2026-05-28
> **Audience**: NCP contributors, narrative designers, Indigenous knowledge keepers, protocol engineers
> **Scope**: Performativity, pragmatics, and felicity conditions as they apply to narrative transmission and story protocols
> **Boundaries**: Does not cover linguistic relativity, Indigenous methodology, or specific NCP schema changes (see companion packets)

---

## Overview: Why Speech Act Theory Matters for NCP

The Narrative Context Protocol currently encodes stories as structured JSON documents — objects with fields, values, and validation rules. This is useful. It is also, from the perspective of a century of pragmatic philosophy and performance theory, radically incomplete.

The foundational insight of speech act theory is this: **language does not merely describe the world — it acts upon it**. When a priest says "I now pronounce you married," the utterance does not report a pre-existing fact; it *creates* a social reality. J.L. Austin called these **performative utterances** and spent his career demonstrating that the descriptive model of language — where sentences are true or false — is a special case, not the norm.

This insight, when applied to narrative, yields a claim that should reshape how NCP thinks about stories:

> **A story is not a document. It is an act with conditions.**

Telling a story *does* something. It creates social bonds, transmits knowledge, constitutes identity, establishes authority, and transforms the relationship between teller and listener. These effects are not incidental to the story — they are *constitutive* of what the story is. A story stripped of its performative conditions (who may tell it, to whom, when, how, and why) is not a neutral data object — it is an **infelicitous act**, a misfire in Austin's terminology. The act has failed to come off.

This document surveys the academic traditions that ground this claim and traces their implications for protocol design. The trajectory moves from Austin's original taxonomy through Searle's formalization, Grice's pragmatics, Butler's radical extension of performativity, Bauman and Hymes's ethnographic performance frameworks, and the existing computer science literature that has already applied speech act theory to multi-agent communication protocols.

The destination is a set of engineering principles: if stories are acts with conditions, then a story protocol must encode not just narrative *content* but narrative *force*, *felicity conditions*, and *performative context*.

---

## 1. Speech Act Theory Fundamentals

### 1.1 Austin's Revolution: How to Do Things with Words

J.L. Austin's posthumously published *How to Do Things with Words* (1962) launched a revolution against what he called the **descriptive fallacy** — the philosophical assumption that the primary function of language is to state facts that are either true or false. Austin demonstrated that many perfectly ordinary utterances do not describe anything at all. They *do* things:

- "I do" (in a wedding ceremony)
- "I name this ship the *Queen Elizabeth*"
- "I bet you sixpence it will rain tomorrow"
- "I promise to pay you back"

These **performative utterances** cannot be evaluated as true or false. They are either **felicitous** (successful, "happy") or **infelicitous** (unsuccessful, "unhappy"). The question is not *Is it true?* but *Did it work?*

Austin initially distinguished performatives from **constatives** (ordinary fact-stating sentences), but ultimately abandoned this clean division. He realized that even constatives *do* something — they assert, claim, confirm — and can themselves be evaluated for felicity. This led to his mature framework: the **three-part taxonomy of speech acts**.

### 1.2 The Tripartite Taxonomy

Every utterance simultaneously performs three acts:

| Act | Definition | Narrative Example |
|-----|-----------|-------------------|
| **Locutionary act** | The act of *saying* something meaningful — producing sounds, words, and grammatical structure with determinate sense and reference. Austin subdivides this into phonetic, phatic (grammatical), and rhetic (semantic/referential) acts. | The words of the story as spoken or written |
| **Illocutionary act** | The act performed *in* saying something — the force or social point of the utterance. This is the social action being performed: warning, promising, asserting, declaring, teaching. | The act of *telling* the story — warning, teaching, entertaining, bearing witness |
| **Perlocutionary act** | The effects brought about *by* saying something — what happens as a consequence in the audience's beliefs, feelings, or actions. | What happens *to the listener* — being moved, frightened, persuaded, transformed, healed |

The critical distinction: the illocutionary act is what the speaker *does* in uttering; the perlocutionary act is what they *achieve by* uttering. The illocutionary is largely conventional and intentional; the perlocutionary depends on actual audience uptake and can be unintended.

> "An utterance of a meaningful sentence… such as 'You'll be more punctual in the future,' may leave you wondering whether I am making a prediction or issuing a command or even a threat."
> — Stanford Encyclopedia of Philosophy, "Speech Acts," §2

**NCP implication**: The current NCP schema encodes the locutionary dimension well (the content of stories) and has begun encoding the illocutionary dimension (through `subtext` and `dynamics`). But it has almost no apparatus for the perlocutionary dimension — the conditions under which narrative acts actually *land* in audiences and produce their intended effects.

### 1.3 Felicity Conditions: When Speech Acts Succeed or Fail

Austin specified six conditions, organized in three pairs, that must hold for a performative utterance to succeed:

**Group A — Procedure Conditions** (violation = **Misfire**: the act fails entirely)
1. There must exist an **accepted conventional procedure** with a certain conventional effect
2. The **persons and circumstances** must be appropriate for invoking the procedure

**Group B — Execution Conditions** (violation = **Misfire**)
3. The procedure must be **executed correctly** by all participants
4. The procedure must be **executed completely**

**Group C — Sincerity Conditions** (violation = **Abuse**: the act occurs but is hollow)
5. The speaker must have the **requisite thoughts, feelings, and intentions**
6. The speaker must **follow through** on the act

Austin's taxonomy of failure is equally important:

- **Misfires**: The act fails to come off at all. The procedure is null and void. A person without authority pronouncing a marriage. Attempting to name a ship you have no right to name. The act simply does not occur.
  - *Misinvocations*: Wrong procedure for the circumstances
  - *Misexecutions*: Procedure improperly carried out (incomplete, imperfect)

- **Abuses**: The act is performed but is insincere. A promise made with no intention of keeping it. The promise still technically binds, but the speaker has violated a sincerity condition.

> **Source**: Austin, J.L. *How to Do Things with Words*. Oxford: Clarendon Press, 1962. 2nd ed., ed. J.O. Urmson and Marina Sbisà. Oxford University Press, 1975. ISBN: 978-0-19-501569-7.

---

## 2. Searle's Formalization: Constitutive Rules and the Taxonomy of Illocutionary Acts

### 2.1 From Observation to Formal Theory

John Searle transformed Austin's philosophical observations into a systematic formal theory. Where Austin was deliberately provisional and exploratory, Searle sought **constitutive rules** — rules that do not merely regulate behavior but *define what it is* to perform a speech act.

Searle borrowed the constitutive/regulative distinction from the philosophy of games: the rules of chess don't just regulate chess; they *constitute* it. Without the rules, there is no chess. Similarly, the rules for promising constitute what promising *is*. This distinction has profound implications for protocol design (see §9).

### 2.2 The Four Constitutive Rules (Illustrated for Promising)

Searle formalized felicity conditions as four types of constitutive rules:

| Rule Type | Condition for Promising | Protocol Analog |
|-----------|------------------------|-----------------|
| **Propositional Content Rule** | The utterance must predicate a *future act A* of the *speaker S* | Schema field type validation |
| **Preparatory Rules** | (1) The hearer would *prefer* S's doing A; (2) it is *not obvious* that S would do A anyway | Context requirements; the act must convey new information |
| **Sincerity Rule** | S *intends* to do A | Authorial commitment to the storyform |
| **Essential Rule** | The utterance *counts as an undertaking* of an obligation by S to do A | What the act fundamentally *is* — its illocutionary point |

The **Essential Rule** is Searle's key innovation: it names what the act essentially *is*. This is the rule that a protocol must capture if it wants to encode not just content but force.

### 2.3 The Five-Category Taxonomy

Searle organized all illocutionary acts into five categories using three parameters: (1) illocutionary point, (2) direction of fit between language and world, and (3) expressed psychological state.

| Category | Illocutionary Point | Direction of Fit | Expressed State | Examples |
|----------|-------------------|-----------------|-----------------|----------|
| **Assertives** (Representatives) | Commit speaker to truth of proposition | Word-to-world (language fits the world) | Belief | Asserting, claiming, concluding, predicting |
| **Directives** | Attempt to get hearer to do something | World-to-word (world must change to fit language) | Desire/want | Ordering, requesting, asking, inviting |
| **Commissives** | Commit speaker to future action | World-to-word | Intention | Promising, offering, vowing, threatening |
| **Expressives** | Express speaker's psychological state | Null (no direction of fit) | Varies | Thanking, apologizing, congratulating |
| **Declarations** | Bring about a state of affairs by representing it as so | Both simultaneously | None specified | Declaring war, christening, firing, appointing |

**Declarations** are the most structurally distinctive: they require **extra-linguistic institutional backing** (legal, religious, contractual authority). The act *creates* the reality it represents.

**NCP mapping**: Stories perform acts across all five categories simultaneously:
- **Assertives**: A `storypoint` asserts a thematic truth about the story's subtext
- **Directives**: Author-to-agent instructions about interpretation function as directives
- **Commissives**: Committing a `narrative` entry constitutes a promissory contract with the reader
- **Declarations**: Declaring a `perspective` as "Objective Story Throughline" *creates* that structural fact within the protocol — it does not describe a pre-existing reality but instantiates one
- **Expressives**: The `storytelling.overviews` and `storytelling.moments` layers encode the expressive dimension

> **Sources**:
> - Searle, John R. *Speech Acts: An Essay in the Philosophy of Language*. Cambridge: Cambridge University Press, 1969. DOI: [10.1017/CBO9781139173438](https://doi.org/10.1017/CBO9781139173438)
> - Searle, John R. "A Taxonomy of Illocutionary Acts." In *Language, Mind and Knowledge: Minnesota Studies in the Philosophy of Science*, vol. 7, ed. K. Gunderson, pp. 344–369. Minneapolis: University of Minnesota Press, 1975. Reprinted in *Expression and Meaning*. Cambridge: Cambridge University Press, 1979. DOI: [10.1017/CBO9780511609213](https://doi.org/10.1017/CBO9780511609213)
> - Searle, John R., and Daniel Vanderveken. *Foundations of Illocutionary Logic*. Cambridge: Cambridge University Press, 1985. DOI: [10.1017/CBO9780511897832](https://doi.org/10.1017/CBO9780511897832)

---

## 3. Grice's Pragmatics: Cooperation, Implicature, and the Gap Between What Is Said and What Is Meant

### 3.1 The Cooperative Principle

Paul Grice introduced the **Cooperative Principle** as the overarching assumption governing rational conversation:

> "Make your conversational contribution such as is required, at the stage at which it occurs, by the accepted purpose or direction of the talk exchange in which you are engaged."
> — Grice, *Studies in the Way of Words* (1989), p. 26

This is not a moral rule but an empirical observation about conversational rationality. Speakers and hearers mutually assume cooperation; this assumption licenses *inference beyond what is literally said*.

### 3.2 The Four Maxims

| Maxim | Submaxims |
|-------|----------|
| **Quantity** | Be as informative as required; do not be more informative than required |
| **Quality** | Do not say what you believe to be false; do not say that for which you lack adequate evidence |
| **Relation** | Be relevant |
| **Manner** | Be perspicuous: avoid obscurity, avoid ambiguity, be brief, be orderly |

### 3.3 Conversational Implicature

The conceptual payoff of the maxims is **conversational implicature**: meaning conveyed *by virtue of* observing (or apparently violating) the maxims, beyond literal content. Implicatures are:

1. **Calculable**: The hearer can work out the implicature using the maxims and context
2. **Defeasible (cancellable)**: Can be explicitly denied without contradiction
3. **Non-detachable**: Cannot usually be removed by changing words while keeping content
4. **Non-conventionally generated**: Not encoded in semantic content of words

Classic example:
> A: "I'm low on gas."
> B: "There is a station around the corner."

B does not assert the station is open. But A infers this because, by the maxim of Relation, B's response is only relevant if the station is open. The implicature — "the station is open" — is not what B *said* but what B *meant*.

### 3.4 Speaker Meaning and M-Intentions

Grice's deeper project analyzed meaning through **M-intentions** (communicative intentions with reflexive structure):

Speaker S means *p* by uttering *x* if and only if S utters *x* M-intending:
1. that the audience believes *p*
2. that the audience recognizes intention (1)
3. that this recognition (2) is part of the audience's reason for believing *p*

This makes meaning fundamentally **psychological and social**: meaning is what speakers intend audiences to recognize them as intending.

**NCP implication**: The NCP distinction between `subtext` (deeper authorial intent) and `storytelling` (surface presentation) mirrors Grice's distinction between *what is said* and *what is implicated*. The subtext encodes the conversational implicatures of the story — what the narrative means beyond what it shows. NCP's data model must obey the Maxim of Quantity: "as informative as required" for agent interpretation — neither omitting crucial thematic data nor overwhelming the schema with redundant fields.

> **Sources**:
> - Grice, H.P. "Logic and Conversation." In *Syntax and Semantics*, vol. 3: *Speech Acts*, ed. P. Cole and J.L. Morgan, pp. 41–58. New York: Academic Press, 1975.
> - Grice, H.P. *Studies in the Way of Words*. Cambridge, MA: Harvard University Press, 1989. ISBN: 978-0-674-85270-9.
> - Grice, H.P. "Meaning." *Philosophical Review* 66(3): 377–388, 1957. DOI: [10.2307/2182440](https://doi.org/10.2307/2182440)

---

## 4. Relevance Theory: Cognitive Context and the Stopping Rule

### 4.1 Sperber and Wilson's Challenge to Grice

Dan Sperber and Deirdre Wilson accept Grice's core insight — communication conveys more than literal meaning through inference — but argue his four maxims are the wrong apparatus. Their objections:

1. **Redundancy**: All four maxims reduce to a single principle of relevance
2. **Architecture**: Grice assumes deliberate step-by-step reasoning; Relevance Theory (RT) argues much pragmatic inference is automatic and modular
3. **Over-generation**: Grice's maxims can generate unlimited implicatures without a principled stopping rule; RT provides one

### 4.2 The Two Principles of Relevance

**Cognitive Principle of Relevance:**
> Human cognition tends to be geared toward the maximization of relevance.

Cognitive systems are structured to direct attention toward stimuli that yield the most **positive cognitive effects** for the least **processing effort**.

**Communicative Principle of Relevance:**
> Every act of ostensive communication conveys a presumption of its own optimal relevance.

Every utterance carries an implicit guarantee that:
- (a) It is *relevant enough* to be worth the hearer's processing effort
- (b) It is the *most relevant* utterance the speaker could have produced given their abilities and preferences

### 4.3 Key Technical Concepts

- **Cognitive Environment**: The set of all facts manifest (perceptible or inferable) to an individual at a given time
- **Mutual Cognitive Environment**: Facts manifest to *both* speaker and hearer — the shared context grounding interpretation
- **Relevance (technical)**: An utterance is relevant to the extent that its positive cognitive effects are large and processing effort is small
- **Explicatures**: What is explicitly communicated — the enriched, developed logical form (what is "said" plus necessary contextual completion)
- **Implicatures**: What is implicitly communicated without being part of the explicature

**The Relevance-Theoretic Comprehension Procedure:**
> "Follow a path of least effort in computing cognitive effects: test interpretive hypotheses in order of accessibility, and stop when your expectations of relevance are satisfied."
> — Wilson & Sperber (2002), p. 261

### 4.4 Implications for Protocol Design

RT has profound implications for NCP as a protocol interpreted by AI agents:

- **Schema naming, field documentation, and example values** are all RT-relevant — they lower the processing cost of interpretation
- **The NCP `subtext` layer** encodes explicatures (fully developed, contextually enriched meaning); the `storytelling` layer encodes ostensive signals that guide agents toward correct interpretation
- **The stopping rule** provides a basis for agent interpretation: stop generating interpretive hypotheses when you find one that achieves sufficient positive cognitive effects consistent with the schema's manifest presumptions
- **NCP functions as an explicit construction of a mutual cognitive environment** — all the facts about narrative structure that author and receiving agents can be presumed to share

> **Sources**:
> - Sperber, Dan, and Deirdre Wilson. *Relevance: Communication and Cognition*. Oxford: Blackwell, 1986. 2nd ed., 1995. ISBN: 978-0-631-19878-9.
> - Wilson, Deirdre, and Dan Sperber. "Relevance Theory." In *The Handbook of Pragmatics*, ed. L.R. Horn and G. Ward, pp. 607–632. Oxford: Blackwell, 2004. DOI: [10.1002/9780470756959.ch26](https://doi.org/10.1002/9780470756959.ch26)
> - Sperber, Dan, and Deirdre Wilson. "Pragmatics, Modularity and Mind-reading." *Mind & Language* 17(1–2): 3–23, 2002. DOI: [10.1111/1468-0017.00186](https://doi.org/10.1111/1468-0017.00186)

---

## 5. Performativity Beyond Linguistics: Judith Butler

### 5.1 From Deliberate Acts to Iterative Citation

Judith Butler extends Austin's performativity from deliberate linguistic acts to the **iterative, compelled repetition** that constitutes social identity itself. Where Austin's performatives require an intentional speaker with institutional authority in specific contexts, Butler argues that identity — paradigmatically gender — is produced through **citational repetition**: not singular deliberate acts but ongoing, often unconscious performances that cite prior performances.

The apparent naturalness of identity is a **retroactive construction** of accumulated performances:

> "If gender is instituted through acts which are internally discontinuous, then the appearance of substance is precisely that, a constructed identity, a performative accomplishment which the mundane social audience, including the actors themselves, come to believe and to perform in the mode of belief."
> — Butler, *Gender Trouble* (1990)

### 5.2 The Key Departure from Austin

Austin's performatives require an intentional speaker who is the source of the act. Butler challenges this: **the subject who "performs" is itself constituted by the performance** — there is no pre-existing "I" behind the performance who chooses to enact it. The subject is an *effect* of iterative citation, not its origin.

### 5.3 Excitable Speech and Injurious Language

In *Excitable Speech* (1997), Butler extends the analysis to injurious speech (hate speech, slurs). She argues that injurious speech does not merely describe or represent harm — it **enacts social wounding**. But the conventional authority of injurious speech is not inherent in the words themselves; it depends on their **citational history** — their prior use in conditions of power. Performative force can therefore be contested, subverted, and redeployed.

No utterance derives its force from the moment of utterance alone — it **inherits force from chains of prior usage**.

### 5.4 Implications for Narrative and Protocol

Butler's framework enriches NCP's theoretical foundation:

1. **Narrative as constitutive of identity**: Telling one's story repeatedly, in specific framings, is a performance that *produces* the self it claims to describe. Life narrative is not the representation of a pre-given self but a mechanism through which selfhood is enacted.

2. **Genre as citational practice**: Narrative genres (tragedy, comedy, epic) are citational systems. When a story "cites" the conventions of tragedy, it participates in the ongoing reproduction of that generic structure.

3. **NCP schema as citational repertoire**: NCP encodes the citational repertoire of narrative conventions (Dramatica's throughlines, etc.). Each story encoded in NCP cites these conventions, participating in their reproduction and potentially their subversion.

4. **Declarations and performative force**: When an NCP `dynamics` entry declares a story's "Judgment" as "Good" or "Bad," it performs a social act that constrains how subsequent agents interpret the story — exactly as Butler describes the compulsive force of repeated performative frames.

> **Sources**:
> - Butler, Judith. *Gender Trouble: Feminism and the Subversion of Identity*. New York: Routledge, 1990. DOI: [10.4324/9780203902752](https://doi.org/10.4324/9780203902752)
> - Butler, Judith. "Performative Acts and Gender Constitution." *Theatre Journal* 40(4): 519–531, 1988. DOI: [10.2307/3207893](https://doi.org/10.2307/3207893)
> - Butler, Judith. *Excitable Speech: A Politics of the Performative*. New York: Routledge, 1997. DOI: [10.4324/9780203948682](https://doi.org/10.4324/9780203948682)
> - Butler, Judith. *Bodies That Matter: On the Discursive Limits of Sex*. New York: Routledge, 1993. ISBN: 978-0-415-90366-9.

---

## 6. Narrative Performativity: Stories as Social Acts

### 6.1 Labov's Structural Model: Why This Story Matters

William Labov's influential model of oral narrative, developed from 600+ interviews, identifies six structural elements:

| Element | Function |
|---------|----------|
| **Abstract** | Summary; signals "here comes a story" |
| **Orientation** | Context: who, when, where, what |
| **Complicating Action** | The core narrative sequence (temporally ordered clauses) |
| **Evaluation** | The narrator's indication of *why this story matters* — the point |
| **Resolution** | Outcome of the complicating action |
| **Coda** | Returns hearer to the present; closes the story |

Labov demonstrated that narrative has **referential** functions (orienting in the world) and **evaluative** functions (conveying the social significance of the telling). The evaluative function is what makes narrative a social act — it tells the audience not just what happened but *why you should care about it being told*. **Narrating without evaluation is not, in Labov's terms, a complete story.**

Labov also defined the **narrative clause** — a temporally ordered clause that cannot be resequenced without changing the story's meaning. Temporal ordering is *constitutive* of narrative, not incidental.

### 6.2 Schiffrin: Narrative as Identity Construction

Deborah Schiffrin extended Labov's framework by examining how narratives function as social acts constituting identity. Drawing on Goffman's interactional sociology:

1. Narrative is always embedded in an interaction — performed *for* an audience *in* a situation
2. Narrative choices (what to include, how to evaluate, how to frame) construct the narrator's social identity
3. The *retelling* of narratives across situations is itself a social practice that stabilizes (or transforms) identity

> "She analyzed these different types of oral narratives for features of argument, sociolinguistic construction of identity, the retelling (how a single story is retold for different situations and/or purposes)..."
> — On Schiffrin's methodology

Her 1996 paper "Narrative as self-portrait" demonstrated how narrators construct themselves through the stories they tell. **Narrative is not about events but about *who the narrator is* in relation to those events.**

### 6.3 Bauman: Story, Performance, and Event

Richard Bauman's *Verbal Art as Performance* (1977) reframed the study of verbal art by arguing that **performance is not a category of texts but a mode of communication** — a frame that transforms the relationship between speaker, text, and audience.

**Performance, for Bauman, is:**
1. A specially marked communication event in which speakers take **responsibility for their communicative competence** to an audience
2. Constituted by **keying devices** that signal to an audience that a performance frame has been entered
3. Characterized by **accountability** — performers are evaluated for skill, grace, creativity, and effectiveness
4. **Emergent** — not the realization of a pre-existing script but something brought into being in the moment of execution, shaped by audience response, situational contingencies, and the performer's creative choices

**Keying devices** (ways of marking the performance frame):
- Special codes or varieties of language (archaic diction, poetic register)
- Figurative language
- Parallelism and special structural patterns
- Special formulae marking onset (e.g., "Once upon a time")
- Appeals to tradition or prior performances
- Disclaimers of performance competence

**The Emergent Quality**: Performance is not the execution of a fixed text but an event in which the text is constituted in interaction between performer and audience. Each performance is a unique event even when "the same story" is told again.

**Audience Co-creation**: The audience is not passive recipient but co-creator. Their responses (laughter, silence, calls, evaluations) actively shape the performance.

In *Story, Performance, and Event* (1986) and "Poetics and Performance" (1990, with Briggs), Bauman introduced the concept of **entextualization** — the process by which discourse is made into a text that can be detached from its original context and **recontextualized** elsewhere. Narrative is always both entextualized (given portable form) and subject to recontextualization (deployed in new situations with potentially transformed meanings).

**NCP as entextualization technology**: NCP gives narrative a portable, interoperable form that can be moved across platforms (recontextualized) while preserving the evaluative core. The schema is the mechanism of entextualization. But entextualization is never neutral — it always involves choices about what to preserve and what to strip away.

> **Sources**:
> - Labov, William, and Joshua Waletzky. "Narrative Analysis: Oral Versions of Personal Experience." 1967. Reprinted in *Journal of Narrative and Life History* 7(1–4): 3–38, 1997. DOI: [10.1075/jnlh.7.02nar](https://doi.org/10.1075/jnlh.7.02nar)
> - Schiffrin, Deborah. "Narrative as self-portrait: Sociolinguistic constructions of identity." *Language in Society* 25(2): 167–203, 1996. DOI: [10.1017/S0047404500020601](https://doi.org/10.1017/S0047404500020601)
> - Schiffrin, Deborah. *Approaches to Discourse*. Oxford: Blackwell, 1994. ISBN: 978-0-631-16623-8.
> - Bauman, Richard. *Verbal Art as Performance*. Rowley, MA: Newbury House, 1977. Reprinted: Waveland Press, 1984. ISBN: 978-0-88133-047-8.
> - Bauman, Richard. *Story, Performance, and Event: Contextual Studies of Oral Narrative*. Cambridge: Cambridge University Press, 1986. DOI: [10.1017/CBO9780511620935](https://doi.org/10.1017/CBO9780511620935)
> - Bauman, Richard, and Charles L. Briggs. "Poetics and Performance as Critical Perspectives on Language and Social Life." *Annual Review of Anthropology* 19: 59–88, 1990. DOI: [10.1146/annurev.an.19.100190.000423](https://doi.org/10.1146/annurev.an.19.100190.000423)
> - Briggs, Charles L., and Richard Bauman. "Genre, Intertextuality, and Social Power." *Journal of Linguistic Anthropology* 2(2): 131–172, 1992. DOI: [10.1525/jlin.1992.2.2.131](https://doi.org/10.1525/jlin.1992.2.2.131)

---

## 7. Dell Hymes and the Ethnography of Speaking

### 7.1 Communicative Competence

Dell Hymes responded to Noam Chomsky's influential distinction between *linguistic competence* (internalized grammar) and *performance* (actual use, with its noise and errors). For Chomsky, competence was the proper object of study; performance was secondary.

Hymes objected fundamentally: competent speakers know far more than grammar. They know:
- *When* to speak and *when* to remain silent
- *How* to address different interlocutors in different contexts
- *What* counts as an appropriate contribution to a given speech event
- *Which* of their linguistic resources are appropriate in which situations

He coined **communicative competence** to name this broader, socially-situated knowledge. Communicative competence encompasses not just grammar but pragmatics, sociolinguistics, and cultural knowledge about *when and how speaking is appropriate*.

**Key insight**: Knowing a genre is part of knowing how to communicate — genre knowledge is a form of communicative competence, not merely a classification system.

### 7.2 The SPEAKING Model

Hymes devised the **SPEAKING** mnemonic as a heuristic for analyzing speech events:

| Letter | Component | Description | NCP Parallel |
|--------|-----------|-------------|-------------|
| **S** | Setting and Scene | Physical location, time; psychological/cultural "definition of the situation" | Story `genre`, `logline`, narrative context |
| **P** | Participants | Speaker/sender, addressee, audience, bystanders; roles and relationships | `players`, `perspectives` (throughlines) |
| **E** | Ends | Goals (what participants intend) and Outcomes (what actually results) | `dynamics` (Story Goal, Consequence, Judgment) |
| **A** | Act Sequence | Form and content of the speech event; what acts constitute it and in what order | `storybeats` (sequential narrative beats) |
| **K** | Key | Tone or manner: serious, playful, ironic, sincere | `storytelling` layer (tone, voice, manner) |
| **I** | Instrumentalities | Channel (spoken, written, sung); form of speech (language, dialect, code) | Platform/medium metadata |
| **N** | Norms | Norms of interaction (turn-taking, silence); norms of interpretation | Schema validation rules; felicity conditions |
| **G** | Genre | Type of speech event (sermon, narrative, debate, joke) | Story genre metadata; narrative type |

Hymes's concept of communicative competence is the meta-framework for NCP's goal: NCP encodes not just what a story *says* but the competence — contextual appropriateness, genre norms, participatory roles — needed to *enact* the story appropriately across platforms and agents.

> **Sources**:
> - Hymes, Dell. "The Ethnography of Speaking." In *Anthropology and Human Behavior*, ed. T. Gladwin and W.C. Sturtevant, pp. 13–53. Washington, D.C., 1962.
> - Hymes, Dell. "Introduction: Toward Ethnographies of Communication." *American Anthropologist* 66(6, Part 2): 1–34, 1964. DOI: [10.1525/aa.1964.66.suppl_3.02a00010](https://doi.org/10.1525/aa.1964.66.suppl_3.02a00010)
> - Hymes, Dell. "On Communicative Competence." In *Sociolinguistics: Selected Readings*, ed. J.B. Pride and J. Holmes, pp. 269–293. Harmondsworth: Penguin, 1972.
> - Hymes, Dell. *Foundations in Sociolinguistics: An Ethnographic Approach*. Philadelphia: University of Pennsylvania Press, 1974. ISBN: 978-0-8122-1065-1.

---

## 8. Conditions of Narrative Felicity: Extending Austin/Searle to Story Transmission

Drawing on all the preceding frameworks, we can now construct a theory of **narrative felicity conditions** — what must be true for the act of telling a story to succeed. This is the central theoretical contribution of this foundations packet.

### 8.1 The Six Conditions of Narrative Felicity

Extending Austin's six conditions and Searle's constitutive rules to narrative transmission:

#### Condition 1: Right Procedure (Conventional Framework)

There must exist a **recognized narrative framework** — a genre, tradition, or protocol — within which the story act takes place. The teller and listener must share (or be able to recover) the conventions that give the story its force.

*Austin parallel*: An accepted conventional procedure must exist.
*Searle parallel*: The essential rule — what the act counts as.
*Hymes parallel*: Genre (G) in the SPEAKING model.
*Protocol implication*: NCP's schema *is* this conventional framework. But the framework must be legible to all participants. Schema documentation, terminology definitions, and the `docs/terminology/` directory are not supplementary — they are constitutive of the protocol's felicity.

#### Condition 2: Right Teller (Authority and Legitimacy)

The person or agent telling the story must have the **appropriate authority, standing, or relationship** to tell it. This includes cultural authority, experiential authority (having witnessed or lived the events), creative authority (authorship), and delegated authority (permission to retell).

*Austin parallel*: The persons must be appropriate for invoking the procedure.
*Bauman parallel*: The performer takes *responsibility* for communicative competence.
*Hymes parallel*: Participants (P) — who has the right to speak in this speech event.
*Protocol implication*: NCP currently has no apparatus for encoding *who may tell* a story. Authorial attribution tracks who *did* tell; felicity conditions would track who *may* tell, under what conditions, and with whose consent.

#### Condition 3: Right Listener (Audience Appropriateness)

The audience must be **appropriate** for the story being told — ready, willing, competent, and (in some traditions) authorized to receive it. Some stories can only be heard after initiation, after reaching a certain age, or in the right relational context.

*Austin parallel*: The circumstances must be appropriate.
*Grice parallel*: The cooperative principle assumes mutual orientation toward shared ends.
*Relevance Theory parallel*: The audience must have a cognitive environment in which the story's effects can be achieved.
*Protocol implication*: NCP has no concept of audience readiness or authorization. A felicity-aware protocol would encode transmission conditions: prerequisites for reception, contextual requirements, and relational conditions.

#### Condition 4: Right Occasion (Temporal and Situational Appropriateness)

The story must be told at the **right time, in the right place, under the right circumstances**. Some stories belong to certain seasons, ceremonies, life stages, or social situations. Even in secular contexts, timing and occasion shape whether a story lands.

*Austin parallel*: The circumstances must be appropriate for invoking the procedure.
*Hymes parallel*: Setting and Scene (S) — the physical and psychological context.
*Butler parallel*: Performative force depends on citational history and context of utterance.
*Protocol implication*: NCP could encode temporal and situational conditions — stories that should only be accessed in certain contexts, at certain times, or as part of certain sequences.

#### Condition 5: Right Form (Correct and Complete Execution)

The story must be told **correctly and completely** — in the right register, with the right structure, observing the conventions of its genre and tradition. An incompletely told story, or one told in the wrong register, is a misexecution.

*Austin parallel*: The procedure must be executed correctly and completely.
*Searle parallel*: Propositional content rules — the utterance must have the right form.
*Labov parallel*: A story without evaluation is not a complete story.
*Bauman parallel*: Keying devices must properly establish the performance frame.
*Protocol implication*: NCP's schema validation already enforces structural correctness. But "right form" extends beyond schema compliance to include tonal, evaluative, and contextual dimensions that current validation cannot capture.

#### Condition 6: Right Intent (Sincerity and Follow-Through)

The teller must have the **requisite intentions, feelings, and commitment** to the story being told, and must be prepared to follow through on the obligations the telling creates. An insincere telling — telling a sacred story as entertainment, or making narrative commitments the author does not intend to honor — is an abuse.

*Austin parallel*: Sincerity conditions — requisite thoughts, feelings, intentions; follow-through.
*Searle parallel*: Sincerity rule.
*Grice parallel*: Maxim of Quality — do not say what you believe to be false.
*Protocol implication*: NCP's `subtext` layer partially captures authorial intent. But sincerity is a dimension that a protocol can only gesture toward — it cannot be validated computationally, only supported through design that makes insincere use costly or visible.

### 8.2 Infelicity in Story Transmission: A Taxonomy of Narrative Failure

| Failure Type | Austin Category | Narrative Example | Protocol Analog |
|-------------|----------------|-------------------|-----------------|
| **Narrative Misfire (Void)** | Misinvocation | Telling a sacred story without authority; invoking a genre without its conventions | Schema validation failure; unauthorized access |
| **Narrative Misfire (Flawed)** | Misexecution | Telling a story incompletely; scrambling the temporal order; omitting the evaluation | Incomplete schema entry; missing required fields |
| **Narrative Abuse (Hollow)** | Abuse | Telling a story without sincerity; using a teaching story purely for entertainment | Formally valid but semantically empty entry |
| **Narrative Abuse (Breach)** | Abuse | Making narrative commitments and not following through | Abandoned storyforms; inconsistent narrative arcs |

---

## 9. The Bridge to Protocol Design: Engineering Implications

### 9.1 Existing Precedent: Speech Acts in Computer Science

The application of speech act theory to digital protocols is not speculative — it has a thirty-year history in computer science:

**Winograd and Flores (1986) — The Conversation for Action Framework**: Applied Austin's and Searle's speech act theory directly to office work and computer system design. Their **Conversation for Action** model represents coordination as networks of speech acts — requests, promises, declarations, reports — that create and discharge commitments. Implemented as a state-transition diagram tracking illocutionary status (requested → accepted → fulfilled → declared complete, or declined).

> "A computer process can track the social state of a transaction — such as which commitments have been made or discharged — even when it does not model in detail the external world that the commitments concern."
> — On Winograd & Flores

This inspired **workflow management systems**, **computer-supported cooperative work (CSCW)**, and the **Language/Action Perspective** on information systems.

**KQML and FIPA ACL**: Early agent communication languages that explicitly used Searlean speech act categories as **performatives** — labeled message types indicating illocutionary force (`inform`, `request`, `query`, `subscribe`). FIPA ACL is an international standard for agent communication with semantics explicitly grounded in Searle.

**Singh's Social Semantics**: Munindar P. Singh argued against mentalist semantics for agent communication and in favor of **social semantics** grounded in publicly observable commitments — agent communication creates social facts (like Austin's performatives), not merely reports internal states.

**Constitutive Rules in Protocol Design**: Following Searle, interaction protocols in multi-agent systems are described as **constitutive rules** that create and shape social realities (commitments, permissions, institutional facts), not mere constraints on message passing.

### 9.2 What Felicity Conditions Mean for NCP Architecture

| Austin/Searle Concept | Current NCP | Felicity-Aware NCP |
|----------------------|-------------|-------------------|
| Conventional procedure | JSON schema with validation | Schema as constitutive rules that *define* what a valid NCP story-act is |
| Appropriate persons | Authorial attribution (who *did*) | Transmission authority (who *may*, with whose consent) |
| Appropriate circumstances | None | Contextual conditions: temporal, situational, relational prerequisites |
| Correct execution | Schema validation (structural) | Extended validation: completeness of evaluative dimension, tonal consistency |
| Complete execution | Required fields | Narrative completeness: all six of Labov's elements present |
| Sincerity | None (implicit) | Commitment tracking: declared intentions, follow-through monitoring |
| Illocutionary force | Implicit in field semantics | Explicit performative typing: each schema entry annotated with its speech act type |
| Perlocutionary effects | None | Intended effects metadata: what the story should *do* to its audience |

### 9.3 NCP as Conversation for Action

Following Winograd and Flores, each `narrative` entry can be modeled as a state in a conversation-for-action network:

```
Author DECLARES storyform
    → Agent ACCEPTS (validates, acknowledges constraints)
        → Agent FULFILLS (generates content consistent with storyform)
            → Completion DECLARED
    → Agent DECLINES (storyform incompatible with agent capabilities)
    → Agent COUNTER-PROPOSES (suggests modifications)
```

The NCP schema tracks the **illocutionary status** of narrative commitments — not just what was said, but what social obligations are in play.

### 9.4 NCP Performatives as Typed Speech Acts

NCP field types could be formally mapped to speech act categories:

| NCP Element | Speech Act Type | Illocutionary Point | Direction of Fit |
|-------------|----------------|-------------------|-----------------|
| `storypoints` | Assertive | Commits to thematic truth | Word-to-world |
| `dynamics` | Assertive/Declarative | Asserts or creates structural facts | Both |
| `perspectives` | Declarative | Creates throughline structure | Both |
| `storybeats` | Directive | Instructs agent on narrative sequence | World-to-word |
| `storytelling.moments` | Expressive | Expresses intended emotional quality | Null |
| Schema validation | Assertive | Confirms/disconfirms felicity | Word-to-world |

### 9.5 The Schema as Constitutive Rules

Following Searle and the multi-agent protocol literature, NCP's JSON schema is best characterized as a set of **constitutive rules** — rules that *define what it is* to encode a story in NCP, not merely regulate how to do it. The schema does not just constrain story encoding; it **constitutes** what counts as a valid NCP story, just as the rules of chess constitute what counts as a legal move.

This reframing has practical consequences: schema changes are not merely technical updates — they are **changes to what counts as a story-act within the protocol**. Adding or removing a required field changes what it is possible to *do* with NCP.

---

## 10. How Performativity Challenges Data-Centric Protocol Assumptions

The performativity literature raises five fundamental challenges to NCP's current architecture:

### Challenge 1: Stories Are Not Documents

A document is a static container of information. A story is an **event** — it happens between people, it transforms relationships, it creates social realities. NCP currently treats stories as documents (JSON objects with fields and values). A performativity-informed NCP would treat stories as **acts** — events with participants, conditions, force, and consequences.

### Challenge 2: Context Is Not Metadata

In a data-centric model, context is supplementary — metadata attached to the "real" content. In speech act theory, **context is constitutive**. The same words uttered in different contexts perform different acts. A story told at a funeral and the same story told at a party are not the same story — they are different performative acts with different felicity conditions, different illocutionary force, and different perlocutionary effects.

NCP cannot encode context as optional metadata. Context conditions must be **first-class protocol elements**.

### Challenge 3: Meaning Exceeds Content

Grice and Sperber/Wilson demonstrate that meaning is always **underdetermined by content**. What a story *means* depends on the cooperative assumptions, relevance expectations, and mutual cognitive environment of teller and listener. NCP's `subtext` layer is an attempt to encode meaning beyond content, but it still treats meaning as a fixed property of the document rather than an **emergent property of the communicative act**.

### Challenge 4: Authority Is Not Just Attribution

Butler and Bauman show that **performative force depends on who is speaking and under what conditions of authority**. NCP tracks authorial attribution — who created the content. But felicity requires **transmission authority** — who is authorized to tell this story, to whom, under what conditions, and with whose consent. These are different questions.

### Challenge 5: Each Telling Is a New Act

Bauman's emergent quality means that **each telling of a story is a new performance event**, not a replay of a fixed text. When an AI agent generates content from an NCP storyform, it is not retrieving a document — it is **performing a narrative act** that constitutes the story anew in the moment of generation. This means that agent outputs are not copies or derivatives; they are new performances that must meet their own felicity conditions.

---

## 11. Synthesizing Framework: Five Layers of Narrative Force

Across all the theoretical traditions surveyed here, a unified five-layer model emerges for understanding how stories function as acts within a protocol:

**Layer 1 — Locution / Propositional Content / "What Is Said"**
→ NCP's raw data: field values, named elements, logical structure
→ The `storytelling` layer's surface presentation

**Layer 2 — Illocution / Force / Social Act**
→ NCP's `subtext` layer: what is being *done* — the author's assertions, directives, declarations, and commissives about the story's meaning
→ The performative dimension that creates narrative facts

**Layer 3 — Perlocution / Cognitive Effects / Uptake**
→ What happens in agents and audiences when they receive NCP data: beliefs formed, narrative decisions taken, creative work generated
→ The dimension NCP can influence but not fully control

**Layer 4 — Citation / Performance Frame / SPEAKING Context**
→ The broader cultural, generic, and institutional context in which NCP acts have their force
→ The performative history that gives NCP's encoded conventions their normative power

**Layer 5 — Social Commitments / Constitutive Rules / Institutional Facts**
→ NCP as a protocol that creates social facts binding on participating agents
→ The institutional infrastructure that makes NCP acts felicitous and enforceable

---

## 12. Source List

### Foundational Philosophical Texts

| Author(s) | Title | Year | Publisher | Identifier |
|-----------|-------|------|-----------|------------|
| Austin, J.L. | *How to Do Things with Words* (2nd ed.) | 1962/1975 | Oxford University Press | ISBN: 978-0-19-501569-7 |
| Searle, John R. | *Speech Acts: An Essay in the Philosophy of Language* | 1969 | Cambridge University Press | DOI: [10.1017/CBO9781139173438](https://doi.org/10.1017/CBO9781139173438) |
| Searle, John R. | "A Taxonomy of Illocutionary Acts" | 1975 | University of Minnesota Press | In *Expression and Meaning*, DOI: [10.1017/CBO9780511609213](https://doi.org/10.1017/CBO9780511609213) |
| Searle, J.R. & Vanderveken, D. | *Foundations of Illocutionary Logic* | 1985 | Cambridge University Press | DOI: [10.1017/CBO9780511897832](https://doi.org/10.1017/CBO9780511897832) |
| Grice, H.P. | "Logic and Conversation" | 1975 | Academic Press | In *Studies in the Way of Words*, ISBN: 978-0-674-85270-9 |
| Grice, H.P. | "Meaning" | 1957 | *Philosophical Review* | DOI: [10.2307/2182440](https://doi.org/10.2307/2182440) |

### Relevance Theory

| Author(s) | Title | Year | Publisher | Identifier |
|-----------|-------|------|-----------|------------|
| Sperber, D. & Wilson, D. | *Relevance: Communication and Cognition* (2nd ed.) | 1986/1995 | Blackwell | ISBN: 978-0-631-19878-9 |
| Wilson, D. & Sperber, D. | "Relevance Theory" | 2004 | Blackwell | DOI: [10.1002/9780470756959.ch26](https://doi.org/10.1002/9780470756959.ch26) |
| Sperber, D. & Wilson, D. | "Pragmatics, Modularity and Mind-reading" | 2002 | *Mind & Language* | DOI: [10.1111/1468-0017.00186](https://doi.org/10.1111/1468-0017.00186) |

### Performativity Theory

| Author(s) | Title | Year | Publisher | Identifier |
|-----------|-------|------|-----------|------------|
| Butler, Judith | *Gender Trouble* | 1990 | Routledge | DOI: [10.4324/9780203902752](https://doi.org/10.4324/9780203902752) |
| Butler, Judith | "Performative Acts and Gender Constitution" | 1988 | *Theatre Journal* | DOI: [10.2307/3207893](https://doi.org/10.2307/3207893) |
| Butler, Judith | *Excitable Speech* | 1997 | Routledge | DOI: [10.4324/9780203948682](https://doi.org/10.4324/9780203948682) |
| Butler, Judith | *Bodies That Matter* | 1993 | Routledge | ISBN: 978-0-415-90366-9 |

### Narrative Performance and Ethnography of Speaking

| Author(s) | Title | Year | Publisher | Identifier |
|-----------|-------|------|-----------|------------|
| Bauman, Richard | *Verbal Art as Performance* | 1977 | Waveland Press | ISBN: 978-0-88133-047-8 |
| Bauman, Richard | *Story, Performance, and Event* | 1986 | Cambridge University Press | DOI: [10.1017/CBO9780511620935](https://doi.org/10.1017/CBO9780511620935) |
| Bauman, R. & Briggs, C.L. | "Poetics and Performance" | 1990 | *Annual Review of Anthropology* | DOI: [10.1146/annurev.an.19.100190.000423](https://doi.org/10.1146/annurev.an.19.100190.000423) |
| Briggs, C.L. & Bauman, R. | "Genre, Intertextuality, and Social Power" | 1992 | *Journal of Linguistic Anthropology* | DOI: [10.1525/jlin.1992.2.2.131](https://doi.org/10.1525/jlin.1992.2.2.131) |
| Hymes, Dell | "Toward Ethnographies of Communication" | 1964 | *American Anthropologist* | DOI: [10.1525/aa.1964.66.suppl_3.02a00010](https://doi.org/10.1525/aa.1964.66.suppl_3.02a00010) |
| Hymes, Dell | *Foundations in Sociolinguistics* | 1974 | University of Pennsylvania Press | ISBN: 978-0-8122-1065-1 |
| Labov, W. & Waletzky, J. | "Narrative Analysis" | 1967/1997 | *J. Narrative & Life History* | DOI: [10.1075/jnlh.7.02nar](https://doi.org/10.1075/jnlh.7.02nar) |
| Schiffrin, Deborah | "Narrative as self-portrait" | 1996 | *Language in Society* | DOI: [10.1017/S0047404500020601](https://doi.org/10.1017/S0047404500020601) |
| Schiffrin, Deborah | *Approaches to Discourse* | 1994 | Blackwell | ISBN: 978-0-631-16623-8 |

### Computer Science and Protocol Design

| Author(s) | Title | Year | Publisher | Identifier |
|-----------|-------|------|-----------|------------|
| Winograd, T. & Flores, F. | *Understanding Computers and Cognition* | 1986 | Addison-Wesley | ISBN: 978-0-201-11297-6 |
| Singh, Munindar P. | "An Ontology for Commitments in Multiagent Systems" | 1999 | *AI and Law* | DOI: [10.1023/A:1008364011428](https://doi.org/10.1023/A:1008364011428) |
| Habermas, Jürgen | *The Theory of Communicative Action* (Vol. 1) | 1984 | Beacon Press | ISBN: 978-0-8070-1506-1 |
| Dietz, Jan L.G. | *Enterprise Ontology: Theory and Methodology* | 2006 | Springer | DOI: [10.1007/3-540-33149-2](https://doi.org/10.1007/3-540-33149-2) |

### Suggested Further Reading

| Author(s) | Title | Year | Relevance |
|-----------|-------|------|-----------|
| Goffman, Erving | *Frame Analysis* | 1974 | Foundational concept of "keying" that Bauman builds on |
| Ricoeur, Paul | *Time and Narrative* (*Temps et récit*) | 1983–85 | Narrative as primary mode of temporal self-understanding |
| Ong, Walter | *Orality and Literacy* | 1982 | Primary vs. secondary orality; technology-mediated narrative |
| Bakhtin, Mikhail | *Speech Genres and Other Late Essays* | 1986 | Speech genres as socially constituted; dialogism |
| Ryan, Marie-Laure & Thon, J.-N. | *Storyworlds Across Media* | 2014 | Narrative structure and speech act theory in transmedia; DOI: [10.2307/j.ctt1d98bc0](https://doi.org/10.2307/j.ctt1d98bc0) |

---

## Closing: The Central Claim

Every theoretical tradition surveyed in this document converges on a single insight:

**A story is not a container of information. It is an act that creates, transforms, and sustains social reality — but only when its conditions of felicity are met.**

Austin showed that language does things. Searle formalized the conditions under which it succeeds. Grice showed that meaning exceeds content. Sperber and Wilson showed that interpretation depends on cognitive context. Butler showed that performative acts constitute the realities they name. Bauman showed that performance is emergent, co-created, and accountable. Hymes showed that communicative competence includes knowing when, how, and to whom one may speak. Labov showed that stories without evaluative force are incomplete. And Winograd, Flores, and Singh showed that digital protocols can and do encode speech acts, commitments, and social facts.

The Narrative Context Protocol sits at the convergence of all these traditions. Its current architecture — stories as JSON documents with schema validation — captures the locutionary layer well. The challenge ahead is to extend the protocol into the illocutionary, perlocutionary, and contextual layers: encoding not just what stories say, but what they *do*, under what conditions they succeed, and what social realities they create and sustain.

This is not an abstract philosophical exercise. It is a design requirement. Stories that are transmitted without their felicity conditions are not neutral data — they are **infelicitous acts**. The protocol must be able to tell the difference.

---

*This document is part of the NCP Foundations series. Companion packets cover Linguistic Relativity, Indigenous Methodology, and NCP Schema Extensions.*
