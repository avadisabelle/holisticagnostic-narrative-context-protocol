import { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

interface QuickJumpSection {
  id: string;
  label: string;
  icon?: React.ReactNode;
  count?: number;
}

interface QuickJumpMenuProps {
  sections: QuickJumpSection[];
  onJumpTo: (sectionId: string) => void;
  currentSection?: string;
}

export function QuickJumpMenu({ sections, onJumpTo, currentSection }: QuickJumpMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (sections.length === 0) {
    return null;
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-6 bottom-6 z-40 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110"
        title="Quick Jump Menu"
        aria-label="Quick Jump Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sliding Panel */}
      <div
        className={`fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-30 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-white">
            <h3 className="text-lg font-bold">Quick Jump</h3>
            <p className="text-sm text-blue-100 mt-1">Navigate story sections</p>
          </div>

          {/* Sections List */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    onJumpTo(section.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between group ${
                    currentSection === section.id
                      ? 'bg-blue-100 text-blue-900 font-medium border-2 border-blue-500'
                      : 'hover:bg-gray-100 text-gray-700 border-2 border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {section.icon && <span className="flex-shrink-0">{section.icon}</span>}
                    <span>{section.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {section.count !== undefined && (
                      <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                        {section.count}
                      </span>
                    )}
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <p className="text-xs text-gray-600">
              Click any section to jump instantly
            </p>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
