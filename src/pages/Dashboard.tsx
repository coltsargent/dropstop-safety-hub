
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  Calendar,
  Check, 
  Clipboard, 
  Clock, 
  FileText,
  Shield,
  User,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  UserCheck,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAuth } from '@/contexts/AuthContext';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import TimesheetDetails from '@/components/timesheets/TimesheetDetails';
import TimesheetSummaryCard from '@/components/timesheets/TimesheetSummaryCard';

interface User {
  id: string;
  name: string;
  role: string;
  photo?: string;
  status: 'active' | 'offline' | 'away';
}

interface TimeRecord {
  id: string;
  employee: string;
  employeeId: string;
  date: string;
  hoursWorked: number;
  status: 'approved' | 'pending' | 'rejected';
}

interface TimeSheet {
  id: string;
  employee: string;
  role: string;
  weekStarting: string;
  hoursWorked: number;
  status: 'approved' | 'pending' | 'rejected';
  lastSubmitted: string;
}

const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    role: 'Field Worker',
    status: 'active'
  },
  {
    id: '2',
    name: 'Jane Smith',
    role: 'Inspector',
    status: 'active'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    role: 'Field Worker',
    status: 'offline'
  },
  {
    id: '4',
    name: 'Sarah Williams',
    role: 'Field Worker',
    status: 'away'
  }
];

const mockTimeRecords: TimeRecord[] = [
  {
    id: '1',
    employee: 'John Doe',
    employeeId: '1',
    date: '2024-04-15',
    hoursWorked: 8.5,
    status: 'approved'
  },
  {
    id: '2',
    employee: 'Jane Smith',
    employeeId: '2',
    date: '2024-04-15',
    hoursWorked: 7.75,
    status: 'approved'
  },
  {
    id: '3',
    employee: 'Mike Johnson',
    employeeId: '3',
    date: '2024-04-15',
    hoursWorked: 9,
    status: 'pending'
  },
  {
    id: '4',
    employee: 'John Doe',
    employeeId: '1',
    date: '2024-04-16',
    hoursWorked: 8.25,
    status: 'pending'
  },
  {
    id: '5',
    employee: 'Sarah Williams',
    employeeId: '4',
    date: '2024-04-16',
    hoursWorked: 6,
    status: 'pending'
  }
];

