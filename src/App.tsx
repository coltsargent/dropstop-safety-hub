
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

import Index from "./pages/Index";
import IntakeForm from "./pages/IntakeForm";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import FieldWorkerDashboard from "./pages/FieldWorkerDashboard";
import InspectorDashboard from "./pages/InspectorDashboard";
import Inspection from "./pages/Inspection";
import Training from "./pages/Training";
import Equipment from "./pages/Equipment";
import AISafetyMonitor from "./pages/AISafetyMonitor";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import Regulations from "./pages/Regulations";
import SafetyArticles from "./pages/SafetyArticles";
import ArticleContent from "./components/safety/ArticleContent";
import NotFound from "./pages/NotFound";
import MobileNavigation from "./components/layout/MobileNavigation";

const queryClient = new QueryClient();

// Component to handle routing based on user role
const RoleBasedRoute = () => {
  const { user } = useAuth();
  
  if (user?.role === 'inspector') {
    return <Navigate to="/inspector" replace />;
  }
  
  if (user?.role === 'worker') {
    return <Navigate to="/worker" replace />;
  }
  
  return <Dashboard />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <LanguageProvider>
          <BrowserRouter>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/intake" element={<IntakeForm />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/regulations" element={<Regulations />} />
                <Route path="/safety-articles" element={<SafetyArticles />} />
                <Route path="/safety-articles/:articleId" element={<ArticleContent />} />
                <Route path="/ai-monitor" element={<AISafetyMonitor />} />
                <Route path="/training" element={<Training />} />
                
                {/* Protected Routes */}
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <RoleBasedRoute />
                  </ProtectedRoute>
                } />
                
                <Route path="/worker" element={
                  <ProtectedRoute>
                    <FieldWorkerDashboard />
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
        </LanguageProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
