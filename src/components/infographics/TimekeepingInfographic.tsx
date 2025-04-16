
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Shield, 
  CheckCircle2, 
  User, 
  Users, 
  ArrowRight,
  ClipboardCheck,
  LineChart,
  Clock8
} from 'lucide-react';

const TimekeepingInfographic: React.FC = () => {
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

  return (
    <div className="w-full bg-gradient-to-br from-ds-blue-50 to-white py-12 md:py-16 px-4 rounded-xl overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,_#c9e2ff,_transparent_70%)]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-ds-neutral-900 mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="inline-block">Timekeeping</span>{" "}
            <span className="inline-block relative">
              Solution
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-ds-blue-500"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg text-ds-neutral-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our modular timekeeping solution integrates with safety protocols to enhance compliance, 
            streamline reporting, and connect safety managers with field workers.
          </motion.p>
        </motion.div>

        {/* Main Infographic Display */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* First Column - Time Tracking */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-ds-neutral-100"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="mb-4 h-12 w-12 rounded-full bg-ds-blue-100 flex items-center justify-center">
              <Clock className="h-6 w-6 text-ds-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-ds-neutral-900">Accurate Time Tracking</h3>
            <p className="text-ds-neutral-700 mb-4">
              Precise logging of hours spent on safety-critical tasks ensures compliance with labor regulations 
              and provides data for safety performance metrics.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-ds-blue-500 mt-0.5 flex-shrink-0" />
                <span>Clock-in verification with location data</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-ds-blue-500 mt-0.5 flex-shrink-0" />
                <span>Automatic breaks and overtime calculation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-ds-blue-500 mt-0.5 flex-shrink-0" />
                <span>Task categorization for safety activities</span>
              </li>
            </ul>
          </motion.div>

          {/* Second Column - Integration */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-ds-neutral-100"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="mb-4 h-12 w-12 rounded-full bg-ds-blue-100 flex items-center justify-center">
              <Shield className="h-6 w-6 text-ds-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-ds-neutral-900">Safety Integration</h3>
            <p className="text-ds-neutral-700 mb-4">
              Links time data directly with safety protocols, ensuring workers complete required safety checks 
              before beginning work and during shifts.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-ds-blue-500 mt-0.5 flex-shrink-0" />
                <span>Pre-shift safety equipment verification</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-ds-blue-500 mt-0.5 flex-shrink-0" />
                <span>Scheduled safety check reminders</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-ds-blue-500 mt-0.5 flex-shrink-0" />
                <span>Incident reporting tied to time records</span>
              </li>
            </ul>
          </motion.div>

          {/* Third Column - Management Visibility */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-ds-neutral-100"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="mb-4 h-12 w-12 rounded-full bg-ds-blue-100 flex items-center justify-center">
              <Users className="h-6 w-6 text-ds-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-ds-neutral-900">Management Connection</h3>
            <p className="text-ds-neutral-700 mb-4">
              Elevates safety managers' ability to monitor compliance, connect with field workers, and make data-driven decisions.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-ds-blue-500 mt-0.5 flex-shrink-0" />
                <span>Real-time workforce visibility dashboard</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-ds-blue-500 mt-0.5 flex-shrink-0" />
                <span>Direct communication channels</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-ds-blue-500 mt-0.5 flex-shrink-0" />
                <span>Compliance analytics and reporting</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Workflow Process */}
        <motion.div 
          className="mt-8 md:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center text-ds-neutral-900">How It Strengthens Your Safety Program</h3>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-ds-blue-100 -translate-y-1/2 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 relative z-10">
              {[
                {
                  icon: <Clock8 className="h-6 w-6 text-ds-blue-600" />,
                  title: "Time Recording",
                  description: "Clock-in requires safety compliance verification"
                },
                {
                  icon: <ClipboardCheck className="h-6 w-6 text-ds-blue-600" />,
                  title: "Safety Checks",
                  description: "Equipment inspections linked to work sessions"
                },
                {
                  icon: <LineChart className="h-6 w-6 text-ds-blue-600" />,
                  title: "Data Analysis",
                  description: "Safety patterns identified through time data"
                },
                {
                  icon: <User className="h-6 w-6 text-ds-blue-600" />,
                  title: "Safety Culture",
                  description: "Reinforces accountability and compliance"
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-5 rounded-lg shadow-sm flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="mb-3 h-14 w-14 rounded-full bg-ds-blue-50 flex items-center justify-center relative">
                    <span className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center bg-ds-blue-500 rounded-full text-white text-sm font-medium">
                      {index + 1}
                    </span>
                    {step.icon}
                  </div>
                  <h4 className="text-md font-semibold mb-1 text-ds-neutral-900">{step.title}</h4>
                  <p className="text-sm text-ds-neutral-600">{step.description}</p>
                  {index < 3 && (
                    <ArrowRight className="h-5 w-5 text-ds-blue-400 mt-3 hidden md:block" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Customization Callout */}
        <motion.div 
          className="mt-10 bg-ds-blue-600 text-white p-6 rounded-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-ds-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-ds-blue-700 rounded-full mix-blend-overlay filter blur-3xl opacity-60 translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Customizable to Your Organization's Needs</h3>
              <p className="text-ds-blue-100">
                Adapt our timekeeping solution to match your unique workflow, compliance requirements, and organizational structure.
              </p>
            </div>
            <motion.div 
              className="flex flex-wrap gap-3 justify-center md:justify-end"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {["Integration", "Reporting", "Mobile Access", "Custom Fields"].map((feature, index) => (
                <motion.span
                  key={index}
                  className="bg-white/10 px-3 py-1 rounded-full text-sm backdrop-blur-sm"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  {feature}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TimekeepingInfographic;
