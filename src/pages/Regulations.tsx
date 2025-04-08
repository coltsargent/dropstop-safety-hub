
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { ExternalLink, FileText, Search, Shield, Clipboard, HardHat } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Regulations: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-ds-blue-700">Fall Protection Regulations</h1>
          
          <Card className="mb-8">
            <CardContent className="p-8">
              <p className="text-lg mb-8 leading-relaxed">
                This page provides links to key fall protection regulations and standards from OSHA, ANSI, and MSHA, 
                with special emphasis on inspection requirements. These resources can help ensure your 
                safety program remains compliant with current industry standards.
              </p>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="osha">
                  <AccordionTrigger className="py-5">
                    <div className="flex items-center gap-3">
                      <div className="bg-orange-100 p-2 rounded-full">
                        <Shield className="h-6 w-6 text-orange-600" />
                      </div>
                      <h2 className="text-xl font-semibold text-left">OSHA Regulations</h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-14">
                    <ul className="space-y-4">
                      <li>
                        <a href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.140" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 text-ds-blue-600 hover:text-ds-blue-800 hover:underline">
                          <FileText className="h-4 w-4" />
                          <span>1910.140 - Personal Fall Protection Systems (General Industry)</span>
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                        <p className="mt-1 text-sm text-ds-neutral-600 pl-6">
                          Covers design, maintenance, and inspection requirements for personal fall protection systems.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.502" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 text-ds-blue-600 hover:text-ds-blue-800 hover:underline">
                          <FileText className="h-4 w-4" />
                          <span>1926.502 - Fall Protection Systems Criteria and Practices (Construction)</span>
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                        <p className="mt-1 text-sm text-ds-neutral-600 pl-6">
                          Details requirements for guardrail systems, safety net systems, personal fall arrest systems, etc.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.503" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 text-ds-blue-600 hover:text-ds-blue-800 hover:underline">
                          <FileText className="h-4 w-4" />
                          <span>1926.503 - Training Requirements (Construction)</span>
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                        <p className="mt-1 text-sm text-ds-neutral-600 pl-6">
                          Outlines requirements for fall protection training and certification.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.66" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 text-ds-blue-600 hover:text-ds-blue-800 hover:underline">
                          <FileText className="h-4 w-4" />
                          <span>1910.66 App C - Personal Fall Arrest System</span>
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                        <p className="mt-1 text-sm text-ds-neutral-600 pl-6">
                          Guidelines for selection, use, and inspection of personal fall arrest systems.
                        </p>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ansi">
                  <AccordionTrigger className="py-5">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Clipboard className="h-6 w-6 text-blue-600" />
                      </div>
                      <h2 className="text-xl font-semibold text-left">ANSI Standards</h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-14">
                    <ul className="space-y-4">
                      <li>
                        <a href="https://webstore.ansi.org/Standards/ASSE/ANSIASSEISEA3212016" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 text-ds-blue-600 hover:text-ds-blue-800 hover:underline">
                          <FileText className="h-4 w-4" />
                          <span>ANSI/ASSP Z359.1 - Safety Requirements for Personal Fall Arrest Systems</span>
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                        <p className="mt-1 text-sm text-ds-neutral-600 pl-6">
                          Establishes requirements for the performance, design, marking, qualification, instruction, training, and more.
                        </p>
                      </li>
                      <li>
                        <a href="https://webstore.ansi.org/Standards/ASSE/ANSIASSEZ3592019" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 text-ds-blue-600 hover:text-ds-blue-800 hover:underline">
                          <FileText className="h-4 w-4" />
                          <span>ANSI/ASSP Z359.2 - Minimum Requirements for a Comprehensive Managed Fall Protection Program</span>
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                        <p className="mt-1 text-sm text-ds-neutral-600 pl-6">
                          Provides guidelines for employers to identify, evaluate, and manage fall hazards. Includes inspection protocols.
                        </p>
                      </li>
                      <li>
                        <a href="https://webstore.ansi.org/Standards/ASSE/ANSIASSEZ35972019" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 text-ds-blue-600 hover:text-ds-blue-800 hover:underline">
                          <FileText className="h-4 w-4" />
                          <span>ANSI/ASSP Z359.7 - Testing and Certification of Fall Protection Products</span>
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                        <p className="mt-1 text-sm text-ds-neutral-600 pl-6">
                          Covers third-party certification requirements for fall protection products.
                        </p>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="msha">
                  <AccordionTrigger className="py-5">
                    <div className="flex items-center gap-3">
                      <div className="bg-yellow-100 p-2 rounded-full">
                        <HardHat className="h-6 w-6 text-yellow-600" />
                      </div>
                      <h2 className="text-xl font-semibold text-left">MSHA Regulations</h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-14">
                    <ul className="space-y-4">
                      <li>
                        <a href="https://www.ecfr.gov/current/title-30/chapter-I/subchapter-H/part-56/subpart-N/section-56.15005" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 text-ds-blue-600 hover:text-ds-blue-800 hover:underline">
                          <FileText className="h-4 w-4" />
                          <span>30 CFR § 56.15005 - Safety belts and lines (Surface)</span>
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                        <p className="mt-1 text-sm text-ds-neutral-600 pl-6">
                          Safety belt and line requirements for surface mining operations.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.ecfr.gov/current/title-30/chapter-I/subchapter-H/part-57/subpart-N/section-57.15005" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 text-ds-blue-600 hover:text-ds-blue-800 hover:underline">
                          <FileText className="h-4 w-4" />
                          <span>30 CFR § 57.15005 - Safety belts and lines (Underground)</span>
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                        <p className="mt-1 text-sm text-ds-neutral-600 pl-6">
                          Safety belt and line requirements for underground mining operations.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.msha.gov/regulations/policy" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 text-ds-blue-600 hover:text-ds-blue-800 hover:underline">
                          <FileText className="h-4 w-4" />
                          <span>MSHA Program Policy Manual</span>
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                        <p className="mt-1 text-sm text-ds-neutral-600 pl-6">
                          Contains MSHA's interpretive guidance on its safety standards, including fall protection.
                        </p>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="inspection">
                  <AccordionTrigger className="py-5">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <Search className="h-6 w-6 text-green-600" />
                      </div>
                      <h2 className="text-xl font-semibold text-left">Inspection-Specific Guidelines</h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-14">
                    <ul className="space-y-4">
                      <li>
                        <a href="https://www.osha.gov/sites/default/files/publications/fall_protection_factsheet.pdf" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 text-ds-blue-600 hover:text-ds-blue-800 hover:underline">
                          <FileText className="h-4 w-4" />
                          <span>OSHA Fact Sheet: Inspection of Personal Fall Protection Equipment</span>
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                        <p className="mt-1 text-sm text-ds-neutral-600 pl-6">
                          Guidelines for inspecting harnesses, lanyards, and other fall protection components.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.osha.gov/harness-inspection/index.html" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 text-ds-blue-600 hover:text-ds-blue-800 hover:underline">
                          <FileText className="h-4 w-4" />
                          <span>OSHA Harness Inspection Tool</span>
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                        <p className="mt-1 text-sm text-ds-neutral-600 pl-6">
                          Interactive tool to guide inspections of fall arrest harnesses.
                        </p>
                      </li>
                      <li>
                        <a href="https://webstore.ansi.org/Standards/ASSE/ANSIASSEZ3592019" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 text-ds-blue-600 hover:text-ds-blue-800 hover:underline">
                          <FileText className="h-4 w-4" />
                          <span>ANSI/ASSP Z359.2-2017 - Section 5.4: Equipment Inspection</span>
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                        <p className="mt-1 text-sm text-ds-neutral-600 pl-6">
                          Detailed requirements for frequency and documentation of fall protection equipment inspections.
                        </p>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-8 pt-6 border-t border-ds-neutral-200">
                <p className="text-sm text-ds-neutral-600">
                  Please note that regulations and standards may change. Always consult the most recent version 
                  of these documents and consider consulting with a safety professional for specific applications.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Regulations;
