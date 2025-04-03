import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Camera, Bot, AlertTriangle, CheckCircle2, LineChart, Clock, Bell, Ribbon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';

const AISafetyMonitor: React.FC = () => {
  const { toast } = useToast();
  
  const handleDemoRequest = () => {
    toast({
      title: "Demo Request Received",
      description: "A representative from Drop Stop Safety will contact you shortly.",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8 pt-20 pb-24"
    >
      <div className="flex flex-col space-y-6">
        <div className="relative mb-4">
          <div className="absolute -top-6 right-0 transform rotate-45 origin-bottom-right md:right-4">
            <div className="flex items-center justify-center bg-ds-blue-600 text-white py-1 px-10 shadow-md">
              <Ribbon className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Drop Stop Safety</span>
            </div>
          </div>
          
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold">AI Safety Monitor</h1>
            <p className="text-muted-foreground">
              AI-powered fall protection monitoring systems for enhanced workplace safety
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-ds-blue-600" />
                <CardTitle>Executive Summary</CardTitle>
              </div>
              <CardDescription>
                Drop Stop Safety's AI monitoring system as an equivalent to human Safety Monitors
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Current OSHA and ANSI standards for fall protection require a designated human "Safety Monitor" 
                on certain job sites, particularly in roofing and other high-risk environments. These monitors are 
                tasked with actively observing workers and warning them of unsafe behavior or proximity to fall hazards.
              </p>
              <p>
                With recent advancements in artificial intelligence (AI), computer vision, and real-time sensor 
                technologies, it is now technically feasible to replicate and even exceed the situational awareness 
                and responsiveness of a human monitor.
              </p>
              <div className="py-2">
                <Badge variant="outline" className="bg-ds-blue-50 text-ds-blue-700">Drop Stop Safety</Badge>
                <span className="ml-2 text-sm italic">Smarter Fall Protection. Real-Time Compliance.</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-ds-blue-600" />
                <CardTitle>Request a Demo</CardTitle>
              </div>
              <CardDescription>
                Experience AI Safety Monitor in action
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                Interested in seeing how our AI Safety Monitor can enhance safety compliance 
                on your worksite? Request a demonstration today.
              </p>
              <Button 
                onClick={handleDemoRequest} 
                className="w-full bg-ds-blue-600 hover:bg-ds-blue-700"
              >
                Request Demo
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <Alert className="bg-ds-blue-50 border-ds-blue-200">
          <AlertDescription className="text-ds-blue-800 flex items-center">
            <Ribbon className="h-5 w-5 mr-2 text-ds-blue-600" />
            <span>Introducing cutting-edge AI safety technology for fall protection compliance</span>
          </AlertDescription>
        </Alert>
        
        <Tabs defaultValue="system" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="system">System Components</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
          </TabsList>
          
          <TabsContent value="system" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Camera className="h-5 w-5 text-ds-blue-600" />
                  <CardTitle>The Case for AI as a Safety Monitor Equivalent</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Drop Stop is developing a system that uses 360° cameras, wearable sensors, computer vision, 
                  and machine learning to monitor job sites in real time. Key capabilities include:
                </p>
                
                <div className="space-y-4 mt-4">
                  <div className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Real-Time Hazard Detection</h3>
                      <p className="text-sm text-slate-600">
                        Detects when a worker is near an unprotected edge, skylight, or other fall hazard.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Bell className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Automated Alerts</h3>
                      <p className="text-sm text-slate-600">
                        Issues audible, visual, or haptic alerts to the worker instantly.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Clock className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Fall Event Logging</h3>
                      <p className="text-sm text-slate-600">
                        Automatically records and timestamps fall events and near misses.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <LineChart className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Behavioral Insights</h3>
                      <p className="text-sm text-slate-600">
                        Tracks compliance trends and unsafe movements over time.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <p>
                  These features replicate and enhance the functions of a human Safety Monitor—with no fatigue, 
                  360-degree awareness, and data-backed reporting.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="compliance" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-ds-blue-600" />
                  <CardTitle>Compliance and Legal Considerations</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Currently, OSHA does not recognize non-human systems as a replacement for a Safety Monitor. 
                  However, the ANSI Z359 series provides room for interpretation in leveraging technology for 
                  enhanced fall protection.
                </p>
                
                <h3 className="font-medium mt-4">OSHA Requirements for Safety Monitors (29 CFR 1926.502(h))</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Be a competent person capable of recognizing fall hazards.</li>
                  <li>Stay within visual and verbal range of workers.</li>
                  <li>Warn workers when they are acting unsafely.</li>
                  <li>Not have other responsibilities that could distract from monitoring duties.</li>
                </ul>
                
                <h3 className="font-medium mt-4">To bridge this gap, Drop Stop proposes:</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Pilot programs in partnership with MGAs, insurers, and contractors.</li>
                  <li>Data collection to demonstrate reduced fall incidents and improved compliance.</li>
                  <li>Collaboration with industry and regulators to propose amendments or allowances for AI-monitored systems.</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="benefits" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <CardTitle>Benefits for Insurers and Employers</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-green-100">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Lower EMR and Claim Frequency</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Proactive monitoring leads to fewer incidents and reduced Experience Modification Rate.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-green-100">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Premium Incentives</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Insurers can offer reduced premiums for companies implementing AI safety monitoring.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-green-100">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Documentation for Liability Defense</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Comprehensive records of safety warnings, compliance efforts, and employee behavior.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-green-100">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Scalable Safety Supervision</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Monitor multiple work zones without increased headcount or labor costs.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-6 bg-green-50 p-4 rounded-md">
                  <h3 className="font-medium text-green-800 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" /> Conclusion
                  </h3>
                  <p className="text-sm text-green-700 mt-2">
                    AI systems like Drop Stop are not only capable of performing the duties of a traditional 
                    Safety Monitor—they can do so with greater precision, scalability, and consistency. With support 
                    from forward-thinking insurers, contractors, and regulators, AI safety monitoring has the 
                    potential to redefine the standard of care in high-risk work environments.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default AISafetyMonitor;
