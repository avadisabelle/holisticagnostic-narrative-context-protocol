import { Link, Routes, Route } from 'react-router-dom';
import { Book, Users, Zap, TrendingUp, Layers } from 'lucide-react';

function TerminologyHome() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Narrative Terminology</h1>
        <p className="text-xl text-gray-600">
          Explore the fundamental concepts that make up the Narrative Context Protocol
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Link
          to="/docs/perspectives"
          className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Layers className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Perspectives</h3>
          <p className="text-gray-600 mb-4">
            The four throughlines that shape narrative structure: Objective Story, Main Character,
            Influence Character, and Relationship Story.
          </p>
          <span className="text-blue-600 font-medium">Explore perspectives →</span>
        </Link>

        <Link
          to="/docs/functions"
          className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Book className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Narrative Functions</h3>
          <p className="text-gray-600 mb-4">
            The engines of conflict - processes that shape the story's meaning and drive narrative
            progression.
          </p>
          <span className="text-purple-600 font-medium">Explore functions →</span>
        </Link>

        <Link
          to="/docs/dynamics"
          className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-indigo-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Dynamics</h3>
          <p className="text-gray-600 mb-4">
            How characters and stories change - the forces that drive growth, conflict, and
            resolution.
          </p>
          <span className="text-indigo-600 font-medium">Explore dynamics →</span>
        </Link>

        <Link
          to="/docs/vectors"
          className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Vectors</h3>
          <p className="text-gray-600 mb-4">
            Directional choices that determine narrative outcomes - Change vs Steadfast, Stop vs
            Start, and more.
          </p>
          <span className="text-green-600 font-medium">Explore vectors →</span>
        </Link>
      </div>

      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-100">
        <h2 className="text-2xl font-bold mb-4">Understanding Terminology</h2>
        <p className="text-gray-700 mb-4">
          The Narrative Context Protocol is built on decades of narrative theory research,
          particularly the Dramatica® model. Each concept serves a specific purpose in creating
          structurally sound, thematically coherent stories.
        </p>
        <p className="text-gray-700">
          These aren't just abstract theories - they're practical tools you can see in action by
          exploring stories in the{' '}
          <Link to="/stories" className="text-blue-600 hover:underline font-medium">
            Story Library
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

function PerspectivesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/docs" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to terminology
      </Link>
      <h1 className="text-4xl font-bold mb-4">Perspectives</h1>
      <p className="text-xl text-gray-600 mb-8">
        The four throughlines that provide different viewpoints on the story's central conflict
      </p>

      <div className="space-y-6">
        <div className="bg-white border-l-4 border-blue-500 p-6 rounded-r-lg">
          <h3 className="text-2xl font-semibold mb-2">Objective Story Throughline</h3>
          <p className="text-gray-700 mb-2">
            The central conflict of the story - what "they" experience collectively.
          </p>
          <p className="text-sm text-blue-600 font-medium">POV: They</p>
        </div>

        <div className="bg-white border-l-4 border-purple-500 p-6 rounded-r-lg">
          <h3 className="text-2xl font-semibold mb-2">Main Character Throughline</h3>
          <p className="text-gray-700 mb-2">
            The personal baggage of the Main Character - what "I" experience.
          </p>
          <p className="text-sm text-purple-600 font-medium">POV: I</p>
        </div>

        <div className="bg-white border-l-4 border-indigo-500 p-6 rounded-r-lg">
          <h3 className="text-2xl font-semibold mb-2">Influence Character Throughline</h3>
          <p className="text-gray-700 mb-2">
            The alternate approach that catalyzes growth - what "you" challenge me with.
          </p>
          <p className="text-sm text-indigo-600 font-medium">POV: You</p>
        </div>

        <div className="bg-white border-l-4 border-green-500 p-6 rounded-r-lg">
          <h3 className="text-2xl font-semibold mb-2">Relationship Story Throughline</h3>
          <p className="text-gray-700 mb-2">
            The growth of a key relationship - what "we" experience together.
          </p>
          <p className="text-sm text-green-600 font-medium">POV: We</p>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h3 className="font-semibold text-lg mb-2">See It In Action</h3>
        <p className="text-gray-700 mb-4">
          Explore how perspectives work in real stories:
        </p>
        <Link
          to="/stories/the-shawshank-redemption"
          className="text-blue-600 hover:underline font-medium"
        >
          The Shawshank Redemption →
        </Link>
      </div>
    </div>
  );
}

export function TerminologyBrowser() {
  return (
    <Routes>
      <Route index element={<TerminologyHome />} />
      <Route path="perspectives" element={<PerspectivesPage />} />
      <Route path="*" element={<TerminologyHome />} />
    </Routes>
  );
}
