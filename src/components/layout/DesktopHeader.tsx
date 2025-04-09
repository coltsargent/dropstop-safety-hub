
import React, { useState } from 'react';
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface DesktopHeaderProps {
  scrolled: boolean;
  navLinks: Array<{ name: string; path: string; protected: boolean }>;
}

const DesktopHeader: React.FC<DesktopHeaderProps> = ({ scrolled, navLinks }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('');
  
  const isActive = (path: string) => location.pathname === path;

  const handleSolutionClick = (title: string, e: React.MouseEvent) => {
    e.preventDefault();
    setDialogTitle(title);
    setOpenDialog(true);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Under Construction</AlertDialogTitle>
            <AlertDialogDescription>
              The {dialogTitle} section is currently under construction. We're working to bring you valuable content soon.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setOpenDialog(false)}>
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

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
            
            {/* Additional Navigation Categories - Only shown when not authenticated */}
            {!isAuthenticated && (
              <NavigationMenu className="ml-2">
                <NavigationMenuList>
                  {/* Solutions */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium text-ds-neutral-700 hover:text-ds-blue-600 bg-transparent hover:bg-ds-blue-50/50 data-[state=open]:bg-ds-blue-50/50">Solutions</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 w-[220px]">
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="#" onClick={(e) => handleSolutionClick('PPE Inspections', e)} className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-ds-blue-50 hover:text-ds-blue-600">
                              <div className="text-sm font-medium">PPE Inspections</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="#" onClick={(e) => handleSolutionClick('Fall Notifications', e)} className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-ds-blue-50 hover:text-ds-blue-600">
                              <div className="text-sm font-medium">Fall Notifications</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="#" onClick={(e) => handleSolutionClick('Compliance Tracking', e)} className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-ds-blue-50 hover:text-ds-blue-600">
                              <div className="text-sm font-medium">Compliance Tracking</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="#" onClick={(e) => handleSolutionClick('Training Management', e)} className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-ds-blue-50 hover:text-ds-blue-600">
                              <div className="text-sm font-medium">Training Management</div>
                            </a>
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
                            <Link to="/safety-articles" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-ds-blue-50 hover:text-ds-blue-600">
                              <div className="text-sm font-medium">Safety Articles</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <Button variant="ghost" onClick={(e) => {
                            e.preventDefault();
                            setDialogTitle('Training Resources');
                            setOpenDialog(true);
                          }} className="w-full justify-start p-3 h-auto">
                            <div className="text-left">
                              <div className="text-sm font-medium">Training Resources</div>
                            </div>
                          </Button>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/regulations" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-ds-blue-50 hover:text-ds-blue-600">
                              <div className="text-sm font-medium">Regulations</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <Button variant="ghost" onClick={(e) => {
                            e.preventDefault();
                            setDialogTitle('Support Center');
                            setOpenDialog(true);
                          }} className="w-full justify-start p-3 h-auto">
                            <div className="text-left">
                              <div className="text-sm font-medium">Support Center</div>
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
                            <Link to="/about-us" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-ds-blue-50 hover:text-ds-blue-600">
                              <div className="text-sm font-medium">About Us</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/careers" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-ds-blue-50 hover:text-ds-blue-600">
                              <div className="text-sm font-medium">Careers</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/intake" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-ds-blue-50 hover:text-ds-blue-600">
                              <div className="text-sm font-medium">Contact</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/privacy-policy" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-ds-blue-50 hover:text-ds-blue-600">
                              <div className="text-sm font-medium">Privacy Policy</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            )}
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
