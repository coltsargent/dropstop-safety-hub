
import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface GeolocationDisplayProps {
  location: GeolocationPosition | null;
  error: string | null;
}

const GeolocationDisplay: React.FC<GeolocationDisplayProps> = ({ location, error }) => {
  const { t } = useLanguage();
  
  return (
    <p className="text-ds-neutral-600 flex flex-wrap items-center gap-x-4 mt-1">
      <span className="flex items-center gap-1">
        <Calendar className="h-4 w-4 text-ds-neutral-500" />
        {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      </span>
      <span className="flex items-center gap-1">
        <Clock className="h-4 w-4 text-ds-neutral-500" />
        {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
      </span>
      <span className="flex items-center gap-1">
        <MapPin className="h-4 w-4 text-ds-neutral-500" />
        {location ? (
          <>
            {t('currentLocation')} 
            <span className="ml-1 text-xs text-ds-neutral-400">
              ({t('locationAccuracy', { meters: Math.round(location.coords.accuracy) })})
            </span>
          </>
        ) : error ? (
          <span className="text-ds-danger-500 text-sm">{error}</span>
        ) : (
          t('currentLocation')
        )}
      </span>
    </p>
  );
};

export default GeolocationDisplay;
