/**
 * Story API operations
 * Handles loading, validation, and transformation of story data
 */

import type {
  Story,
  StoryListItem,
  StoryListResponse,
  ApiError,
  Narrative,
  Perspective,
  Player,
  StoryPoint,
  StoryBeat,
  Dynamic,
  Moment,
  Overview,
  StoryMetadata,
} from '../../types/story';

/**
 * Get list of available stories
 */
export async function getStories(): Promise<StoryListResponse> {
  try {
    // In a real implementation, this would fetch from a backend
    // For now, we'll load from the examples directory
    const stories: StoryListItem[] = [
      {
        id: 'weaver_of_words__the_catalyst_of_change_251101',
        title: 'Chapter 4: The Catalyst of Change',
        author: 'G.D-Isabelle',
        date_written: '251021',
      },
      {
        id: 'the-shawshank-redemption',
        title: 'The Shawshank Redemption',
      },
      {
        id: 'anora',
        title: 'Anora',
      },
      {
        id: 'example-story',
        title: 'Example Story',
      },
    ];

    return {
      stories,
      total: stories.length,
    };
  } catch (error) {
    throw {
      message: 'Failed to load stories',
      details: error,
    } as ApiError;
  }
}

/**
 * Get a single story by ID
 */
export async function getStory(id: string): Promise<Story> {
  try {
    const response = await fetch(`/examples/${id}.json`);

    if (!response.ok) {
      throw new Error(`Story not found: ${id}`);
    }

    const data = await response.json();

    return normalizeStory(data);
  } catch (error) {
    throw {
      message: `Failed to load story: ${id}`,
      code: 'STORY_NOT_FOUND',
      details: error,
    } as ApiError;
  }
}

// ============================================================================
// NORMALIZATION
// Stories arrive in two shapes: the extended format (narratives inside `story`,
// view-ready fields such as `label` and `event`) and the canonical NCP format
// (narratives beside `story`, perspectives keyed by POV, storypoints and
// storybeats described by context / appreciation / narrative_function).
// Items already in the extended format pass through unchanged.
// ============================================================================

type RawItem = Record<string, unknown>;

const POV_CONTEXTS: Record<string, string> = {
  i: 'Main Character',
  you: 'Influence Character',
  we: 'Relationship Story',
  they: 'Objective Story',
};

function text(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() !== '' ? value : undefined;
}

function records(value: unknown): RawItem[] {
  return Array.isArray(value)
    ? value.filter((item): item is RawItem => typeof item === 'object' && item !== null)
    : [];
}

function joinParts(parts: (string | number | undefined)[], separator = ' · '): string {
  return parts.filter((part) => part !== undefined && part !== '').join(separator);
}

function humanize(value: string | undefined): string | undefined {
  return value?.replace(/_/g, ' ');
}

// "Story Goal: Future (seeking a group's future)"
function functionLabel(item: RawItem, sequence?: number): string {
  const appreciation = joinParts([humanize(text(item.appreciation)), sequence], ' ');
  const label = joinParts([appreciation, humanize(text(item.narrative_function))], ': ');
  const illustration = text(item.illustration);
  return illustration ? `${label} (${illustration})` : label;
}

// Canonical files may carry placeholder ids such as "[[ internal id ]]"
function withUniqueIds<T extends { id: string }>(items: T[]): T[] {
  const seen = new Set<string>();
  return items.map((item, index) => {
    const id = seen.has(item.id) ? `${item.id}-${index + 1}` : item.id;
    seen.add(id);
    return id === item.id ? item : { ...item, id };
  });
}

function normalizePerspectives(value: unknown): Perspective[] {
  const items =
    typeof value === 'object' && value !== null && !Array.isArray(value)
      ? Object.values(value).flatMap(records)
      : records(value);

  return items.map((item, index) => {
    if (text(item.label)) return item as unknown as Perspective;
    const pov = text(item.author_structural_pov);
    return {
      id: text(item.id) ?? `perspective_${index + 1}`,
      label: text(item.summary) ?? `Perspective ${index + 1}`,
      description: text(item.storytelling) ?? '',
      authorial_position: pov ? `${POV_CONTEXTS[pov] ?? pov} ("${pov}")` : undefined,
    };
  });
}

function normalizePlayer(item: RawItem, index: number): Player {
  if (text(item.structural_role) || text(item.function)) return item as unknown as Player;
  const elements = records(item.elements)
    .map((element) => text(element.element))
    .filter((element): element is string => element !== undefined);
  return {
    id: text(item.id) ?? `player_${index + 1}`,
    name: text(item.name) ?? `Player ${index + 1}`,
    structural_role: text(item.role),
    function: text(item.storytelling) ?? text(item.summary) ?? text(item.bio),
    thematic_representation: elements.length > 0 ? `Elements: ${elements.join(', ')}` : undefined,
  };
}

