
import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday, addMonths, subMonths } from 'date-fns';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Clock, Clock3 } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface MonthlyCalendarProps {
  children?: React.ReactNode;
}

const MonthlyCalendar: React.FC<MonthlyCalendarProps> = ({ children }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [clockedIn, setClockedIn] = useState<boolean>(false);
  
  // Example clock-in data for visualization
  const clockInData = {
    '2023-04-15': { in: '08:30', out: '17:00', total: '8.5' },
    '2023-04-12': { in: '09:15', out: '18:30', total: '9.25' },
    '2023-04-10': { in: '08:00', out: '16:30', total: '8.5' },
    '2023-04-05': { in: '08:45', out: '17:15', total: '8.5' },
  };
  
  const renderHeader = () => {
    return (
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <h2 className="font-semibold text-lg">
          {format(currentMonth, 'MMMM yyyy')}
        </h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    );
  };
  
  const renderDays = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <div className="grid grid-cols-7 gap-1 mt-4 mb-2">
        {days.map((day) => (
          <div
            key={day}
            className="text-center text-xs text-ds-neutral-500 font-medium"
          >
            {day}
          </div>
        ))}
      </div>
    );
  };
  
  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = monthStart;
    const endDate = monthEnd;
    
    const dateFormat = 'd';
    const rows = [];
    
    let days = eachDayOfInterval({
      start: startDate,
      end: endDate,
    });
    
    let formattedDates = days.map(day => {
      const cloneDay = day;
      const formattedDate = format(cloneDay, 'yyyy-MM-dd');
      const isCurrentMonth = isSameMonth(day, monthStart);
      const isSelectedDay = selectedDate && isSameDay(day, selectedDate);
      const isTodayValue = isToday(day);
      const hasClockData = clockInData[formattedDate];
      
      return (
        <div 
          key={day.toString()}
          className={cn(
            'h-12 flex flex-col items-center justify-center rounded-md border cursor-pointer transition-colors',
            isCurrentMonth ? 'bg-white' : 'bg-ds-neutral-50 text-ds-neutral-400',
            isSelectedDay && 'bg-ds-blue-50 border-ds-blue-200',
            isTodayValue && 'border-ds-blue-400 ring-1 ring-ds-blue-200',
            hasClockData && 'border-ds-blue-300'
          )}
          onClick={() => setSelectedDate(cloneDay)}
        >
          <span className="text-sm">{format(cloneDay, dateFormat)}</span>
          {hasClockData && (
            <div className="h-1.5 w-1.5 rounded-full bg-ds-blue-500 mt-0.5" />
          )}
        </div>
      );
    });
    
    // Calculate total days in month and padding days needed
    const totalDaysInMonth = formattedDates.length;
    const startDayOfWeek = new Date(monthStart).getDay();
    
    // Add padding for start of month
    const paddingStart = Array.from({ length: startDayOfWeek }).map((_, index) => (
      <div key={`padding-start-${index}`} className="h-12" />
    ));
    
    // Add padding for end of month if needed
    const remainingCells = 42 - (paddingStart.length + totalDaysInMonth);
    const paddingEnd = Array.from({ length: remainingCells > 0 ? remainingCells : 0 }).map((_, index) => (
      <div key={`padding-end-${index}`} className="h-12" />
    ));
    
    // Combine all cells
    const allCells = [...paddingStart, ...formattedDates, ...paddingEnd];
    
    // Create rows of 7 days
    for (let i = 0; i < allCells.length; i += 7) {
      rows.push(
        <div key={i} className="grid grid-cols-7 gap-1 mb-1">
          {allCells.slice(i, i + 7)}
        </div>
      );
    }
    
    return (
      <div>
        {rows}
      </div>
    );
  };
  
  const handleClockAction = () => {
    setClockedIn(!clockedIn);
  };
  
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-ds-blue-600 mr-2" />
            <span>Time-Keeping</span>
          </div>
          <Button 
            variant={clockedIn ? "destructive" : "default"} 
            className="ml-auto flex gap-2"
            onClick={handleClockAction}
          >
            <Clock3 className="h-4 w-4" />
            {clockedIn ? "Clock Out" : "Clock In"}
          </Button>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {renderHeader()}
        {renderDays()}
        {renderCells()}
        
        {selectedDate && (
          <div className="mt-4 p-3 border rounded-md bg-ds-neutral-50">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">{format(selectedDate, 'EEEE, MMMM d, yyyy')}</h3>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <CalendarIcon className="h-3.5 w-3.5" />
                    <span>Record</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80" align="end">
                  <div className="space-y-4">
                    <h4 className="font-medium">Add Time Record</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <label className="text-sm">Clock In</label>
                        <input type="time" className="w-full rounded-md border p-2" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm">Clock Out</label>
                        <input type="time" className="w-full rounded-md border p-2" />
                      </div>
                    </div>
                    <Button size="sm" className="w-full">Save Time Record</Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            
            {clockInData[format(selectedDate, 'yyyy-MM-dd')] ? (
              <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
                <div>
                  <span className="text-ds-neutral-500 block">Clock In</span>
                  <span className="font-medium">{clockInData[format(selectedDate, 'yyyy-MM-dd')].in}</span>
                </div>
                <div>
                  <span className="text-ds-neutral-500 block">Clock Out</span>
                  <span className="font-medium">{clockInData[format(selectedDate, 'yyyy-MM-dd')].out}</span>
                </div>
                <div>
                  <span className="text-ds-neutral-500 block">Total Hours</span>
                  <span className="font-medium">{clockInData[format(selectedDate, 'yyyy-MM-dd')].total}</span>
                </div>
              </div>
            ) : (
              <p className="mt-2 text-sm text-ds-neutral-500">No time records for this date.</p>
            )}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="pt-0">
        <div className="flex justify-between items-center w-full text-xs text-ds-neutral-500">
          <div>Total hours this month: 160.5</div>
          <div>Remaining: 7.5</div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MonthlyCalendar;
