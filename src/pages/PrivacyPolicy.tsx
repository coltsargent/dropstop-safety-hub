
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Link } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PrivacyPolicy = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3
      }
    }
  };

  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex-grow container mx-auto px-4 py-24"
      >
        <Card className="max-w-4xl mx-auto shadow-md">
          <CardContent className="p-8">
            <Tabs defaultValue="privacy" className="mb-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
                <TabsTrigger value="terms">Terms of Service</TabsTrigger>
              </TabsList>
              
              <TabsContent value="privacy">
                <h1 className="text-3xl font-bold text-ds-blue-800 mb-8">Privacy Policy</h1>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-ds-blue-700 mb-4">1. Information We Collect</h2>
                  <p className="mb-3">We may collect the following types of information:</p>
                  
                  <h3 className="text-lg font-medium text-ds-blue-600 mt-4 mb-2">Information You Provide</h3>
                  <ul className="list-disc ml-6 mb-3 space-y-1">
                    <li>Name, email, phone number, job title, company name</li>
                    <li>Account registration details</li>
                    <li>Inspection records, equipment entries, and other safety data</li>
                  </ul>
                  
                  <h3 className="text-lg font-medium text-ds-blue-600 mt-4 mb-2">Automatically Collected Information</h3>
                  <ul className="list-disc ml-6 mb-3 space-y-1">
                    <li>Browser type, device information, IP address</li>
                    <li>Usage data from interaction with our platform (e.g., page views, clicks)</li>
                  </ul>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-ds-blue-700 mb-4">2. How We Use Your Information</h2>
                  <p className="mb-3">We use your information to:</p>
                  <ul className="list-disc ml-6 mb-3 space-y-1">
                    <li>Provide and improve our software and services</li>
                    <li>Manage user accounts and access</li>
                    <li>Communicate about updates, new features, or support issues</li>
                    <li>Ensure security, compliance, and performance of the platform</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-ds-blue-700 mb-4">3. Sharing Your Information</h2>
                  <p className="mb-3">We do not sell your personal data. We may share limited information with:</p>
                  <ul className="list-disc ml-6 mb-3 space-y-1">
                    <li>Trusted service providers (e.g., cloud hosting, analytics tools)</li>
                    <li>Legal authorities, when required by law</li>
                    <li>Partners or insurance providers (only when explicitly agreed to by the user or client)</li>
                  </ul>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-ds-blue-700 mb-4">4. Data Security</h2>
                  <p className="mb-3">We implement industry-standard technical and organizational measures to protect your data from unauthorized access, disclosure, alteration, or destruction.</p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-ds-blue-700 mb-4">5. Your Rights & Choices</h2>
                  <p className="mb-3">Depending on your location, you may have the right to:</p>
                  <ul className="list-disc ml-6 mb-3 space-y-1">
                    <li>Access the personal data we hold about you</li>
                    <li>Correct or delete your data</li>
                    <li>Object to processing or request data portability</li>
                  </ul>
                  <p className="mb-3">To make a request, contact us at <a href="mailto:colt.sargent@dropstopsafety.com" className="text-ds-blue-600 hover:underline">colt.sargent@dropstopsafety.com</a></p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-ds-blue-700 mb-4">6. Data Retention</h2>
                  <p className="mb-3">We retain your information for as long as necessary to provide our services and to comply with our legal obligations. You may request deletion at any time (unless we are legally required to retain it).</p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-ds-blue-700 mb-4">7. Cookies</h2>
                  <p className="mb-3">Our website may use cookies and similar technologies to enhance your experience and analyze usage patterns. You can disable cookies through your browser settings.</p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-ds-blue-700 mb-4">8. Third-Party Links</h2>
                  <p className="mb-3">Our site may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.</p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-ds-blue-700 mb-4">9. Children's Privacy</h2>
                  <p className="mb-3">Our services are not directed to individuals under the age of 13, and we do not knowingly collect personal information from children.</p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-ds-blue-700 mb-4">10. Changes to This Policy</h2>
                  <p className="mb-3">We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date.</p>
                </section>
                
                <section className="mb-4">
                  <h2 className="text-xl font-semibold text-ds-blue-700 mb-4">11. Contact Us</h2>
                  <p className="mb-3">If you have questions or concerns about this policy, please contact us:</p>
                  <div className="bg-ds-blue-50 p-4 rounded-md">
                    <p className="font-medium mb-2">Drop Stop Safety</p>
                    <div className="flex items-center mb-1">
                      <Mail className="h-4 w-4 mr-2 text-ds-blue-600" />
                      <a href="mailto:colt.sargent@dropstopsafety.com" className="text-ds-blue-600 hover:underline">
                        colt.sargent@dropstopsafety.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Link className="h-4 w-4 mr-2 text-ds-blue-600" />
                      <a href="https://dropstopsafety.com" target="_blank" rel="noopener noreferrer" className="text-ds-blue-600 hover:underline">
                        https://dropstopsafety.com
                      </a>
                    </div>
                  </div>
                </section>
              </TabsContent>
              
              <TabsContent value="terms">
                <h1 className="text-3xl font-bold text-ds-blue-800 mb-8">Terms of Service</h1>
                <p className="mb-4 text-sm text-ds-neutral-600">Effective Date: {currentDate}</p>
                <p className="mb-6">Welcome to Drop Stop Safety. These Terms of Service ("Terms") govern your access to and use of our website and software platform ("Services").</p>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-ds-blue-700 mb-4">1. Acceptance of Terms</h2>
                  <p className="mb-3">By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, please do not use the Services.</p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-ds-blue-700 mb-4">2. Use of Services</h2>
                  <p className="mb-3">You agree to use the Services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-ds-blue-700 mb-4">3. User Content</h2>
                  <p className="mb-3">You retain ownership of any content or data you submit through the Services. By submitting content, you grant us a non-exclusive, royalty-free license to use, host, and process it for the purpose of providing the Services.</p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-ds-blue-700 mb-4">4. Prohibited Conduct</h2>
                  <p className="mb-3">You may not use the Services to:</p>
                  <ul className="list-disc ml-6 mb-3 space-y-1">
                    <li>Violate any law or regulation</li>
                    <li>Infringe on the rights of others</li>
                    <li>Distribute viruses or other harmful code</li>
                    <li>Attempt to gain unauthorized access to the Services</li>
                  </ul>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-ds-blue-700 mb-4">5. Intellectual Property</h2>
                  <p className="mb-3">All content, trademarks, and software associated with the Services are the property of Drop Stop Safety or its licensors. You may not use them without our prior written consent.</p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-ds-blue-700 mb-4">6. Termination</h2>
                  <p className="mb-3">We may suspend or terminate your access to the Services at our discretion, without notice, for conduct that we believe violates these Terms or is otherwise harmful to other users or us.</p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-ds-blue-700 mb-4">7. Disclaimers</h2>
                  <p className="mb-3">The Services are provided "as is" and "as available" without warranties of any kind. We do not guarantee that the Services will be uninterrupted or error-free.</p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-ds-blue-700 mb-4">8. Limitation of Liability</h2>
                  <p className="mb-3">To the maximum extent permitted by law, Drop Stop Safety shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Services.</p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-ds-blue-700 mb-4">9. Changes to Terms</h2>
                  <p className="mb-3">We may update these Terms from time to time. Continued use of the Services after changes constitutes acceptance of the new Terms.</p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-ds-blue-700 mb-4">10. Governing Law</h2>
                  <p className="mb-3">These Terms shall be governed by and construed in accordance with the laws of the State of Utah, without regard to its conflict of laws principles.</p>
                </section>
                
                <section className="mb-4">
                  <h2 className="text-xl font-semibold text-ds-blue-700 mb-4">11. Contact</h2>
                  <p className="mb-3">If you have questions about these Terms, please contact us:</p>
                  <div className="bg-ds-blue-50 p-4 rounded-md">
                    <p className="font-medium mb-2">Drop Stop Safety</p>
                    <div className="flex items-center mb-1">
                      <Mail className="h-4 w-4 mr-2 text-ds-blue-600" />
                      <a href="mailto:colt.sargent@dropstopsafety.com" className="text-ds-blue-600 hover:underline">
                        colt.sargent@dropstopsafety.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Link className="h-4 w-4 mr-2 text-ds-blue-600" />
                      <a href="https://dropstopsafety.com" target="_blank" rel="noopener noreferrer" className="text-ds-blue-600 hover:underline">
                        https://dropstopsafety.com
                      </a>
                    </div>
                  </div>
                </section>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
