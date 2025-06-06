
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CalendlyButton from '@/components/shared/CalendlyButton';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

const CALENDLY_URL = "https://calendly.com/colt-sargent-dropstopsafety";

const Footer: React.FC = () => {
  const [showTrainingDialog, setShowTrainingDialog] = useState(false);
  const [showSupportDialog, setShowSupportDialog] = useState(false);

  const openCalendly = () => {
    window.open(CALENDLY_URL, '_blank');
  };

  return (
    <footer className="bg-white border-t border-ds-neutral-200">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 flex flex-col space-y-3">
            <div className="mb-2">
              <img 
                src="/lovable-uploads/7ccae409-5f9a-4047-98f8-74c0428c1426.png" 
                alt="Drop Stop Safety" 
                className="h-40 w-auto object-contain" // Changed from h-20 to h-40 (doubled)
              />
            </div>
            <p className="text-sm text-ds-neutral-600 max-w-xs">
              Enhancing workplace safety with innovative fall protection asset management and compliance solutions.
            </p>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-sm font-semibold mb-4 text-ds-neutral-800">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="text-sm text-ds-neutral-600 hover:text-ds-blue-600 transition-colors">
                  PPE Inspections
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-sm text-ds-neutral-600 hover:text-ds-blue-600 transition-colors">
                  Fall Notifications
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-sm text-ds-neutral-600 hover:text-ds-blue-600 transition-colors">
                  Compliance Tracking
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-sm text-ds-neutral-600 hover:text-ds-blue-600 transition-colors">
                  Training Management
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-sm font-semibold mb-4 text-ds-neutral-800">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/safety-articles" className="text-sm text-ds-neutral-600 hover:text-ds-blue-600 transition-colors">
                  Safety Articles
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => setShowTrainingDialog(true)} 
                  className="text-sm text-ds-neutral-600 hover:text-ds-blue-600 transition-colors text-left"
                >
                  Training Resources
                </button>
              </li>
              <li>
                <Link to="/regulations" className="text-sm text-ds-neutral-600 hover:text-ds-blue-600 transition-colors">
                  Regulations
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => setShowSupportDialog(true)} 
                  className="text-sm text-ds-neutral-600 hover:text-ds-blue-600 transition-colors text-left"
                >
                  Support Center
                </button>
              </li>
              <li>
                <CalendlyButton 
                  variant="link" 
                  size="sm" 
                  className="text-sm text-ds-neutral-600 hover:text-ds-blue-600 transition-colors text-left p-0 h-auto"
                >
                  Schedule Demo
                </CalendlyButton>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-sm font-semibold mb-4 text-ds-neutral-800">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="text-sm text-ds-neutral-600 hover:text-ds-blue-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-ds-neutral-600 hover:text-ds-blue-600 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/intake" className="text-sm text-ds-neutral-600 hover:text-ds-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm text-ds-neutral-600 hover:text-ds-blue-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-ds-neutral-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-ds-neutral-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Drop Stop Safety. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="text-ds-neutral-600 hover:text-ds-blue-600 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link to="/dashboard" className="text-ds-neutral-600 hover:text-ds-blue-600 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link to="/dashboard" className="text-ds-neutral-600 hover:text-ds-blue-600 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      <AlertDialog open={showTrainingDialog} onOpenChange={setShowTrainingDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Under Construction</AlertDialogTitle>
            <AlertDialogDescription>
              The Training Resources section is currently under construction. We're working to bring you valuable training content soon.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowTrainingDialog(false)}>
              Return to Home Page
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={showSupportDialog} onOpenChange={setShowSupportDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Under Construction</AlertDialogTitle>
            <AlertDialogDescription>
              The Support Center is currently under construction. We're working to bring you helpful support resources soon.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowSupportDialog(false)}>
              Return to Home Page
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </footer>
  );
};

export default Footer;
