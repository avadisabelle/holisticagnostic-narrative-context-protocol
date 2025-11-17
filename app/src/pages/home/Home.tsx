import { Link } from 'react-router-dom';
import { Book, BookOpen, Sparkles, Play, Layers, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

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

      {/* Featured Story */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Story</h2>
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-xl p-8 border-2 border-blue-200 shadow-lg">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
              <Book className="w-12 h-12 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3">The Catalyst of Change</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A writer's journey from technical competence to soulful expression. Explore how Mia discovers
                that true art requires vulnerability, not perfection. This story demonstrates the deep
                structural relationships between character growth, thematic tension, and narrative dynamics.
              </p>
              <div className="flex flex-wrap gap-3 mb-5">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  5 Perspectives
                </span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                  5 Players
                </span>
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                  25+ Story Beats
                </span>
              </div>
              <Link
                to="/stories/story_catalyst_of_change"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Explore This Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start Guide */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-blue-200 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Quick Start Guide</h2>
        <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">
          Follow these three steps to start understanding narrative structure through the NCP lens
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-white rounded-lg p-6 shadow-md border-2 border-blue-300 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                1
              </div>
              <Play className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg mb-3">Explore a Story</h3>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              Start with our featured story to see narrative structure in action. View it through multiple lenses: perspectives, dynamics, story beats, and more.
            </p>
            <Link
              to="/stories/story_catalyst_of_change"
              className="inline-flex items-center text-blue-600 hover:underline font-medium text-sm"
            >
              View Featured Story <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg p-6 shadow-md border-2 border-purple-300 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                2
              </div>
              <Layers className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-bold text-lg mb-3">Learn the Concepts</h3>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              Browse our interactive terminology to understand perspectives, dynamics, vectors, and appreciations. Each concept links to real story examples.
            </p>
            <Link
              to="/docs"
              className="inline-flex items-center text-purple-600 hover:underline font-medium text-sm"
            >
              Browse Terminology <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg p-6 shadow-md border-2 border-indigo-300 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                3
              </div>
              <TrendingUp className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="font-bold text-lg mb-3">See Connections</h3>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              Navigate between story examples and terminology to understand how abstract concepts create concrete narrative impact. Build your structural intuition.
            </p>
            <Link
              to="/stories"
              className="inline-flex items-center text-indigo-600 hover:underline font-medium text-sm"
            >
              Browse Story Library <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Learning Path Tips */}
        <div className="mt-8 bg-white bg-opacity-60 rounded-lg p-6 border border-blue-200">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            Recommended Learning Path
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">
                <strong>First:</strong> Explore the featured story's Perspectives view to understand the four throughlines
              </p>
            </div>
            <div className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">
                <strong>Then:</strong> Read the Perspectives terminology to grasp the theoretical foundation
              </p>
            </div>
            <div className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">
                <strong>Next:</strong> Explore Dynamics and Vectors to see how stories evolve and resolve
              </p>
            </div>
            <div className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">
                <strong>Finally:</strong> Browse all story views to build comprehensive structural understanding
              </p>
            </div>
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
