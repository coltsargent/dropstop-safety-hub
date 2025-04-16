
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/contexts/AuthContext';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const { isAuthenticated } = useAuth();

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

  // Only include protected routes in navLinks
  const authNavLinks = [
    { name: 'Dashboard', path: '/dashboard', protected: true },
    { name: 'Inspections', path: '/inspection', protected: true },
    { name: 'Equipment', path: '/equipment', protected: true },
  ];

  // Public links available to all users
  const publicNavLinks = [];

  // Choose which links to display based on authentication
  const navLinks = isAuthenticated 
    ? [...authNavLinks, ...publicNavLinks]
    : publicNavLinks;

  // For mobile, use a simplified header with the menu button positioned properly
  if (isMobile) {
    return (
      <>
        <MobileHeader scrolled={scrolled} />
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="fixed top-2 right-2 z-50 rounded-full bg-white/80 shadow-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-ds-neutral-700" />
            ) : (
              <Menu className="h-5 w-5 text-ds-neutral-700" />
            )}
          </Button>
          <MobileMenu mobileMenuOpen={mobileMenuOpen} navLinks={navLinks} />
        </div>
      </>
    );
  }

  // Desktop header
  return (
    <>
      <DesktopHeader scrolled={scrolled} navLinks={navLinks} />
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full fixed top-4 right-4 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5 text-ds-neutral-700" />
          ) : (
            <Menu className="h-5 w-5 text-ds-neutral-700" />
          )}
        </Button>
        <MobileMenu mobileMenuOpen={mobileMenuOpen} navLinks={navLinks} />
      </div>
    </>
  );
};

export default Header;
