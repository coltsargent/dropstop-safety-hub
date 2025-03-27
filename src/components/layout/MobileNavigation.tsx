
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home, ClipboardCheck, GraduationCap, HardHat, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const MobileNavigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  if (!isMobile) return null;

  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: ClipboardCheck, label: 'Inspections', path: '/inspection' },
    { icon: GraduationCap, label: 'Training', path: '/training' },
    { icon: HardHat, label: 'Equipment', path: '/equipment' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Bottom Tab Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-around items-center h-16 z-40">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center w-full h-full px-1",
              isActive(item.path) 
                ? "text-primary" 
                : "text-muted-foreground"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
      
      {/* Page spacing to account for bottom navigation */}
      <div className="pb-16" />
    </>
  );
};

export default MobileNavigation;
