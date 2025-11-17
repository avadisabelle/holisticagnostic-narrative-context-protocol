import { Link, Routes, Route } from 'react-router-dom';
import { Book, Zap, TrendingUp, Layers, ArrowRight, Target, Lightbulb } from 'lucide-react';

function TerminologyHome() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Narrative Terminology</h1>
        <p className="text-xl text-gray-600">
          Explore the fundamental concepts that make up the Narrative Context Protocol
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          to="/docs/perspectives"
          className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Layers className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Perspectives</h3>
          <p className="text-gray-600 mb-4 text-sm">
            The four throughlines that shape narrative structure: Objective Story, Main Character,
            Influence Character, and Relationship Story.
          </p>
          <span className="text-blue-600 font-medium text-sm">Explore perspectives →</span>
        </Link>

        <Link
          to="/docs/appreciations"
          className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-rose-300 transition-all"
        >
          <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
            <Target className="w-6 h-6 text-rose-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Appreciations</h3>
          <p className="text-gray-600 mb-4 text-sm">
            Story points that illuminate narrative structure: Solutions, Problems, Symptoms, and
            other key appreciations.
          </p>
          <span className="text-rose-600 font-medium text-sm">Explore appreciations →</span>
        </Link>

        <Link
          to="/docs/functions"
          className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-purple-300 transition-all"
        >
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Book className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Narrative Functions</h3>
          <p className="text-gray-600 mb-4 text-sm">
            The engines of conflict - processes that shape the story's meaning and drive narrative
            progression.
          </p>
          <span className="text-purple-600 font-medium text-sm">Explore functions →</span>
        </Link>

        <Link
          to="/docs/dynamics"
          className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-indigo-300 transition-all"
        >
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-indigo-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Dynamics</h3>
          <p className="text-gray-600 mb-4 text-sm">
            How characters and stories change - the forces that drive growth, conflict, and
            resolution.
          </p>
          <span className="text-indigo-600 font-medium text-sm">Explore dynamics →</span>
        </Link>

        <Link
          to="/docs/vectors"
          className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-green-300 transition-all"
        >
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Vectors</h3>
          <p className="text-gray-600 mb-4 text-sm">
            Directional choices that determine narrative outcomes - Change vs Steadfast, Stop vs
            Start, and more.
          </p>
          <span className="text-green-600 font-medium text-sm">Explore vectors →</span>
        </Link>

        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-lg p-6">
          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
            <Lightbulb className="w-6 h-6 text-amber-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Learning Path</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Start with <strong>Perspectives</strong> to understand the four viewpoints, then explore{' '}
            <strong>Dynamics</strong> and <strong>Vectors</strong> to see how stories evolve.{' '}
            <strong>Appreciations</strong> help you identify specific story elements.
          </p>
        </div>
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
        <div className="bg-white border-l-4 border-blue-500 p-6 rounded-r-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-2">Objective Story Throughline</h3>
          <p className="text-gray-700 mb-2">
            The central conflict of the story - what "they" experience collectively.
          </p>
          <p className="text-sm text-blue-600 font-medium">POV: They</p>
        </div>

        <div className="bg-white border-l-4 border-purple-500 p-6 rounded-r-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-2">Main Character Throughline</h3>
          <p className="text-gray-700 mb-2">
            The personal baggage of the Main Character - what "I" experience.
          </p>
          <p className="text-sm text-purple-600 font-medium">POV: I</p>
        </div>

        <div className="bg-white border-l-4 border-indigo-500 p-6 rounded-r-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-2">Influence Character Throughline</h3>
          <p className="text-gray-700 mb-2">
            The alternate approach that catalyzes growth - what "you" challenge me with.
          </p>
          <p className="text-sm text-indigo-600 font-medium">POV: You</p>
        </div>

        <div className="bg-white border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-2">Relationship Story Throughline</h3>
          <p className="text-gray-700 mb-2">
            The growth of a key relationship - what "we" experience together.
          </p>
          <p className="text-sm text-green-600 font-medium">POV: We</p>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h3 className="font-semibold text-lg mb-2">See It In Action</h3>
        <p className="text-gray-700 mb-4">
          Explore how perspectives work in real stories:
        </p>
        <Link
          to="/stories/the-shawshank-redemption"
          className="inline-flex items-center text-blue-600 hover:underline font-medium"
        >
          The Shawshank Redemption <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}

