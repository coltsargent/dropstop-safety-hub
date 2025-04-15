
import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, subWeeks, addWeeks, isWithinInterval, addDays } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Clock, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Define types for calendar events
type CalendarEvent = {
  id: string;
  title: string;
  date: Date;
  type: 'inspection' | 'training' | 'meeting' | 'other' | 'clock-in' | 'clock-out';
  completed?: boolean;
};

interface MonthlyCalendarProps {
  events?: CalendarEvent[];
}

type ClockRecord = {
  type: 'in' | 'out';
  timestamp: Date;
  location?: { latitude: number; longitude: number };
};

const MonthlyCalendar: React.FC<MonthlyCalendarProps> = ({ events = [] }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState<Date>(today);
  const [clockRecords, setClockRecords] = useState<ClockRecord[]>([]);
  const [clockedIn, setClockedIn] = useState<boolean>(false);
  const { toast } = useToast();
  
  // Calculate the dates to show (last two weeks + current week + next week)
  const twoWeeksAgo = subWeeks(today, 2);
  const nextWeek = addWeeks(today, 1);
  
  // Generate some sample events if none provided
  const sampleEvents = [
    {
      id: '1',
      title: 'Equipment Inspection',
      date: subWeeks(today, 1),
      type: 'inspection' as const,
      completed: true,
    },
    {
      id: '2',
      title: 'Fall Protection Training',
      date: addDays(today, 2),
      type: 'training' as const,
    },
    {
      id: '3',
      title: 'Safety Meeting',
      date: addDays(today, 5),
      type: 'meeting' as const,
    },
    {
      id: '4',
      title: 'Harness Inspection',
      date: subWeeks(today, 2),
      type: 'inspection' as const,
      completed: true,
    },
    {
      id: '5',
      title: 'Site Safety Review',
      date: addDays(today, -2),
      type: 'meeting' as const,
      completed: true,
    },
    {
      id: '6',
      title: 'Lanyard Inspection',
      date: addDays(today, 1),
      type: 'inspection' as const,
    }
  ];
  
  // Combine sample events with clock records events
  const calendarEvents = [
    ...events.length > 0 ? events : sampleEvents,
    ...clockRecords.map((record, index) => ({
      id: `clock-${index}-${record.timestamp.getTime()}`,
      title: record.type === 'in' ? 'Clock In' : 'Clock Out',
      date: record.timestamp,
      type: record.type === 'in' ? 'clock-in' as const : 'clock-out' as const,
    }))
  ];

  // Function to handle clock in/out
  const handleClock = (type: 'in' | 'out') => {
    const newRecord: ClockRecord = {
      type,
      timestamp: new Date(),
      location: { latitude: 40.7128, longitude: -74.0060 } // Example location
    };
    
    setClockRecords([...clockRecords, newRecord]);
    
    if (type === 'in') {
      setClockedIn(true);
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

  // Function to get events for a specific day
  const getEventsForDay = (day: Date) => {
    return calendarEvents.filter(event => isSameDay(day, event.date));
  };

  // Custom day rendering function for the calendar
  const renderDay = (day: Date) => {
    const dayEvents = getEventsForDay(day);
    const isInRange = isWithinInterval(day, { start: twoWeeksAgo, end: nextWeek });
    
    // Only highlight days with events in our range (last 2 weeks to next week)
    if (dayEvents.length === 0 || !isInRange) return undefined;
    
    const eventTypes = [...new Set(dayEvents.map(e => e.type))];
    
    return (
      <div className="relative w-full h-full">
        <div className="absolute -bottom-1 left-0 right-0 flex justify-center space-x-0.5">
          {eventTypes.map((type, i) => (
            <div 
              key={`${day.toString()}-${type}-${i}`}
              className={cn(
                "h-1 w-1 rounded-full",
                type === 'inspection' && "bg-amber-500",
                type === 'training' && "bg-ds-blue-600",
                type === 'meeting' && "bg-purple-500",
                type === 'clock-in' && "bg-green-500",
                type === 'clock-out' && "bg-red-500",
                type === 'other' && "bg-gray-500"
              )}
            />
          ))}
        </div>
      </div>
    );
  };

  // Function to get badge color based on event type
  const getEventBadgeColor = (type: string) => {
    switch(type) {
      case 'inspection': return 'bg-amber-100 text-amber-700 hover:bg-amber-100';
      case 'training': return 'bg-ds-blue-100 text-ds-blue-700 hover:bg-ds-blue-100';
      case 'meeting': return 'bg-purple-100 text-purple-700 hover:bg-purple-100';
      case 'clock-in': return 'bg-green-100 text-green-700 hover:bg-green-100';
      case 'clock-out': return 'bg-red-100 text-red-700 hover:bg-red-100';
      default: return 'bg-gray-100 text-gray-700 hover:bg-gray-100';
    }
  };

  return (
    <Card className="border-none shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg flex justify-between items-center">
          <span>Monthly Schedule</span>
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              <span>Inspection</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-ds-blue-600"></div>
              <span>Training</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <span>Meeting</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Clock In</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <span>Clock Out</span>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Clock In/Out Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 p-4 bg-ds-blue-50 rounded-lg">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <Clock className="h-6 w-6 text-ds-blue-600" />
            <div>
              <h3 className="font-medium">{format(new Date(), 'h:mm a')}</h3>
              <p className="text-xs text-slate-500">{format(new Date(), 'EEEE, MMMM d, yyyy')}</p>
            </div>
          </div>
          <div className="flex flex-row gap-3 mt-2 sm:mt-0 sm:ml-auto">
            <Button 
              className="bg-green-600 hover:bg-green-700"
              size="sm"
              onClick={() => handleClock('in')}
              disabled={clockedIn}
            >
              <Clock className="h-4 w-4 mr-2" />
              Clock In
            </Button>
            <Button 
              className="bg-red-600 hover:bg-red-700"
              size="sm"
              onClick={() => handleClock('out')}
              disabled={!clockedIn}
            >
              <Clock className="h-4 w-4 mr-2" />
              Clock Out
            </Button>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <Calendar
            mode="default"
            selected={today}
            onMonthChange={setCurrentMonth}
            month={currentMonth}
            className="rounded-md border"
            components={{
              Day: ({ date, ...props }) => (
                <div {...props}>
                  {props.children}
                  {date && renderDay(date)}
                </div>
              )
            }}
            disabled={date => {
              // Only enable dates within our range (2 weeks ago to next week)
              return !isWithinInterval(date, { start: twoWeeksAgo, end: nextWeek });
            }}
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Today's Clock Activity</h3>
          {clockRecords.length > 0 ? (
            <div className="space-y-2 max-h-40 overflow-y-auto border rounded-lg divide-y">
              {clockRecords.map((record, index) => (
                <div key={index} className="p-3 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className={`h-8 w-8 rounded-full ${record.type === 'in' ? 'bg-green-100' : 'bg-red-100'} flex items-center justify-center mr-3`}>
                      <Clock className={`h-4 w-4 ${record.type === 'in' ? 'text-green-600' : 'text-red-600'}`} />
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
            <div className="text-center p-4 border rounded-lg">
              <p className="text-slate-500">No clock activity recorded today</p>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Upcoming Activities</h3>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {calendarEvents
              .filter(event => isWithinInterval(event.date, { start: twoWeeksAgo, end: nextWeek }) && !['clock-in', 'clock-out'].includes(event.type))
              .sort((a, b) => a.date.getTime() - b.date.getTime())
              .map((event) => (
                <div 
                  key={event.id} 
                  className={cn(
                    "p-2 rounded-md border flex justify-between items-center",
                    event.completed ? "bg-gray-50" : "bg-white"
                  )}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <Badge className={cn("text-xs", getEventBadgeColor(event.type))}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </Badge>
                      <span className={cn(
                        "text-sm font-medium",
                        event.completed && "text-gray-500 line-through"
                      )}>
                        {event.title}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {format(event.date, 'MMM d, yyyy')}
                    </span>
                  </div>
                  {event.completed && (
                    <Badge className="bg-green-100 text-green-700 text-xs">Completed</Badge>
                  )}
                </div>
              ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlyCalendar;
