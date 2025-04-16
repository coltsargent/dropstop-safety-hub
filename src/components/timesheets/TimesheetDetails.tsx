
import React from 'react';
import { format, parseISO } from 'date-fns';
import { 
  Clock, 
  Calendar, 
  User, 
  Building, 
  File, 
  CheckCircle2, 
  XCircle,
  MessageSquare,
  Download 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface TimeEntry {
  date: string;
  startTime: string;
  endTime: string;
  breakDuration: number;
  hoursWorked: number;
  notes?: string;
}

interface TimesheetDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  timesheet: {
    id: string;
    employee: string;
    role: string;
    weekStarting: string;
    hoursWorked: number;
    status: string;
    lastSubmitted: string;
    entries?: TimeEntry[];
  };
  onApprove?: () => void;
  onReject?: () => void;
}

const defaultEntries: TimeEntry[] = [
  {
    date: '2024-04-08',
    startTime: '08:00',
    endTime: '17:00',
    breakDuration: 60,
    hoursWorked: 8,
    notes: 'Completed safety inspection on north site.'
  },
  {
    date: '2024-04-09',
    startTime: '07:30',
    endTime: '16:30',
    breakDuration: 60,
    hoursWorked: 8,
    notes: 'Team training session in the morning.'
  },
  {
    date: '2024-04-10',
    startTime: '08:00',
    endTime: '17:00',
    breakDuration: 60,
    hoursWorked: 8,
  },
  {
    date: '2024-04-11',
    startTime: '08:00',
    endTime: '16:00',
    breakDuration: 60,
    hoursWorked: 7,
    notes: 'Early departure approved by manager.'
  },
  {
    date: '2024-04-12',
    startTime: '08:00',
    endTime: '14:30',
    breakDuration: 30,
    hoursWorked: 6.5,
    notes: 'Half day Friday.'
  },
];

const TimesheetDetails: React.FC<TimesheetDetailsProps> = ({ 
  isOpen, 
  onClose, 
  timesheet, 
  onApprove, 
  onReject 
}) => {
  const [rejectReason, setRejectReason] = React.useState('');
  const entries = timesheet.entries || defaultEntries;
  
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Approved</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800 border-red-200">Rejected</Badge>;
      default:
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Pending</Badge>;
    }
  };

  const totalHours = entries.reduce((total, entry) => total + entry.hoursWorked, 0);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Timesheet Details</DialogTitle>
          <DialogDescription>
            Review employee timesheet details and approve or reject
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between gap-4 p-4 border rounded-lg">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">{timesheet.employee}</h3>
                  <p className="text-sm text-muted-foreground">{timesheet.role}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">Week Starting</h3>
                  <p className="text-sm text-muted-foreground">
                    {format(parseISO(timesheet.weekStarting), 'MMMM d, yyyy')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">Total Hours</h3>
                  <p className="text-sm text-muted-foreground">{totalHours} hours</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <File className="h-5 w-5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">Status</h3>
                  <div className="mt-1">{getStatusBadge(timesheet.status)}</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Building className="h-5 w-5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">Submitted</h3>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(timesheet.lastSubmitted), 'MMM d, yyyy h:mm a')}
                  </p>
                </div>
              </div>
              
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="py-2 px-4 text-left text-sm font-medium">Date</th>
                  <th className="py-2 px-4 text-left text-sm font-medium">Start Time</th>
                  <th className="py-2 px-4 text-left text-sm font-medium">End Time</th>
                  <th className="py-2 px-4 text-left text-sm font-medium">Break (min)</th>
                  <th className="py-2 px-4 text-left text-sm font-medium">Hours</th>
                  <th className="py-2 px-4 text-left text-sm font-medium">Notes</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-muted/20'}>
                    <td className="py-2 px-4 text-sm">
                      {format(parseISO(entry.date), 'EEE, MMM d')}
                    </td>
                    <td className="py-2 px-4 text-sm">{entry.startTime}</td>
                    <td className="py-2 px-4 text-sm">{entry.endTime}</td>
                    <td className="py-2 px-4 text-sm">{entry.breakDuration}</td>
                    <td className="py-2 px-4 text-sm font-medium">{entry.hoursWorked}</td>
                    <td className="py-2 px-4 text-sm">{entry.notes || '-'}</td>
                  </tr>
                ))}
                <tr className="border-t">
                  <td colSpan={4} className="py-2 px-4 text-right font-medium">Total Hours:</td>
                  <td className="py-2 px-4 font-bold">{totalHours}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {timesheet.status === 'pending' && (
            <div className="space-y-3">
              <h3 className="font-medium">Comments</h3>
              <Textarea 
                placeholder="Add comments or reasons for approval/rejection..." 
                value={rejectReason}
                onChange={(e) => setRejectReason(e.target.value)}
              />
            </div>
          )}
        </div>
        
        <DialogFooter className="gap-2">
          <Button variant="ghost" onClick={onClose}>Close</Button>
          
          {timesheet.status === 'pending' && (
            <>
              <Button 
                variant="outline" 
                className="gap-2 text-red-600 border-red-200 hover:bg-red-50"
                onClick={onReject}
              >
                <XCircle className="h-4 w-4" />
                Reject Timesheet
              </Button>
              
              <Button 
                className="gap-2" 
                onClick={onApprove}
              >
                <CheckCircle2 className="h-4 w-4" />
                Approve Timesheet
              </Button>
            </>
          )}
          
          {timesheet.status === 'rejected' && (
            <Button 
              className="gap-2"
              onClick={onApprove}
            >
              <CheckCircle2 className="h-4 w-4" />
              Override & Approve
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TimesheetDetails;
