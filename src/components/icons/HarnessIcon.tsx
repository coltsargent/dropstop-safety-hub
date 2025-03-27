
import React from 'react';

interface HarnessIconProps {
  className?: string;
  size?: number;
}

const HarnessIcon: React.FC<HarnessIconProps> = ({ className, size = 24 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Left strap */}
      <path d="M7 2v7" />
      <path d="M7 9v6" />
      <path d="M7 15l-2 5" />
      
      {/* Right strap */}
      <path d="M17 2v7" />
      <path d="M17 9v6" />
      <path d="M17 15l2 5" />
      
      {/* Cross straps */}
      <path d="M7 9l5 11" />
      <path d="M17 9l-5 11" />
      
      {/* Belt */}
      <path d="M5 9h14" />
      
      {/* Buckles/connectors */}
      <circle cx="7" cy="5" r="1" />
      <circle cx="17" cy="5" r="1" />
      <circle cx="5" cy="20" r="1" />
      <circle cx="19" cy="20" r="1" />
    </svg>
  );
};

export default HarnessIcon;
