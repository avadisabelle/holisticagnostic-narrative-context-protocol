import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface ShortcutConfig {
  key: string;
  ctrl?: boolean;
  shift?: boolean;
  alt?: boolean;
  action: () => void;
  description: string;
}

export const shortcuts: ShortcutConfig[] = [
  {
    key: 'h',
    action: () => window.location.href = '/',
    description: 'Go to Home',
  },
  {
    key: 's',
    action: () => window.location.href = '/stories',
    description: 'Go to Stories',
  },
  {
    key: 't',
    action: () => window.location.href = '/docs',
    description: 'Go to Terminology',
  },
  {
    key: '?',
    shift: true,
    action: () => {
      // This will be handled by the component
    },
    description: 'Show keyboard shortcuts',
  },
];

export function useKeyboardShortcuts(customShortcuts: ShortcutConfig[] = []) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const allShortcuts = [...shortcuts, ...customShortcuts];

    function handleKeyPress(event: KeyboardEvent) {
      // Don't trigger shortcuts when typing in input fields
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      for (const shortcut of allShortcuts) {
        const keyMatches = event.key.toLowerCase() === shortcut.key.toLowerCase();
        const ctrlMatches = shortcut.ctrl ? event.ctrlKey || event.metaKey : !event.ctrlKey && !event.metaKey;
        const shiftMatches = shortcut.shift ? event.shiftKey : !event.shiftKey;
        const altMatches = shortcut.alt ? event.altKey : !event.altKey;

        if (keyMatches && ctrlMatches && shiftMatches && altMatches) {
          event.preventDefault();
          shortcut.action();
          return;
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigate, location, customShortcuts]);
}

export function getShortcutLabel(shortcut: ShortcutConfig): string {
  const parts: string[] = [];

  if (shortcut.ctrl) parts.push('Ctrl');
  if (shortcut.alt) parts.push('Alt');
  if (shortcut.shift) parts.push('Shift');
  parts.push(shortcut.key.toUpperCase());

  return parts.join('+');
}
