/**
 * Story API operations
 * Handles loading, validation, and transformation of story data
 */

import type { Story, StoryListItem, StoryListResponse, ApiError } from '../../types/story';

const EXAMPLE_STORIES_PATH = '/examples';

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

    // Wrap in story structure if needed
    if (data.story) {
      return data.story;
    }

    return data as Story;
  } catch (error) {
    throw {
      message: `Failed to load story: ${id}`,
      code: 'STORY_NOT_FOUND',
      details: error,
    } as ApiError;
  }
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
