
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showTagline?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className, showTagline = false }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
  };

  return (
    <div className={cn('flex flex-col items-center', className)}>
      <img 
        src="/lovable-uploads/98568aff-e090-4363-9946-7a6132f653d8.png" 
        alt="Drop Stop Safety" 
        className={cn(sizeClasses[size], 'w-auto object-contain')}
      />
      {showTagline && (
        <span className="text-xs text-ds-neutral-600 mt-1 font-medium tracking-wide">
          Fall Protection & Safety Solutions
        </span>
      )}
    </div>
  );
};

export default Logo;