function normalizeStoryPoint(item: RawItem, index: number): StoryPoint {
  if (text(item.label)) return item as unknown as StoryPoint;
  return {
    id: text(item.id) ?? `storypoint_${index + 1}`,
    label: joinParts([text(item.context), functionLabel(item)]),
    description: text(item.summary) ?? '',
    structural_significance: text(item.storytelling),
  };
}

function normalizeStoryBeat(item: RawItem, index: number): StoryBeat {
  if (text(item.event)) return item as unknown as StoryBeat;
  const sequence = typeof item.sequence === 'number' ? item.sequence : undefined;
  return {
    id: text(item.id) ?? `storybeat_${index + 1}`,
    // Canonical sequences restart per context and appreciation, so the
    // timeline position comes from file order; the original number stays in the function label
    sequence: index + 1,
    event: text(item.summary) ?? text(item.storytelling) ?? '',
    structural_function: joinParts([text(item.context), functionLabel(item, sequence)]),
  };
}

function normalizeDynamic(item: RawItem, index: number): Dynamic {
  if (text(item.label)) return item as unknown as Dynamic;
  return {
    id: text(item.id) ?? `dynamic_${index + 1}`,
    label: joinParts([humanize(text(item.dynamic)), humanize(text(item.vector))], ': '),
    description: text(item.summary) ?? '',
    narrative_force: text(item.storytelling),
  };
}

function normalizeMoment(item: RawItem, index: number): Moment {
  if (text(item.title)) return item as unknown as Moment;
  const beatReferences = records(item.storybeats)
    .map((beat) => text(beat.storybeat_id))
    .filter((beatId): beatId is string => beatId !== undefined);
  return {
    id: text(item.id) ?? `moment_${index + 1}`,
    title: text(item.summary) ?? `Moment ${index + 1}`,
    scene_summary: text(item.synopsis),
    beat_references: beatReferences.length > 0 ? beatReferences : undefined,
  };
}

function normalizeNarrative(item: RawItem, index: number): Narrative {
  const subtext = (item.subtext ?? {}) as RawItem;
  const storytelling = (item.storytelling ?? {}) as RawItem;
  return {
    id: text(item.id) ?? `narrative_${index + 1}`,
    title: text(item.title) ?? `Narrative ${index + 1}`,
    subtext: {
      perspectives: withUniqueIds(normalizePerspectives(subtext.perspectives)),
      players: withUniqueIds(records(subtext.players).map(normalizePlayer)),
      storypoints: withUniqueIds(records(subtext.storypoints).map(normalizeStoryPoint)),
      storybeats: withUniqueIds(records(subtext.storybeats).map(normalizeStoryBeat)),
      dynamics: withUniqueIds(records(subtext.dynamics).map(normalizeDynamic)),
    },
    storytelling: {
      overviews: records(storytelling.overviews) as unknown as Overview[],
      moments: withUniqueIds(records(storytelling.moments).map(normalizeMoment)),
    },
  };
}

function normalizeStory(data: RawItem): Story {
  const root = (typeof data.story === 'object' && data.story !== null ? data.story : data) as RawItem;
  const narratives = records(root.narratives).length > 0 ? records(root.narratives) : records(data.narratives);
  const metadata = (root.metadata ?? {}) as StoryMetadata;

  return {
    ...(root as unknown as Story),
    narratives: narratives.map(normalizeNarrative),
    metadata: {
      ...metadata,
      description: metadata.description ?? text(root.logline),
      genre: metadata.genre ?? text(root.genre),
    },
  };
}

/**
 * Validate story against NCP schema
 */
export async function validateStory(story: Partial<Story>): Promise<{ valid: boolean; errors?: string[] }> {
  const errors: string[] = [];

  // Basic validation
  if (!story.id) {
    errors.push('Story ID is required');
  }

  if (!story.title) {
    errors.push('Story title is required');
  }

  if (!story.narratives || story.narratives.length === 0) {
    errors.push('Story must have at least one narrative');
  }

  // Validate narratives
  story.narratives?.forEach((narrative, index) => {
    if (!narrative.id) {
      errors.push(`Narrative ${index + 1} missing ID`);
    }
    if (!narrative.title) {
      errors.push(`Narrative ${index + 1} missing title`);
    }
  });

  return {
    valid: errors.length === 0,
    errors: errors.length > 0 ? errors : undefined,
  };
}

/**
 * Search stories by term
 */
export async function searchStories(query: string): Promise<StoryListItem[]> {
  const { stories } = await getStories();

  const lowerQuery = query.toLowerCase();

  return stories.filter(story =>
    story.title.toLowerCase().includes(lowerQuery) ||
    story.author?.toLowerCase().includes(lowerQuery) ||
    story.id.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Filter stories by criteria
 */
export async function filterStories(filters: {
  authors?: string[];
  genres?: string[];
  tags?: string[];
}): Promise<StoryListItem[]> {
  const { stories } = await getStories();

  return stories.filter(story => {
    if (filters.authors && filters.authors.length > 0) {
      if (!story.author || !filters.authors.includes(story.author)) {
        return false;
      }
    }

    // Add more filter logic as needed
    return true;
  });
}
