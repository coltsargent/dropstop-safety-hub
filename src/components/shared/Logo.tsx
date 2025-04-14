
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  className?: string;
  showTagline?: boolean;
  variant?: 'default' | 'header';
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  className, 
  showTagline = false,
  variant = 'default'
}) => {
  // For header variant, now use full size instead of half
  const getHeightClass = () => {
    if (variant === 'header') {
      // Full-sized for header, doubled from previous implementation
      const headerSizeClasses = {
        xs: 'h-6', 
        sm: 'h-12', 
        md: 'h-20', 
        lg: 'h-32', 
        xl: 'h-40', 
        '2xl': 'h-48', 
        '3xl': 'h-64', 
      };
      return headerSizeClasses[size];
    } else {
      // Original sizes for default variant, now with an added 'xs' option
      const defaultSizeClasses = {
        xs: 'h-6', 
        sm: 'h-30', 
        md: 'h-48', 
        lg: 'h-72', 
        xl: 'h-96', 
        '2xl': 'h-[32rem]', 
        '3xl': 'h-[40rem]', 
      };
      return defaultSizeClasses[size];
    }
  };

  return (
    <div className={cn('flex flex-col items-center', className)}>
      <img 
        src="/lovable-uploads/5ea081a4-96e2-486d-b96a-3830e7e11279.png" 
        alt="Drop Stop Safety" 
        className={cn(getHeightClass(), 'w-auto object-contain')}
      />
      {showTagline && (
        <span className="text-base md:text-lg text-ds-neutral-600 mt-2 font-medium tracking-wide">
          Fall Protection & Safety Solutions
        </span>
      )}
    </div>
  );
};

export default Logo;
