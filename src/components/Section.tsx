import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'primary';
}

export default function Section({ 
  children, 
  className = '', 
  background = 'white' 
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-surface-light',
    gray: 'bg-surface-alt',
    primary: 'bg-surface-dark'
  };

  return (
    <section className={`${backgroundClasses[background]} ${className}`}>
      {children}
    </section>
  );
}
