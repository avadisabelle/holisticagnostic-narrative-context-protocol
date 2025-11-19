# NCP Story Studio - Development Guide

## Project Overview

**NCP Story Studio** is a React.js application for working with stories based on the Narrative Context Protocol (NCP). It provides an interactive environment for exploring narrative terminology, viewing and editing stories, and understanding the deep structural relationships within narratives.

## Desired Outcome

Enable writers, narrative designers, and AI agents to:
- Explore and understand narrative terminology interactively
- View stories through multiple lenses (perspectives, storybeats, dynamics, etc.)
- Edit and create stories following the NCP schema
- Navigate between conceptual understanding and concrete story examples
- Collaborate on narrative development with clear structural guidance

## Architecture Philosophy

This application follows the **RISE Framework** principles:
- **Creative Orientation**: Focus on what the app enables users to create (stories with deep structural understanding)
- **Structural Tension**: Bridge the gap between abstract narrative theory and concrete story examples
- **Advancing Patterns**: Each feature naturally progresses users toward deeper narrative understanding

## Project Structure

```
narrative-context-protocol/
├── app/                          # React application
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   ├── pages/              # Application pages
│   │   │   ├── docs/          # Interactive terminology documentation
│   │   │   ├── stories/       # Story viewing/editing interfaces
│   │   │   └── home/          # Landing page
│   │   ├── lib/               # Utility functions and helpers
│   │   ├── api/               # API layer for story operations
│   │   ├── types/             # TypeScript type definitions
│   │   ├── hooks/             # Custom React hooks
│   │   └── styles/            # Global styles and themes
│   ├── public/                # Static assets
│   └── package.json
│
├── rispecs/                     # RISE specifications (spec-to-code parity)
│   ├── app.spec.md            # Overall application specification
│   ├── components/            # Component specifications
│   ├── pages/                 # Page specifications
│   ├── api/                   # API specifications
│   └── README.md             # How to use specs
│
├── examples/                   # Example story files (data source)
├── docs/                      # NCP documentation
│   └── terminology/          # Terminology definitions
│
└── schema/                    # JSON schema files
```

## Core Features

### 1. Interactive Terminology Documentation (`app/docs/`)
**Desired Outcome**: Users understand narrative concepts through interactive exploration

Features:
- Browse perspectives, narrative functions, dynamics, vectors, appreciations
- See relationships between concepts
- Interactive visualizations
- Links to story examples that demonstrate concepts
- Search and filter capabilities

### 2. Story Browser/Viewer
**Desired Outcome**: Users explore stories through multiple structural lenses

View Modes:
- **Overview**: High-level story metadata and structure
- **Perspectives View**: Four throughlines (Objective, Main Character, Influence, Relationship)
- **Storybeats View**: Sequential narrative beats with emotional tracking
- **Storypoints View**: Key structural turning points
- **Players View**: Character roles and relationships
- **Dynamics View**: Narrative forces and tensions
- **Moments View**: Significant storytelling moments
- **Graph View**: Visual relationship mapping

### 3. Story Editor
**Desired Outcome**: Users create and modify stories following NCP structure

Features:
- Form-based editing with validation
- JSON preview/export
- Template system for common story patterns
- Guidance system referencing terminology docs

### 4. API Layer
**Desired Outcome**: Consistent data operations across the application

Operations:
- Load stories from examples/
- Validate against schema
- Transform between different view representations
- Export in multiple formats
- Search and filter stories

## Technology Stack

### Core
- **React 18+** with TypeScript
- **Vite** for fast development and building
- **React Router** for navigation

### UI Framework
- **Tailwind CSS** for styling
- **Shadcn/ui** or **Radix UI** for accessible components
- **Lucide React** for icons

### Data Management
- **Zustand** or **React Context** for state management
- **React Query** for data fetching
- **Zod** for runtime validation

### Visualization
- **D3.js** or **Recharts** for data visualization
- **React Flow** for graph visualizations

## Development Principles

### 1. Spec-to-Code Parity
Every component, page, and API endpoint has a corresponding RISE spec in `rispecs/`.

The spec describes:
- Desired outcomes users want to create
- Natural progression through features
- Structural dynamics that enable advancement
- Creative Advancement Scenarios instead of traditional user stories

### 2. Type Safety
- All NCP schema types defined in TypeScript
- Strict type checking enabled
- Runtime validation with Zod

### 3. Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- Semantic HTML

### 4. Performance
- Code splitting by route
- Lazy loading for large story files
- Memoization for expensive computations
- Virtual scrolling for large lists

## Getting Started

### Prerequisites
```bash
node >= 18
npm >= 9
```

### Installation
```bash
cd narrative-context-protocol
npm create vite@latest app -- --template react-ts
cd app
npm install
```

### Development
```bash
npm run dev
```

### Building
```bash
npm run build
```

## Key Design Patterns

### 1. View/Data Separation
- Story data follows NCP schema exactly
- Views transform data for display without mutation
- Multiple views can show the same data differently

### 2. Terminology Integration
- Terminology docs are data-driven from `docs/terminology/`
- Inline help references terminology
- Hover states show definitions
- Deep links between concepts and examples

### 3. Progressive Disclosure
- Start simple (story overview)
- Reveal complexity gradually (detailed views)
- Always provide context and help
- Enable power users with advanced features

## Collaboration with LLMs

This project is designed to work well with AI coding assistants:

### When Adding Features
1. Check `rispecs/` for existing specifications
2. Write new specs before code
3. Reference RISE framework principles
4. Maintain spec-to-code parity

### When Modifying Code
1. Read the relevant spec first
2. Update spec if desired outcomes change
3. Ensure changes support advancing patterns
4. Maintain creative orientation

### When Debugging
1. Verify data matches NCP schema
2. Check type definitions
3. Review component specifications
4. Ensure accessibility compliance

## Testing Strategy

### Unit Tests
- Component rendering
- Data transformations
- Utility functions
- Type validation

### Integration Tests
- Page interactions
- API operations
- Routing
- State management

### E2E Tests
- Critical user journeys
- Story loading/editing
- Documentation navigation

## Deployment

The application can be deployed as a static site:
- **Vercel**: Automatic deployment from Git
- **Netlify**: Continuous deployment
- **GitHub Pages**: Simple hosting
- **Self-hosted**: Standard web server

## Future Enhancements

### Phase 2
- Real-time collaboration
- Story comparison tool
- AI-assisted story analysis
- Custom terminology mappings (Hero's Journey, Save the Cat, etc.)

### Phase 3
- Multi-language support
- Mobile applications
- Desktop applications (Electron/Tauri)
- Integration with writing tools (Final Draft, Subtxt, etc.)

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.

All contributions should:
1. Include RISE specifications
2. Maintain type safety
3. Follow accessibility standards
4. Include appropriate tests

## Resources

- [Narrative Context Protocol Spec](../SPECIFICATION.md)
- [RISE Framework](../__llms/llms-rise-framework.txt)
- [Dramatica Theory](https://narrativefirst.com/dramatica)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Remember**: This application exists to enable creative expression through structured narrative understanding. Every feature should advance users naturally toward creating meaningful stories with deep thematic coherence.
