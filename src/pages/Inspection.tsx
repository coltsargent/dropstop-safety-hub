
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Camera, 
  ChevronRight,
  Calendar,
  Clock,
  MapPin,
  ArrowLeft,
  Send
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'pass' | 'fail' | 'na';
  notes: string;
  images: string[];
}

const inspectionCategories = [
  { id: 'harness', name: 'Harness' },
  { id: 'lanyard', name: 'Lanyard' },
  { id: 'anchor', name: 'Anchors' },
  { id: 'srl', name: 'Self-Retracting Lifeline' },
];

const checklistItems: Record<string, ChecklistItem[]> = {
  harness: [
    { 
      id: 'h1', 
      title: 'Webbing', 
      description: 'Check for cuts, tears, abrasions, burns, chemical damage, or severely faded color', 
      status: 'pending',
      notes: '',
      images: []
    },
    { 
      id: 'h2', 
      title: 'D-Rings', 
      description: 'Check for distortion, sharp edges, burrs, cracks or corrosion', 
      status: 'pending',
      notes: '',
      images: []
    },
    { 
      id: 'h3', 
      title: 'Buckles', 
      description: 'Check for distortion, sharp edges, burrs, cracks or corrosion', 
      status: 'pending',
      notes: '',
      images: []
    },
    { 
      id: 'h4', 
      title: 'Labels', 
      description: 'Check that all labels are present and legible', 
      status: 'pending',
      notes: '',
      images: []
    },
  ],
  lanyard: [
    { 
      id: 'l1', 
      title: 'Webbing/Rope', 
      description: 'Check for cuts, tears, abrasions, burns, or chemical damage', 
      status: 'pending',
      notes: '',
      images: []
    },
    { 
      id: 'l2', 
      title: 'Connectors', 
      description: 'Check for distortion, sharp edges, burrs, cracks or corrosion', 
      status: 'pending',
      notes: '',
      images: []
    },
    { 
      id: 'l3', 
      title: 'Energy Absorber', 
      description: 'Check for deployment, cuts, tears, abrasions, or chemical damage', 
      status: 'pending',
      notes: '',
      images: []
    },
  ],
  anchor: [
    { 
      id: 'a1', 
      title: 'Structural Integrity', 
      description: 'Check for distortion, cracks, or corrosion', 
      status: 'pending',
      notes: '',
      images: []
    },
    { 
      id: 'a2', 
      title: 'Connection Point', 
      description: 'Check for wear, damage, or improper installation', 
      status: 'pending',
      notes: '',
      images: []
    },
  ],
  srl: [
    { 
      id: 's1', 
      title: 'Housing', 
      description: 'Check for cracks, dents, or corrosion', 
      status: 'pending',
      notes: '',
      images: []
    },
    { 
      id: 's2', 
      title: 'Lifeline', 
      description: 'Check for cuts, burns, chemical damage, or excessive wear', 
      status: 'pending',
      notes: '',
      images: []
    },
    { 
      id: 's3', 
      title: 'Braking Mechanism', 
      description: 'Check that the unit locks when the lifeline is pulled sharply', 
      status: 'pending',
      notes: '',
      images: []
    },
    { 
      id: 's4', 
      title: 'Retraction', 
      description: 'Check that the lifeline extends and retracts fully and smoothly', 
      status: 'pending',
      notes: '',
      images: []
    },
  ],
};

