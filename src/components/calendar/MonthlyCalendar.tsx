
import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, subWeeks, addWeeks, isWithinInterval, addDays } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Define types for calendar events
type CalendarEvent = {
  id: string;
  title: string;
  date: Date;
  type: 'inspection' | 'training' | 'meeting' | 'other';
  completed?: boolean;
};

interface MonthlyCalendarProps {
  events?: CalendarEvent[];
}

const MonthlyCalendar: React.FC<MonthlyCalendarProps> = ({ events = [] }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState<Date>(today);
  
  // Calculate the dates to show (last two weeks + current week + next week)
  const twoWeeksAgo = subWeeks(today, 2);
  const nextWeek = addWeeks(today, 1);
  
  // Generate some sample events if none provided
  const calendarEvents = events.length > 0 ? events : [
    {
      id: '1',
      title: 'Equipment Inspection',
      date: subWeeks(today, 1),
      type: 'inspection',
      completed: true,
    },
    {
      id: '2',
      title: 'Fall Protection Training',
      date: addDays(today, 2),
      type: 'training',
    },
    {
      id: '3',
      title: 'Safety Meeting',
      date: addDays(today, 5),
      type: 'meeting',
    },
    {
      id: '4',
      title: 'Harness Inspection',
      date: subWeeks(today, 2),
      type: 'inspection',
      completed: true,
    },
    {
      id: '5',
      title: 'Site Safety Review',
      date: addDays(today, -2),
      type: 'meeting',
      completed: true,
    },
    {
      id: '6',
      title: 'Lanyard Inspection',
      date: addDays(today, 1),
      type: 'inspection',
    }
  ];

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
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
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
                  {renderDay(date)}
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
          <h3 className="text-sm font-medium">Upcoming Activities</h3>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {calendarEvents
              .filter(event => isWithinInterval(event.date, { start: twoWeeksAgo, end: nextWeek }))
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
