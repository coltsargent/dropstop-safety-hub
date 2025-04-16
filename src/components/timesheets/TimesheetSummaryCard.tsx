
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface TimesheetSummaryCardProps {
  pendingCount: number;
  totalHours: number;
  onClick: () => void;
}

const TimesheetSummaryCard: React.FC<TimesheetSummaryCardProps> = ({ 
  pendingCount, 
  totalHours, 
  onClick 
}) => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Timesheet Management</CardTitle>
          <Clock className="h-5 w-5 text-muted-foreground" />
        </div>
        <CardDescription>
          Review and approve employee timesheets
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-md flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pending Approval</p>
                <p className="text-2xl font-semibold">{pendingCount}</p>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-md flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Calendar className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Hours</p>
                <p className="text-2xl font-semibold">{totalHours}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onClick} className="w-full">
          View All Timesheets
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TimesheetSummaryCard;
