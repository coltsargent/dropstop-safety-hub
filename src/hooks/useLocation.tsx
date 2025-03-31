
import { useState, useEffect } from 'react';

interface LocationState {
  coordinates: GeolocationCoordinates | null;
  loading: boolean;
  error: string | null;
}

export const useLocation = () => {
  const [state, setState] = useState<LocationState>({
    coordinates: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setState({
        coordinates: null,
        loading: false,
        error: 'Geolocation is not supported by your browser'
      });
      return;
    }

    const success = (position: GeolocationPosition) => {
      setState({
        coordinates: position.coords,
        loading: false,
        error: null
      });
    };

    const error = (error: GeolocationPositionError) => {
      setState({
        coordinates: null,
        loading: false,
        error: `Error getting location: ${error.message}`
      });
    };

    const options = {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0
    };

    const watchId = navigator.geolocation.watchPosition(success, error, options);

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return state;
};

export default useLocation;
