
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/contexts/AuthContext';

const MobileNavigation = () => {
  // Always return null to remove the bottom navigation
  return null;
};

export default MobileNavigation;
