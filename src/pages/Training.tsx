
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleDashed, AlertCircle, CheckCircle2, Clock } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const trainingModules = [
  {
    id: 1,
    title: 'Fall Protection Basics',
    category: 'Authorized Person',
    description: 'Learn the fundamentals of fall protection equipment and safety protocols.',
    duration: '45 min',
    status: 'completed',
  },
  {
    id: 2,
    title: 'Harness Inspection',
    category: 'Authorized Person',
    description: 'Detailed procedures for inspecting harnesses and identifying defects.',
    duration: '30 min',
    status: 'in-progress',
  },
  {
    id: 3,
    title: 'Anchor Point Selection',
    category: 'Competent Person',
    description: 'Advanced techniques for selecting and evaluating anchor points.',
    duration: '60 min',
    status: 'not-started',
  },
  {
    id: 4,
    title: 'Rescue Planning',
    category: 'Competent Person',
    description: 'Creating and implementing effective rescue plans for fallen workers.',
    duration: '90 min',
    status: 'not-started',
  },
  {
    id: 5,
    title: 'Fall Protection Regulations',
    category: 'Authorized Person',
    description: 'Overview of OSHA and other regulatory requirements for fall protection.',
    duration: '60 min',
    status: 'completed',
  },
];

const statusIcons = {
  'completed': <CheckCircle2 className="h-5 w-5 text-green-500" />,
  'in-progress': <CircleDashed className="h-5 w-5 text-blue-500" />,
  'not-started': <Clock className="h-5 w-5 text-gray-400" />,
  'overdue': <AlertCircle className="h-5 w-5 text-red-500" />,
};

const Training: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Training Center</h1>
                <p className="text-gray-600 mt-1">Manage your certifications and access training modules</p>
              </div>
              <div className="mt-4 md:mt-0">
                <Card className="bg-white border-none shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-ds-blue-600">2/3</div>
                        <div className="text-xs text-gray-500">Certificates<br />Current</div>
                      </div>
                      <div className="h-10 w-px bg-gray-200"></div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-amber-500">1</div>
                        <div className="text-xs text-gray-500">Renewal<br />Needed</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Training Progress */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-white border-none shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Authorized Person Training</CardTitle>
                  <CardDescription>Required annual certification</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-gray-500">70%</span>
                    </div>
                    <Progress value={70} className="h-2" />
                    <div className="text-xs text-gray-500">Last updated: Jun 12, 2023</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-none shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Competent Person Training</CardTitle>
                  <CardDescription>Required biennial certification</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-gray-500">25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                    <div className="text-xs text-gray-500">Expires: Aug 30, 2023</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Training Modules */}
            <Card className="bg-white border-none shadow-sm mb-8">
              <CardHeader>
                <CardTitle>Available Training Modules</CardTitle>
                <CardDescription>Complete these modules to maintain your certifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trainingModules.map(module => (
                    <div 
                      key={module.id} 
                      className="p-4 rounded-lg border border-gray-200 hover:border-ds-blue-300 hover:bg-ds-blue-50/30 transition-colors cursor-pointer"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-gray-900">{module.title}</h3>
                          <div className="inline-block px-2 py-1 bg-gray-100 rounded text-xs font-medium text-gray-700 mt-1 mb-2">
                            {module.category}
                          </div>
                          <p className="text-sm text-gray-600">{module.description}</p>
                        </div>
                        <div className="flex items-center">
                          {statusIcons[module.status as keyof typeof statusIcons]}
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                        <div>Duration: {module.duration}</div>
                        <div className="capitalize">{module.status.replace('-', ' ')}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Deadlines */}
            <Card className="bg-white border-none shadow-sm">
              <CardHeader>
                <CardTitle>Certification Deadlines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-amber-200 bg-amber-50">
                    <AlertCircle className="h-5 w-5 text-amber-500" />
                    <div>
                      <p className="text-sm font-medium">Competent Person Certification Renewal</p>
                      <p className="text-xs text-gray-600">Due in 28 days</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-green-200 bg-green-50">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="text-sm font-medium">Authorized Person Certification</p>
                      <p className="text-xs text-gray-600">Current until May 15, 2024</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Training;
