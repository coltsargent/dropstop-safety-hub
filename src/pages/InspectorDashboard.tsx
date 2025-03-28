
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clipboard, 
  History, 
  Upload, 
  CheckCircle, 
  XCircle, 
  Plus, 
  Search, 
  User,
  Phone,
  Mail,
  Building,
  FileText,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAuth } from '@/contexts/AuthContext';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '@/components/shared/Logo';
import LogoutButton from '@/components/auth/LogoutButton';
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

type InspectionItem = {
  id: string;
  name: string;
  type: string;
  serialNumber?: string;
  status: 'pending' | 'pass' | 'fail';
  notes?: string;
  lastInspected?: string;
};

type InspectionBatch = {
  id: string;
  date: string;
  organization: string;
  itemCount: number;
  status: 'in-progress' | 'submitted' | 'approved' | 'rejected';
};

const mockEquipment: InspectionItem[] = [
  { id: '1', name: 'Full Body Harness', type: 'Harness', serialNumber: 'HAR-001', status: 'pending', lastInspected: '2023-10-15' },
  { id: '2', name: 'Self-Retracting Lifeline', type: 'Lifeline', serialNumber: 'SRL-102', status: 'pending', lastInspected: '2023-11-20' },
  { id: '3', name: 'Anchor Point', type: 'Anchor', serialNumber: 'ANC-543', status: 'pending', lastInspected: '2023-09-05' },
  { id: '4', name: 'Lanyard', type: 'Connector', serialNumber: 'LAN-287', status: 'pending', lastInspected: '2023-12-01' },
];

const mockInspectionHistory: InspectionBatch[] = [
  { id: '1', date: '2024-03-15', organization: 'Acme Construction', itemCount: 24, status: 'approved' },
  { id: '2', date: '2024-02-28', organization: 'Skyline Builders', itemCount: 18, status: 'rejected' },
  { id: '3', date: '2024-02-10', organization: 'Harbor Bridge Maintenance', itemCount: 32, status: 'approved' },
  { id: '4', date: '2024-01-22', organization: 'Mountain Power Co.', itemCount: 12, status: 'approved' },
];

const InspectorDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [activeInspection, setActiveInspection] = useState<boolean>(false);
  const [equipment, setEquipment] = useState<InspectionItem[]>(mockEquipment);
  const [search, setSearch] = useState<string>('');
  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([]);
  const [inspectionHistory] = useState<InspectionBatch[]>(mockInspectionHistory);
  
  const handleStartInspection = () => {
    setActiveInspection(true);
    toast({
      title: "Inspection Started",
      description: "You've started a new inspection batch.",
    });
  };
  
  const handleStatusChange = (id: string, status: 'pass' | 'fail') => {
    setEquipment(prev => 
      prev.map(item => 
        item.id === id ? { ...item, status } : item
      )
    );
  };
  
  const handleSubmitBatch = () => {
    toast({
      title: "Batch Submitted",
      description: "Inspection batch has been sent to the Safety Supervisor for approval.",
    });
    setActiveInspection(false);
    setEquipment(mockEquipment);
    setSelectedEquipment([]);
  };
  
  const filteredEquipment = equipment.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.type.toLowerCase().includes(search.toLowerCase()) ||
    (item.serialNumber && item.serialNumber.toLowerCase().includes(search.toLowerCase()))
  );
  
  const handleSelectEquipment = (id: string) => {
    setSelectedEquipment(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8 pt-24"
    >
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Logo variant="header" size="xs" />
              <h1 className="text-3xl font-bold">Inspector Dashboard</h1>
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
                        <h4 className="font-semibold">{user?.name || 'Inspector'}</h4>
                        <p className="text-xs text-muted-foreground">Inspector</p>
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
                        <span>{user?.organization || 'Safety First Inspections'}</span>
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
                  <Button variant="ghost" size="icon">
                    <LogOut className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
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
            Welcome, {user?.name || user?.email}. Manage and document equipment inspections for organizations.
          </p>
        </div>
        
        <Tabs defaultValue="inspection" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="inspection">PPE Inspection</TabsTrigger>
            <TabsTrigger value="safety-systems">Safety Systems</TabsTrigger>
            <TabsTrigger value="history">Inspection History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="inspection" className="space-y-4">
            {!activeInspection ? (
              <Card>
                <CardHeader>
                  <CardTitle>Start New Inspection Batch</CardTitle>
                  <CardDescription>
                    Begin a new inspection batch for an organization's personal protective equipment.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <select
                        id="organization"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="acme">Acme Construction</option>
                        <option value="skyline">Skyline Builders</option>
                        <option value="harbor">Harbor Bridge Maintenance</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inspection-date">Inspection Date</Label>
                      <div className="relative">
                        <Input
                          id="inspection-date"
                          type="date"
                          defaultValue={new Date().toISOString().split('T')[0]}
                        />
                        <Calendar className="absolute right-3 top-3 h-4 w-4 text-gray-500" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea id="notes" placeholder="Enter any additional notes or context for this inspection batch" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleStartInspection} className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Start New Inspection Batch
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <div className="space-y-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div>
                      <CardTitle>Active Inspection Batch</CardTitle>
                      <CardDescription>
                        Acme Construction - {new Date().toLocaleDateString()}
                      </CardDescription>
                    </div>
                    <Button variant="destructive" onClick={() => setActiveInspection(false)}>
                      Cancel Batch
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Search className="h-5 w-5 text-gray-500" />
                        <Input
                          placeholder="Search equipment by name, type, or serial number..."
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          className="flex-1"
                        />
                      </div>
                      
                      <div className="border rounded-lg overflow-hidden">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-12">
                                <Checkbox 
                                  id="select-all"
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      setSelectedEquipment(filteredEquipment.map(item => item.id));
                                    } else {
                                      setSelectedEquipment([]);
                                    }
                                  }}
                                  checked={
                                    filteredEquipment.length > 0 && 
                                    selectedEquipment.length === filteredEquipment.length
                                  }
                                />
                              </TableHead>
                              <TableHead>Equipment</TableHead>
                              <TableHead>Type</TableHead>
                              <TableHead>Serial Number</TableHead>
                              <TableHead>Last Inspected</TableHead>
                              <TableHead className="text-right">Pass/Fail</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {filteredEquipment.length === 0 ? (
                              <TableRow>
                                <TableCell colSpan={6} className="text-center py-4">
                                  No equipment found. Try adjusting your search.
                                </TableCell>
                              </TableRow>
                            ) : (
                              filteredEquipment.map((item) => (
                                <TableRow key={item.id}>
                                  <TableCell>
                                    <Checkbox 
                                      id={`select-${item.id}`}
                                      checked={selectedEquipment.includes(item.id)}
                                      onCheckedChange={() => handleSelectEquipment(item.id)}
                                    />
                                  </TableCell>
                                  <TableCell className="font-medium">{item.name}</TableCell>
                                  <TableCell>{item.type}</TableCell>
                                  <TableCell>{item.serialNumber}</TableCell>
                                  <TableCell>{item.lastInspected}</TableCell>
                                  <TableCell className="text-right">
                                    <div className="flex items-center justify-end space-x-2">
                                      <Button
                                        size="sm"
                                        variant={item.status === 'pass' ? 'default' : 'outline'}
                                        className={item.status === 'pass' ? 'bg-green-600 hover:bg-green-700' : ''}
                                        onClick={() => handleStatusChange(item.id, 'pass')}
                                      >
                                        <CheckCircle className="h-4 w-4 mr-1" />
                                        Pass
                                      </Button>
                                      <Button
                                        size="sm"
                                        variant={item.status === 'fail' ? 'default' : 'outline'}
                                        className={item.status === 'fail' ? 'bg-red-600 hover:bg-red-700' : ''}
                                        onClick={() => handleStatusChange(item.id, 'fail')}
                                      >
                                        <XCircle className="h-4 w-4 mr-1" />
                                        Fail
                                      </Button>
                                    </div>
                                  </TableCell>
                                </TableRow>
                              ))
                            )}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={() => setActiveInspection(false)}>
                      Save as Draft
                    </Button>
                    <Button onClick={handleSubmitBatch}>
                      <Clipboard className="mr-2 h-4 w-4" />
                      Submit Inspection Batch
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="safety-systems">
            <Card>
              <CardHeader>
                <CardTitle>Safety Systems Test/Certification</CardTitle>
                <CardDescription>
                  Upload test results and certification documents for organization safety systems.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="system-organization">Organization</Label>
                    <select
                      id="system-organization"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="acme">Acme Construction</option>
                      <option value="skyline">Skyline Builders</option>
                      <option value="harbor">Harbor Bridge Maintenance</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="system-type">System Type</Label>
                    <select
                      id="system-type"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="anchors">Anchor Points</option>
                      <option value="lifelines">Horizontal Lifelines</option>
                      <option value="davits">Davit Systems</option>
                      <option value="railings">Guardrail Systems</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="system-location">Location</Label>
                  <Input id="system-location" placeholder="E.g., North Tower, Roof Section B" />
                </div>
                
                <div className="space-y-2">
                  <Label>Documentation Upload</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto text-gray-400" />
                    <p className="mt-2 text-sm text-gray-500">
                      Drag and drop files here, or click to upload
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Accepts PDF, JPG, PNG (max 10MB)
                    </p>
                    <Button variant="outline" className="mt-4">
                      Browse Files
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="system-notes">Test/Certification Notes</Label>
                  <Textarea 
                    id="system-notes" 
                    placeholder="Enter test procedures, results, and other relevant information"
                    className="min-h-[150px]"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={() => toast({
                  title: "Documentation Submitted",
                  description: "Safety system documentation has been submitted for review."
                })}>
                  Submit Documentation
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Inspection History</CardTitle>
                <CardDescription>
                  Review your previous inspection batches and their status.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Organization</TableHead>
                        <TableHead>Items</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {inspectionHistory.map((batch) => (
                        <TableRow key={batch.id}>
                          <TableCell>{batch.date}</TableCell>
                          <TableCell className="font-medium">{batch.organization}</TableCell>
                          <TableCell>{batch.itemCount} items</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              batch.status === 'approved' 
                                ? 'bg-green-100 text-green-800' 
                                : batch.status === 'rejected'
                                ? 'bg-red-100 text-red-800'
                                : batch.status === 'submitted'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {batch.status.charAt(0).toUpperCase() + batch.status.slice(1)}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => toast({
                                title: "Inspection Details",
                                description: `Viewing details for ${batch.organization} inspection from ${batch.date}.`
                              })}
                            >
                              View Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default InspectorDashboard;
