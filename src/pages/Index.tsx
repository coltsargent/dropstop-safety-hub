
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, LineChart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ds-blue-50 to-white" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_#e0eefe,_transparent_50%)]" />
        
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-ds-neutral-900 mb-6">
              Fall Protection & Risk Management
              <span className="block text-ds-blue-600">Simplified</span>
            </h1>
            <p className="text-lg md:text-xl text-ds-neutral-700 max-w-3xl mx-auto mb-8">
              Enhance workplace safety, reduce liability, and lower insurance costs with our comprehensive safety compliance platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="rounded-full font-medium">
                <Link to="/auth">Get Started</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="rounded-full border-ds-blue-200 font-medium"
              >
                <Link to="#">Schedule Demo</Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            className="relative mx-auto overflow-hidden rounded-xl shadow-2xl max-w-5xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img 
              src="/lovable-uploads/97e464fc-ae77-4cd9-8487-436df7d422db.png" 
              alt="Construction worker on rooftop at sunset" 
              className="w-full h-auto object-cover rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ds-neutral-900 mb-4">
              Comprehensive Safety Management
            </h2>
            <p className="text-lg text-ds-neutral-700 max-w-2xl mx-auto">
              Our platform provides all the tools you need to manage workplace safety and meet regulatory requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="h-8 w-8 text-ds-blue-500" />,
                title: 'PPE & Equipment Inspections',
                description: 'Digital pre-use checklists ensure compliance with digital records of all inspections.'
              },
              {
                icon: <Shield className="h-8 w-8 text-ds-blue-500" />,
                title: 'Real-Time Fall Notifications',
                description: 'Immediate alerts improve rescue response time and reduce claim severity.'
              },
              {
                icon: <LineChart className="h-8 w-8 text-ds-blue-500" />,
                title: 'Compliance Tracking',
                description: 'Automate record-keeping for regulatory audits and insurance requirements.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl border border-ds-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-14 w-14 rounded-full bg-ds-blue-50 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-ds-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-ds-neutral-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-16 md:py-24 px-4 bg-ds-neutral-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ds-neutral-900 mb-4">
              Tailored for Every Team Member
            </h2>
            <p className="text-lg text-ds-neutral-700 max-w-2xl mx-auto">
              Different interfaces designed for the specific needs of users, safety professionals, and inspectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                role: 'Field Workers',
                features: [
                  'Simple mobile interface',
                  'Quick PPE inspection checklist',
                  'Fall detection integration',
                  'Multilingual support'
                ]
              },
              {
                role: 'Safety Professionals',
                features: [
                  'Comprehensive dashboard',
                  'Team inspection monitoring',
                  'Training certification tracking',
                  'Incident reporting system'
                ]
              },
              {
                role: 'Inspectors',
                features: [
                  'Batch inspection tools',
                  'RFID/barcode scanning',
                  'Media documentation',
                  'Digital signature verification'
                ]
              }
            ].map((role, index) => (
              <motion.div
                key={index}
                className="rounded-xl overflow-hidden bg-white shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-ds-blue-600 to-ds-blue-500 px-6 py-4">
                  <h3 className="text-xl font-semibold text-white">{role.role}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {role.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="h-5 w-5 rounded-full bg-ds-blue-100 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="h-3 w-3 text-ds-blue-600" />
                        </div>
                        <span className="text-ds-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-ds-neutral-100">
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full justify-between border-ds-blue-200 hover:bg-ds-blue-50"
                    >
                      <Link to="/auth">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-ds-blue-800 to-ds-blue-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Safety Program?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join industry leaders who trust Drop Stop to manage their fall protection compliance and risk mitigation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-ds-blue-700 hover:bg-ds-blue-50 rounded-full font-medium"
            >
              <Link to="/auth">Get Started Free</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="rounded-full border-white/30 text-white hover:bg-white/10 font-medium"
            >
              <Link to="#">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