function AppreciationsPage() {
  const appreciationsByKind = {
    solution: [
      {
        name: 'Objective Story Solution',
        definition: 'What alters the course for those involved in the Objective Story Throughline; an indication of self-actualization',
        context: 'Objective Story'
      },
    ],
    problem: [
      {
        name: 'Objective Story Problem',
        definition: 'The essence of inequity in the Objective Story Throughline',
        context: 'Objective Story'
      },
      {
        name: 'Main Character Problem',
        definition: 'The source of conflict within the Main Character Throughline',
        context: 'Main Character'
      },
    ],
    concern: [
      {
        name: 'Objective Story Concern',
        definition: 'The area of concern for everyone in the Objective Story Throughline',
        context: 'Objective Story'
      },
      {
        name: 'Objective Story Benchmark',
        definition: 'The standard by which progress is measured in the Objective Story',
        context: 'Objective Story'
      },
    ],
    issue: [
      {
        name: 'Objective Story Issue',
        definition: 'The issue of greatest thematic focus within the Objective Story Throughline',
        context: 'Objective Story'
      },
      {
        name: 'Objective Story Catalyst',
        definition: 'The item whose presence always pushes the Objective Story forward',
        context: 'Objective Story'
      },
      {
        name: 'Objective Story Inhibitor',
        definition: "The item that impedes the Objective Story's progress",
        context: 'Objective Story'
      },
    ],
    response: [
      {
        name: 'Objective Story Response',
        definition: 'The direction of efforts in the Objective Story',
        context: 'Objective Story'
      },
      {
        name: 'Objective Story Flow',
        definition: 'The adaptive response to narrative challenges, where characters navigate obstacles by embracing flexibility',
        context: 'Objective Story'
      },
    ],
    symptom: [
      {
        name: 'Objective Story Symptom',
        definition: 'Where attention is focused in the Objective Story',
        context: 'Objective Story'
      },
    ],
    domain: [
      {
        name: 'Objective Story Domain',
        definition: 'The general area of conflict as it applies to everyone in the Objective Story Throughline',
        context: 'Objective Story'
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto">
      <Link to="/docs" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to terminology
      </Link>
      <h1 className="text-4xl font-bold mb-4">Appreciations of Narrative</h1>
      <p className="text-xl text-gray-600 mb-8">
        Story points that illuminate the structure and meaning of your narrative
      </p>

      <div className="bg-rose-50 border border-rose-100 rounded-lg p-6 mb-8">
        <p className="text-gray-700 leading-relaxed">
          Appreciations are specific aspects of your story that help you understand its deeper structure.
          They identify key elements like problems, solutions, concerns, and responses within each throughline.
          By understanding these appreciations, you can see how your story creates meaning and drives toward resolution.
        </p>
      </div>

      <div className="space-y-8">
        {/* Solutions */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-green-900">Solutions</h2>
          </div>
          <div className="grid gap-4">
            {appreciationsByKind.solution.map((item, i) => (
              <div key={i} className="bg-white border-l-4 border-green-400 p-5 rounded-r-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                <p className="text-gray-700 mb-2">{item.definition}</p>
                <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-700 rounded">
                  {item.context}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Problems */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <span className="text-red-600 font-bold text-xl">⚠</span>
            </div>
            <h2 className="text-2xl font-bold text-red-900">Problems</h2>
          </div>
          <div className="grid gap-4">
            {appreciationsByKind.problem.map((item, i) => (
              <div key={i} className="bg-white border-l-4 border-red-400 p-5 rounded-r-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                <p className="text-gray-700 mb-2">{item.definition}</p>
                <span className="text-xs font-medium px-2 py-1 bg-red-100 text-red-700 rounded">
                  {item.context}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Concerns */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xl">💭</span>
            </div>
            <h2 className="text-2xl font-bold text-blue-900">Concerns</h2>
          </div>
          <div className="grid gap-4">
            {appreciationsByKind.concern.map((item, i) => (
              <div key={i} className="bg-white border-l-4 border-blue-400 p-5 rounded-r-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                <p className="text-gray-700 mb-2">{item.definition}</p>
                <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded">
                  {item.context}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Issues */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <span className="text-amber-600 font-bold text-xl">⚡</span>
            </div>
            <h2 className="text-2xl font-bold text-amber-900">Issues</h2>
          </div>
          <div className="grid gap-4">
            {appreciationsByKind.issue.map((item, i) => (
              <div key={i} className="bg-white border-l-4 border-amber-400 p-5 rounded-r-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                <p className="text-gray-700 mb-2">{item.definition}</p>
                <span className="text-xs font-medium px-2 py-1 bg-amber-100 text-amber-700 rounded">
                  {item.context}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Responses */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-purple-900">Responses</h2>
          </div>
          <div className="grid gap-4">
            {appreciationsByKind.response.map((item, i) => (
              <div key={i} className="bg-white border-l-4 border-purple-400 p-5 rounded-r-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                <p className="text-gray-700 mb-2">{item.definition}</p>
                <span className="text-xs font-medium px-2 py-1 bg-purple-100 text-purple-700 rounded">
                  {item.context}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Symptoms & Domains */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-orange-600 font-bold text-xl">🔍</span>
              </div>
              <h2 className="text-2xl font-bold text-orange-900">Symptoms</h2>
            </div>
            <div className="grid gap-4">
              {appreciationsByKind.symptom.map((item, i) => (
                <div key={i} className="bg-white border-l-4 border-orange-400 p-5 rounded-r-lg shadow-sm">
                  <h3 className="font-semibold text-base mb-2">{item.name}</h3>
                  <p className="text-gray-700 text-sm mb-2">{item.definition}</p>
                  <span className="text-xs font-medium px-2 py-1 bg-orange-100 text-orange-700 rounded">
                    {item.context}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <span className="text-indigo-600 font-bold text-xl">🌐</span>
              </div>
              <h2 className="text-2xl font-bold text-indigo-900">Domains</h2>
            </div>
            <div className="grid gap-4">
              {appreciationsByKind.domain.map((item, i) => (
                <div key={i} className="bg-white border-l-4 border-indigo-400 p-5 rounded-r-lg shadow-sm">
                  <h3 className="font-semibold text-base mb-2">{item.name}</h3>
                  <p className="text-gray-700 text-sm mb-2">{item.definition}</p>
                  <span className="text-xs font-medium px-2 py-1 bg-indigo-100 text-indigo-700 rounded">
                    {item.context}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-rose-50 p-6 rounded-lg border border-rose-100">
        <h3 className="font-semibold text-lg mb-2">Explore Appreciations in Stories</h3>
        <p className="text-gray-700 mb-4">
          See how these appreciations manifest in real narratives:
        </p>
        <Link
          to="/stories"
          className="inline-flex items-center text-rose-600 hover:underline font-medium"
        >
          Browse Story Library <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}

function NarrativeFunctionsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/docs" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to terminology
      </Link>
      <h1 className="text-4xl font-bold mb-4">Narrative Functions</h1>
      <p className="text-xl text-gray-600 mb-8">
        The engines of conflict - processes that shape the story's meaning and drive narrative progression
      </p>

      <div className="bg-purple-50 border border-purple-100 rounded-lg p-6 mb-8">
        <p className="text-gray-700">
          Narrative Functions are the fundamental building blocks of narrative structure. Each function
          represents a specific process or quality that shapes meaning in your story. They can be elements,
          variations, types, or classes that work together to create thematic coherence.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Sample Narrative Functions</h2>

        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-gray-900">Ability</h3>
            <span className="text-xs font-medium px-2 py-1 bg-purple-100 text-purple-700 rounded">element</span>
          </div>
          <p className="text-gray-700 mb-2">Being suited to handle a task; the innate capacity to do or be</p>
          <p className="text-sm text-gray-500 italic">
            Synonyms: innate capacity, capability, talent for, inherent proficiency
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-gray-900">Acceptance</h3>
            <span className="text-xs font-medium px-2 py-1 bg-purple-100 text-purple-700 rounded">element</span>
          </div>
          <p className="text-gray-700 mb-2">A decision to allow</p>
          <p className="text-sm text-gray-500 italic">
            Synonyms: acquiescence, tolerance, allowance for, consent, submission
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-gray-900">Knowledge</h3>
            <span className="text-xs font-medium px-2 py-1 bg-purple-100 text-purple-700 rounded">element</span>
          </div>
          <p className="text-gray-700 mb-2">Information that has been learned or discovered</p>
          <p className="text-sm text-gray-500 italic">
            Functions drive the processes of conflict and meaning-making in narrative
          </p>
        </div>
      </div>

      <div className="mt-8 bg-purple-50 p-6 rounded-lg border border-purple-100">
        <h3 className="font-semibold text-lg mb-2">Explore in Stories</h3>
        <p className="text-gray-700 mb-4">
          See how narrative functions shape story meaning:
        </p>
        <Link
          to="/stories"
          className="inline-flex items-center text-purple-600 hover:underline font-medium"
        >
          Browse Story Library <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}

function DynamicsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/docs" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to terminology
      </Link>
      <h1 className="text-4xl font-bold mb-4">Dynamics</h1>
      <p className="text-xl text-gray-600 mb-8">
        The forces that drive character growth, plot progression, and narrative resolution
      </p>

      <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-6 mb-8">
        <p className="text-gray-700">
          Dynamics are the essential choices that determine how your story unfolds. They establish
          whether characters change or remain steadfast, how problems are solved, and what drives
          the story forward.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-900">Character Dynamics</h2>
          <div className="space-y-3">
            <div className="bg-white border-l-4 border-indigo-400 p-5 rounded-r-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Main Character Resolve</h3>
              <p className="text-gray-700">How the Main Character ultimately deals with their central conflict</p>
            </div>

            <div className="bg-white border-l-4 border-indigo-400 p-5 rounded-r-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Main Character Growth</h3>
              <p className="text-gray-700">The direction the Main Character must move to resolve their personal issues</p>
            </div>

            <div className="bg-white border-l-4 border-indigo-400 p-5 rounded-r-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Main Character Approach</h3>
              <p className="text-gray-700">The Main Character's preferred method of resolving conflict</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-900">Story Dynamics</h2>
          <div className="space-y-3">
            <div className="bg-white border-l-4 border-purple-400 p-5 rounded-r-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Problem-Solving Style</h3>
              <p className="text-gray-700">Determines whether problems are addressed linearly or holistically</p>
            </div>

            <div className="bg-white border-l-4 border-purple-400 p-5 rounded-r-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Story Limit</h3>
              <p className="text-gray-700">Sets whether the story runs out of time or options first</p>
            </div>

            <div className="bg-white border-l-4 border-purple-400 p-5 rounded-r-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Story Driver</h3>
              <p className="text-gray-700">Establishes whether actions or decisions drive the story forward</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-900">Conclusion Dynamics</h2>
          <div className="space-y-3">
            <div className="bg-white border-l-4 border-blue-400 p-5 rounded-r-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Story Outcome</h3>
              <p className="text-gray-700">An objective assessment of how the effort to achieve the Story Goal ends</p>
            </div>

            <div className="bg-white border-l-4 border-blue-400 p-5 rounded-r-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Story Judgment</h3>
              <p className="text-gray-700">The author's evaluation of the Main Character's personal resolution</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-indigo-50 p-6 rounded-lg border border-indigo-100">
        <h3 className="font-semibold text-lg mb-2">See Dynamics in Action</h3>
        <p className="text-gray-700 mb-4">
          Explore how dynamics shape character arcs and story progression:
        </p>
        <Link
          to="/stories"
          className="inline-flex items-center text-indigo-600 hover:underline font-medium"
        >
          Browse Story Library <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}

function VectorsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/docs" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to terminology
      </Link>
      <h1 className="text-4xl font-bold mb-4">Vectors</h1>
      <p className="text-xl text-gray-600 mb-8">
        Directional choices within dynamics that determine specific narrative outcomes
      </p>

      <div className="bg-green-50 border border-green-100 rounded-lg p-6 mb-8">
        <p className="text-gray-700">
          Vectors are the specific directional choices within each dynamic. They represent the
          binary or polar decisions that shape how your story resolves - Change vs Steadfast,
          Start vs Stop, Success vs Failure.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-900">Resolve Vectors</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-green-300 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-green-700">Change</h3>
              <p className="text-gray-700 text-sm">The Main Character abandons their central point-of-view</p>
            </div>

            <div className="bg-white border-2 border-green-300 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-green-700">Steadfast</h3>
              <p className="text-gray-700 text-sm">The Main Character holds to their central point-of-view</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-900">Growth Vectors</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-teal-300 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-teal-700">Stop</h3>
              <p className="text-gray-700 text-sm">Growth comes from letting go of an unhealthy behavior or attitude</p>
            </div>

            <div className="bg-white border-2 border-teal-300 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-teal-700">Start</h3>
              <p className="text-gray-700 text-sm">Growth comes from adopting a new behavior or attitude</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-900">Approach Vectors</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-emerald-300 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-emerald-700">Do-er</h3>
              <p className="text-gray-700 text-sm">The Main Character prefers to solve problems by taking action</p>
            </div>

            <div className="bg-white border-2 border-emerald-300 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-emerald-700">Be-er</h3>
              <p className="text-gray-700 text-sm">The Main Character prefers to solve problems by adjusting internally</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-900">Problem-Solving Vectors</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-lime-300 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-lime-700">Linear</h3>
              <p className="text-gray-700 text-sm">Problems are addressed through cause-and-effect logic</p>
            </div>

            <div className="bg-white border-2 border-lime-300 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-lime-700">Holistic</h3>
              <p className="text-gray-700 text-sm">Problems are addressed by balancing relationships and context</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-900">Limit Vectors</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-cyan-300 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-cyan-700">Time</h3>
              <p className="text-gray-700 text-sm">A story limited by a fixed amount of time</p>
            </div>

            <div className="bg-white border-2 border-cyan-300 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-cyan-700">Options</h3>
              <p className="text-gray-700 text-sm">A story limited by the number of options available</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-900">Driver Vectors</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-sky-300 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-sky-700">Action</h3>
              <p className="text-gray-700 text-sm">Actions force the decisions in the story</p>
            </div>

            <div className="bg-white border-2 border-sky-300 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-sky-700">Decision</h3>
              <p className="text-gray-700 text-sm">Decisions force the actions in the story</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-900">Conclusion Vectors</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white border-2 border-blue-300 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-blue-700">Success</h3>
              <p className="text-gray-700 text-sm">The Story Goal is achieved</p>
            </div>

            <div className="bg-white border-2 border-blue-300 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-blue-700">Failure</h3>
              <p className="text-gray-700 text-sm">The Story Goal is not achieved</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-violet-300 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-violet-700">Good</h3>
              <p className="text-gray-700 text-sm">The Main Character resolves their personal baggage</p>
            </div>

            <div className="bg-white border-2 border-violet-300 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-violet-700">Bad</h3>
              <p className="text-gray-700 text-sm">The Main Character fails to resolve their personal baggage</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-100">
        <h3 className="font-semibold text-lg mb-2">See Vectors in Stories</h3>
        <p className="text-gray-700 mb-4">
          Discover how different vector combinations create unique story outcomes:
        </p>
        <Link
          to="/stories"
          className="inline-flex items-center text-green-600 hover:underline font-medium"
        >
          Browse Story Library <ArrowRight className="w-4 h-4 ml-1" />
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
      <Route path="appreciations" element={<AppreciationsPage />} />
      <Route path="functions" element={<NarrativeFunctionsPage />} />
      <Route path="dynamics" element={<DynamicsPage />} />
      <Route path="vectors" element={<VectorsPage />} />
      <Route path="*" element={<TerminologyHome />} />
    </Routes>
  );
}
