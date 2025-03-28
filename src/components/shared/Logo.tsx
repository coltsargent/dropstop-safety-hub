
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
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
        sm: 'h-15', // Half from h-30
        md: 'h-24', // Half from h-48
        lg: 'h-36', // Half from h-72
        xl: 'h-48', // Half from h-96
        '2xl': 'h-64', // Half from h-[32rem]
        '3xl': 'h-80', // Half from h-[40rem]
      };
      return headerSizeClasses[size];
    } else {
      // Original sizes for default variant
      const defaultSizeClasses = {
        sm: 'h-30', // Tripled from h-10
        md: 'h-48', // Tripled from h-16
        lg: 'h-72', // Tripled from h-24
        xl: 'h-96', // Tripled from h-32
        '2xl': 'h-[32rem]', // Even larger option
        '3xl': 'h-[40rem]', // Maximum size option
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
