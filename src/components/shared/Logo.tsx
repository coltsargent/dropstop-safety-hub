
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className, showTagline = false }) => {
  const sizeClasses = {
    sm: 'h-10',
    md: 'h-16',
    lg: 'h-24',
    xl: 'h-32',
  };

  return (
    <div className={cn('flex flex-col items-center', className)}>
      <img 
        src="/lovable-uploads/52da1ae2-d2d1-4dd3-802e-31ea07f9ce94.png" 
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
