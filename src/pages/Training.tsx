import React from 'react';
import { motion } from 'framer-motion';
import { TooltipProvider } from '@/components/ui/tooltip';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleDashed, AlertCircle, CheckCircle2, Clock, Users, UserCheck, FileWarning } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import SafetyStatus from '@/components/ui-extensions/SafetyStatus';

const employeeTrainingStatuses = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Construction Worker',
    authorized: true,
    competent: false,
    lastTraining: '2023-06-12',
    nextDue: '2024-06-12',
    compliance: 85,
    status: 'compliant'
  },
  {
    id: 2,
    name: 'Maria Garcia',
    role: 'Site Supervisor',
    authorized: true,
    competent: true,
    lastTraining: '2023-05-22',
    nextDue: '2024-05-22',
    compliance: 100,
    status: 'compliant'
  },
  {
    id: 3,
    name: 'Derek Chen',
    role: 'Roofer',
    authorized: true,
    competent: false,
    lastTraining: '2023-09-05',
    nextDue: '2024-09-05',
    compliance: 70,
    status: 'at-risk'
  },
  {
    id: 4,
    name: 'Sarah Miller',
    role: 'Safety Officer',
    authorized: true,
    competent: true,
    lastTraining: '2023-03-17',
    nextDue: '2024-03-17',
    compliance: 95,
    status: 'compliant'
  },
  {
    id: 5,
    name: 'Jamal Wilson',
    role: 'Equipment Operator',
    authorized: false,
    competent: false,
    lastTraining: '2022-11-30',
    nextDue: '2023-11-30',
    compliance: 40,
    status: 'non-compliant'
  }
];

const certificationStats = {
  authorized: {
    total: 22,
    current: 18,
    expiring: 2,
    expired: 2
  },
  competent: {
    total: 12,
    current: 9,
    expiring: 1,
    expired: 2
  }
};

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
  }
];

const statusIcons = {
  'completed': <CheckCircle2 className="h-5 w-5 text-green-500" />,
  'in-progress': <CircleDashed className="h-5 w-5 text-blue-500" />,
  'not-started': <Clock className="h-5 w-5 text-gray-400" />,
  'overdue': <AlertCircle className="h-5 w-5 text-red-500" />,
};

