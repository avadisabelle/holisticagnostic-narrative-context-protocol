/**
 * Card Component
 */

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

export function Card({ children, className = '', onClick, hover = false }: CardProps) {
  const hoverClass = hover ? 'hover:shadow-lg transition-shadow cursor-pointer' : '';

  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg p-6 ${hoverClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
