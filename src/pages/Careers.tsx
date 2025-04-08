
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Careers: React.FC = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:colt.sargent@dropstopsafety.com";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-ds-neutral-900 mb-6">
              Join Our Team
            </h1>
            <p className="text-lg text-ds-neutral-600 mb-4">
              Help us make workplaces safer around the world
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-ds-neutral-900 mb-4">
                Open Opportunities
              </h2>
              <p className="text-ds-neutral-700 mb-6">
                Want to join our team? We don't have any specific positions available, but are always open to seeing where we can get the right person on our team.
              </p>
              <p className="text-ds-neutral-700">
                We're looking for passionate individuals who share our vision of enhancing workplace safety through innovative technology solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-ds-blue-50 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-ds-neutral-900 mb-4">
                Contact Us
              </h2>
              <p className="text-ds-neutral-700 mb-6">
                If you're interested in exploring opportunities with Drop Stop, please reach out to us directly or fill out our intake form.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
                <div className="bg-white p-4 rounded-lg flex items-center gap-3 flex-1">
                  <Mail className="h-5 w-5 text-ds-blue-600" />
                  <span className="text-ds-neutral-800">colt.sargent@dropstopsafety.com</span>
                </div>
                <Button 
                  onClick={handleContactClick}
                  className="bg-ds-blue-600 hover:bg-ds-blue-700"
                >
                  Send Email
                </Button>
              </div>
              <div className="mt-4 text-center sm:text-left">
                <Link to="/intake">
                  <Button 
                    className="bg-ds-blue-600 hover:bg-ds-blue-700 w-full sm:w-auto"
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    Fill Out Intake Form
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