const Training: React.FC = () => {
  return (
    <TooltipProvider>
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
                  <h1 className="text-3xl font-bold text-gray-900">Training Management</h1>
                  <p className="text-gray-600 mt-1">Oversee employee certifications and training compliance</p>
                </div>
                
                <div className="mt-4 md:mt-0 flex flex-wrap gap-3">
                  <Card className="bg-white border-none shadow-sm">
                    <CardContent className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <UserCheck className="text-ds-blue-600 h-10 w-10" />
                        <div>
                          <div className="text-2xl font-bold text-ds-blue-600">{certificationStats.authorized.current}/{certificationStats.authorized.total}</div>
                          <div className="text-xs text-gray-500">Authorized<br />Certified</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white border-none shadow-sm">
                    <CardContent className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <FileWarning className="text-amber-500 h-10 w-10" />
                        <div>
                          <div className="text-2xl font-bold text-amber-500">{certificationStats.authorized.expiring + certificationStats.competent.expiring}</div>
                          <div className="text-xs text-gray-500">Certs<br />Expiring Soon</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Certification Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-white border-none shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Authorized Person Certifications</CardTitle>
                    <CardDescription>Required annual certification</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Organization Compliance</span>
                        <span className="text-sm text-gray-500">{Math.round((certificationStats.authorized.current / certificationStats.authorized.total) * 100)}%</span>
                      </div>
                      <Progress value={(certificationStats.authorized.current / certificationStats.authorized.total) * 100} className="h-2" />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Current: {certificationStats.authorized.current}</span>
                        <span>Expiring Soon: {certificationStats.authorized.expiring}</span>
                        <span>Expired: {certificationStats.authorized.expired}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-none shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Competent Person Training</CardTitle>
                    <CardDescription>Required annual certification</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Organization Compliance</span>
                        <span className="text-sm text-gray-500">{Math.round((certificationStats.competent.current / certificationStats.competent.total) * 100)}%</span>
                      </div>
                      <Progress value={(certificationStats.competent.current / certificationStats.competent.total) * 100} className="h-2" />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Current: {certificationStats.competent.current}</span>
                        <span>Expiring Soon: {certificationStats.competent.expiring}</span>
                        <span>Expired: {certificationStats.competent.expired}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Employee Training Status Table */}
              <Card className="bg-white border-none shadow-sm mb-8">
                <CardHeader>
                  <CardTitle>Employee Training Status</CardTitle>
                  <CardDescription>Monitor employee certification compliance</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Employee</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Training</TableHead>
                        <TableHead>Next Due</TableHead>
                        <TableHead>Compliance</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {employeeTrainingStatuses.map(employee => (
                        <TableRow key={employee.id} className="cursor-pointer hover:bg-gray-50">
                          <TableCell className="font-medium">{employee.name}</TableCell>
                          <TableCell>{employee.role}</TableCell>
                          <TableCell>
                            {employee.authorized || employee.competent ? (
                              <div className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                                {employee.competent ? "Competent" : "Authorized"}
                              </div>
                            ) : (
                              <div className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                                Untrained
                              </div>
                            )}
                          </TableCell>
                          <TableCell>{new Date(employee.lastTraining).toLocaleDateString()}</TableCell>
                          <TableCell>{new Date(employee.nextDue).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Progress value={employee.compliance} className="h-2 w-20" />
                              <span className="text-sm">{employee.compliance}%</span>
                              <SafetyStatus 
                                status={employee.status === 'compliant' ? 'safe' : employee.status === 'at-risk' ? 'warning' : 'danger'} 
                                size="sm"
                              />
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Training Resources */}
              <Card className="bg-white border-none shadow-sm mb-8">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Training Resources</CardTitle>
                      <CardDescription>Modules available for employee certification</CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        Completed
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        In Progress
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                        Available
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {trainingModules.map(module => (
                      <div 
                        key={module.id} 
                        className="p-4 rounded-lg border border-gray-200 hover:border-ds-blue-300 hover:bg-ds-blue-50/30 transition-colors cursor-pointer h-full flex flex-col"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="inline-block px-2 py-1 bg-gray-100 rounded text-xs font-medium text-gray-700">
                            {module.category}
                          </div>
                          <div className="flex items-center">
                            {statusIcons[module.status as keyof typeof statusIcons]}
                          </div>
                        </div>
                        <h3 className="font-medium text-gray-900 mb-2">{module.title}</h3>
                        <p className="text-sm text-gray-600 flex-grow">{module.description}</p>
                        <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                          <div>Duration: {module.duration}</div>
                          <div className="capitalize">{module.status.replace('-', ' ')}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Critical Certification Alerts */}
              <Card className="bg-white border-none shadow-sm">
                <CardHeader>
                  <CardTitle>Critical Certification Alerts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg border border-amber-200 bg-amber-50">
                      <AlertCircle className="h-5 w-5 text-amber-500" />
                      <div className="flex-grow">
                        <p className="text-sm font-medium">5 employees have certifications expiring within 30 days</p>
                        <p className="text-xs text-gray-600">Send reminders to ensure timely renewal</p>
                      </div>
                      <button className="text-xs bg-white border border-gray-300 px-3 py-1 rounded hover:bg-gray-50">
                        View List
                      </button>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg border border-red-200 bg-red-50">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      <div className="flex-grow">
                        <p className="text-sm font-medium">3 employees have expired certifications</p>
                        <p className="text-xs text-gray-600">These employees should not perform restricted work</p>
                      </div>
                      <button className="text-xs bg-white border border-gray-300 px-3 py-1 rounded hover:bg-gray-50">
                        View List
                      </button>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg border border-green-200 bg-green-50">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <div className="flex-grow">
                        <p className="text-sm font-medium">Quarterly compliance report ready</p>
                        <p className="text-xs text-gray-600">Organization training compliance is at 78%</p>
                      </div>
                      <button className="text-xs bg-white border border-gray-300 px-3 py-1 rounded hover:bg-gray-50">
                        Download
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </main>
        
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Training;
