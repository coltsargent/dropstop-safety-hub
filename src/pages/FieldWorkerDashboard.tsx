
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarClock, 
  CheckCircle2, 
  AlertTriangle, 
  Clipboard, 
  MapPin,
  Upload,
  Shield,
  Bell,
  User,
  Phone,
  Mail,
  Building,
  FileText,
  LogOut,
  Settings
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
import LogoutButton from '@/components/auth/LogoutButton';

type InspectionItem = {
  id: string;
  name: string;
  type: string;
  status: 'pending' | 'pass' | 'fail';
  lastInspected?: string;
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

  // Calculate training expiration (mock data)
  const trainingDate = new Date('2023-10-15');
  const expirationDate = new Date(trainingDate);
  expirationDate.setFullYear(expirationDate.getFullYear() + 1);
  
  const daysUntilExpiration = Math.ceil((expirationDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  const isExpirationSoon = daysUntilExpiration <= 30;

  const today = format(new Date(), 'EEEE, MMMM d, yyyy');

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
            
            {/* Header Actions: Profile and Logout */}
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
        
        {/* Safety Alert Banner (if training is expiring soon) */}
        {isExpirationSoon && (
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-md">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
              <div>
                <h3 className="font-medium text-amber-800">Training Expiration Notice</h3>
                <p className="text-sm text-amber-700">
                  Your safety training certification expires in {daysUntilExpiration} days. 
                  Please schedule a renewal session.
                </p>
              </div>
            </div>
          </div>
        )}

        <Tabs defaultValue="daily-inspection" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="daily-inspection">Daily Inspection</TabsTrigger>
            <TabsTrigger value="training">My Training</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="daily-inspection" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Daily Equipment Inspection</CardTitle>
                <CardDescription>
                  Perform your required safety equipment inspection for today.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
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
                  
                  <div className="p-4 border rounded-md">
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
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="training">
            <Card>
              <CardHeader>
                <CardTitle>My Training Status</CardTitle>
                <CardDescription>
                  View your current training certifications and status.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
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
                        isExpirationSoon ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'
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
                    className="w-full flex gap-2"
                    onClick={() => navigate('/training')}
                  >
                    <CalendarClock className="h-4 w-4" />
                    View All Training Courses
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Inspection History</CardTitle>
                <CardDescription>
                  View your past equipment inspections.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">March 15, 2024</h3>
                        <p className="text-sm text-slate-600">3 items inspected</p>
                      </div>
                      <Button variant="outline" size="sm">View</Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">March 14, 2024</h3>
                        <p className="text-sm text-slate-600">3 items inspected</p>
                      </div>
                      <Button variant="outline" size="sm">View</Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">March 13, 2024</h3>
                        <p className="text-sm text-slate-600">3 items inspected</p>
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
    </motion.div>
  );
};

export default FieldWorkerDashboard;
