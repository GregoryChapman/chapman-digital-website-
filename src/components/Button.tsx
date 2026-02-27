import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-[#5BA8BD] hover:bg-[#4A90A4] text-white shadow-[0_6px_18px_rgba(8,21,34,0.16)] focus:ring-[#4A90A4]',
    secondary: 'bg-transparent hover:bg-[#DCE8F1] text-[#1C2B3A] border border-[#15283A] focus:ring-[#15283A]',
    outline: 'bg-transparent hover:bg-[#DCE8F1] text-[#1C2B3A] border border-[#15283A] focus:ring-[#15283A]'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      {children}
    </button>
  );
}
