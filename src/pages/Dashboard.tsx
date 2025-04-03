import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar,
  ClipboardCheck,
  Users,
  AlertTriangle,
  Clock,
  ChevronRight,
  Shield,
  Bell,
  ArrowUpRight,
  BarChart4,
  CheckCircle,
  HardHat,
  ArrowDown,
  ArrowUp,
  Award,
  BookOpen,
  Calendar as CalendarIcon,
  CheckCircle2,
  XCircle,
  Filter,
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SafetyStatus from '@/components/ui-extensions/SafetyStatus';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { format } from 'date-fns';

const Dashboard: React.FC = () => {
  const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false);
  
  const stats = [
    { 
      title: 'Team Members', 
      value: '24', 
      icon: <Users className="h-5 w-5 text-ds-blue-600" />,
      change: '+2 this month',
      trend: 'up'
    },
    { 
      title: 'Inspections Today', 
      value: '18/24', 
      icon: <ClipboardCheck className="h-5 w-5 text-ds-blue-600" />,
      change: '75% compliance',
      trend: 'neutral'
    },
    { 
      title: 'Equipment Items', 
      value: '86', 
      icon: <HardHat className="h-5 w-5 text-ds-blue-600" />,
      change: '12 need inspection',
      trend: 'neutral'
    },
    { 
      title: 'Safety Incidents', 
      value: '0', 
      icon: <AlertTriangle className="h-5 w-5 text-ds-success-500" />,
      change: '-2 from last month',
      trend: 'down'
    },
  ];

  const teamMembers = [
    { 
      id: 1, 
      name: 'John Doe', 
      role: 'Roofer', 
      status: 'complete', 
      lastInspection: new Date('2023-06-15T10:30:00') 
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      role: 'Utilities Worker', 
      status: 'complete', 
      lastInspection: new Date('2023-06-15T11:45:00') 
    },
    { 
      id: 3, 
      name: 'Mike Johnson', 
      role: 'Window Cleaner', 
      status: 'incomplete', 
      lastInspection: new Date('2023-06-12T09:15:00') 
    },
    { 
      id: 4, 
      name: 'Sarah Williams', 
      role: 'Roofer', 
      status: 'incomplete', 
      lastInspection: null 
    },
    { 
      id: 5, 
      name: 'David Brown', 
      role: 'Utilities Worker', 
      status: 'complete', 
      lastInspection: new Date('2023-06-15T12:20:00') 
    },
  ];

  const filteredTeamMembers = showOnlyIncomplete 
    ? teamMembers.filter(member => member.status === 'incomplete')
    : teamMembers;

  const equipmentItems = [
    { id: 'HAR-001', name: 'Full Body Harness', type: 'Harness', lastInspection: '2023-10-01', nextInspection: '2024-01-01', status: 'safe' },
    { id: 'LAN-003', name: 'Self-Retracting Lanyard', type: 'Lanyard', lastInspection: '2023-11-15', nextInspection: '2023-12-15', status: 'warning' },
    { id: 'ANC-007', name: 'Roof Anchor Point', type: 'Anchor', lastInspection: '2023-09-10', nextInspection: '2024-03-10', status: 'safe' },
    { id: 'HAR-015', name: 'Construction Harness', type: 'Harness', lastInspection: '2023-08-22', nextInspection: '2023-11-22', status: 'danger' },
  ];

  const upcomingTraining = [
    { id: 1, name: 'Fall Protection Awareness', date: '2023-12-10', attendees: 8 },
    { id: 2, name: 'Equipment Inspection', date: '2023-12-15', attendees: 12 },
    { id: 3, name: 'Rescue Procedures', date: '2023-12-22', attendees: 15 },
  ];

  const teamTrainingStatus = [
    { 
      id: 1, 
      name: 'John Doe', 
      role: 'Roofer', 
      authorizedTraining: { 
        completed: '2023-10-15', 
        expires: '2024-10-15',
        status: 'valid'
      },
      competentTraining: { 
        completed: '2023-08-10', 
        expires: '2024-08-10',
        status: 'valid'
      }
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      role: 'Utilities Worker', 
      authorizedTraining: { 
        completed: '2023-04-22', 
        expires: '2024-04-22',
        status: 'expiring-soon'
      },
      competentTraining: { 
        completed: '2023-11-05', 
        expires: '2024-11-05',
        status: 'valid'
      }
    },
    { 
      id: 3, 
      name: 'Mike Johnson', 
      role: 'Window Cleaner', 
      authorizedTraining: { 
        completed: '2023-05-12', 
        expires: '2024-05-12',
        status: 'expiring-soon'
      },
      competentTraining: null
    },
    { 
      id: 4, 
      name: 'Sarah Williams', 
      role: 'Roofer', 
      authorizedTraining: { 
        completed: '2023-01-15', 
        expires: '2024-01-15',
        status: 'expired'
      },
      competentTraining: { 
        completed: '2022-12-05', 
        expires: '2023-12-05',
        status: 'expired'
      }
    },
    { 
      id: 5, 
      name: 'David Brown', 
      role: 'Utilities Worker', 
      authorizedTraining: { 
        completed: '2023-11-20', 
        expires: '2024-11-20',
        status: 'valid'
      },
      competentTraining: null
    },
  ];

  const trainingMetrics = {
    authorized: {
      valid: 3,
      expiringSoon: 2,
      expired: 1,
      total: 6
    },
    competent: {
      valid: 2,
      expiringSoon: 0,
      expired: 1,
      total: 3
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'valid': return 'text-ds-success-600';
      case 'expiring-soon': return 'text-ds-warning-500';
      case 'expired': return 'text-ds-danger-500';
      default: return 'text-ds-neutral-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'valid': return <CheckCircle className="h-4 w-4 text-ds-success-500" />;
      case 'expiring-soon': return <Clock className="h-4 w-4 text-ds-warning-500" />;
      case 'expired': return <AlertTriangle className="h-4 w-4 text-ds-danger-500" />;
      default: return null;
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-ds-neutral-50">
      <Header />
      
      <main className="flex-grow pt-16 px-4">
        <div className="container mx-auto py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold text-ds-neutral-900">Safety Dashboard</h1>
              <p className="text-ds-neutral-600">
                <span className="font-medium">Good morning, Safety Manager</span> • {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </motion.div>
            
            <motion.div
              className="flex items-center gap-2 mt-4 md:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button variant="outline" className="gap-1 border-ds-neutral-200">
                <Calendar className="h-4 w-4 text-ds-neutral-500" />
                <span>Schedule</span>
              </Button>
              <Button className="gap-1">
                <Bell className="h-4 w-4" />
                <span>Alerts</span>
              </Button>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-ds-neutral-200">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-ds-neutral-500">{stat.title}</p>
                        <h3 className="text-2xl font-bold mt-1 text-ds-neutral-900">{stat.value}</h3>
                        <div className="flex items-center mt-1">
                          {stat.trend === 'up' && <ArrowUp className="h-3 w-3 text-ds-blue-600 mr-1" />}
                          {stat.trend === 'down' && <ArrowDown className="h-3 w-3 text-ds-success-600 mr-1" />}
                          <span className={`text-xs ${stat.trend === 'up' ? 'text-ds-blue-600' : stat.trend === 'down' ? 'text-ds-success-600' : 'text-ds-neutral-500'}`}>
                            {stat.change}
                          </span>
                        </div>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-ds-blue-50 flex items-center justify-center">
                        {stat.icon}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="border-ds-neutral-200">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle>Team Inspection Status</CardTitle>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className={`gap-1 ${showOnlyIncomplete ? 'bg-ds-neutral-100 text-ds-blue-600' : 'text-ds-blue-600'}`}
                        onClick={() => setShowOnlyIncomplete(!showOnlyIncomplete)}
                      >
                        <Filter className="h-4 w-4" />
                        <span>{showOnlyIncomplete ? 'Show All' : 'Show Incomplete'}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-1 text-ds-blue-600">
                        <span>View All</span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardDescription>Daily PPE inspection compliance</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Inspection</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredTeamMembers.map((member) => (
                        <TableRow key={member.id}>
                          <TableCell className="font-medium">{member.name}</TableCell>
                          <TableCell>{member.role}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              {member.status === 'complete' ? (
                                <CheckCircle2 className="h-5 w-5 text-ds-success-500" />
                              ) : (
                                <XCircle className="h-5 w-5 text-ds-danger-500" />
                              )}
                              <span className="text-sm capitalize">
                                {member.status === 'complete' ? 'Complete' : 'Incomplete'}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="text-ds-neutral-600">
                            {member.lastInspection 
                              ? format(member.lastInspection, 'MMM d, yyyy h:mm a')
                              : 'Not completed'}
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="border-ds-neutral-200 mb-6">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2">
                    {[
                      { icon: <ClipboardCheck className="h-4 w-4" />, label: 'New Inspection', path: '/inspection' },
                      { icon: <Shield className="h-4 w-4" />, label: 'Safety Meeting', path: '#' },
                      { icon: <Users className="h-4 w-4" />, label: 'Add Team Member', path: '#' },
                      { icon: <AlertTriangle className="h-4 w-4" />, label: 'Report Incident', path: '#' },
                    ].map((action, index) => (
                      <Button 
                        key={index} 
                        variant="outline" 
                        className="w-full justify-start gap-3 border-ds-neutral-200"
                        asChild
                      >
                        <Link to={action.path}>
                          <div className="h-8 w-8 rounded-full bg-ds-blue-50 flex items-center justify-center flex-shrink-0">
                            {action.icon}
                          </div>
                          <span>{action.label}</span>
                        </Link>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-ds-neutral-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Notifications</CardTitle>
                    <Button variant="ghost" size="sm" className="gap-1 text-ds-blue-600">
                      <span>View All</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { 
                        icon: <Clock className="h-4 w-4 text-ds-warning-500" />, 
                        title: 'Inspection Due', 
                        description: 'Mike Johnson - 3 days since last inspection',
                        time: '2 hours ago'
                      },
                      { 
                        icon: <Calendar className="h-4 w-4 text-ds-blue-500" />, 
                        title: 'Upcoming Training', 
                        description: 'Fall Protection Awareness on Dec 10',
                        time: '5 hours ago'
                      },
                      { 
                        icon: <CheckCircle className="h-4 w-4 text-ds-success-500" />, 
                        title: 'Equipment Inspected', 
                        description: 'David Brown completed 3 equipment inspections',
                        time: 'Yesterday'
                      },
                    ].map((notification, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="h-8 w-8 rounded-full bg-ds-neutral-100 flex items-center justify-center flex-shrink-0">
                          {notification.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium">{notification.title}</h4>
                            <span className="text-xs text-ds-neutral-500">{notification.time}</span>
                          </div>
                          <p className="text-xs text-ds-neutral-600 mt-1">{notification.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="border-ds-neutral-200">
              <CardHeader className="pb-0">
                <CardTitle>Management Tools</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <Tabs defaultValue="equipment" className="space-y-4">
                  <TabsList className="grid grid-cols-3">
                    <TabsTrigger value="equipment">Equipment</TabsTrigger>
                    <TabsTrigger value="training">Training</TabsTrigger>
                    <TabsTrigger value="reports">Reports</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="equipment">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Item</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Last Inspection</TableHead>
                          <TableHead>Next Inspection</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {equipmentItems.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell className="font-medium">{item.id}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.type}</TableCell>
                            <TableCell>{item.lastInspection}</TableCell>
                            <TableCell>{item.nextInspection}</TableCell>
                            <TableCell>
                              <SafetyStatus status={item.status as any} showLabel />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" className="gap-1 border-ds-neutral-200">
                        <span>View All Equipment</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="training">
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <Card className="border-ds-neutral-200">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Authorized Person Training</CardTitle>
                            <CardDescription>Level 1 Safety Certification</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex justify-between items-center mb-4">
                              <div className="flex items-center gap-2">
                                <div className="h-10 w-10 rounded-full bg-ds-blue-50 flex items-center justify-center">
                                  <Award className="h-5 w-5 text-ds-blue-600" />
                                </div>
                                <div>
                                  <p className="text-sm text-ds-neutral-600">Total Team Members</p>
                                  <p className="text-2xl font-bold">{trainingMetrics.authorized.total}</p>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-ds-success-500" />
                                  <span className="text-sm">Up to Date</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <span className="font-medium">{trainingMetrics.authorized.valid}</span>
                                  <span className="text-xs text-ds-neutral-500">({Math.round(trainingMetrics.authorized.valid / trainingMetrics.authorized.total * 100)}%)</span>
                                </div>
                              </div>
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4 text-ds-warning-500" />
                                  <span className="text-sm">Expiring Soon</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <span className="font-medium">{trainingMetrics.authorized.expiringSoon}</span>
                                  <span className="text-xs text-ds-neutral-500">({Math.round(trainingMetrics.authorized.expiringSoon / trainingMetrics.authorized.total * 100)}%)</span>
                                </div>
                              </div>
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <AlertTriangle className="h-4 w-4 text-ds-danger-500" />
                                  <span className="text-sm">Expired</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <span className="font-medium">{trainingMetrics.authorized.expired}</span>
                                  <span className="text-xs text-ds-neutral-500">({Math.round(trainingMetrics.authorized.expired / trainingMetrics.authorized.total * 100)}%)</span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-ds-neutral-200">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Competent Person Training</CardTitle>
                            <CardDescription>Level 2 Safety Certification</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex justify-between items-center mb-4">
                              <div className="flex items-center gap-2">
                                <div className="h-10 w-10 rounded-full bg-ds-blue-50 flex items-center justify-center">
                                  <BookOpen className="h-5 w-5 text-ds-blue-600" />
                                </div>
                                <div>
                                  <p className="text-sm text-ds-neutral-600">Total Team Members</p>
                                  <p className="text-2xl font-bold">{trainingMetrics.competent.total}</p>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-ds-success-500" />
                                  <span className="text-sm">Up to Date</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <span className="font-medium">{trainingMetrics.competent.valid}</span>
                                  <span className="text-xs text-ds-neutral-500">({Math.round(trainingMetrics.competent.valid / trainingMetrics.competent.total * 100)}%)</span>
                                </div>
                              </div>
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4 text-ds-warning-500" />
                                  <span className="text-sm">Expiring Soon</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <span className="font-medium">{trainingMetrics.competent.expiringSoon}</span>
                                  <span className="text-xs text-ds-neutral-500">({Math.round(trainingMetrics.competent.expiringSoon / trainingMetrics.competent.total * 100)}%)</span>
                                </div>
                              </div>
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <AlertTriangle className="h-4 w-4 text-ds-danger-500" />
                                  <span className="text-sm">Expired</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <span className="font-medium">{trainingMetrics.competent.expired}</span>
                                  <span className="text-xs text-ds-neutral-500">({Math.round(trainingMetrics.competent.expired / trainingMetrics.competent.total * 100)}%)</span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-4">Team Training Status</h4>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Name</TableHead>
                              <TableHead>Role</TableHead>
                              <TableHead>Authorized Person</TableHead>
                              <TableHead>Competent Person</TableHead>
                              <TableHead></TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {teamTrainingStatus.slice(0, 5).map((member) => (
                              <TableRow key={member.id}>
                                <TableCell className="font-medium">{member.name}</TableCell>
                                <TableCell>{member.role}</TableCell>
                                <TableCell>
                                  {member.authorizedTraining ? (
                                    <div className="space-y-1">
                                      <div className="flex items-center gap-2">
                                        {getStatusIcon(member.authorizedTraining.status)}
                                        <span className={`text-sm ${getStatusColor(member.authorizedTraining.status)}`}>
                                          {member.authorizedTraining.status === 'valid' ? 'Valid' : 
                                           member.authorizedTraining.status === 'expiring-soon' ? 'Expiring Soon' : 'Expired'}
                                        </span>
                                      </div>
                                      <div className="flex items-center gap-1 text-xs text-ds-neutral-500">
                                        <CalendarIcon className="h-3 w-3" />
                                        <span>Expires: {formatDate(member.authorizedTraining.expires)}</span>
                                      </div>
                                    </div>
                                  ) : (
                                    <span className="text-sm text-ds-neutral-500">Not Certified</span>
                                  )}
                                </TableCell>
                                <TableCell>
                                  {member.competentTraining ? (
                                    <div className="space-y-1">
                                      <div className="flex items-center gap-2">
                                        {getStatusIcon(member.competentTraining.status)}
                                        <span className={`text-sm ${getStatusColor(member.competentTraining.status)}`}>
                                          {member.competentTraining.status === 'valid' ? 'Valid' : 
                                           member.competentTraining.status === 'expiring-soon' ? 'Expiring Soon' : 'Expired'}
                                        </span>
                                      </div>
                                      <div className="flex items-center gap-1 text-xs text-ds-neutral-500">
                                        <CalendarIcon className="h-3 w-3" />
                                        <span>Expires: {formatDate(member.competentTraining.expires)}</span>
                                      </div>
                                    </div>
                                  ) : (
                                    <span className="text-sm text-ds-neutral-500">Not Certified</span>
                                  )}
                                </TableCell>
                                <TableCell>
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <ChevronRight className="h-4 w-4" />
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                        <div className="mt-4 flex justify-end">
                          <Button variant="outline" className="gap-1 border-ds-neutral-200">
                            <span>View All Team Members</span>
                            <ArrowUpRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-3">Upcoming Training Sessions</h4>
                        <div className="space-y-3">
                          {upcomingTraining.map((training) => (
                            <div 
                              key={training.id} 
                              className="flex items-center justify-between bg-white border border-ds-neutral-200 rounded-lg p-4"
                            >
                              <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-lg bg-ds-blue-100 flex items-center justify-center">
                                  <Shield className="h-5 w-5 text-ds-blue-600" />
                                </div>
                                <div>
                                  <h5 className="font-medium">{training.name}</h5>
                                  <p className="text-sm text-ds-neutral-600">
                                    {new Date(training.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} 
                                    • {training.attendees} attendees
                                  </p>
                                </div>
                              </div>
                              <Button variant="outline" size="sm" className="border-ds-neutral-200">Manage</Button>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium mb-3">Team Certification Status</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {[
                            { label: 'Up to Date', value: '18', percentage: '75%', color: 'bg-ds-success-500' },
                            { label: 'Expiring Soon', value: '4', percentage: '17%', color: 'bg-ds-warning-500' },
                            { label: 'Expired', value: '2', percentage: '8%', color: 'bg-ds-danger-500' },
                          ].map((stat, index) => (
                            <div 
                              key={index}
                              className="bg-white border border-ds-neutral-200 rounded-lg p-4"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="text-sm font-medium">{stat.label}</h5>
                                <span className="text-2xl font-bold">{stat.value}</span>
                              </div>
                              <div className="h-2 rounded-full bg-ds-neutral-100 overflow-hidden">
                                <div className={`h-full ${stat.color}`} style={{ width: stat.percentage }}></div>
                              </div>
                              <p className="text-xs text-ds-neutral-500 mt-1">{stat.percentage} of team</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="reports">
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { 
                            title: 'Compliance Report', 
                            description: 'Track team compliance with safety regulations',
                            icon: <BarChart4 className="h-5 w-5 text-ds-blue-600" />,
                            updatedAt: 'Last updated 2 hours ago'
                          },
                          { 
                            title: 'Incident Analysis', 
                            description: 'Review and analyze safety incidents',
                            icon: <AlertTriangle className="h-5 w-5 text-ds-warning-500" />,
                            updatedAt: 'Last updated yesterday'
                          },
                          { 
                            title: 'Equipment Inventory', 
                            description: 'Complete inventory of safety equipment',
                            icon: <HardHat className="h-5 w-5 text-ds-blue-600" />,
                            updatedAt: 'Last updated 3 days ago'
                          },
                          { 
                            title: 'Training Report', 
                            description: 'Track team training and certification',
                            icon: <Shield className="h-5 w-5 text-ds-success-500" />,
                            updatedAt: 'Last updated 1 week ago'
                          },
                        ].map((report, index) => (
                          <div 
                            key={index}
                            className="bg-white border border-ds-neutral-200 rounded-lg p-4 flex gap-4"
                          >
                            <div className="h-12 w-12 rounded-lg bg-ds-neutral-100 flex items-center justify-center flex-shrink-0">
                              {report.icon}
                            </div>
                            <div className="flex-1">
                              <h5 className="font-medium">{report.title}</h5>
                              <p className="text-sm text-ds-neutral-600 mb-2">{report.description}</p>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-ds-neutral-500">{report.updatedAt}</span>
                                <Button variant="ghost" size="sm" className="h-7 text-ds-blue-600 p-0">View Report</Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
