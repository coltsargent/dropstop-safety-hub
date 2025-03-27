
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

import Index from "./pages/Index";
import IntakeForm from "./pages/IntakeForm";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Inspection from "./pages/Inspection";
import Training from "./pages/Training";
import Equipment from "./pages/Equipment";
import NotFound from "./pages/NotFound";
import MobileNavigation from "./components/layout/MobileNavigation";

const queryClient = new QueryClient();

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
                  <Dashboard />
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
