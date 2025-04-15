
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
  // Reduced sizes by half for both header and default variants
  const getHeightClass = () => {
    if (variant === 'header') {
      const headerSizeClasses = {
        xs: 'h-3', 
        sm: 'h-6', 
        md: 'h-10', 
        lg: 'h-16', 
        xl: 'h-20', 
        '2xl': 'h-24', 
        '3xl': 'h-32', 
      };
      return headerSizeClasses[size];
    } else {
      const defaultSizeClasses = {
        xs: 'h-3', 
        sm: 'h-15', 
        md: 'h-24', 
        lg: 'h-36', 
        xl: 'h-48', 
        '2xl': 'h-[16rem]', 
        '3xl': 'h-[20rem]', 
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
