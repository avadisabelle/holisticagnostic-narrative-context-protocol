# Narrative Context Protocol (NCP)

**A Standardized Schema for Transporting Authorial Intent Across Multi-Agentic Systems**

**Narrative Context Protocol (NCP)** is an open, standardized JSON schema explicitly designed to transport and preserve authorial intent across diverse multi-agent storytelling systems. Developed through collaboration with the **Entertainment Technology Center** at the **University of Southern California**, NCP reliably captures and conveys narrative context, artistic voice, and thematic coherence across platforms, mediums, and autonomous agents.

NCP is curated by **The Dramatica Co.**—the merger of **Write Bros. Inc.** and **Narrative First Inc.**—as the open-source edition of the Dramatica® storyform. By placing the canonical Dramatica structure in a permissive repository, the project ensures that anyone can study, implement, and extend the model without gatekeeping.

At its core, NCP provides a **structured yet adaptable schema**, ensuring narratives retain their logical consistency and emotional depth, even when interpreted or extended by numerous interacting agents. By encoding narrative elements into clear, universally understood representations, NCP maintains the original intent of the author throughout dynamic, distributed narrative environments.

Additionally, NCP acts like a "blockchain-for-subtext," transparently tracking narrative contributions, modifications, and creative expansions. This ensures the original artistic voice and intent remain clear and traceable, regardless of the complexity or number of agents involved.

Built upon proven narrative theories and driven by emerging advancements in AI storytelling, NCP simplifies and standardizes complex narrative exchanges. It empowers storytellers, technologists, and creative communities in film, gaming, literature, interactive media, and generative AI environments to collaborate freely—without sacrificing coherence, authenticity, or the original author's vision.

---

## Purpose and Philosophy

As storytelling mediums evolve rapidly, maintaining a structured yet adaptable narrative model becomes increasingly vital. NCP meets this challenge by providing a comprehensive yet adaptable framework that supports narrative coherence while accommodating the complexities and dynamic requirements of modern storytelling methodologies.

By clearly delineating narrative structure (Subtext) from presentation (Storytelling), NCP preserves authorial intent while enabling adaptable delivery across diverse storytelling platforms.

---

### Authorship, AI, and Creative Intent

As AI-driven storytelling rapidly evolves, crucial questions emerge about authorship, originality, and rights. NCP addresses these concerns transparently, embedding authorial intent within its structure, ensuring creators' original decisions remain clearly documented and respected.

By borrowing concepts familiar to collaborative software development—such as transparent tracking of narrative revisions and collaborative decision-making—NCP preserves the integrity and clarity of each author's contributions. This open and collaborative approach safeguards authorship while fostering creativity and innovation.

With NCP, the often informal process of giving and receiving notes transforms into a clearly documented system. **Creators' decisions are recorded, attributed, and protected, preserving the integrity and originality of their contributions.** By maintaining authorial intent at its core, NCP not only safeguards authorship but also provides a robust and respectful foundation for collaborative storytelling in an increasingly AI-driven creative environment.

---

## Key Features  
✅ **Open Dramatica Storyform** – Direct access to the canonical Dramatica® model for community use.  
✅ **Open-Source Standard** – Available for use, modification, and integration into various storytelling platforms.  
✅ **Scalable Narrative Structure** – A flexible yet structured approach to narrative construction, complete with clearly defined key components.  
✅ **Industry-Wide Adoption** – Designed for use across film, gaming, AI, and interactive fiction.     
✅ **Writer Protections** – Captures authorial intent, ensuring clear attribution and rights tracking.  
✅ **Extensible & Customizable:** Ships with canonical Dramatica® terminology while supporting mappings to frameworks like the Hero’s Journey, Save the Cat!, and more...  
✅ **Interoperability:** Easily exchange narrative data between platforms.

## Write Brothers and Narrative First

In 2025, **Write Brothers®**—creators of Dramatica® and Movie Magic Screenwriter—joined forces with **Narrative First**. This merger combines decades of story-development expertise with cutting-edge AI narrative research to deliver the **Subtxt/Dramatica platform**, a state-of-the-art system for generative storytelling. The unified platform powers NCP implementations, ensuring structured stories and rich authorial metadata for AI workflows.

## Getting Started

### Explore with NCP Story Studio

The fastest way to understand NCP is through the **NCP Story Studio** - an interactive web application for exploring narrative structure:

```bash
# Quick start with Docker
make dev-start

# Or using docker-compose directly
docker-compose --profile dev up
```

Access at **http://localhost:5177**

See [DOCKER-QUICKSTART.md](./DOCKER-QUICKSTART.md) for more options.

**Features:**
- 🎭 Interactive terminology browser
- 📖 Example stories with multiple structural views
- 📊 Statistics dashboard showing story completeness
- 🔗 Cross-linking between theory and practice
- 🎨 Beautiful, responsive interface

### Understand the Specification

Read the complete [Specification](/SPECIFICATION.md) to understand the schema in depth

## Repository Structure
```
narrative-context-protocol/
├── README.md
├── SPECIFICATION.md
├── COPYRIGHT.md
├── CONTRIBUTING.md
├── HISTORY.md
├── LICENSE.md
├── CLAUDE.md                      # Development guide for NCP Story Studio
├── DOCKER.md                      # Comprehensive Docker documentation
├── DOCKER-QUICKSTART.md           # Quick Docker reference
├── Makefile                       # Convenient Docker commands
├── docker-compose.yml             # Docker orchestration
├── .env.example                   # Environment configuration template
│
├── app/                           # NCP Story Studio (React application)
│   ├── src/                      # Application source code
│   ├── public/                   # Static assets
│   ├── Dockerfile                # Multi-stage Docker build
│   ├── nginx.conf                # Production web server config
│   ├── DEVELOPMENT.md            # Development session logs
│   └── package.json
│
├── scripts/                       # Helper scripts
│   ├── docker-dev.sh             # Development Docker commands
│   └── docker-prod.sh            # Production Docker commands
│
├── schema/
│   ├── ncp-schema.json
│   └── ncp-schema.yaml
│
├── examples/                      # Example NCP stories
│   ├── anora.json
│   ├── the-shawshank-redemption.json
│   ├── weaver_of_words__the_catalyst_of_change_251101.json
│   └── example-story.json
│
├── docs/
│   ├── terminology/              # Narrative terminology definitions
│   │   ├── 01.perspectives.md
│   │   ├── 02.appreciations-of-narrative.md
│   │   ├── 03.narrative-functions.md
│   │   ├── 04.dynamics.md
│   │   └── 05.vectors.md
│   └── narrative-context-protocol-schema.md
│
├── rispecs/                       # RISE specifications for app components
│   ├── README.md
│   └── app.spec.md
│
└── tests/
    └── validate-schema.js
```

## Licensing & Governance  

NCP is released under the **MIT License** (see [LICENSE.md](LICENSE.md)) to maintain openness while ensuring proper attribution.  

The development and refinement of NCP are **stewarded by The Dramatica Co.**, aligning the open-source model with the official Dramatica® tooling roadmap. Contributions and modifications are encouraged, and governance policies are outlined in [CONTRIBUTING.md](CONTRIBUTING.md).  

For further information, collaboration, or licensing inquiries, contact **The Dramatica Co.** at **support@narrativefirst.com**

Happy storytelling!
