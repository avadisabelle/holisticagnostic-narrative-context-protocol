import { X, Keyboard } from 'lucide-react';
import { shortcuts, getShortcutLabel } from '../../hooks/useKeyboardShortcuts';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function KeyboardShortcutsModal({ isOpen, onClose }: KeyboardShortcutsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Keyboard className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Keyboard Shortcuts</h2>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-2 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(80vh-80px)]">
          <p className="text-gray-600 mb-6">
            Use these keyboard shortcuts to navigate quickly through the NCP Story Studio.
          </p>

          <div className="space-y-2">
            {shortcuts.map((shortcut, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-gray-700">{shortcut.description}</span>
                <kbd className="px-3 py-1.5 bg-white border-2 border-gray-300 rounded-lg font-mono text-sm font-semibold text-gray-700 shadow-sm">
                  {getShortcutLabel(shortcut)}
                </kbd>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-900">
              <strong>Tip:</strong> Press <kbd className="px-2 py-1 bg-white border border-blue-300 rounded text-xs font-mono">?</kbd> anytime to see this help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
