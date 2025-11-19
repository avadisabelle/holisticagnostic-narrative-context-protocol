/**
 * Terminology API operations
 * Handles loading of narrative terminology definitions
 */

import type {
  TerminologyPerspective,
  NarrativeFunction,
  DynamicDefinition,
  Vector,
  Appreciation,
} from '../../types/story';

/**
 * Get all perspectives
 */
export async function getPerspectives(): Promise<TerminologyPerspective[]> {
  // In production, this would load from docs/terminology/01.perspectives.md
  // For now, return inline data
  return [
    {
      appreciation: 'Objective Story Throughline',
      context: 'Objective Story',
      short_definition: 'the central conflict of the story',
      author_structural_pov: 'they',
      kind: 'perspective',
    },
    {
      appreciation: 'Main Character Throughline',
      context: 'Main Character',
      short_definition: 'the personal baggage of the Main Character',
      author_structural_pov: 'i',
      kind: 'perspective',
    },
    {
      appreciation: 'Influence Character Throughline',
      context: 'Influence Character',
      short_definition: 'the alternate approach to conflict that catalyzes or provokes growth in the Main Character',
      author_structural_pov: 'you',
      kind: 'perspective',
    },
    {
      appreciation: 'Relationship Story Throughline',
      context: 'Relationship Story',
      short_definition: 'the growth of a key relationship in the story',
      author_structural_pov: 'we',
      kind: 'perspective',
    },
  ];
}

/**
 * Get all narrative functions
 */
export async function getNarrativeFunctions(): Promise<NarrativeFunction[]> {
  try {
    // TODO: Parse from docs/terminology/03.narrative-functions.md
    return [];
  } catch (error) {
    console.error('Failed to load narrative functions:', error);
    return [];
  }
}

/**
 * Get all dynamics
 */
export async function getDynamics(): Promise<DynamicDefinition[]> {
  try {
    // TODO: Parse from docs/terminology/04.dynamics.md
    return [];
  } catch (error) {
    console.error('Failed to load dynamics:', error);
    return [];
  }
}

/**
 * Get all vectors
 */
export async function getVectors(): Promise<Vector[]> {
  try {
    // TODO: Parse from docs/terminology/05.vectors.md
    return [];
  } catch (error) {
    console.error('Failed to load vectors:', error);
    return [];
  }
}

/**
 * Get all appreciations
 */
export async function getAppreciations(): Promise<Appreciation[]> {
  try {
    // TODO: Parse from docs/terminology/02.appreciations-of-narrative.md
    return [];
  } catch (error) {
    console.error('Failed to load appreciations:', error);
    return [];
  }
}
