import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { toggleMobileView } from "@/hooks/use-mobile";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const queryClient = new QueryClient();

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

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AuthProvider>
          <LanguageProvider>
            <BrowserRouter>
              <div className="relative">
                <button 
                  onClick={toggleMobileView} 
                  className="fixed top-4 right-4 z-50 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Toggle Mobile View
                </button>
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
                    
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </AnimatePresence>
                <MobileNavigation />
              </div>
            </BrowserRouter>
          </LanguageProvider>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
