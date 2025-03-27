
import React from 'react';
import { motion } from 'framer-motion';
import {
  HardHat,
  Clock,
  AlertTriangle,
  CheckCircle,
  ChevronRight,
  Calendar,
  Filter,
  Search,
  Plus,
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const equipmentItems = [
  { 
    id: 'HAR-001', 
    name: 'Full Body Harness', 
    type: 'Harness', 
    manufacturer: 'SafetyFirst', 
    serialNumber: 'SN12345',
    lastInspection: '2023-10-01', 
    nextInspection: '2024-01-01', 
    status: 'safe',
    assignedTo: 'John Doe'
  },
  { 
    id: 'LAN-003', 
    name: 'Self-Retracting Lanyard', 
    type: 'Lanyard', 
    manufacturer: 'FallStop', 
    serialNumber: 'FS98765',
    lastInspection: '2023-11-15', 
    nextInspection: '2023-12-15', 
    status: 'warning',
    assignedTo: 'Jane Smith'
  },
  { 
    id: 'ANC-007', 
    name: 'Roof Anchor Point', 
    type: 'Anchor', 
    manufacturer: 'SecureAttach', 
    serialNumber: 'SA45678',
    lastInspection: '2023-09-10', 
    nextInspection: '2024-03-10', 
    status: 'safe',
    assignedTo: 'Mike Johnson'
  },
  { 
    id: 'HAR-015', 
    name: 'Construction Harness', 
    type: 'Harness', 
    manufacturer: 'SafetyFirst', 
    serialNumber: 'SN67890',
    lastInspection: '2023-08-22', 
    nextInspection: '2023-11-22', 
    status: 'danger',
    assignedTo: 'Sarah Williams'
  },
  { 
    id: 'LAN-008', 
    name: 'Energy Absorbing Lanyard', 
    type: 'Lanyard', 
    manufacturer: 'FallStop', 
    serialNumber: 'FS23456',
    lastInspection: '2023-09-30', 
    nextInspection: '2024-01-30', 
    status: 'safe',
    assignedTo: 'David Brown'
  },
  { 
    id: 'CON-012', 
    name: 'Confined Space Kit', 
    type: 'System', 
    manufacturer: 'SafeSpace', 
    serialNumber: 'SS34567',
    lastInspection: '2023-07-15', 
    nextInspection: '2023-11-15', 
    status: 'danger',
    assignedTo: 'Unassigned'
  },
  { 
    id: 'HEL-005', 
    name: 'Safety Helmet', 
    type: 'Helmet', 
    manufacturer: 'HeadGuard', 
    serialNumber: 'HG12345',
    lastInspection: '2023-10-20', 
    nextInspection: '2024-04-20', 
    status: 'safe',
    assignedTo: 'Emma Wilson'
  },
];

const getStatusBadge = (status: string) => {
  switch(status) {
    case 'safe':
      return <Badge className="bg-ds-success-500">Compliant</Badge>;
    case 'warning':
      return <Badge className="bg-ds-warning-500">Due Soon</Badge>;
    case 'danger':
      return <Badge className="bg-ds-danger-500">Overdue</Badge>;
    default:
      return <Badge className="bg-ds-neutral-500">Unknown</Badge>;
  }
};

const getStatusIcon = (status: string) => {
  switch(status) {
    case 'safe':
      return <CheckCircle className="h-4 w-4 text-ds-success-500" />;
    case 'warning':
      return <Clock className="h-4 w-4 text-ds-warning-500" />;
    case 'danger':
      return <AlertTriangle className="h-4 w-4 text-ds-danger-500" />;
    default:
      return null;
  }
};

const Equipment: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ds-neutral-50">
      <Header />
      
      <main className="flex-grow pt-16 px-4">
        <div className="container mx-auto py-8">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-ds-neutral-900">Equipment Management</h1>
                <p className="text-ds-neutral-600">Manage and track all safety equipment</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
                <Button variant="outline" className="gap-1 border-ds-neutral-200">
                  <Calendar className="h-4 w-4 text-ds-neutral-500" />
                  <span>Schedule Inspection</span>
                </Button>
                <Button className="gap-1">
                  <Plus className="h-4 w-4" />
                  <span>Add Equipment</span>
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-ds-neutral-200 p-4 mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ds-neutral-400" />
                  <Input 
                    className="pl-10" 
                    placeholder="Search equipment..." 
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Equipment</SelectItem>
                      <SelectItem value="harness">Harnesses</SelectItem>
                      <SelectItem value="lanyard">Lanyards</SelectItem>
                      <SelectItem value="anchor">Anchors</SelectItem>
                      <SelectItem value="helmet">Helmets</SelectItem>
                      <SelectItem value="system">Systems</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select defaultValue="all">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="compliant">Compliant</SelectItem>
                      <SelectItem value="due-soon">Due Soon</SelectItem>
                      <SelectItem value="overdue">Overdue</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-ds-neutral-200">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>Equipment Inventory</CardTitle>
                </div>
                <CardDescription>
                  All safety equipment and inspection status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Equipment</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Last Inspection</TableHead>
                      <TableHead>Next Inspection</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Assigned To</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {equipmentItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-ds-blue-50 flex items-center justify-center">
                              <HardHat className="h-4 w-4 text-ds-blue-600" />
                            </div>
                            <div>
                              <div className="font-medium">{item.name}</div>
                              <div className="text-xs text-ds-neutral-500">{item.manufacturer} • {item.serialNumber}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{item.type}</TableCell>
                        <TableCell>{new Date(item.lastInspection).toLocaleDateString()}</TableCell>
                        <TableCell>{new Date(item.nextInspection).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(item.status)}
                            {getStatusBadge(item.status)}
                          </div>
                        </TableCell>
                        <TableCell>{item.assignedTo}</TableCell>
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
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border-ds-neutral-200">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-ds-success-50 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-ds-success-500" />
                  </div>
                  <CardTitle>Compliant</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {equipmentItems.filter(item => item.status === 'safe').length}
                </div>
                <p className="text-sm text-ds-neutral-500 mt-1">
                  {Math.round((equipmentItems.filter(item => item.status === 'safe').length / equipmentItems.length) * 100)}% of all equipment
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-ds-neutral-200">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-ds-warning-50 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-ds-warning-500" />
                  </div>
                  <CardTitle>Due Soon</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {equipmentItems.filter(item => item.status === 'warning').length}
                </div>
                <p className="text-sm text-ds-neutral-500 mt-1">
                  {Math.round((equipmentItems.filter(item => item.status === 'warning').length / equipmentItems.length) * 100)}% of all equipment
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-ds-neutral-200">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-ds-danger-50 flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-ds-danger-500" />
                  </div>
                  <CardTitle>Overdue</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {equipmentItems.filter(item => item.status === 'danger').length}
                </div>
                <p className="text-sm text-ds-neutral-500 mt-1">
                  {Math.round((equipmentItems.filter(item => item.status === 'danger').length / equipmentItems.length) * 100)}% of all equipment
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Equipment;
