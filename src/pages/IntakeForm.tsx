
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Users, Briefcase, Phone, Mail, Send } from 'lucide-react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Form schema validation
const formSchema = z.object({
  companyName: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  industry: z.string().min(1, { message: "Please select an industry." }),
  teamSize: z.string().min(1, { message: "Please select your field team size." }),
  contactName: z.string().min(2, { message: "Contact name must be at least 2 characters." }),
  contactEmail: z.string().email({ message: "Please enter a valid email address." }),
  contactPhone: z.string().min(10, { message: "Please enter a valid phone number." }),
  resume: z.boolean().default(false).optional(),
  position: z.string().min(2, { message: "Please specify a position or area of interest" }),
  additionalInfo: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const IntakeForm: React.FC = () => {
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: '',
      industry: '',
      teamSize: '',
      contactName: '',
      contactEmail: '',
      contactPhone: '',
      resume: false,
      position: '',
      additionalInfo: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    // In a real implementation, this would send data to your backend
    console.log('Form submitted:', data);
    
    // Construct email to recipient
    const emailSubject = `New Drop Stop Application: ${data.contactName}`;
    const emailBody = `
Name: ${data.contactName}
Email: ${data.contactEmail}
Phone: ${data.contactPhone}
Company: ${data.companyName}
Industry: ${data.industry}
Team Size: ${data.teamSize}
Position Interest: ${data.position}
Has Resume: ${data.resume ? 'Yes' : 'No'}
Additional Info: ${data.additionalInfo || 'None provided'}
    `;
    
    // For demonstration, we'll create a mailto link
    // In a production environment, you'd want to use a backend service
    const mailtoLink = `mailto:colt.sargent@dropstopsafety.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Show success toast
    toast.success("Form submitted successfully!", {
      description: "A representative will contact you shortly.",
    });
    
    // Open the email client or redirect
    window.open(mailtoLink, '_blank');
    
    // Redirect to careers page after submission
    setTimeout(() => {
      navigate('/careers');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-ds-blue-600 to-ds-blue-500 p-6 text-white">
              <h1 className="text-2xl font-bold">Join Our Team</h1>
              <p className="mt-2 text-blue-100">
                Tell us about yourself and how you can contribute to our mission 
                of improving workplace safety.
              </p>
            </div>
            
            <div className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Personal Information Section */}
                    <div className="md:col-span-2">
                      <h2 className="text-lg font-semibold text-ds-neutral-900 mb-4 flex items-center">
                        <Briefcase className="mr-2 h-5 w-5 text-ds-blue-500" />
                        Personal Information
                      </h2>
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="contactName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="contactEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john.doe@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="contactPhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Position of Interest</FormLabel>
                          <FormControl>
                            <Input placeholder="Software Developer, Safety Specialist, etc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {/* Company Information Section */}
                    <div className="md:col-span-2 mt-4">
                      <h2 className="text-lg font-semibold text-ds-neutral-900 mb-4 flex items-center">
                        <Building2 className="mr-2 h-5 w-5 text-ds-blue-500" />
                        Company Information (if applicable)
                      </h2>
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Current Employer (if applicable)" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="industry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Industry</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select industry" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="construction">Construction</SelectItem>
                              <SelectItem value="maintenance">Maintenance</SelectItem>
                              <SelectItem value="telecommunications">Telecommunications</SelectItem>
                              <SelectItem value="utilities">Utilities</SelectItem>
                              <SelectItem value="manufacturing">Manufacturing</SelectItem>
                              <SelectItem value="oil_gas">Oil & Gas</SelectItem>
                              <SelectItem value="transportation">Transportation</SelectItem>
                              <SelectItem value="technology">Technology</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="teamSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Team Size</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select team size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="solo">Solo</SelectItem>
                              <SelectItem value="1-10">1-10 employees</SelectItem>
                              <SelectItem value="11-50">11-50 employees</SelectItem>
                              <SelectItem value="51-100">51-100 employees</SelectItem>
                              <SelectItem value="101-500">101-500 employees</SelectItem>
                              <SelectItem value="500+">500+ employees</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="resume"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I have a resume to send separately
                            </FormLabel>
                            <FormDescription>
                              Check this if you'll be emailing your resume to colt.sargent@dropstopsafety.com
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <div className="md:col-span-2">
                      <FormField
                        control={form.control}
                        name="additionalInfo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Why do you want to join Drop Stop?</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your background, skills, and why you're interested in joining our team..." 
                                className="min-h-[120px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormDescription>
                              Share any relevant experience and what excites you about our mission.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => navigate('/careers')}
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit" 
                      className="bg-ds-blue-600 hover:bg-ds-blue-700 gap-2"
                    >
                      <Send className="h-4 w-4" />
                      Submit Application
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default IntakeForm;
