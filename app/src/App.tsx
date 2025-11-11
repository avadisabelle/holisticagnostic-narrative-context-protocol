import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { StoriesList } from './pages/stories/StoriesList';
import { StoryViewer } from './pages/stories/StoryViewer';
import { TerminologyBrowser } from './pages/docs/TerminologyBrowser';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  NCP Story Studio
                </div>
              </Link>
              <nav className="flex items-center space-x-6">
                <Link
                  to="/stories"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Stories
                </Link>
                <Link
                  to="/docs"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Terminology
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stories" element={<StoriesList />} />
            <Route path="/stories/:id" element={<StoryViewer />} />
            <Route path="/docs/*" element={<TerminologyBrowser />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="container mx-auto px-4 py-6">
            <div className="text-center text-gray-600 text-sm">
              <p>
                Powered by the{' '}
                <a
                  href="https://github.com/Narrative-Context-Protocol"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Narrative Context Protocol
                </a>
              </p>
              <p className="mt-2">
                A project by The Dramatica Co. | Open Source MIT License
              </p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
