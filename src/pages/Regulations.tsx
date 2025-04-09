
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { ExternalLink, FileText, Shield, Clipboard, HardHat } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
              
              {/* OSHA Regulations Section */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <Shield className="h-6 w-6 text-orange-600" />
                  </div>
                  <h2 className="text-xl font-semibold">OSHA Regulations</h2>
                </div>
                
                <ul className="space-y-6 pl-12">
                  <li>
                    <a href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.140" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-ds-blue-600 hover:text-ds-blue-800 hover:underline">
                      <FileText className="h-4 w-4" />
                      <span>1910.140 - Personal Fall Protection Systems (General Industry)</span>
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                    <p className="mt-2 text-ds-neutral-600 pl-6">
                      Covers design, maintenance, and inspection requirements for personal fall protection systems.
                      This standard sets forth requirements for personal fall protection systems, which include personal fall arrest systems, positioning systems, and travel restraint systems.
                      It details specific requirements for anchorages, body harnesses, and connecting components.
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
                    <p className="mt-2 text-ds-neutral-600 pl-6">
                      Details requirements for guardrail systems, safety net systems, personal fall arrest systems, positioning device systems, warning line systems,
                      controlled access zones, safety monitoring systems, covers, protection from falling objects, and fall protection plans.
                      This standard is crucial for construction sites where workers are exposed to fall hazards.
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
                    <p className="mt-2 text-ds-neutral-600 pl-6">
                      Outlines requirements for fall protection training and certification. This standard specifies that employers must provide a training program for 
                      each employee who might be exposed to fall hazards. The program must enable each employee to recognize the hazards of falling and the procedures
                      to follow to minimize these hazards. The standard also details requirements for certification and retraining.
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
                    <p className="mt-2 text-ds-neutral-600 pl-6">
                      Guidelines for selection, use, and inspection of personal fall arrest systems. This appendix provides guidance on the proper selection, 
                      installation, and use of fall arrest systems, including detailed information on component compatibility, anchorage strength, 
                      and system performance criteria. It also addresses inspection protocols and maintenance requirements to ensure the ongoing 
                      safety and reliability of the equipment.
                    </p>
                  </li>
                </ul>
              </div>
              
              <Separator className="my-10" />
              
              {/* ANSI Standards Section */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Clipboard className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-semibold">ANSI Standards</h2>
                </div>
                
                <ul className="space-y-6 pl-12">
                  <li>
                    <a href="https://webstore.ansi.org/Standards/ASSE/ANSIASSEISEA3212016" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-ds-blue-600 hover:text-ds-blue-800 hover:underline">
                      <FileText className="h-4 w-4" />
                      <span>ANSI/ASSP Z359.1 - Safety Requirements for Personal Fall Arrest Systems</span>
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                    <p className="mt-2 text-ds-neutral-600 pl-6">
                      Establishes requirements for the performance, design, marking, qualification, instruction, training, inspection, use, maintenance, and 
                      removal from service of connectors, full body harnesses, lanyards, energy absorbers, anchorage connectors, fall arresters, vertical 
                      lifelines, and self-retracting lanyards comprising personal fall arrest systems for users within the capacity range of 130 to 310 pounds.
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
                    <p className="mt-2 text-ds-neutral-600 pl-6">
                      Provides guidelines for employers to identify, evaluate, and manage fall hazards. This standard establishes the minimum requirements for 
                      an occupational fall protection program. It includes detailed protocols for equipment inspection, maintenance, and storage, as well as
                      comprehensive documentation requirements for program elements. The standard also outlines specific roles and responsibilities for 
                      program administrators, competent persons, and authorized persons.
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
                    <p className="mt-2 text-ds-neutral-600 pl-6">
                      Covers third-party certification requirements for fall protection products. This standard establishes requirements for third-party testing, 
                      evaluation, and certification of active fall protection equipment. It details the specific testing methodologies, including static and 
                      dynamic testing protocols, to ensure the reliability and consistency of fall protection equipment performance. The standard also 
                      addresses conformity assessment procedures and the issuance of certification marks.
                    </p>
                  </li>
                </ul>
              </div>
              
              <Separator className="my-10" />
              
              {/* MSHA Regulations Section */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <HardHat className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h2 className="text-xl font-semibold">MSHA Regulations</h2>
                </div>
                
                <ul className="space-y-6 pl-12">
                  <li>
                    <a href="https://www.ecfr.gov/current/title-30/chapter-I/subchapter-H/part-56/subpart-N/section-56.15005" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-ds-blue-600 hover:text-ds-blue-800 hover:underline">
                      <FileText className="h-4 w-4" />
                      <span>30 CFR § 56.15005 - Safety belts and lines (Surface)</span>
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                    <p className="mt-2 text-ds-neutral-600 pl-6">
                      Safety belt and line requirements for surface mining operations. This regulation requires that safety belts and lines be worn when
                      persons work where there is a danger of falling. The regulation applies to all surface metal and nonmetal mining operations and 
                      includes specific requirements for anchorage points and equipment inspection before use.
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
                    <p className="mt-2 text-ds-neutral-600 pl-6">
                      Safety belt and line requirements for underground mining operations. Similar to the surface mining regulation, this standard requires
                      that safety belts and lines be worn when persons work in elevated positions or where there is a danger of falling. The regulation
                      addresses the unique challenges and hazards associated with underground mining environments, including considerations for limited
                      space and emergency evacuation scenarios.
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
                    <p className="mt-2 text-ds-neutral-600 pl-6">
                      Contains MSHA's interpretive guidance on its safety standards, including fall protection. The Program Policy Manual provides
                      detailed interpretation and application guidance for MSHA's regulations. It includes specific sections dedicated to fall protection
                      requirements, addressing topics such as when fall protection is required, what types of fall protection are acceptable in various
                      mining scenarios, and how inspectors evaluate compliance with fall protection standards.
                    </p>
                  </li>
                </ul>
              </div>
              
              <Separator className="my-10" />
              
              {/* Inspection-Specific Guidelines Section */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-xl font-semibold">Inspection-Specific Guidelines</h2>
                </div>
                
                <ul className="space-y-6 pl-12">
                  <li>
                    <a href="https://www.osha.gov/sites/default/files/publications/fall_protection_factsheet.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-ds-blue-600 hover:text-ds-blue-800 hover:underline">
                      <FileText className="h-4 w-4" />
                      <span>OSHA Fact Sheet: Inspection of Personal Fall Protection Equipment</span>
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                    <p className="mt-2 text-ds-neutral-600 pl-6">
                      Guidelines for inspecting harnesses, lanyards, and other fall protection components. This fact sheet provides comprehensive guidance
                      on how to conduct thorough inspections of fall protection equipment, including visual and tactile examination techniques for
                      identifying wear, damage, or deterioration. It outlines specific inspection points for different equipment types and provides
                      clear criteria for when equipment should be removed from service.
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
                    <p className="mt-2 text-ds-neutral-600 pl-6">
                      Interactive tool to guide inspections of fall arrest harnesses. This online tool provides step-by-step guidance for conducting
                      comprehensive harness inspections. It includes interactive elements that help inspectors systematically check all critical
                      components, including webbing, stitching, D-rings, buckles, and labels. The tool also provides reference images to help
                      identify common defects and explains the significance of various types of damage.
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
                    <p className="mt-2 text-ds-neutral-600 pl-6">
                      Detailed requirements for frequency and documentation of fall protection equipment inspections. This section of the Z359.2 standard
                      specifies comprehensive inspection requirements, including pre-use inspections by authorized persons, detailed inspections by
                      competent persons, and formal inspection documentation procedures. It addresses inspection frequency requirements based on use
                      conditions and environmental factors, and outlines specific criteria for equipment retirement and removal from service.
                    </p>
                  </li>
                </ul>
              </div>

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
