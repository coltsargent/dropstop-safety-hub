
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Mail, Globe, Shield, Users, Award, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-ds-blue-700">About Us</h1>
          
          <Card className="mb-8">
            <CardContent className="p-8">
              <p className="text-lg mb-8 leading-relaxed">
                At Drop Stop Safety, our mission is to revolutionize fall protection through technology-powered solutions that put frontline workers first and give organizations the tools to create a safer, more accountable work environment.
              </p>
              
              <section className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-ds-blue-100 p-2 rounded-full">
                    <Users className="h-6 w-6 text-ds-blue-600" />
                  </div>
                  <h2 className="text-xl font-semibold">Our Founder: Colt Sargent</h2>
                </div>
                <p className="leading-relaxed pl-11">
                  Colt Sargent brings nearly a decade of experience in fall protection, risk management, and safety consulting. Having worked closely with jobsite crews and executive teams alike, Colt saw the urgent need for smarter systems that didn't just tick a compliance box—but actively improved the safety experience for workers and reduced liability for companies. That vision led to the creation of Drop Stop: a platform that closes the gap between policy and practice.
                </p>
              </section>
              
              <section className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-ds-blue-100 p-2 rounded-full">
                    <Shield className="h-6 w-6 text-ds-blue-600" />
                  </div>
                  <h2 className="text-xl font-semibold">What We Believe</h2>
                </div>
                <div className="pl-11">
                  <p className="leading-relaxed mb-4">
                    We believe that real safety starts at the ground level—with the people putting their lives on the line every day. By focusing on those frontline workers and making their tasks easier, faster, and more transparent, we build stronger safety cultures from the bottom up.
                  </p>
                  <p className="leading-relaxed">
                    And we use technology as a catalyst—not a crutch. Drop Stop simplifies PPE inspections, tracks equipment and certifications, and provides supervisors with instant visibility—ensuring nothing is missed and every step is documented.
                  </p>
                </div>
              </section>
              
              <section className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-ds-blue-100 p-2 rounded-full">
                    <Award className="h-6 w-6 text-ds-blue-600" />
                  </div>
                  <h2 className="text-xl font-semibold">Our Goals</h2>
                </div>
                <ul className="space-y-5 pl-11">
                  <li>
                    <h3 className="font-semibold mb-1">Empower Frontline Workers</h3>
                    <p className="text-gray-700">Give workers intuitive tools that encourage ownership of their own safety.</p>
                  </li>
                  <li>
                    <h3 className="font-semibold mb-1">Document the Chain of Liability</h3>
                    <p className="text-gray-700">Ensure organizations have clear, verifiable proof of compliance from worker to supervisor to company.</p>
                  </li>
                  <li>
                    <h3 className="font-semibold mb-1">Improve Safety Culture Through Innovation</h3>
                    <p className="text-gray-700">Replace fragmented, paper-based processes with real-time, data-backed systems that make safety part of the workflow.</p>
                  </li>
                  <li>
                    <h3 className="font-semibold mb-1">Protect What Matters</h3>
                    <p className="text-gray-700">From employees to business reputation, Drop Stop is built to protect the people and assets that keep your company running.</p>
                  </li>
                </ul>
              </section>
              
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-ds-blue-100 p-2 rounded-full">
                    <Building className="h-6 w-6 text-ds-blue-600" />
                  </div>
                  <h2 className="text-xl font-semibold">Let's build a safety program that works just as hard as your team does.</h2>
                </div>
                <div className="pl-11 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
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
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
