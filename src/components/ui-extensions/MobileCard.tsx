
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface MobileCardProps {
  title: string;
  value: string | number;
  icon?: LucideIcon;
  variant?: 'default' | 'success' | 'warning' | 'danger';
  className?: string;
}

const MobileCard = ({
  title,
  value,
  icon: Icon,
  variant = 'default',
  className,
}: MobileCardProps) => {
  const variantClasses = {
    default: 'bg-card',
    success: 'bg-gradient-to-br from-green-50 to-green-100 border-green-200',
    warning: 'bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200',
    danger: 'bg-gradient-to-br from-red-50 to-red-100 border-red-200',
  };

  const iconColors = {
    default: 'text-primary',
    success: 'text-green-500',
    warning: 'text-amber-500',
    danger: 'text-red-500',
  };

  return (
    <Card className={cn(variantClasses[variant], 'overflow-hidden', className)}>
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-center">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          {Icon && (
            <div className={cn('rounded-full p-1', iconColors[variant])}>
              <Icon className="h-4 w-4" />
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <p className="text-2xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
};

export default MobileCard;
