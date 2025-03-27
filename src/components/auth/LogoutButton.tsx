
import React from 'react';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const LogoutButton: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: 'Logged out',
      description: 'You have been successfully logged out.',
    });
    navigate('/');
  };

  return (
    <Button 
      onClick={handleLogout} 
      variant="ghost" 
      size="sm" 
      className="text-ds-neutral-600 hover:text-ds-red-600 transition-colors"
    >
      <LogOut className="h-5 w-5 mr-2" />
      Logout
    </Button>
  );
};

export default LogoutButton;
