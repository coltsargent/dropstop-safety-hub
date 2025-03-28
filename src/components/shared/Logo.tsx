
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  className?: string;
  showTagline?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className, showTagline = false }) => {
  const sizeClasses = {
    sm: 'h-30', // Tripled from h-10
    md: 'h-48', // Tripled from h-16
    lg: 'h-72', // Tripled from h-24
    xl: 'h-96', // Tripled from h-32
    '2xl': 'h-[32rem]', // Even larger option
    '3xl': 'h-[40rem]', // Maximum size option
  };

  return (
    <div className={cn('flex flex-col items-center', className)}>
      <img 
        src="/lovable-uploads/52da1ae2-d2d1-4dd3-802e-31ea07f9ce94.png" 
        alt="Drop Stop Safety" 
        className={cn(sizeClasses[size], 'w-auto object-contain')}
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
