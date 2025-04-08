
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Globe, Shield, Users, Award, Building, Info } from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-ds-blue-700">About Us</h1>
          
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-lg mb-6 leading-relaxed">
                At Drop Stop Safety, our mission is to revolutionize fall protection through technology-powered solutions that put frontline workers first and give organizations the tools to create a safer, more accountable work environment.
              </p>
            </CardContent>
          </Card>
          
          <div className="grid gap-8 mb-12">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-ds-blue-100 p-2 rounded-full">
                    <Users className="h-6 w-6 text-ds-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Our Founder: Colt Sargent</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">
                  Colt Sargent brings nearly a decade of experience in fall protection, risk management, and safety consulting. Having worked closely with jobsite crews and executive teams alike, Colt saw the urgent need for smarter systems that didn't just tick a compliance box—but actively improved the safety experience for workers and reduced liability for companies. That vision led to the creation of Drop Stop: a platform that closes the gap between policy and practice.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-ds-blue-100 p-2 rounded-full">
                    <Shield className="h-6 w-6 text-ds-blue-600" />
                  </div>
                  <CardTitle className="text-xl">What We Believe</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">
                  We believe that real safety starts at the ground level—with the people putting their lives on the line every day. By focusing on those frontline workers and making their tasks easier, faster, and more transparent, we build stronger safety cultures from the bottom up.
                </p>
                <p className="mt-4 leading-relaxed">
                  And we use technology as a catalyst—not a crutch. Drop Stop simplifies PPE inspections, tracks equipment and certifications, and provides supervisors with instant visibility—ensuring nothing is missed and every step is documented.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-ds-blue-100 p-2 rounded-full">
                    <Award className="h-6 w-6 text-ds-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Our Goals</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-5">
                  <li>
                    <h3 className="font-semibold mb-1">Empower Frontline Workers</h3>
                    <p className="text-sm">Give workers intuitive tools that encourage ownership of their own safety.</p>
                  </li>
                  <li>
                    <h3 className="font-semibold mb-1">Document the Chain of Liability</h3>
                    <p className="text-sm">Ensure organizations have clear, verifiable proof of compliance from worker to supervisor to company.</p>
                  </li>
                  <li>
                    <h3 className="font-semibold mb-1">Improve Safety Culture Through Innovation</h3>
                    <p className="text-sm">Replace fragmented, paper-based processes with real-time, data-backed systems that make safety part of the workflow.</p>
                  </li>
                  <li>
                    <h3 className="font-semibold mb-1">Protect What Matters</h3>
                    <p className="text-sm">From employees to business reputation, Drop Stop is built to protect the people and assets that keep your company running.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-ds-blue-100 p-2 rounded-full">
                    <Info className="h-6 w-6 text-ds-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Let's build a safety program that works just as hard as your team does.</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-ds-blue-600" />
                    <a href="mailto:colt.sargent@dropstopsafety.com" className="text-ds-blue-600 hover:underline">
                      colt.sargent@dropstopsafety.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-ds-blue-600" />
                    <a href="https://www.dropstopsafety.com" target="_blank" rel="noopener noreferrer" className="text-ds-blue-600 hover:underline">
                      www.dropstopsafety.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
