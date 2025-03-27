
import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

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

  // Size mapping for check icon
  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  // Font weight for the "Stop" part
  const stopFontWeight = 'font-bold';

  return (
    <div className={cn('font-bold tracking-tight flex items-center', sizeClasses[size], className)}>
      <div className="flex items-baseline">
        {/* "Drop" in red font */}
        <span className="font-serif text-ds-danger-600 mr-1">
          Drop
        </span>
        
        {/* "St" part of "Stop" in blue */}
        <span className="font-sans text-ds-blue-600">
          St
        </span>
        
        {/* "o" part of "Stop" in blue */}
        <span className="font-sans text-ds-blue-600">
          o
        </span>
        
        {/* Replace the last "p" with a check mark icon */}
        <div className="relative inline-flex items-center">
          <Check 
            size={iconSizes[size]} 
            className="text-ds-blue-600 stroke-[2.5px]" 
          />
        </div>
      </div>
    </div>
  );
};

export default Logo;
