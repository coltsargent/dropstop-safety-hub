
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className }) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={cn('font-bold tracking-tight flex items-center gap-2', sizeClasses[size], className)}>
      <div className="relative">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-ds-blue-500 to-ds-blue-700 flex items-center justify-center text-white">
          <svg 
            className="h-5 w-5" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="M18 12h-6l2-5" />
            <path d="M8 12h6l-2 5" />
          </svg>
        </div>
        <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-ds-success-500 border-2 border-white" />
      </div>
      <span className="bg-gradient-to-r from-ds-blue-700 to-ds-blue-500 bg-clip-text text-transparent">
        Drop Stop
      </span>
    </div>
  );
};

export default Logo;
