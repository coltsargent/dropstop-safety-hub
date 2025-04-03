
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Bell, 
  Menu, 
  Search, 
  User, 
  X,
  ChevronDown,
  LogIn,
  Shield
} from 'lucide-react';
import Logo from '@/components/shared/Logo';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/contexts/AuthContext';
import LogoutButton from '@/components/auth/LogoutButton';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const { isAuthenticated } = useAuth();
  const isLandingPage = location.pathname === '/';

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  // Removed AI Safety Monitor from protected navLinks
  const authNavLinks = [
    { name: 'Dashboard', path: '/dashboard', protected: true },
    { name: 'Inspections', path: '/inspection', protected: true },
    { name: 'Training', path: '/training', protected: true },
    { name: 'Equipment', path: '/equipment', protected: true },
  ];

  // Public links including AI Safety Monitor
  const publicNavLinks = [
    { name: 'AI Safety Monitor', path: '/ai-monitor', protected: false },
  ];
  
  // Choose which links to display based on authentication
  const navLinks = isAuthenticated ? authNavLinks : [...authNavLinks, ...publicNavLinks];

  // For mobile, use a simplified header
  if (isMobile) {
    return (
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
        )}
      >
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
              <>
                <Button asChild variant="ghost" size="sm" className="rounded-full">
                  <Link to="/ai-monitor">
                    <Shield className="h-4 w-4 text-ds-neutral-700" />
                  </Link>
                </Button>
                <Button asChild variant="default" size="sm" className="rounded-full gap-1 bg-ds-blue-600 hover:bg-ds-blue-700 text-white">
                  <Link to="/auth">
                    <LogIn className="h-4 w-4" />
                    <span>Login</span>
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </header>
    );
  }

  // Desktop header
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
          
          {/* Navigation - Show AI Monitor only for non-authenticated users */}
          <nav className="hidden md:flex space-x-1">
            {navLinks.filter(link => !link.protected || isAuthenticated).map((link) => (
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
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="ml-2 gap-1 border-ds-neutral-200">
                    <div className="h-7 w-7 rounded-full bg-ds-blue-100 flex items-center justify-center">
                      <User className="h-4 w-4 text-ds-blue-700" />
                    </div>
                    <span className="text-sm font-medium">Account</span>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <div className="w-full cursor-pointer">
                      <LogoutButton />
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-ds-neutral-700" />
            ) : (
              <Menu className="h-5 w-5 text-ds-neutral-700" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-40 md:hidden transform transition-transform duration-300 ease-in-out pt-16',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col p-4 space-y-2">
          {navLinks.filter(link => !link.protected || isAuthenticated).map((link) => (
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
    </header>
  );
};

export default Header;
