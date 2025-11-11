/**
 * Core TypeScript types for Narrative Context Protocol (NCP)
 * Based on the NCP JSON schema and example stories
 */

// ============================================================================
// PERSPECTIVES
// ============================================================================

export type PerspectiveKind = 'perspective';
export type AuthorStructuralPOV = 'i' | 'you' | 'we' | 'they';

export interface Perspective {
  id: string;
  label: string;
  description: string;
  thematic_question?: string;
  authorial_position?: string;
}

// ============================================================================
// PLAYERS (Characters)
// ============================================================================

export interface Player {
  id: string;
  name: string;
  structural_role?: string;
  function?: string;
  arc?: string;
  wound?: string;
  desire?: string;
  gift?: string;
  significance?: string;
  thematic_representation?: string;
  magic?: string;
}

// ============================================================================
// STORYPOINTS & STORYBEATS
// ============================================================================

export interface StoryPoint {
  id: string;
  label: string;
  description: string;
  structural_significance?: string;
  transformation_catalyst?: string;
  magical_moment?: string;
  ripple_effect?: string;
}

export interface StoryBeat {
  id: string;
  sequence: number;
  event: string;
  emotional_weight?: string;
  structural_function?: string;
}

// ============================================================================
// DYNAMICS
// ============================================================================

export interface Dynamic {
  id: string;
  label: string;
  description: string;
  narrative_force?: string;
  manifestation?: string;
  thematic_significance?: string;
}

// ============================================================================
// STORYTELLING ELEMENTS
// ============================================================================

export interface Overview {
  id: string;
  title: string;
  description: string;
}

export interface Moment {
  id: string;
  title: string;
  beat_references?: string[];
  scene_summary?: string;
  narrative_technique?: string;
  emotional_register?: string;
  significance?: string;
  magical_element?: string;
}

export interface Storytelling {
  overviews?: Overview[];
  moments?: Moment[];
}

// ============================================================================
// SUBTEXT (Deep Narrative Structure)
// ============================================================================

export interface Subtext {
  perspectives?: Perspective[];
  players?: Player[];
  storypoints?: StoryPoint[];
  storybeats?: StoryBeat[];
  dynamics?: Dynamic[];
}

// ============================================================================
// NARRATIVE
// ============================================================================

export interface Narrative {
  id: string;
  title: string;
  subtext?: Subtext;
  storytelling?: Storytelling;
}

// ============================================================================
// STORY (Root)
// ============================================================================

export interface Story {
  id: string;
  title: string;
  author?: string;
  date_written?: string;
  narratives: Narrative[];
  metadata?: StoryMetadata;
}

export interface StoryMetadata {
  description?: string;
  genre?: string;
  tags?: string[];
  created_at?: string;
  updated_at?: string;
}

// ============================================================================
// TERMINOLOGY (From docs/terminology/)
// ============================================================================

export interface NarrativeFunction {
  narrative_function: string;
  kind: 'element' | 'variation' | 'type' | 'class';
  short_definition: string;
  synonyms?: string;
  parent_methods?: string[];
  children_methods?: string[];
}

export interface Appreciation {
  appreciation: string;
  context: string;
  short_definition: string;
  kind: 'solution' | 'concern' | 'issue' | 'problem' | 'response' | 'symptom' | 'domain';
}

export interface Vector {
  vector: string;
  kind: string;
  short_definition: string;
  dynamic: string;
}

export interface DynamicDefinition {
  dynamic: string;
  context: string;
  short_definition: string;
  kind: string;
  identifier: string;
  drivers?: DynamicDefinition[];
}

export interface TerminologyPerspective {
  appreciation: string;
  context: string;
  short_definition: string;
  author_structural_pov: AuthorStructuralPOV;
  kind: PerspectiveKind;
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

export type StoryElement = Perspective | Player | StoryPoint | StoryBeat | Dynamic | Moment;

export interface StoryFilter {
  searchTerm?: string;
  authors?: string[];
  genres?: string[];
  tags?: string[];
}

export interface StoryView {
  id: string;
  title: string;
  type: 'overview' | 'perspectives' | 'players' | 'storybeats' | 'storypoints' | 'dynamics' | 'moments' | 'graph';
  description: string;
}

// ============================================================================
// API TYPES
// ============================================================================

export interface StoryListResponse {
  stories: StoryListItem[];
  total: number;
}

export interface StoryListItem {
  id: string;
  title: string;
  author?: string;
  date_written?: string;
  metadata?: StoryMetadata;
}

export interface ApiError {
  message: string;
  code?: string;
  details?: unknown;
}