const Inspection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('harness');
  const [items, setItems] = useState<Record<string, ChecklistItem[]>>(checklistItems);
  const [generalNotes, setGeneralNotes] = useState('');
  const [inspectionComplete, setInspectionComplete] = useState(false);
  const { toast } = useToast();
  
  const updateItemStatus = (categoryId: string, itemId: string, status: 'pass' | 'fail' | 'na') => {
    setItems(prev => {
      const newItems = { ...prev };
      const categoryItems = [...newItems[categoryId]];
      const itemIndex = categoryItems.findIndex(item => item.id === itemId);
      
      if (itemIndex !== -1) {
        categoryItems[itemIndex] = {
          ...categoryItems[itemIndex],
          status
        };
        newItems[categoryId] = categoryItems;
      }
      
      return newItems;
    });
  };
  
  const updateItemNotes = (categoryId: string, itemId: string, notes: string) => {
    setItems(prev => {
      const newItems = { ...prev };
      const categoryItems = [...newItems[categoryId]];
      const itemIndex = categoryItems.findIndex(item => item.id === itemId);
      
      if (itemIndex !== -1) {
        categoryItems[itemIndex] = {
          ...categoryItems[itemIndex],
          notes
        };
        newItems[categoryId] = categoryItems;
      }
      
      return newItems;
    });
  };
  
  const handleAddImage = (categoryId: string, itemId: string) => {
    // In a real app, this would trigger the device camera
    // For now, we'll just add a placeholder image URL
    setItems(prev => {
      const newItems = { ...prev };
      const categoryItems = [...newItems[categoryId]];
      const itemIndex = categoryItems.findIndex(item => item.id === itemId);
      
      if (itemIndex !== -1) {
        categoryItems[itemIndex] = {
          ...categoryItems[itemIndex],
          images: [
            ...categoryItems[itemIndex].images,
            'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3'
          ]
        };
        newItems[categoryId] = categoryItems;
      }
      
      return newItems;
    });
    
    toast({
      title: 'Image captured',
      description: 'Image has been added to the inspection record',
    });
  };
  
  const handleSubmitInspection = () => {
    // Check if any items are still pending
    let allCompleted = true;
    let anyFailed = false;
    
    Object.keys(items).forEach(categoryId => {
      items[categoryId].forEach(item => {
        if (item.status === 'pending') {
          allCompleted = false;
        }
        if (item.status === 'fail') {
          anyFailed = true;
        }
      });
    });
    
    if (!allCompleted) {
      toast({
        title: 'Incomplete Inspection',
        description: 'Please complete all checklist items before submitting',
        variant: 'destructive',
      });
      return;
    }
    
    setInspectionComplete(true);
    
    toast({
      title: 'Inspection Submitted',
      description: anyFailed 
        ? 'Inspection completed with issues that need attention' 
        : 'Inspection completed successfully',
      variant: anyFailed ? 'destructive' : 'default',
    });
    
    // In a real app, you would submit the inspection data to your backend
  };
  
  const renderStatusButtons = (categoryId: string, item: ChecklistItem) => {
    return (
      <div className="flex items-center gap-2 mt-2">
        <Button
          type="button"
          variant={item.status === 'pass' ? 'default' : 'outline'}
          size="sm"
          className={`gap-1 ${item.status === 'pass' ? 'bg-ds-success-500 hover:bg-ds-success-600' : 'border-ds-neutral-200'}`}
          onClick={() => updateItemStatus(categoryId, item.id, 'pass')}
        >
          <CheckCircle className="h-4 w-4" />
          <span>Pass</span>
        </Button>
        <Button
          type="button"
          variant={item.status === 'fail' ? 'default' : 'outline'}
          size="sm"
          className={`gap-1 ${item.status === 'fail' ? 'bg-ds-danger-500 hover:bg-ds-danger-600' : 'border-ds-neutral-200'}`}
          onClick={() => updateItemStatus(categoryId, item.id, 'fail')}
        >
          <XCircle className="h-4 w-4" />
          <span>Fail</span>
        </Button>
        <Button
          type="button"
          variant={item.status === 'na' ? 'default' : 'outline'}
          size="sm"
          className={`gap-1 ${item.status === 'na' ? 'bg-ds-neutral-700 hover:bg-ds-neutral-800' : 'border-ds-neutral-200'}`}
          onClick={() => updateItemStatus(categoryId, item.id, 'na')}
        >
          <AlertCircle className="h-4 w-4" />
          <span>N/A</span>
        </Button>
      </div>
    );
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-ds-neutral-50">
      <Header />
      
      <main className="flex-grow pt-16 px-4">
        <div className="container mx-auto py-8">
          {/* Inspection Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button 
                variant="ghost" 
                size="sm" 
                className="mb-2 -ml-2 text-ds-neutral-600" 
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back
              </Button>
              <h1 className="text-3xl font-bold text-ds-neutral-900">Equipment Inspection</h1>
              <p className="text-ds-neutral-600 flex flex-wrap items-center gap-x-4 mt-1">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-ds-neutral-500" />
                  {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-ds-neutral-500" />
                  {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-ds-neutral-500" />
                  Current Location
                </span>
              </p>
            </motion.div>
            
            <motion.div
              className="mt-4 md:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {inspectionComplete ? (
                <Button variant="outline" className="gap-1 border-ds-neutral-200" onClick={() => setInspectionComplete(false)}>
                  <span>New Inspection</span>
                </Button>
              ) : (
                <Button 
                  className="gap-1"
                  onClick={handleSubmitInspection}
                >
                  <Send className="h-4 w-4" />
                  <span>Submit Inspection</span>
                </Button>
              )}
            </motion.div>
          </div>
          
          {inspectionComplete ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-ds-neutral-200 mb-6">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-ds-success-500" />
                    Inspection Complete
                  </CardTitle>
                  <CardDescription>
                    Your inspection has been successfully submitted
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-ds-neutral-900 mb-1">Summary</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {inspectionCategories.map(category => {
                          const categoryItems = items[category.id];
                          const passCount = categoryItems.filter(item => item.status === 'pass').length;
                          const failCount = categoryItems.filter(item => item.status === 'fail').length;
                          const naCount = categoryItems.filter(item => item.status === 'na').length;
                          
                          return (
                            <div key={category.id} className="border border-ds-neutral-200 rounded-lg p-3 bg-white">
                              <h4 className="font-medium text-sm">{category.name}</h4>
                              <div className="flex items-center justify-between mt-2">
                                <div className="flex gap-2">
                                  <span className="inline-flex items-center text-xs text-ds-success-600">
                                    <CheckCircle className="h-3 w-3 mr-1" /> {passCount}
                                  </span>
                                  {failCount > 0 && (
                                    <span className="inline-flex items-center text-xs text-ds-danger-600">
                                      <XCircle className="h-3 w-3 mr-1" /> {failCount}
                                    </span>
                                  )}
                                  {naCount > 0 && (
                                    <span className="inline-flex items-center text-xs text-ds-neutral-600">
                                      <AlertCircle className="h-3 w-3 mr-1" /> {naCount}
                                    </span>
                                  )}
                                </div>
                                <Button variant="ghost" size="sm" className="h-7 p-0">
                                  <ChevronRight className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                    {generalNotes && (
                      <div>
                        <h3 className="font-medium text-ds-neutral-900 mb-1">General Notes</h3>
                        <p className="text-sm text-ds-neutral-700 bg-ds-neutral-50 p-3 rounded-md">{generalNotes}</p>
                      </div>
                    )}
                    
                    <div className="pt-2">
                      <Button className="w-full sm:w-auto">View Full Report</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <>
              {/* Equipment Selection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="border-ds-neutral-200 mb-6">
                  <CardHeader>
                    <CardTitle>Select Equipment Type</CardTitle>
                    <CardDescription>Choose the type of equipment you are inspecting</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs 
                      defaultValue={activeCategory} 
                      className="w-full" 
                      onValueChange={setActiveCategory}
                    >
                      <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
                        {inspectionCategories.map(category => (
                          <TabsTrigger key={category.id} value={category.id}>
                            {category.name}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    </Tabs>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Inspection Checklist */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="border-ds-neutral-200 mb-6">
                  <CardHeader>
                    <CardTitle>{inspectionCategories.find(c => c.id === activeCategory)?.name} Inspection Checklist</CardTitle>
                    <CardDescription>Complete all items in the checklist</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {items[activeCategory].map(item => (
                        <div key={item.id} className={`p-4 border rounded-lg bg-white ${
                          item.status === 'pass' ? 'border-ds-success-200 bg-ds-success-50/30' : 
                          item.status === 'fail' ? 'border-ds-danger-200 bg-ds-danger-50/30' : 
                          item.status === 'na' ? 'border-ds-neutral-200 bg-ds-neutral-100/50' : 
                          'border-ds-neutral-200'
                        }`}>
                          <h3 className="font-medium text-ds-neutral-900 flex items-center">
                            {item.status === 'pass' && <CheckCircle className="h-4 w-4 text-ds-success-500 mr-2" />}
                            {item.status === 'fail' && <XCircle className="h-4 w-4 text-ds-danger-500 mr-2" />}
                            {item.status === 'na' && <AlertCircle className="h-4 w-4 text-ds-neutral-500 mr-2" />}
                            {item.title}
                          </h3>
                          <p className="text-sm text-ds-neutral-600 mt-1 mb-3">{item.description}</p>
                          
                          {renderStatusButtons(activeCategory, item)}
                          
                          {item.status !== 'pending' && (
                            <div className="mt-3">
                              <Textarea 
                                placeholder="Add notes here..."
                                value={item.notes}
                                onChange={(e) => updateItemNotes(activeCategory, item.id, e.target.value)}
                                className="resize-none h-20 text-sm"
                              />
                              
                              <div className="flex flex-wrap gap-2 mt-3">
                                {item.images.map((image, idx) => (
                                  <div key={idx} className="relative h-16 w-16 rounded-md overflow-hidden">
                                    <img src={image} alt="Inspection" className="h-full w-full object-cover" />
                                  </div>
                                ))}
                                
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  className="h-16 w-16 flex flex-col items-center justify-center gap-1 border-dashed border-ds-neutral-300"
                                  onClick={() => handleAddImage(activeCategory, item.id)}
                                >
                                  <Camera className="h-5 w-5 text-ds-neutral-500" />
                                  <span className="text-xs text-ds-neutral-500">Add Photo</span>
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* General Notes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="border-ds-neutral-200 mb-6">
                  <CardHeader>
                    <CardTitle>General Notes</CardTitle>
                    <CardDescription>Add any additional notes about the inspection</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea 
                      placeholder="Add general notes about the inspection here..."
                      value={generalNotes}
                      onChange={(e) => setGeneralNotes(e.target.value)}
                      className="resize-none min-h-[120px]"
                    />
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button 
                      className="gap-1"
                      onClick={handleSubmitInspection}
                    >
                      <Send className="h-4 w-4" />
                      <span>Submit Inspection</span>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Inspection;
