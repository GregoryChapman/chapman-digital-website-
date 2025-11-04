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
    white: 'bg-white',
    gray: 'bg-neutral-50',
    primary: 'bg-gradient-to-br from-blue-600 to-cyan-600'
  };

  return (
    <section className={`${backgroundClasses[background]} ${className}`}>
      {children}
    </section>
  );
}
