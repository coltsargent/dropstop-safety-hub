
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, LogIn, Search, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  navLinks: Array<{ name: string; path: string; protected: boolean }>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ mobileMenuOpen, navLinks }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <div
      className={cn(
        'fixed inset-0 bg-white z-40 md:hidden transform transition-transform duration-300 ease-in-out pt-16',
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      <nav className="flex flex-col p-4 space-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              'px-4 py-3 rounded-md text-sm font-medium transition-colors',
              isActive(link.path)
                ? 'text-ds-blue-700 bg-ds-blue-50'
                : 'text-ds-neutral-700 hover:text-ds-blue-600 hover:bg-ds-blue-50/50'
            )}
          >
            {link.name}
          </Link>
        ))}
        <div className="border-t border-ds-neutral-200 my-2 pt-2 flex items-center justify-between">
          {isAuthenticated ? (
            <>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Search className="h-5 w-5 text-ds-neutral-700" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Bell className="h-5 w-5 text-ds-neutral-700" />
              </Button>
              <Button variant="outline" className="gap-1 border-ds-neutral-200">
                <div className="h-6 w-6 rounded-full bg-ds-blue-100 flex items-center justify-center">
                  <User className="h-3 w-3 text-ds-blue-700" />
                </div>
                <span className="text-sm font-medium">Account</span>
              </Button>
            </>
          ) : (
            <Button asChild variant="default" className="w-full rounded-full gap-2 bg-ds-blue-600 hover:bg-ds-blue-700 text-white">
              <Link to="/auth">
                <LogIn className="h-5 w-5" />
                <span>Login</span>
              </Link>
            </Button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
