# NCP Story Studio

A React.js application for exploring and working with stories structured using the Narrative Context Protocol (NCP).

## Features

- **Story Browser**: View and explore stories with rich metadata
- **Multi-View Story Viewer**: See stories through different structural lenses
  - Overview
  - Perspectives (four throughlines)
  - Players (characters and roles)
  - Storybeats (sequential narrative events)
  - Dynamics (narrative forces and tensions)
- **Interactive Terminology Documentation**: Learn narrative concepts with clear definitions and examples
- **Type-Safe Implementation**: Full TypeScript coverage with NCP schema types
- **Responsive Design**: Works on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

The built application will be in the `dist/` directory.

## Project Structure

```
app/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/           # Application pages
│   │   ├── home/       # Landing page
│   │   ├── stories/    # Story browser and viewer
│   │   └── docs/       # Terminology documentation
│   ├── lib/
│   │   ├── api/        # API operations
│   │   ├── store/      # State management
│   │   └── utils/      # Utility functions
│   ├── types/          # TypeScript type definitions
│   └── styles/         # Global styles
├── public/
│   └── examples/       # Example story files
└── package.json
```

## Architecture

This application follows the RISE Framework principles:

- **Creative Orientation**: Focuses on what users create (understanding and stories)
- **Structural Tension**: Bridges the gap between abstract theory and concrete examples
- **Advancing Patterns**: Features naturally progress users toward deeper understanding

See [CLAUDE.md](../CLAUDE.md) for detailed architecture and development guidance.

## Technologies

- **React 18**: UI framework
- **TypeScript**: Type safety
- **Vite**: Build tool
- **React Router**: Routing
- **Zustand**: State management
- **Tailwind CSS**: Styling
- **Lucide React**: Icons

## Specifications

All features have corresponding RISE specifications in `../rispecs/` that describe:
- Desired outcomes users want to create
- Structural dynamics that enable advancement
- Creative Advancement Scenarios

This maintains spec-to-code parity and ensures creative intent is preserved.

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.

All contributions should:
1. Include or update RISE specifications
2. Maintain type safety
3. Follow accessibility standards
4. Include appropriate tests

## License

MIT License - see [LICENSE.md](../LICENSE.md)

## Resources

- [Narrative Context Protocol Specification](../SPECIFICATION.md)
- [RISE Framework](../__llms/llms-rise-framework.txt)
- [Dramatica Theory](https://narrativefirst.com/dramatica)

---

**Built with the Narrative Context Protocol**
A project by The Dramatica Co.
