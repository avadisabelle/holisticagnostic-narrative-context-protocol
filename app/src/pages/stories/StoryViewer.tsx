import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStoryStore } from '../../lib/store/storyStore';
import { LoadingSpinner, ErrorMessage } from '../../components/ui';
import { ArrowLeft, Book, Users, Map, Sparkles, Layers } from 'lucide-react';
import type { Narrative } from '../../types/story';

type ViewMode = 'overview' | 'perspectives' | 'players' | 'storybeats' | 'storypoints' | 'dynamics' | 'moments';

export function StoryViewer() {
  const { id } = useParams<{ id: string }>();
  const { currentStory, loading, error, loadStory } = useStoryStore();
  const [viewMode, setViewMode] = useState<ViewMode>('overview');

  useEffect(() => {
    if (id) {
      loadStory(id);
    }
  }, [id, loadStory]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <LoadingSpinner />
          <p className="text-gray-600 mt-4">Loading story...</p>
        </div>
      </div>
    );
  }

  if (error || !currentStory) {
    return (
      <div className="max-w-4xl mx-auto">
        <Link to="/stories" className="inline-flex items-center text-blue-600 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to stories
        </Link>
        <ErrorMessage
          title="Story Not Found"
          message={error?.message || 'The requested story could not be loaded.'}
          details={error?.details ? JSON.stringify(error.details, null, 2) : undefined}
        />
      </div>
    );
  }

  const narrative: Narrative = currentStory.narratives[0]; // Use first narrative for now

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link to="/stories" className="inline-flex items-center text-blue-600 hover:underline mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to stories
        </Link>
        <h1 className="text-4xl font-bold mb-2">{currentStory.title}</h1>
        {currentStory.author && (
          <p className="text-lg text-gray-600">by {currentStory.author}</p>
        )}
      </div>

      {/* View Tabs */}
      <div className="bg-white border-b border-gray-200 mb-8">
        <div className="flex overflow-x-auto">
          <button
            onClick={() => setViewMode('overview')}
            className={`px-6 py-3 font-medium transition-colors ${
              viewMode === 'overview'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center">
              <Book className="w-4 h-4 mr-2" />
              Overview
            </div>
          </button>
          <button
            onClick={() => setViewMode('perspectives')}
            className={`px-6 py-3 font-medium transition-colors ${
              viewMode === 'perspectives'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center">
              <Layers className="w-4 h-4 mr-2" />
              Perspectives
            </div>
          </button>
          <button
            onClick={() => setViewMode('players')}
            className={`px-6 py-3 font-medium transition-colors ${
              viewMode === 'players'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Players
            </div>
          </button>
          <button
            onClick={() => setViewMode('storybeats')}
            className={`px-6 py-3 font-medium transition-colors ${
              viewMode === 'storybeats'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center">
              <Map className="w-4 h-4 mr-2" />
              Storybeats
            </div>
          </button>
          <button
            onClick={() => setViewMode('dynamics')}
            className={`px-6 py-3 font-medium transition-colors ${
              viewMode === 'dynamics'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center">
              <Sparkles className="w-4 h-4 mr-2" />
              Dynamics
            </div>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        {viewMode === 'overview' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Story Overview</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Narrative Title</h3>
                <p className="text-gray-700">{narrative.title}</p>
              </div>
              {currentStory.metadata?.description && (
                <div>
                  <h3 className="font-semibold text-lg mb-2">Description</h3>
                  <p className="text-gray-700">{currentStory.metadata.description}</p>
                </div>
              )}
              {narrative.subtext?.storypoints && (
                <div>
                  <h3 className="font-semibold text-lg mb-2">Key Story Points</h3>
                  <p className="text-gray-600">{narrative.subtext.storypoints.length} major turning points</p>
                </div>
              )}
              {narrative.subtext?.storybeats && (
                <div>
                  <h3 className="font-semibold text-lg mb-2">Story Beats</h3>
                  <p className="text-gray-600">{narrative.subtext.storybeats.length} narrative beats</p>
                </div>
              )}
            </div>
          </div>
        )}

        {viewMode === 'perspectives' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Perspectives</h2>
            {narrative.subtext?.perspectives && narrative.subtext.perspectives.length > 0 ? (
              <div className="grid gap-6">
                {narrative.subtext.perspectives.map((perspective) => (
                  <div key={perspective.id} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">{perspective.label}</h3>
                    <p className="text-gray-700 mb-2">{perspective.description}</p>
                    {perspective.thematic_question && (
                      <p className="text-sm text-gray-600 italic">"{perspective.thematic_question}"</p>
                    )}
                    {perspective.authorial_position && (
                      <p className="text-sm text-blue-600 mt-2">Position: {perspective.authorial_position}</p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No perspectives data available for this story.</p>
            )}
          </div>
        )}

        {viewMode === 'players' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Players (Characters)</h2>
            {narrative.subtext?.players && narrative.subtext.players.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {narrative.subtext.players.map((player) => (
                  <div key={player.id} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">{player.name}</h3>
                    {player.structural_role && (
                      <p className="text-sm font-medium text-blue-600 mb-2">{player.structural_role}</p>
                    )}
                    {player.function && (
                      <p className="text-sm text-gray-700 mb-2">{player.function}</p>
                    )}
                    {player.thematic_representation && (
                      <p className="text-sm text-gray-600 italic">{player.thematic_representation}</p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No players data available for this story.</p>
            )}
          </div>
        )}

        {viewMode === 'storybeats' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Story Beats</h2>
            {narrative.subtext?.storybeats && narrative.subtext.storybeats.length > 0 ? (
              <div className="space-y-4">
                {narrative.subtext.storybeats.slice(0, 20).map((beat) => (
                  <div key={beat.id} className="border-l-2 border-gray-300 pl-4 py-2">
                    <div className="flex items-start justify-between mb-1">
                      <span className="text-sm font-medium text-gray-500">Beat #{beat.sequence}</span>
                    </div>
                    <p className="text-gray-800 mb-1">{beat.event}</p>
                    {beat.emotional_weight && (
                      <p className="text-sm text-gray-600">{beat.emotional_weight}</p>
                    )}
                  </div>
                ))}
                {narrative.subtext.storybeats.length > 20 && (
                  <p className="text-gray-600 text-center">
                    Showing first 20 of {narrative.subtext.storybeats.length} beats
                  </p>
                )}
              </div>
            ) : (
              <p className="text-gray-600">No storybeats data available for this story.</p>
            )}
          </div>
        )}

        {viewMode === 'dynamics' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Narrative Dynamics</h2>
            {narrative.subtext?.dynamics && narrative.subtext.dynamics.length > 0 ? (
              <div className="space-y-6">
                {narrative.subtext.dynamics.map((dynamic) => (
                  <div key={dynamic.id} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-2">{dynamic.label}</h3>
                    <p className="text-gray-700 mb-3">{dynamic.description}</p>
                    {dynamic.narrative_force && (
                      <div className="bg-blue-50 p-3 rounded mb-2">
                        <p className="text-sm font-medium text-blue-900 mb-1">Narrative Force:</p>
                        <p className="text-sm text-blue-800">{dynamic.narrative_force}</p>
                      </div>
                    )}
                    {dynamic.thematic_significance && (
                      <div className="bg-purple-50 p-3 rounded">
                        <p className="text-sm font-medium text-purple-900 mb-1">Thematic Significance:</p>
                        <p className="text-sm text-purple-800">{dynamic.thematic_significance}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No dynamics data available for this story.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
