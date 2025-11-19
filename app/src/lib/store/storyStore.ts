/**
 * Story Store
 * Manages story data and loading states
 */

import { create } from 'zustand';
import type { Story, StoryListItem, ApiError } from '../../types/story';
import * as storiesApi from '../api/stories';

interface StoryStore {
  // State
  stories: StoryListItem[];
  currentStory: Story | null;
  loading: boolean;
  error: ApiError | null;

  // Actions
  loadStories: () => Promise<void>;
  loadStory: (id: string) => Promise<void>;
  clearCurrentStory: () => void;
  searchStories: (query: string) => Promise<void>;
}

export const useStoryStore = create<StoryStore>((set, get) => ({
  // Initial state
  stories: [],
  currentStory: null,
  loading: false,
  error: null,

  // Load all stories
  loadStories: async () => {
    set({ loading: true, error: null });
    try {
      const response = await storiesApi.getStories();
      set({ stories: response.stories, loading: false });
    } catch (error) {
      set({ error: error as ApiError, loading: false });
    }
  },

  // Load single story
  loadStory: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const story = await storiesApi.getStory(id);
      set({ currentStory: story, loading: false });
    } catch (error) {
      set({ error: error as ApiError, loading: false, currentStory: null });
    }
  },

  // Clear current story
  clearCurrentStory: () => {
    set({ currentStory: null, error: null });
  },

  // Search stories
  searchStories: async (query: string) => {
    set({ loading: true, error: null });
    try {
      const results = await storiesApi.searchStories(query);
      set({ stories: results, loading: false });
    } catch (error) {
      set({ error: error as ApiError, loading: false });
    }
  },
}));
