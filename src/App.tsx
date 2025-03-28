
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

import Index from "./pages/Index";
import IntakeForm from "./pages/IntakeForm";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import InspectorDashboard from "./pages/InspectorDashboard";
import Inspection from "./pages/Inspection";
import Training from "./pages/Training";
import Equipment from "./pages/Equipment";
import NotFound from "./pages/NotFound";
import MobileNavigation from "./components/layout/MobileNavigation";

const queryClient = new QueryClient();

// Component to handle routing based on user role
const RoleBasedRoute = () => {
  const { user } = useAuth();
  
  if (user?.role === 'inspector') {
    return <Navigate to="/inspector" replace />;
  }
  
  return <Dashboard />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/intake" element={<IntakeForm />} />
              
              {/* Protected Routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <RoleBasedRoute />
                </ProtectedRoute>
              } />
              
              <Route path="/inspector" element={
                <ProtectedRoute>
                  <InspectorDashboard />
                </ProtectedRoute>
              } />
              
              <Route path="/inspection" element={
                <ProtectedRoute>
                  <Inspection />
                </ProtectedRoute>
              } />
              <Route path="/training" element={
                <ProtectedRoute>
                  <Training />
                </ProtectedRoute>
              } />
              <Route path="/equipment" element={
                <ProtectedRoute>
                  <Equipment />
                </ProtectedRoute>
              } />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
          <MobileNavigation />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
