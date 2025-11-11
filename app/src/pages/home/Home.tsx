import { Link } from 'react-router-dom';
import { Book, BookOpen, Sparkles } from 'lucide-react';

export function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          NCP Story Studio
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Explore and understand narrative structure through the Narrative Context Protocol.
          View stories through multiple structural lenses and deepen your understanding of
          what makes narratives work.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/stories"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Explore Stories
          </Link>
          <Link
            to="/docs"
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Browse Terminology
          </Link>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Book className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Multiple Perspectives</h3>
          <p className="text-gray-600">
            View stories through different structural lenses: perspectives, dynamics, storybeats,
            and more.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
          <p className="text-gray-600">
            Understand narrative concepts through real examples. See theory in practice, not just
            abstract definitions.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Deep Structure</h3>
          <p className="text-gray-600">
            Explore the relationships between characters, themes, and narrative dynamics that
            create powerful stories.
          </p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-100">
        <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg mb-1">1. Explore a Story</h3>
            <p className="text-gray-700">
              Start with a familiar story like{' '}
              <Link
                to="/stories/the-shawshank-redemption"
                className="text-blue-600 hover:underline font-medium"
              >
                The Shawshank Redemption
              </Link>{' '}
              to see narrative structure in action.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">2. Learn the Concepts</h3>
            <p className="text-gray-700">
              Browse{' '}
              <Link to="/docs/perspectives" className="text-blue-600 hover:underline font-medium">
                Perspectives
              </Link>
              ,{' '}
              <Link to="/docs/dynamics" className="text-blue-600 hover:underline font-medium">
                Dynamics
              </Link>
              , and other narrative elements.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">3. Compare and Contrast</h3>
            <p className="text-gray-700">
              View multiple stories to see how different narratives use similar structural
              patterns.
            </p>
          </div>
        </div>
      </div>

      {/* About NCP */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">About the Narrative Context Protocol</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-4">
          The Narrative Context Protocol (NCP) is an open, standardized JSON schema designed to
          transport and preserve authorial intent across diverse multi-agent storytelling systems.
          Based on Dramatica® theory and curated by The Dramatica Co.
        </p>
        <a
          href="https://github.com/Narrative-Context-Protocol"
          className="text-blue-600 hover:underline font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about NCP →
        </a>
      </div>
    </div>
  );
}
