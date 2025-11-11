import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStoryStore } from '../../lib/store/storyStore';
import { Book, User, Calendar } from 'lucide-react';

export function StoriesList() {
  const { stories, loading, error, loadStories } = useStoryStore();

  useEffect(() => {
    loadStories();
  }, [loadStories]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading stories...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-red-800 mb-2">Error Loading Stories</h2>
        <p className="text-red-600">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Story Library</h1>
        <p className="text-xl text-gray-600">
          Explore stories structured with the Narrative Context Protocol
        </p>
      </div>

      {stories.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-12 text-center">
          <Book className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Stories Found</h2>
          <p className="text-gray-600">Check that example story files exist in the examples/ directory.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <Link
              key={story.id}
              to={`/stories/${story.id}`}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Book className="w-6 h-6 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 line-clamp-2">{story.title}</h3>

              {story.author && (
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <User className="w-4 h-4 mr-2" />
                  {story.author}
                </div>
              )}

              {story.date_written && (
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  {story.date_written}
                </div>
              )}

              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-sm text-blue-600 font-medium hover:underline">
                  Explore story →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
