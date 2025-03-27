
import React from 'react';
import { cn } from '@/lib/utils';
import { ShieldCheck } from 'lucide-react';

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

  // Size mapping for shield icon
  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  return (
    <div className={cn('font-bold tracking-tight flex items-center', sizeClasses[size], className)}>
      <div className="flex items-baseline">
        {/* "Drop" in red font */}
        <span className="font-poppins text-ds-danger-600 mr-1">
          Drop
        </span>
        
        {/* "St" part of "Stop" in blue */}
        <span className="font-montserrat text-ds-blue-600">
          St
        </span>
        
        {/* Replace "o" with shield icon */}
        <div className="relative inline-flex items-center">
          <ShieldCheck 
            size={iconSizes[size]} 
            className="text-ds-blue-600 stroke-[2.5px]" 
          />
        </div>
        
        {/* "p" part of "Stop" in blue */}
        <span className="font-montserrat text-ds-blue-600">
          p
        </span>
      </div>
    </div>
  );
};

export default Logo;
