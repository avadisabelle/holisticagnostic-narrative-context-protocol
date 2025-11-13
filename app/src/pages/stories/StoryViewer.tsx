import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStoryStore } from '../../lib/store/storyStore';
import { LoadingSpinner, ErrorMessage } from '../../components/ui';
import { ArrowLeft, Book, Users, Map, Sparkles, Layers, Milestone, Film, Search } from 'lucide-react';
import type { Narrative } from '../../types/story';

type ViewMode = 'overview' | 'perspectives' | 'players' | 'storybeats' | 'storypoints' | 'dynamics' | 'moments';

export function StoryViewer() {
  const { id } = useParams<{ id: string }>();
  const { currentStory, loading, error, loadStory } = useStoryStore();
  const [viewMode, setViewMode] = useState<ViewMode>('overview');
  const [searchQuery, setSearchQuery] = useState('');

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
            onClick={() => setViewMode('storypoints')}
            className={`px-6 py-3 font-medium transition-colors ${
              viewMode === 'storypoints'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center">
              <Milestone className="w-4 h-4 mr-2" />
              Storypoints
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
          <button
            onClick={() => setViewMode('moments')}
            className={`px-6 py-3 font-medium transition-colors ${
              viewMode === 'moments'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center">
              <Film className="w-4 h-4 mr-2" />
              Moments
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
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Story Beats</h2>
              {narrative.subtext?.storybeats && narrative.subtext.storybeats.length > 0 && (
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">
                    {narrative.subtext.storybeats.length} total beats
                  </span>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search beats..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              )}
            </div>
            {narrative.subtext?.storybeats && narrative.subtext.storybeats.length > 0 ? (
              <div className="space-y-3">
                {narrative.subtext.storybeats
                  .filter((beat) =>
                    searchQuery
                      ? beat.event.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        beat.emotional_weight?.toLowerCase().includes(searchQuery.toLowerCase())
                      : true
                  )
                  .map((beat, index, filteredBeats) => (
                    <div
                      key={beat.id}
                      className="relative border-l-4 border-blue-400 pl-6 py-3 hover:bg-blue-50 transition-colors rounded-r-lg group"
                    >
                      {/* Progress dot */}
                      <div className="absolute left-[-9px] top-4 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow" />

                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                            Beat #{beat.sequence}
                          </span>
                          <span className="text-xs text-gray-500">
                            {Math.round((beat.sequence / narrative.subtext.storybeats.length) * 100)}% through story
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-900 font-medium mb-2 leading-relaxed">{beat.event}</p>

                      {beat.emotional_weight && (
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded">
                            Emotional Weight
                          </span>
                          <p className="text-sm text-gray-700">{beat.emotional_weight}</p>
                        </div>
                      )}

                      {beat.structural_function && (
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs font-medium text-indigo-600 bg-indigo-100 px-2 py-1 rounded">
                            Function
                          </span>
                          <p className="text-sm text-gray-700">{beat.structural_function}</p>
                        </div>
                      )}
                    </div>
                  ))}
                {searchQuery &&
                  narrative.subtext.storybeats.filter((beat) =>
                    beat.event.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    beat.emotional_weight?.toLowerCase().includes(searchQuery.toLowerCase())
                  ).length === 0 && (
                    <p className="text-center text-gray-600 py-8">No beats match your search.</p>
                  )}
              </div>
            ) : (
              <p className="text-gray-600">No storybeats data available for this story.</p>
            )}
          </div>
        )}

        {viewMode === 'storypoints' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Story Points</h2>
            {narrative.subtext?.storypoints && narrative.subtext.storypoints.length > 0 ? (
              <div className="space-y-6">
                {narrative.subtext.storypoints.map((point, index) => (
                  <div
                    key={point.id}
                    className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-lg shadow-sm"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-amber-900 mb-2">{point.label}</h3>
                        <p className="text-gray-800 leading-relaxed">{point.description}</p>
                      </div>
                    </div>

                    {point.structural_significance && (
                      <div className="bg-white bg-opacity-60 p-4 rounded-lg mb-3">
                        <p className="text-sm font-semibold text-amber-900 mb-2">
                          Structural Significance:
                        </p>
                        <p className="text-gray-800">{point.structural_significance}</p>
                      </div>
                    )}

                    {point.transformation_catalyst && (
                      <div className="bg-white bg-opacity-60 p-4 rounded-lg mb-3">
                        <p className="text-sm font-semibold text-orange-900 mb-2">
                          Transformation Catalyst:
                        </p>
                        <p className="text-gray-800">{point.transformation_catalyst}</p>
                      </div>
                    )}

                    {point.magical_moment && (
                      <div className="bg-white bg-opacity-60 p-4 rounded-lg mb-3">
                        <p className="text-sm font-semibold text-purple-900 mb-2">Magical Moment:</p>
                        <p className="text-gray-800">{point.magical_moment}</p>
                      </div>
                    )}

                    {point.ripple_effect && (
                      <div className="bg-white bg-opacity-60 p-4 rounded-lg">
                        <p className="text-sm font-semibold text-blue-900 mb-2">Ripple Effect:</p>
                        <p className="text-gray-800">{point.ripple_effect}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Milestone className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No storypoints data available for this story.</p>
              </div>
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

        {viewMode === 'moments' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Storytelling Moments</h2>
            {narrative.storytelling?.moments && narrative.storytelling.moments.length > 0 ? (
              <div className="space-y-6">
                {narrative.storytelling.moments.map((moment, index) => (
                  <div
                    key={moment.id}
                    className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6 shadow-md"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0 shadow-lg">
                        <Film className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-purple-900 mb-2">{moment.title}</h3>
                        {moment.scene_summary && (
                          <p className="text-gray-800 mb-3 leading-relaxed">{moment.scene_summary}</p>
                        )}
                      </div>
                    </div>

                    {moment.beat_references && moment.beat_references.length > 0 && (
                      <div className="bg-white bg-opacity-70 p-4 rounded-lg mb-3">
                        <p className="text-sm font-semibold text-purple-900 mb-2">
                          Related Story Beats:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {moment.beat_references.map((beatRef, i) => (
                            <span
                              key={i}
                              className="text-xs font-medium bg-purple-100 text-purple-700 px-3 py-1 rounded-full"
                            >
                              {beatRef}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {moment.narrative_technique && (
                      <div className="bg-white bg-opacity-70 p-4 rounded-lg mb-3">
                        <p className="text-sm font-semibold text-indigo-900 mb-2">
                          Narrative Technique:
                        </p>
                        <p className="text-gray-800">{moment.narrative_technique}</p>
                      </div>
                    )}

                    {moment.emotional_register && (
                      <div className="bg-white bg-opacity-70 p-4 rounded-lg mb-3">
                        <p className="text-sm font-semibold text-pink-900 mb-2">Emotional Register:</p>
                        <p className="text-gray-800">{moment.emotional_register}</p>
                      </div>
                    )}

                    {moment.significance && (
                      <div className="bg-white bg-opacity-70 p-4 rounded-lg mb-3">
                        <p className="text-sm font-semibold text-purple-900 mb-2">Significance:</p>
                        <p className="text-gray-800">{moment.significance}</p>
                      </div>
                    )}

                    {moment.magical_element && (
                      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg border-2 border-yellow-400">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="w-4 h-4 text-yellow-700" />
                          <p className="text-sm font-bold text-yellow-900">Magical Element:</p>
                        </div>
                        <p className="text-gray-800 italic">{moment.magical_element}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Film className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No storytelling moments data available for this story.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
