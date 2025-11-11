/**
 * Error Message Component
 */

import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  title?: string;
  message: string;
  details?: string;
}

export function ErrorMessage({ title = 'Error', message, details }: ErrorMessageProps) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
      <div className="flex items-start">
        <AlertCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-red-800 mb-2">{title}</h3>
          <p className="text-red-600 mb-2">{message}</p>
          {details && (
            <details className="mt-3">
              <summary className="text-sm text-red-700 cursor-pointer hover:text-red-800">
                Show details
              </summary>
              <pre className="mt-2 text-xs text-red-600 bg-red-100 p-3 rounded overflow-x-auto">
                {details}
              </pre>
            </details>
          )}
        </div>
      </div>
    </div>
  );
}
