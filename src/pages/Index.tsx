
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Shield, LineChart, ArrowRight, LogIn, FileText, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useAuth } from '@/contexts/AuthContext';
import HarnessIcon from '@/components/icons/HarnessIcon';
import CalendlyButton from '@/components/shared/CalendlyButton';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CALENDLY_URL = "https://calendly.com/drop-stop/demo";

const Index: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % 4);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Enhanced scroll animation variants
  const scrollAnimationVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Enhanced with more vibrant gradients and animations */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ds-blue-100 to-white" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_#c9e2ff,_transparent_70%)]" />
        <div className="absolute top-1/4 left-1/4 -z-10 w-64 h-64 bg-ds-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/3 -z-10 w-72 h-72 bg-ds-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" />
        
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              type: "spring",
              bounce: 0.4 
            }}
          >
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ds-neutral-900 mb-4 md:mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Fall Protection & Risk Management
              <motion.span 
                className="block text-transparent bg-gradient-to-r from-ds-blue-500 to-ds-blue-700 bg-clip-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Simplified
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-base md:text-lg lg:text-xl text-ds-neutral-700 max-w-3xl mx-auto mb-6 md:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Enhance workplace safety, reduce liability, and lower insurance costs with our comprehensive safety compliance platform.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {!isAuthenticated && (
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    asChild 
                    size="lg" 
                    className="w-full sm:w-auto rounded-full font-medium bg-gradient-to-r from-ds-blue-600 to-ds-blue-700 text-white hover:shadow-lg hover:shadow-ds-blue-200/50 border-0 transition-all duration-300"
                  >
                    <Link to="/auth">
                      <LogIn className="mr-2 h-5 w-5" />
                      <span>Member Login</span>
                    </Link>
                  </Button>
                </motion.div>
              )}
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full sm:w-auto rounded-full font-medium bg-gradient-to-r from-ds-blue-500 to-ds-blue-600 hover:shadow-lg hover:shadow-ds-blue-200/50 text-white border-0 transition-all duration-300"
                >
                  <Link to="/intake">Get Started</Link>
                </Button>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CalendlyButton 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto rounded-full border-ds-blue-200 font-medium hover:shadow-lg hover:border-ds-blue-300 transition-all duration-300"
                >
                  Schedule Demo
                </CalendlyButton>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative mx-auto overflow-hidden rounded-xl shadow-2xl max-w-5xl"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.6, 
              type: "spring",
              bounce: 0.2
            }}
          >
            <Carousel
              className="w-full"
              opts={{
                loop: true,
                align: "start",
              }}
              setApi={(api) => {
                if (api) {
                  api.on("select", () => {
                    setActiveIndex(api.selectedScrollSnap());
                  });
                }
              }}
            >
              <CarouselContent>
                <CarouselItem>
                  <img 
                    src="/lovable-uploads/0ada4541-4b46-4053-aa01-cf99e8c5be84.png" 
                    alt="Construction worker checking equipment and safety gear" 
                    className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-xl"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img 
                    src="/lovable-uploads/3fdab088-6d96-4a4e-8c93-9bef28e924c0.png" 
                    alt="Worker attaching safety equipment to harness" 
                    className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-xl"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img 
                    src="/lovable-uploads/cd0ec4fb-5d15-4358-8a76-afaac013a0a9.png" 
                    alt="Construction workers with safety harnesses on a roof" 
                    className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-xl"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img 
                    src="/lovable-uploads/027fc5cc-77a5-4445-b1a9-c0530485fb61.png" 
                    alt="Workers on suspended platform with safety equipment" 
                    className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-xl"
                  />
                </CarouselItem>
              </CarouselContent>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {[0, 1, 2, 3].map((index) => (
                  <motion.button
                    key={index}
                    className={`h-2 rounded-full transition-all ${
                      activeIndex === index ? "w-8 bg-white" : "w-2 bg-white/60"
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
              <CarouselPrevious className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white h-8 w-8 sm:h-10 sm:w-10" />
              <CarouselNext className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white h-8 w-8 sm:h-10 sm:w-10" />
            </Carousel>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section - Enhanced with gradients and staggered animations */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-white via-ds-neutral-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ds-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/5 w-80 h-80 bg-ds-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div 
            className="text-center mb-10 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ds-neutral-900 mb-3 md:mb-4">
              Comprehensive Safety Management
            </h2>
            <p className="text-base md:text-lg text-ds-neutral-700 max-w-2xl mx-auto">
              Our platform provides all the tools you need to manage high-risk workplace safety and meet regulatory requirements.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                icon: <CheckCircle className="h-8 w-8 text-white" />,
                title: 'PPE & Equipment Inspections',
                description: 'Digital pre-use checklists ensure compliance with digital records of all inspections.',
                gradient: 'from-ds-blue-500 to-ds-blue-600'
              },
              {
                icon: <Shield className="h-8 w-8 text-white" />,
                title: 'Real-Time Fall Notifications',
                description: 'Immediate alerts improve rescue response time and reduce claim severity.',
                gradient: 'from-ds-blue-400 to-ds-blue-500'
              },
              {
                icon: <LineChart className="h-8 w-8 text-white" />,
                title: 'Compliance Tracking',
                description: 'Automate record-keeping for regulatory audits and insurance requirements.',
                gradient: 'from-ds-blue-300 to-ds-blue-400'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-4 md:p-6 rounded-xl border border-ds-neutral-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-4px] group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className={`h-12 w-12 md:h-14 md:w-14 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-3 md:mb-4 shadow-md group-hover:shadow-lg transition-all duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-ds-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-sm md:text-base text-ds-neutral-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                icon: <FileText className="h-8 w-8 text-white" />,
                title: 'Incident & Near Miss Documentation',
                description: 'Document and analyze incidents to identify root causes and prevent future occurrences.',
                gradient: 'from-ds-blue-600 to-ds-blue-700'
              },
              {
                icon: <HarnessIcon className="h-8 w-8 text-white" size={32} />,
                title: 'PPE Library',
                description: 'Centralized repository for equipment specifications, manuals, and maintenance history.',
                gradient: 'from-ds-blue-500 to-ds-blue-600'
              },
              {
                icon: <Award className="h-8 w-8 text-white" />,
                title: 'Training & Certification Management',
                description: 'Tracks employee safety credentials, certifications, and training requirements to ensure compliance.',
                gradient: 'from-ds-blue-400 to-ds-blue-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-4 md:p-6 rounded-xl border border-ds-neutral-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-4px] group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className={`h-12 w-12 md:h-14 md:w-14 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-3 md:mb-4 shadow-md group-hover:shadow-lg transition-all duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-ds-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-sm md:text-base text-ds-neutral-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Roles Section - Enhanced with gradients and animations */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-ds-blue-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-ds-blue-100 to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-ds-blue-50 to-transparent opacity-30" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div 
            className="text-center mb-10 md:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-ds-neutral-900 mb-3 md:mb-4"
              variants={scrollAnimationVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: "-100px" }}
            >
              Tailored for Every Team Member
            </motion.h2>
            <motion.p 
              className="text-base md:text-lg text-ds-neutral-700 max-w-2xl mx-auto"
              variants={scrollAnimationVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: "-100px" }}
            >
              Different interfaces designed for the specific needs of users, safety professionals, and inspectors.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                role: 'Field Workers',
                gradient: 'from-ds-blue-600 via-ds-blue-500 to-ds-blue-600',
                features: [
                  'Simple mobile interface',
                  'Quick PPE inspection checklist',
                  'Fall detection integration',
                  'Multilingual support'
                ]
              },
              {
                role: 'Safety Professionals',
                gradient: 'from-ds-blue-500 via-ds-blue-400 to-ds-blue-500',
                features: [
                  'Comprehensive dashboard',
                  'Team inspection monitoring',
                  'Training certification tracking',
                  'Incident reporting system'
                ]
              },
              {
                role: 'Inspectors',
                gradient: 'from-ds-blue-400 via-ds-blue-300 to-ds-blue-400',
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
                className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`bg-gradient-to-r ${role.gradient} px-4 md:px-6 py-3 md:py-4`}>
                  <h3 className="text-lg md:text-xl font-semibold text-white">{role.role}</h3>
                </div>
                <div className="p-4 md:p-6">
                  <ul className="space-y-2 md:space-y-3">
                    {role.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-center gap-2 md:gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="h-4 w-4 md:h-5 md:w-5 rounded-full bg-ds-blue-100 flex items-center justify-center flex-shrink-0"
                          whileHover={{ scale: 1.2 }}
                        >
                          <CheckCircle className="h-2 w-2 md:h-3 md:w-3 text-ds-blue-600" />
                        </motion.div>
                        <span className="text-sm md:text-base text-ds-neutral-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Enhanced with gradient and animation */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-ds-blue-800 via-ds-blue-700 to-ds-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/97e464fc-ae77-4cd9-8487-436df7d422db.png')] bg-cover opacity-10 mix-blend-overlay" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
        
        <motion.div 
          className="container mx-auto max-w-4xl text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6"
            variants={itemVariants}
          >
            Ready to Enhance Your Safety Program?
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Join industry leaders who trust Drop Stop to manage their fall protection compliance and risk mitigation.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4"
            variants={containerVariants}
          >
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="w-full sm:w-auto bg-white text-ds-blue-700 hover:bg-ds-blue-50 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/intake">Get Started Free</Link>
              </Button>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CalendlyButton 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto rounded-full border-white/30 text-white hover:bg-ds-blue-500 bg-ds-blue-600 font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                Contact Sales
              </CalendlyButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
