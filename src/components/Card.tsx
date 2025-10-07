import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const hoverClasses = hover ? 'hover:shadow-lg transition-shadow duration-300' : '';
  
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-neutral-200 p-6 ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
