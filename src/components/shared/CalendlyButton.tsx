
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';

// Declare Calendly as a global variable since it comes from external script
declare global {
  interface Window {
    Calendly: any;
  }
}

interface CalendlyButtonProps {
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  children?: React.ReactNode;
}

const CalendlyButton: React.FC<CalendlyButtonProps> = ({ 
  className, 
  variant = 'outline',
  size = 'lg',
  children = 'Schedule Demo'
}) => {
  useEffect(() => {
    // Load Calendly scripts and styles when the component mounts
    const linkElement = document.createElement('link');
    linkElement.href = 'https://assets.calendly.com/assets/external/widget.css';
    linkElement.rel = 'stylesheet';
    document.head.appendChild(linkElement);

    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://assets.calendly.com/assets/external/widget.js';
    scriptElement.type = 'text/javascript';
    scriptElement.async = true;
    document.body.appendChild(scriptElement);

    // Clean up function to remove the elements when component unmounts
    return () => {
      document.head.removeChild(linkElement);
      document.body.removeChild(scriptElement);
    };
  }, []);

  const openCalendlyPopup = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/colt-sargent-dropstopsafety'
      });
    }
  };

  return (
    <Button 
      variant={variant}
      size={size}
      className={className}
      onClick={openCalendlyPopup}
    >
      {children}
    </Button>
  );
};

export default CalendlyButton;
