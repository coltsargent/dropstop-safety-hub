
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
  // For header variant, use half the size
  const getHeightClass = () => {
    if (variant === 'header') {
      // Half-sized for header
      const headerSizeClasses = {
        xs: 'h-3', // Tiny size
        sm: 'h-6', // One-tenth of original h-60
        md: 'h-10', // One-tenth of original h-96
        lg: 'h-16', // One-tenth of h-160
        xl: 'h-20', // One-tenth of h-200
        '2xl': 'h-24', // One-tenth of h-240
        '3xl': 'h-32', // One-tenth of h-320
      };
      return headerSizeClasses[size];
    } else {
      // Original sizes for default variant, now with an added 'xs' option
      const defaultSizeClasses = {
        xs: 'h-6', // Tiny size
        sm: 'h-30', // Original
        md: 'h-48', // Original
        lg: 'h-72', // Original
        xl: 'h-96', // Original
        '2xl': 'h-[32rem]', // Original
        '3xl': 'h-[40rem]', // Original
      };
      return defaultSizeClasses[size];
    }
  };

  return (
    <div className={cn('flex flex-col items-center', className)}>
      <img 
        src="/lovable-uploads/8c0ff656-bfe1-4b5f-a14b-4a8708f1f527.png" 
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
