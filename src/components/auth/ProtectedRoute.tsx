
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to the auth page if not authenticated
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  // Route inspectors directly to their dashboard if they try to access other protected routes
  if (user?.role === 'inspector' && 
      location.pathname !== '/inspector' && 
      !location.pathname.startsWith('/inspector/')) {
    return <Navigate to="/inspector" replace />;
  }
  
  // Route workers directly to their dashboard if they try to access other protected routes
  if (user?.role === 'worker' && 
      location.pathname !== '/worker' && 
      !location.pathname.startsWith('/worker/') &&
      location.pathname !== '/inspection' && 
      location.pathname !== '/training' &&
      location.pathname !== '/equipment') {
    return <Navigate to="/worker" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
