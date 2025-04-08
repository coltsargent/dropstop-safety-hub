
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, LogIn, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from '@/components/shared/Logo';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import HeaderUserMenu from './HeaderUserMenu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
          
          {/* Main Navigation */}
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
            
            {/* Additional Navigation Categories */}
            <NavigationMenu className="ml-2">
              <NavigationMenuList>
                {/* Solutions */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-ds-neutral-700 hover:text-ds-blue-600 bg-transparent hover:bg-ds-blue-50/50 data-[state=open]:bg-ds-blue-50/50">Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[220px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/dashboard" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-ds-blue-50 hover:text-ds-blue-600">
                            <div className="text-sm font-medium">PPE Inspections</div>
                            <p className="line-clamp-2 text-sm leading-snug text-ds-neutral-600">
                              Digital inspection checklists and compliance tracking
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/dashboard" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-ds-blue-50 hover:text-ds-blue-600">
                            <div className="text-sm font-medium">Fall Notifications</div>
                            <p className="line-clamp-2 text-sm leading-snug text-ds-neutral-600">
                              Real-time alerts and emergency response coordination
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/dashboard" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-ds-blue-50 hover:text-ds-blue-600">
                            <div className="text-sm font-medium">Compliance Tracking</div>
                            <p className="line-clamp-2 text-sm leading-snug text-ds-neutral-600">
                              Automated record-keeping for regulatory audits
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/dashboard" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-ds-blue-50 hover:text-ds-blue-600">
                            <div className="text-sm font-medium">Training Management</div>
                            <p className="line-clamp-2 text-sm leading-snug text-ds-neutral-600">
                              Certification and training requirement tracking
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                {/* Resources */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-ds-neutral-700 hover:text-ds-blue-600 bg-transparent hover:bg-ds-blue-50/50 data-[state=open]:bg-ds-blue-50/50">Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[220px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/safety-articles" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-ds-blue-50 hover:text-ds-blue-600">
                            <div className="text-sm font-medium">Safety Articles</div>
                            <p className="line-clamp-2 text-sm leading-snug text-ds-neutral-600">
                              Latest information on workplace safety best practices
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <Button variant="ghost" className="w-full justify-start p-3 h-auto">
                          <div className="text-left">
                            <div className="text-sm font-medium">Training Resources</div>
                            <p className="line-clamp-2 text-sm leading-snug text-ds-neutral-600">
                              Educational materials for safety professionals
                            </p>
                          </div>
                        </Button>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/regulations" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-ds-blue-50 hover:text-ds-blue-600">
                            <div className="text-sm font-medium">Regulations</div>
                            <p className="line-clamp-2 text-sm leading-snug text-ds-neutral-600">
                              Stay updated on safety compliance requirements
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <Button variant="ghost" className="w-full justify-start p-3 h-auto">
                          <div className="text-left">
                            <div className="text-sm font-medium">Support Center</div>
                            <p className="line-clamp-2 text-sm leading-snug text-ds-neutral-600">
                              Find answers to your questions
                            </p>
                          </div>
                        </Button>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                {/* Company */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-ds-neutral-700 hover:text-ds-blue-600 bg-transparent hover:bg-ds-blue-50/50 data-[state=open]:bg-ds-blue-50/50">Company</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[220px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/about-us" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-ds-blue-50 hover:text-ds-blue-600">
                            <div className="text-sm font-medium">About Us</div>
                            <p className="line-clamp-2 text-sm leading-snug text-ds-neutral-600">
                              Learn about our mission and team
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/careers" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-ds-blue-50 hover:text-ds-blue-600">
                            <div className="text-sm font-medium">Careers</div>
                            <p className="line-clamp-2 text-sm leading-snug text-ds-neutral-600">
                              Join our team of safety experts
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/intake" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-ds-blue-50 hover:text-ds-blue-600">
                            <div className="text-sm font-medium">Contact</div>
                            <p className="line-clamp-2 text-sm leading-snug text-ds-neutral-600">
                              Get in touch with our team
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/privacy-policy" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-ds-blue-50 hover:text-ds-blue-600">
                            <div className="text-sm font-medium">Privacy Policy</div>
                            <p className="line-clamp-2 text-sm leading-snug text-ds-neutral-600">
                              Our commitment to data privacy
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
