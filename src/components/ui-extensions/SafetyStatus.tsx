
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from '@/components/ui/tooltip';

type StatusType = 'safe' | 'warning' | 'danger' | 'neutral';

interface SafetyStatusProps {
  status: StatusType;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  showLabel?: boolean;
  className?: string;
}

const SafetyStatus: React.FC<SafetyStatusProps> = ({
  status,
  size = 'md',
  label,
  showLabel = false,
  className,
}) => {
  const sizeClasses = {
    sm: 'h-2 w-2',
    md: 'h-3 w-3',
    lg: 'h-4 w-4',
  };

  const statusClasses = {
    safe: 'bg-ds-success-500',
    warning: 'bg-ds-warning-500',
    danger: 'bg-ds-danger-500',
    neutral: 'bg-ds-neutral-400',
  };

  const statusLabels = {
    safe: label || 'All Clear',
    warning: label || 'Needs Attention',
    danger: label || 'Critical Issue',
    neutral: label || 'Unknown Status',
  };

  const indicator = (
    <span
      className={cn(
        'relative inline-block rounded-full',
        statusClasses[status],
        sizeClasses[size],
        className
      )}
    >
      <span
        className={cn(
          'absolute inset-0 rounded-full animate-pulse-slow',
          statusClasses[status],
          'opacity-60'
        )}
      />
    </span>
  );

  if (showLabel) {
    return (
      <div className="flex items-center gap-2">
        {indicator}
        <span className="text-sm font-medium">{statusLabels[status]}</span>
      </div>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {indicator}
        </TooltipTrigger>
        <TooltipContent>
          <p>{statusLabels[status]}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SafetyStatus;
