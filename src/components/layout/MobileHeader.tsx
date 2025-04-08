
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, LogIn, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from '@/components/shared/Logo';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

interface MobileHeaderProps {
  scrolled: boolean;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ scrolled }) => {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    )}>
      <div className="flex items-center justify-between h-14 px-4">
        <Link to="/" className="flex items-center">
          <Logo size="sm" variant="header" />
        </Link>
        
        <div className="flex items-center space-x-2">
          {isAuthenticated ? (
            <>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Bell className="h-5 w-5 text-ds-neutral-700" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5 text-ds-neutral-700" />
              </Button>
            </>
          ) : (
            <Button asChild variant="default" size="sm" className="rounded-full gap-1 bg-ds-blue-600 hover:bg-ds-blue-700 text-white">
              <Link to="/auth">
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