const mockTimeSheets: TimeSheet[] = [
  {
    id: '1',
    employee: 'John Doe',
    role: 'Field Worker',
    weekStarting: '2024-04-15',
    hoursWorked: 40.5,
    status: 'pending',
    lastSubmitted: '2024-04-19T15:30:00Z'
  },
  {
    id: '2',
    employee: 'Jane Smith',
    role: 'Inspector',
    weekStarting: '2024-04-15',
    hoursWorked: 38.75,
    status: 'pending',
    lastSubmitted: '2024-04-19T16:45:00Z'
  },
  {
    id: '3',
    employee: 'Mike Johnson',
    role: 'Field Worker',
    weekStarting: '2024-04-08',
    hoursWorked: 42,
    status: 'approved',
    lastSubmitted: '2024-04-12T17:00:00Z'
  },
  {
    id: '4',
    employee: 'Sarah Williams',
    role: 'Field Worker',
    weekStarting: '2024-04-08',
    hoursWorked: 35.5,
    status: 'rejected',
    lastSubmitted: '2024-04-12T14:20:00Z'
  }
];

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [selectedTimesheet, setSelectedTimesheet] = useState<TimeSheet | null>(null);
  const [timesheetModalOpen, setTimesheetModalOpen] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  
  const filteredTimesheets = selectedFilter === 'all' 
    ? mockTimeSheets 
    : mockTimeSheets.filter(ts => ts.status === selectedFilter);
  
  const pendingTimesheets = mockTimeSheets.filter(ts => ts.status === 'pending');
  const totalHoursThisWeek = mockTimeRecords
    .filter(record => new Date(record.date) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000))
    .reduce((sum, record) => sum + record.hoursWorked, 0);

  const handleViewTimesheet = (timesheet: TimeSheet) => {
    setSelectedTimesheet(timesheet);
    setTimesheetModalOpen(true);
  };
  
  const handleApproveTimesheet = () => {
    toast({
      title: "Timesheet Approved",
      description: `You have approved ${selectedTimesheet?.employee}'s timesheet.`,
    });
    setTimesheetModalOpen(false);
  };
  
  const handleRejectTimesheet = () => {
    toast({
      title: "Timesheet Rejected",
      description: `You have rejected ${selectedTimesheet?.employee}'s timesheet.`,
    });
    setTimesheetModalOpen(false);
  };

  const handleOpenTimesheetsTab = () => {
    // Find the timesheets tab and click it
    const timesheetsTab = document.querySelector('[data-value="timesheets"]');
    if (timesheetsTab) {
      (timesheetsTab as HTMLElement).click();
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Supervisor Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome, {user?.name || 'Supervisor'}. Monitor your team's activities and safety status.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Safety Overview</CardTitle>
                <CardDescription>
                  Monitor your team's safety compliance and active inspections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-green-50 p-4 rounded-md flex items-center gap-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Equipment Inspected</p>
                        <p className="text-2xl font-semibold">94%</p>
                      </div>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-md flex items-center gap-3">
                      <div className="bg-yellow-100 p-2 rounded-full">
                        <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Reported Issues</p>
                        <p className="text-2xl font-semibold">3</p>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-md flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <UserCheck className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Active Users</p>
                        <p className="text-2xl font-semibold">{mockUsers.filter(u => u.status === 'active').length}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Team Status</h3>
                    <div className="border rounded-lg overflow-hidden">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Employee</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Last Activity</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {mockUsers.map(user => (
                            <TableRow key={user.id}>
                              <TableCell className="font-medium">{user.name}</TableCell>
                              <TableCell>{user.role}</TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <div className={`h-2 w-2 rounded-full ${
                                    user.status === 'active' ? 'bg-green-500' :
                                    user.status === 'away' ? 'bg-yellow-500' : 'bg-gray-500'
                                  }`}></div>
                                  <span className="capitalize">{user.status}</span>
                                </div>
                              </TableCell>
                              <TableCell>5 mins ago</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-4">
            <TimesheetSummaryCard 
              pendingCount={pendingTimesheets.length} 
              totalHours={totalHoursThisWeek}
              onClick={handleOpenTimesheetsTab}
            />
          </div>
        </div>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="timesheets" data-value="timesheets">Timesheets</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Safety Metrics</CardTitle>
                <CardDescription>
                  View safety performance metrics for the current week
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">PPE Compliance</span>
                    <span className="text-sm font-medium">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Inspections Completed</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Training Attendance</span>
                    <span className="text-sm font-medium">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Incident Reporting</span>
                    <span className="text-sm font-medium">100%</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Latest safety activities from your team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Clipboard className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">John Doe completed harness inspection</p>
                      <p className="text-sm text-muted-foreground">Today, 10:30 AM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Safety training completed by 3 team members</p>
                      <p className="text-sm text-muted-foreground">Yesterday, 2:15 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-medium">Equipment issue reported by Jane Smith</p>
                      <p className="text-sm text-muted-foreground">Yesterday, 11:05 AM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Activity</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="timesheets" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle>Employee Timesheets</CardTitle>
                    <CardDescription>
                      Review and approve employee time records
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant={selectedFilter === 'all' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => setSelectedFilter('all')}
                    >
                      All
                    </Button>
                    <Button 
                      variant={selectedFilter === 'pending' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => setSelectedFilter('pending')}
                    >
                      Pending
                    </Button>
                    <Button 
                      variant={selectedFilter === 'approved' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => setSelectedFilter('approved')}
                    >
                      Approved
                    </Button>
                    <Button 
                      variant={selectedFilter === 'rejected' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => setSelectedFilter('rejected')}
                    >
                      Rejected
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 mb-4">
                  <Input 
                    placeholder="Search employee..." 
                    className="max-w-sm" 
                  />
                  <Button variant="outline">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    Filter by Date
                  </Button>
                </div>
                
                <div className="border rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Employee</TableHead>
                        <TableHead>Week Starting</TableHead>
                        <TableHead>Hours</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Submitted</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredTimesheets.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-6">
                            No timesheets found matching the selected filter.
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredTimesheets.map((timesheet) => (
                          <TableRow key={timesheet.id}>
                            <TableCell>
                              <div>
                                <p className="font-medium">{timesheet.employee}</p>
                                <p className="text-sm text-muted-foreground">{timesheet.role}</p>
                              </div>
                            </TableCell>
                            <TableCell>
                              {new Date(timesheet.weekStarting).toLocaleDateString()}
                            </TableCell>
                            <TableCell>{timesheet.hoursWorked}</TableCell>
                            <TableCell>
                              <Badge className={`${
                                timesheet.status === 'approved' 
                                  ? 'bg-green-100 text-green-800 border-green-200' 
                                  : timesheet.status === 'rejected'
                                  ? 'bg-red-100 text-red-800 border-red-200'
                                  : 'bg-yellow-100 text-yellow-800 border-yellow-200'
                              }`}>
                                {timesheet.status.charAt(0).toUpperCase() + timesheet.status.slice(1)}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              {new Date(timesheet.lastSubmitted).toLocaleDateString()}
                            </TableCell>
                            <TableCell className="text-right">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleViewTimesheet(timesheet)}
                              >
                                View Details
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">
                  Showing {filteredTimesheets.length} of {mockTimeSheets.length} timesheets
                </div>
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Export Timesheet Data
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="compliance">
            <Card>
              <CardHeader>
                <CardTitle>Compliance Reports</CardTitle>
                <CardDescription>
                  Track team safety compliance and identify areas for improvement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Training Compliance</h3>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>Fall Protection</span>
                          <span>90%</span>
                        </div>
                        <Progress value={90} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>Confined Space</span>
                          <span>85%</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>PPE Usage</span>
                          <span>95%</span>
                        </div>
                        <Progress value={95} className="h-2" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Inspection Compliance</h3>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>Harnesses</span>
                          <span>88%</span>
                        </div>
                        <Progress value={88} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>Lanyards</span>
                          <span>92%</span>
                        </div>
                        <Progress value={92} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>Anchor Points</span>
                          <span>78%</span>
                        </div>
                        <Progress value={78} className="h-2" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Documentation Compliance</h3>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>Job Hazard Analysis</span>
                          <span>82%</span>
                        </div>
                        <Progress value={82} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>Safety Data Sheets</span>
                          <span>95%</span>
                        </div>
                        <Progress value={95} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>Incident Reports</span>
                          <span>100%</span>
                        </div>
                        <Progress value={100} className="h-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Download Full Reports</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      {selectedTimesheet && (
        <TimesheetDetails
          isOpen={timesheetModalOpen}
          onClose={() => setTimesheetModalOpen(false)}
          timesheet={selectedTimesheet}
          onApprove={handleApproveTimesheet}
          onReject={handleRejectTimesheet}
        />
      )}
    </motion.div>
  );
};

export default Dashboard;
