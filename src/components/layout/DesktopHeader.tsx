
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, LogIn, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from '@/components/shared/Logo';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import HeaderUserMenu from './HeaderUserMenu';

interface DesktopHeaderProps {
  scrolled: boolean;
  navLinks: Array<{ name: string; path: string; protected: boolean }>;
}

const DesktopHeader: React.FC<DesktopHeaderProps> = ({ scrolled, navLinks }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="mr-8">
            <Logo size="md" variant="header" />
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  isActive(link.path)
                    ? 'text-ds-blue-700 bg-ds-blue-50'
                    : 'text-ds-neutral-700 hover:text-ds-blue-600 hover:bg-ds-blue-50/50'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-2">
          {isAuthenticated ? (
            <>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Search className="h-5 w-5 text-ds-neutral-700" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Bell className="h-5 w-5 text-ds-neutral-700" />
              </Button>
              
              <HeaderUserMenu />
            </>
          ) : (
            <>
              {!isLandingPage && (
                <Button asChild variant="ghost" className="rounded-full mr-2">
                  <Link to="/">
                    Back to Home
                  </Link>
                </Button>
              )}
              <Button asChild variant="default" size="lg" className="rounded-full gap-2 bg-ds-blue-600 hover:bg-ds-blue-700 text-white">
                <Link to="/auth">
                  <LogIn className="h-5 w-5" />
                  <span>Member Login</span>
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
