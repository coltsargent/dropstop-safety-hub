import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarClock, 
  CheckCircle2, 
  AlertTriangle, 
  Clipboard, 
  MapPin,
  Shield,
  Bell,
  User,
  Phone,
  Mail,
  Building,
  FileText,
  LogOut,
  Settings,
  Clock,
  CheckSquare,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import Logo from '@/components/shared/Logo';
import { useLocation } from '@/hooks/useLocation';
import GeolocationDisplay from '@/components/safety/GeolocationDisplay';
import FallAlertButton from '@/components/safety/FallAlertButton';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import MonthlyCalendar from '@/components/calendar/MonthlyCalendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import LogoutButton from '@/components/auth/LogoutButton';

type InspectionItem = {
  id: string;
  name: string;
  type: string;
  status: 'pending' | 'pass' | 'fail';
  lastInspected?: string;
};

type ClockRecord = {
  type: 'in' | 'out';
  timestamp: Date;
  location?: { latitude: number; longitude: number };
};

type PPEItem = {
  id: string;
  name: string;
  required: boolean;
  checked: boolean;
};

const mockEquipment: InspectionItem[] = [
  { id: '1', name: 'Full Body Harness', type: 'Harness', status: 'pending', lastInspected: '2023-10-15' },
  { id: '2', name: 'Self-Retracting Lifeline', type: 'Lifeline', status: 'pending', lastInspected: '2023-11-20' },
  { id: '3', name: 'Lanyard', type: 'Connector', status: 'pending', lastInspected: '2023-12-01' },
];

const FieldWorkerDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { coordinates, loading: locationLoading, error: locationError } = useLocation();
  const [equipment] = useState<InspectionItem[]>(mockEquipment);
  const [clockRecords, setClockRecords] = useState<ClockRecord[]>([]);
  const [clockedIn, setClockedIn] = useState<boolean>(false);
  const [showPPEDialog, setShowPPEDialog] = useState<boolean>(false);
  const [ppeItems, setPpeItems] = useState<PPEItem[]>([
    { id: '1', name: 'Full Body Harness', required: true, checked: false },
    { id: '2', name: 'Self-Retracting Lifeline', required: true, checked: false },
    { id: '3', name: 'Lanyard', required: true, checked: false },
    { id: '4', name: 'Hard Hat', required: true, checked: false },
  ]);
  
  const handleStartInspection = () => {
    navigate('/inspection');
    toast({
      title: "Inspection Started",
      description: "You've started a new equipment inspection.",
    });
  };

  const handleLogout = () => {
    logout();
    toast({
      title: 'Logged out',
      description: 'You have been successfully logged out.',
    });
    navigate('/');
  };

  const trainingDate = new Date('2023-10-15');
  const expirationDate = new Date(trainingDate);
  expirationDate.setFullYear(expirationDate.getFullYear() + 1);
  
  const daysUntilExpiration = Math.ceil((expirationDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  const isExpirationSoon = daysUntilExpiration <= 30;

  const today = format(new Date(), 'EEEE, MMMM d, yyyy');

  const handleClock = (type: 'in' | 'out') => {
    const newRecord: ClockRecord = {
      type,
      timestamp: new Date(),
      location: coordinates ? { latitude: coordinates.latitude, longitude: coordinates.longitude } : undefined
    };
    
    setClockRecords([...clockRecords, newRecord]);
    
    if (type === 'in') {
      setClockedIn(true);
      setShowPPEDialog(true);
      toast({
        title: "Clocked In",
        description: `You have clocked in at ${format(new Date(), 'h:mm a')}`,
      });
    } else {
      setClockedIn(false);
      toast({
        title: "Clocked Out",
        description: `You have clocked out at ${format(new Date(), 'h:mm a')}`,
      });
    }
  };

  const handlePPEInspectionSubmit = () => {
    setShowPPEDialog(false);
    toast({
      title: "PPE Inspection Documented",
      description: "Your daily PPE inspection has been documented.",
    });
  };

  const togglePPEItem = (id: string) => {
    setPpeItems(ppeItems.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8 pt-20 pb-24"
    >
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Logo variant="header" size="xs" />
              <h1 className="text-2xl font-bold">Field Worker Dashboard</h1>
            </div>
            
            <div className="flex items-center gap-3">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="gap-2 border-ds-neutral-200">
                    <div className="h-7 w-7 rounded-full bg-ds-blue-100 flex items-center justify-center">
                      <User className="h-4 w-4 text-ds-blue-700" />
                    </div>
                    <span className="hidden sm:inline text-sm font-medium">Profile</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80" align="end">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-ds-blue-100 flex items-center justify-center">
                        <User className="h-6 w-6 text-ds-blue-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{user?.name || 'Field Worker'}</h4>
                        <p className="text-xs text-muted-foreground">Field Worker</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>{user?.email}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{user?.phone || '(555) 123-4567'}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <span>{user?.organization || 'Safety First Construction'}</span>
                      </div>
                    </div>
                    
                    <div className="border-t border-border pt-3">
                      <Button variant="outline" size="sm" className="w-full" onClick={() => {
                        toast({
                          title: "Profile",
                          description: "Profile settings will be available in a future update."
                        });
                      }}>
                        <FileText className="h-4 w-4 mr-2" />
                        Edit Profile
                      </Button>
                    </div>
                    
                    <LogoutButton />
                  </div>
                </PopoverContent>
              </Popover>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Settings className="h-5 w-5 text-ds-neutral-700" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Settings</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => {
                    toast({
                      title: "Settings",
                      description: "Settings page will be available in a future update."
                    });
                  }}>
                    Account Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => {
                    toast({
                      title: "Notifications",
                      description: "Notification settings will be available in a future update."
                    });
                  }}>
                    Notification Preferences
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <p className="text-muted-foreground">
            Welcome, {user?.name || user?.email}. Today is {today}.
          </p>
        </div>
        
        <Tabs defaultValue="safety-tasks" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="safety-tasks">Safety Tasks</TabsTrigger>
            <TabsTrigger value="clock">Clock In/Out</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="safety-tasks" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Daily Safety Tasks</CardTitle>
                <CardDescription>
                  Manage your equipment inspections and training requirements.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Equipment Inspection</h3>
                  <div className="flex items-center justify-between p-4 bg-ds-blue-50 rounded-md">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-ds-blue-600" />
                      <div>
                        <h3 className="font-medium">Ready for Inspection</h3>
                        <p className="text-sm text-slate-600">{equipment.length} items need inspection today</p>
                      </div>
                    </div>
                    <Button onClick={handleStartInspection}>
                      Start Inspection
                    </Button>
                  </div>
                  
                  <div className="p-4 border rounded-md mt-4">
                    <div className="flex items-center gap-3 mb-3">
                      <MapPin className="h-5 w-5 text-slate-500" />
                      <div>
                        <h3 className="font-medium">Current Location</h3>
                        {locationLoading ? (
                          <p className="text-sm text-slate-600">Getting your location...</p>
                        ) : locationError ? (
                          <p className="text-sm text-red-500">Location access denied</p>
                        ) : coordinates ? (
                          <p className="text-sm text-slate-600">
                            Lat: {coordinates.latitude.toFixed(4)}, Long: {coordinates.longitude.toFixed(4)}
                          </p>
                        ) : (
                          <p className="text-sm text-slate-600">Location not available</p>
                        )}
                      </div>
                    </div>
                    
                    <GeolocationDisplay 
                      location={coordinates ? { coords: coordinates } as GeolocationPosition : null}
                      error={locationError}
                    />
                  </div>
                  
                  <FallAlertButton />
                </div>

                <div className="pt-4 border-t">
                  <h3 className="text-lg font-medium mb-3">My Training Status</h3>
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex gap-3">
                        <Shield className="h-5 w-5 text-ds-blue-600" />
                        <div>
                          <h3 className="font-medium">Fall Protection - Competent Person</h3>
                          <p className="text-sm text-slate-600">Certification Level: Competent Person</p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        isExpirationSoon ? 'bg-ds-blue-100 text-ds-blue-800' : 'bg-ds-blue-100 text-ds-blue-800'
                      }`}>
                        {isExpirationSoon ? 'Renewal Needed' : 'Active'}
                      </span>
                    </div>
                    <div className="mt-3 pt-3 border-t grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-slate-500">Date Completed</p>
                        <p>{format(trainingDate, 'MMM d, yyyy')}</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Expiration Date</p>
                        <p>{format(expirationDate, 'MMM d, yyyy')}</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full flex gap-2 mt-4"
                    onClick={() => navigate('/training')}
                  >
                    <CalendarClock className="h-4 w-4" />
                    View All Training Courses
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="clock">
            <Card>
              <CardHeader>
                <CardTitle>Clock In/Out</CardTitle>
                <CardDescription>
                  Track your work hours and manage daily safety requirements.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col items-center justify-center p-6 border rounded-lg bg-ds-blue-50">
                  <div className="text-center mb-6">
                    <Clock className="h-12 w-12 text-ds-blue-600 mx-auto mb-2" />
                    <h3 className="text-xl font-medium">
                      {format(new Date(), 'h:mm a')}
                    </h3>
                    <p className="text-sm text-slate-500">{format(new Date(), 'EEEE, MMMM d, yyyy')}</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                    <Button 
                      className="flex-1" 
                      onClick={() => handleClock('in')}
                      disabled={clockedIn}
                    >
                      <Clock className="h-4 w-4 mr-2" />
                      Clock In
                    </Button>
                    <Button 
                      className="flex-1" 
                      variant="outline"
                      onClick={() => handleClock('out')}
                      disabled={!clockedIn}
                    >
                      <Clock className="h-4 w-4 mr-2" />
                      Clock Out
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Today's Clock Activity</h3>
                  {clockRecords.length > 0 ? (
                    <div className="border rounded-lg divide-y">
                      {clockRecords.map((record, index) => (
                        <div key={index} className="p-3 flex justify-between items-center">
                          <div className="flex items-center">
                            <div className={`h-8 w-8 rounded-full ${record.type === 'in' ? 'bg-ds-blue-100' : 'bg-ds-blue-50'} flex items-center justify-center mr-3`}>
                              <Clock className={`h-4 w-4 ${record.type === 'in' ? 'text-ds-blue-600' : 'text-ds-blue-400'}`} />
                            </div>
                            <div>
                              <p className="font-medium">
                                {record.type === 'in' ? 'Clock In' : 'Clock Out'}
                              </p>
                              {record.location && (
                                <p className="text-xs text-slate-500">
                                  Location: {record.location.latitude.toFixed(4)}, {record.location.longitude.toFixed(4)}
                                </p>
                              )}
                            </div>
                          </div>
                          <p className="text-sm">
                            {format(record.timestamp, 'h:mm a')}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center p-6 border rounded-lg">
                      <p className="text-slate-500">No clock activity recorded today</p>
                      <p className="text-sm text-slate-400">Clock in to start tracking your work hours</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="calendar">
            <MonthlyCalendar />
          </TabsContent>
          
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Activity History</CardTitle>
                <CardDescription>
                  View your past equipment inspections and work hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">March 15, 2024</h3>
                        <p className="text-sm text-slate-600">3 items inspected • 8.5 hours worked</p>
                      </div>
                      <Button variant="outline" size="sm">View</Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">March 14, 2024</h3>
                        <p className="text-sm text-slate-600">3 items inspected • 7.75 hours worked</p>
                      </div>
                      <Button variant="outline" size="sm">View</Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">March 13, 2024</h3>
                        <p className="text-sm text-slate-600">3 items inspected • 8 hours worked</p>
                      </div>
                      <Button variant="outline" size="sm">View</Button>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full flex gap-2"
                    onClick={() => {
                      toast({
                        title: "Full History",
                        description: "This feature will be available in a future update."
                      });
                    }}
                  >
                    <Clipboard className="h-4 w-4" />
                    View Full History
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={showPPEDialog} onOpenChange={setShowPPEDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Daily PPE Inspection</DialogTitle>
            <DialogDescription>
              Document your daily Personal Protective Equipment inspection before starting work.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              {ppeItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`ppe-${item.id}`} 
                    checked={item.checked}
                    onCheckedChange={() => togglePPEItem(item.id)}
                  />
                  <Label 
                    htmlFor={`ppe-${item.id}`}
                    className="flex items-center"
                  >
                    {item.name}
                    {item.required && (
                      <span className="ml-2 text-xs bg-ds-blue-100 text-ds-blue-800 px-2 py-0.5 rounded-full">
                        Required
                      </span>
                    )}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setShowPPEDialog(false)}
            >
              Skip
            </Button>
            <Button 
              type="submit"
              onClick={handlePPEInspectionSubmit}
              disabled={!ppeItems.some(item => item.required && item.checked)}
            >
              <CheckSquare className="mr-2 h-4 w-4" />
              Submit Inspection
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default FieldWorkerDashboard;
