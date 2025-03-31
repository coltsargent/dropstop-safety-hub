
import React, { useState } from 'react';
import { Bell, BellOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const FallAlertButton: React.FC = () => {
  const [active, setActive] = useState(false);
  const { t } = useLanguage();
  const { toast } = useToast();

  const toggleFallAlert = () => {
    const newState = !active;
    setActive(newState);
    
    // In a real implementation, this would connect to the mobile device's
    // fall detection API and send alerts to supervisors
    
    toast({
      title: newState ? t('fallAlertActivated') : t('fallAlertDeactivated'),
      description: newState 
        ? 'Safety supervisor will be notified in case of fall detection'
        : 'Fall alert monitoring has been turned off',
    });
    
    // Integration with native device capabilities would happen here
    // For iOS/Android integration in a real app:
    // if (newState) {
    //   // Register fall detection listeners
    //   // This would use platform-specific APIs 
    // } else {
    //   // Unregister fall detection listeners
    // }
  };

  return (
    <Button
      variant={active ? "default" : "outline"}
      size="sm"
      className={`gap-2 ${active ? 'bg-ds-danger-500 hover:bg-ds-danger-600' : ''}`}
      onClick={toggleFallAlert}
    >
      {active ? (
        <>
          <Bell className="h-4 w-4" />
          <span>{t('fallAlert')}</span>
        </>
      ) : (
        <>
          <BellOff className="h-4 w-4" />
          <span>{t('activateFallAlert')}</span>
        </>
      )}
    </Button>
  );
};

export default FallAlertButton;
