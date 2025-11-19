# NCP Story Studio - Application Specification

## Desired Outcome Definition

**What users want to create:** Writers, narrative designers, and AI agents want to create deeply structured stories with thematic coherence, using the Narrative Context Protocol (NCP) as their foundation.

**How they'll know they've achieved this outcome:**
- They can explore and understand narrative concepts intuitively
- They can view their stories through multiple structural lenses
- They can identify and refine thematic elements systematically
- They can collaborate with others while maintaining narrative coherence
- They can export stories that preserve authorial intent across platforms

**What makes this outcome valuable:**
- Stories have deeper structural integrity
- Collaboration maintains creative vision
- Learning happens through interaction, not just reading
- The gap between theory and practice narrows naturally

## Natural Language Functional Description

### Core Creative Enablement

NCP Story Studio enables users to understand narrative structure deeply while actively working on their stories. Rather than forcing users to learn abstract theory before creating, the application reveals structural patterns through interactive exploration of real stories.

Users naturally progress from curiosity ("What makes this story work?") to understanding ("I see the perspectives at play") to application ("I can use this in my story"). The interface doesn't force this progression—it supports it through interconnected views and contextual guidance.

### Structural Tension Dynamics

**Current Reality:** Writers understand their stories intuitively but struggle to articulate and refine the structural elements that create thematic power.

**Desired Outcome:** Writers see the deep structure of their narratives clearly and can adjust elements deliberately to strengthen thematic coherence.

**Natural Progression:** The application bridges this gap by showing structure within familiar story contexts, making abstract concepts concrete through examples, and enabling experimentation with immediate visual feedback.

### Advancing Patterns

The application supports natural advancement through:

1. **Discovery → Understanding**
   - Browse terminology with clear definitions
   - See concepts demonstrated in real stories
   - Explore relationships between elements

2. **Understanding → Application**
   - View own stories through structural lenses
   - Identify patterns and gaps
   - Experiment with changes

3. **Application → Mastery**
   - Compare different narrative approaches
   - Build personal narrative vocabulary
   - Teach others through shared understanding

## Architecture

### Pages

#### 1. Home (`/`)
- Welcome and orientation
- Quick access to featured stories
- Recent terminology explored
- Getting started guidance

#### 2. Terminology Browser (`/docs/*`)
- **Perspectives** (`/docs/perspectives`)
- **Narrative Functions** (`/docs/functions`)
- **Dynamics** (`/docs/dynamics`)
- **Vectors** (`/docs/vectors`)
- **Appreciations** (`/docs/appreciations`)

Each page:
- Lists all items with search/filter
- Shows definitions and relationships
- Links to story examples demonstrating concept
- Provides interactive visualizations where appropriate

#### 3. Story Browser (`/stories`)
- Grid/list view of available stories
- Filter by author, genre, tags
- Search by title or content
- Quick preview cards

#### 4. Story Viewer (`/stories/:id`)
- Tab-based view system:
  - **Overview**: Metadata and summary
  - **Perspectives**: Four throughlines
  - **Players**: Characters and roles
  - **Storybeats**: Sequential events with emotional tracking
  - **Storypoints**: Key structural moments
  - **Dynamics**: Narrative forces and tensions
  - **Moments**: Storytelling technique breakdowns
  - **Graph**: Visual relationship mapping

- Each view:
  - Reads from same story data
  - Transforms data for display
  - Links to related terminology
  - Enables annotations and notes

#### 5. Story Editor (`/stories/:id/edit`)
- Form-based editing with validation
- Live preview of changes
- Guidance referencing terminology
- Schema validation
- Export options

### Components

#### Layout Components
- **AppShell**: Main layout with navigation
- **Header**: Branding and primary navigation
- **Sidebar**: Contextual navigation per section
- **Footer**: Meta information and links

#### Story Components
- **StoryCard**: Compact story preview
- **StoryOverview**: Full metadata display
- **PerspectivesView**: Four throughlines visualization
- **PlayersView**: Character grid with relationships
- **StorybeatsTimeline**: Sequential beat display
- **StorypointsView**: Key moments highlighted
- **DynamicsView**: Force visualization
- **MomentsView**: Technique breakdown
- **GraphView**: Interactive relationship graph

#### Terminology Components
- **TermCard**: Individual term display
- **TermList**: Searchable/filterable list
- **RelationshipDiagram**: Visual concept connections
- **ExampleLinks**: Links to story demonstrations

#### UI Components
- **Button**: Standard action trigger
- **Card**: Content container
- **Tabs**: View switcher
- **SearchInput**: Text search with autocomplete
- **Select**: Dropdown selection
- **Badge**: Tag/label display
- **Modal**: Overlay dialogs
- **Toast**: Notifications

### API Layer (`src/lib/api/`)

#### Story Operations
- `getStories()`: List all stories
- `getStory(id)`: Get single story
- `createStory(data)`: Create new story
- `updateStory(id, data)`: Update existing story
- `deleteStory(id)`: Remove story
- `validateStory(data)`: Check against schema

#### Terminology Operations
- `getPerspectives()`: List perspectives
- `getNarrativeFunctions()`: List functions
- `getDynamics()`: List dynamics
- `getVectors()`: List vectors
- `getAppreciations()`: List appreciations

#### Transform Operations
- `storyToView(story, viewType)`: Transform story for specific view
- `viewToStory(viewData)`: Convert edited view back to story format

### State Management (`src/lib/store/`)

Using Zustand for simple, scalable state:

```typescript
// Story Store
- currentStory: Story | null
- stories: StoryListItem[]
- loading: boolean
- error: ApiError | null
- actions: {
    loadStories()
    loadStory(id)
    updateStory(id, data)
    clearCurrent()
  }

// Terminology Store
- perspectives: TerminologyPerspective[]
- functions: NarrativeFunction[]
- dynamics: DynamicDefinition[]
- vectors: Vector[]
- appreciations: Appreciation[]
- actions: {
    loadTerminology()
    searchTerms(query)
  }

// UI Store
- sidebarOpen: boolean
- theme: 'light' | 'dark'
- actions: {
    toggleSidebar()
    setTheme()
  }
```

## Creative Advancement Scenarios

### Scenario 1: Understanding Through Exploration

**Desired Outcome**: A writer wants to understand how "perspectives" work in narrative structure.

**Current Reality**: They've heard the term but don't grasp its practical application.

**Natural Progression**:
1. User navigates to `/docs/perspectives`
2. Sees four perspectives with clear definitions
3. Each perspective links to story examples
4. Clicking "The Shawshank Redemption" shows how all four perspectives play out
5. User can toggle between perspectives view to see different character experiences
6. Understanding emerges through seeing concept in context

**Resolution**: User now sees perspectives as practical tools, not abstract theory, and wants to identify them in their own work.

**Supporting Features**: Terminology browser, story viewer with perspectives tab, inline definitions, example links

### Scenario 2: Analyzing Personal Work

**Desired Outcome**: A writer wants to identify gaps in their story's structure.

**Current Reality**: They sense something is "off" but can't articulate what.

**Natural Progression**:
1. User creates/imports their story
2. Opens story viewer at `/stories/my-story`
3. Explores different views (Perspectives, Dynamics, Storybeats)
4. Notices "Influence Character" perspective is sparse
5. Reads terminology definition for Influence Character
6. Sees strong examples in reference stories
7. Returns to editor with clear understanding of what's missing

**Resolution**: User identifies structural gap and knows how to address it.

**Supporting Features**: Story viewer multiple views, terminology integration, comparison with examples, editor with guidance

### Scenario 3: Learning While Creating

**Desired Outcome**: A writer wants to craft a story with strong thematic coherence.

**Current Reality**: They have a basic plot but theme feels fuzzy.

**Natural Progression**:
1. User starts with story editor
2. Fills in basic information (title, characters, plot points)
3. Application suggests exploring "Dynamics" for their story
4. User discovers thematic tensions they hadn't articulated
5. Returns to editor with clearer thematic focus
6. Story elements start aligning around central themes

**Resolution**: Theme emerges through structural exploration, not forced development.

**Supporting Features**: Editor with contextual guidance, dynamics visualization, terminology references, example patterns

## Technical Requirements

### Performance
- Initial page load < 2 seconds
- View transitions < 300ms
- Large story files (>5MB) load progressively
- Search results appear < 100ms

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation throughout
- Screen reader support
- Semantic HTML structure
- Focus management
- ARIA labels where appropriate

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ JavaScript features
- CSS Grid and Flexbox
- No IE11 support

### Data Integrity
- All story data validates against NCP schema
- No data loss on edit operations
- Local autosave every 30 seconds
- Export preserves all structure

### Scalability
- Handle 1000+ story list efficiently
- Virtual scrolling for long lists
- Code splitting by route
- Lazy loading for heavy components

## Quality Criteria

✅ **Creating Focus**: Emphasizes what users create (understanding, stories, structural insights)

✅ **Structural Dynamics**: Natural forces driving progression (curiosity → understanding → application)

✅ **Advancing Patterns**: Inevitable movement toward mastery through interconnected exploration

✅ **Desired Outcomes**: Clear, specific results users want (understand structure, improve stories, collaborate)

✅ **Natural Progression**: Movement through structural dynamics, not forced tutorials

## Anti-Patterns Avoided

❌ **Forced Tutorial**: No mandatory onboarding sequence
❌ **Theory-First**: Don't require learning before doing
❌ **Isolated Views**: Every view connects to broader context
❌ **Hidden Structure**: Make relationships visible and explorable
❌ **Static Documentation**: Enable active exploration, not passive reading

## Future Enhancements

### Phase 2
- Real-time collaboration
- Story comparison tool
- AI-assisted structural analysis
- Custom terminology mappings
- Export to writing software

### Phase 3
- Multi-language support
- Mobile applications
- Integration with Subtxt/Dramatica
- Community story sharing
- Annotation and discussion features

## Implementation Notes

### Technology Choices
- **React 18**: Component model aligns with view-based architecture
- **TypeScript**: Type safety ensures NCP schema compliance
- **Vite**: Fast development and optimal production builds
- **Zustand**: Simple state management without boilerplate
- **React Router**: Standard routing solution
- **Tailwind CSS**: Utility-first styling for rapid development
- **Zod**: Runtime validation aligned with TypeScript types

### File Organization
- Features organized by domain (stories, terminology, etc.)
- Components colocated with their specs
- Shared utilities in `lib/`
- Types centralized in `types/`

### Development Workflow
1. Write/update RISE spec
2. Implement types
3. Build components
4. Test with real story data
5. Iterate based on structural tension dynamics

## Success Metrics

A successful implementation enables:

1. **Understanding**: Users grasp narrative concepts through interaction
2. **Creation**: Writers produce structurally coherent stories
3. **Collaboration**: Teams maintain shared narrative vision
4. **Learning**: Knowledge emerges through doing, not studying
5. **Advancement**: Users naturally progress toward mastery

The application succeeds when writers say: "Now I see what my story needs" rather than "Now I know the theory."

---

**Remember**: This specification describes desired outcomes and natural progressions. Another LLM should be able to implement the full application from this spec without accessing the source code, because the spec captures the creative intent and structural dynamics completely.
