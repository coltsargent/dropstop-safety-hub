
import { FileText, FileCheck, Award, ShieldCheck } from "lucide-react";

export const articlesData = [
  {
    id: 1,
    title: "The Complete Guide to Fall Protection Equipment Inspections",
    description: "Learn the essential steps for properly inspecting harnesses, lanyards, and other fall protection equipment to ensure worker safety.",
    category: "Inspections",
    icon: FileCheck,
    date: "March 15, 2025",
    readTime: "8 min read",
    badgeColor: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    content: `
      <h2>The Complete Guide to Fall Protection Equipment Inspections</h2>
      
      <p>Regular inspection of fall protection equipment is not just a regulatory requirement—it's a crucial practice that saves lives. This comprehensive guide outlines the proper procedures for conducting thorough inspections of harnesses, lanyards, anchors, and other fall protection equipment.</p>
      
      <h3>Why Equipment Inspection Matters</h3>
      
      <p>Fall protection equipment undergoes stress and wear during regular use. Environmental factors such as UV exposure, chemicals, and moisture can degrade materials over time, even when equipment is not in active use. Proper inspection identifies these issues before they lead to equipment failure during a fall event.</p>
      
      <h3>Inspection Frequency Requirements</h3>
      
      <p>OSHA requires that fall protection equipment be inspected:</p>
      <ul>
        <li>Before each use by the worker using the equipment</li>
        <li>At least annually by a competent person</li>
        <li>After any fall incident or impact</li>
      </ul>
      
      <h3>Harness Inspection Steps</h3>
      
      <p>When inspecting a full-body harness, examine:</p>
      <ol>
        <li><strong>Webbing:</strong> Check for cuts, frays, burns, chemical damage, and UV deterioration.</li>
        <li><strong>Stitching:</strong> Look for loose, broken, or damaged stitching, particularly at load-bearing connection points.</li>
        <li><strong>D-rings and Metal Components:</strong> Inspect for cracks, distortion, rough edges, and corrosion.</li>
        <li><strong>Buckles and Adjusters:</strong> Ensure they operate smoothly and lock securely.</li>
        <li><strong>Labels:</strong> Verify all labels are present and legible.</li>
      </ol>
      
      <h3>Lanyard Inspection Procedure</h3>
      
      <p>For lanyards and connecting devices:</p>
      <ol>
        <li><strong>Shock Absorber:</strong> Check if it has been deployed or shows signs of activation.</li>
        <li><strong>Hardware:</strong> Inspect hooks, carabiners, and other connectors for proper function, distortion, and locking mechanism operation.</li>
        <li><strong>Rope or Webbing:</strong> Examine for cuts, abrasions, burns, and chemical damage throughout the entire length.</li>
      </ol>
      
      <h3>Documentation Requirements</h3>
      
      <p>Proper documentation of inspections should include:</p>
      <ul>
        <li>Equipment identification (serial number, model)</li>
        <li>Inspection date</li>
        <li>Inspector's name and qualification</li>
        <li>Condition assessment and observations</li>
        <li>Pass/fail determination</li>
        <li>Follow-up actions for failed equipment</li>
      </ul>
      
      <h3>Taking Equipment Out of Service</h3>
      
      <p>Any equipment showing signs of damage, excessive wear, or having been subjected to fall arrest forces must be immediately removed from service. Implement a clear tagging system to prevent accidentally using compromised equipment.</p>
      
      <h3>Conclusion</h3>
      
      <p>Thorough equipment inspections are a foundational element of any fall protection program. By following these guidelines and establishing a systematic inspection process, safety professionals can significantly reduce the risk of equipment-related fall incidents.</p>
    `
  },
  {
    id: 2,
    title: "Understanding OSHA Requirements for Fall Protection Certification",
    description: "A comprehensive breakdown of OSHA certification requirements for fall protection equipment and training.",
    category: "Certifications",
    icon: Award,
    date: "February 22, 2025",
    readTime: "10 min read",
    badgeColor: "bg-green-100 text-green-800 hover:bg-green-200",
    content: `
      <h2>Understanding OSHA Requirements for Fall Protection Certification</h2>
      
      <p>Fall protection certification is a critical component of workplace safety compliance. This article clarifies OSHA's certification requirements for both equipment and personnel training in fall protection systems.</p>
      
      <h3>Equipment Certification Requirements</h3>
      
      <p>OSHA requires that all fall protection equipment used in the workplace be certified to meet specific standards:</p>
      
      <ul>
        <li><strong>ANSI Standards Compliance:</strong> Most fall protection equipment must meet ANSI Z359 standards, which set performance requirements for various components.</li>
        <li><strong>Manufacturer Certification:</strong> Equipment must be marked with certification information, including manufacturing date, model number, and applicable standards.</li>
        <li><strong>Third-Party Testing:</strong> Many components require testing by independent laboratories to verify compliance with safety standards.</li>
      </ul>
      
      <h3>Competent Person Requirements</h3>
      
      <p>OSHA defines a "competent person" as someone capable of identifying hazards and with the authority to take corrective measures. For fall protection:</p>
      
      <ul>
        <li>The competent person must be designated in writing</li>
        <li>They must be able to demonstrate knowledge of all applicable standards</li>
        <li>They must have experience identifying fall hazards</li>
        <li>They must be authorized to correct hazardous conditions</li>
      </ul>
      
      <h3>Training Certification Requirements</h3>
      
      <p>OSHA mandates that employers certify fall protection training for workers. This certification must include:</p>
      
      <ol>
        <li><strong>Training Content:</strong> Documentation of the specific topics covered in the training</li>
        <li><strong>Date of Training:</strong> When the worker completed the training</li>
        <li><strong>Trainer Identification:</strong> Name of the person who conducted the training and their qualifications</li>
        <li><strong>Employee Verification:</strong> Verification that the employee demonstrated understanding of the training</li>
      </ol>
      
      <h3>Retraining and Recertification</h3>
      
      <p>OSHA requires retraining and recertification when:</p>
      
      <ul>
        <li>Changes in the workplace render previous training obsolete</li>
        <li>Changes in fall protection equipment or systems are implemented</li>
        <li>A worker demonstrates inadequate knowledge or use of fall protection systems</li>
        <li>Per industry best practices, typically every 2-3 years</li>
      </ul>
      
      <h3>Documentation Retention</h3>
      
      <p>Employers must maintain certification records for:</p>
      
      <ul>
        <li><strong>Equipment Inspections:</strong> Most recent certification and documentation of annual inspections</li>
        <li><strong>Training Records:</strong> Duration of employment plus 3 years</li>
        <li><strong>Incident Reports:</strong> 5 years following the end of the year to which they relate</li>
      </ul>
      
      <h3>Conclusion</h3>
      
      <p>Proper certification of both fall protection equipment and worker training is not just an administrative task—it's a critical component of a comprehensive safety program. Maintaining accurate records demonstrates compliance with OSHA regulations and, more importantly, helps ensure that workers are adequately protected from fall hazards.</p>
    `
  },
  {
    id: 3,
    title: "The Role of Technology in Modern Fall Protection Systems",
    description: "How digital tools are revolutionizing fall protection management, from equipment tracking to inspection documentation.",
    category: "Technology",
    icon: ShieldCheck,
    date: "January 30, 2025",
    readTime: "7 min read",
    badgeColor: "bg-purple-100 text-purple-800 hover:bg-purple-200",
    content: `
      <h2>The Role of Technology in Modern Fall Protection Systems</h2>
      
      <p>Technology is transforming fall protection from a purely mechanical safety discipline to a data-driven, connected ecosystem. This article explores how digital innovations are enhancing fall protection management across multiple dimensions.</p>
      
      <h3>Digital Inspection and Documentation Systems</h3>
      
      <p>Traditional paper-based inspection forms are rapidly being replaced by digital alternatives that offer numerous advantages:</p>
      
      <ul>
        <li><strong>Mobile Applications:</strong> Allow inspectors to document findings in real-time with photo evidence</li>
        <li><strong>Cloud Storage:</strong> Provides secure, centralized access to inspection history across teams</li>
        <li><strong>Automated Compliance Tracking:</strong> Sends notifications when equipment requires inspection or recertification</li>
        <li><strong>Digital Signatures:</strong> Creates verifiable records of inspection accountability</li>
      </ul>
      
      <h3>RFID and QR Code Integration</h3>
      
      <p>Equipment tracking has been revolutionized by identification technologies:</p>
      
      <ul>
        <li><strong>Equipment Identity:</strong> Each piece of fall protection equipment can be uniquely identified</li>
        <li><strong>Quick Access to History:</strong> Scanning a code instantly displays the item's inspection and usage history</li>
        <li><strong>Location Tracking:</strong> Advanced systems can track equipment location across multiple worksites</li>
        <li><strong>Automated Inventory Management:</strong> Systems can maintain real-time counts of available equipment</li>
      </ul>
      
      <h3>IoT and Connected Safety Equipment</h3>
      
      <p>The Internet of Things is bringing new capabilities to fall protection:</p>
      
      <ul>
        <li><strong>Fall Detection Sensors:</strong> Automatically alert emergency responders when a fall occurs</li>
        <li><strong>Usage Monitoring:</strong> Track when and how equipment is being used to identify training needs</li>
        <li><strong>Environmental Monitoring:</strong> Sensors that detect when equipment is exposed to harmful conditions</li>
        <li><strong>Predictive Maintenance:</strong> Algorithms that predict when equipment needs replacement based on usage patterns</li>
      </ul>
      
      <h3>Virtual Reality Training</h3>
      
      <p>Training methods are evolving with technology:</p>
      
      <ul>
        <li><strong>Simulated Height Scenarios:</strong> Trainees can practice fall protection in virtual environments without risk</li>
        <li><strong>Equipment Familiarization:</strong> Interactive 3D models teach proper equipment usage</li>
        <li><strong>Emergency Response Practice:</strong> Realistic scenarios for rescue training</li>
        <li><strong>Performance Assessment:</strong> Data-driven evaluation of trainee proficiency</li>
      </ul>
      
      <h3>Data Analytics and Safety Trends</h3>
      
      <p>The aggregation of fall protection data enables deeper insights:</p>
      
      <ul>
        <li><strong>Risk Mapping:</strong> Identifying locations or activities with higher fall incident rates</li>
        <li><strong>Equipment Performance Analysis:</strong> Comparing failure rates across brands and models</li>
        <li><strong>Compliance Metrics:</strong> Measuring organization-wide safety performance</li>
        <li><strong>Predictive Analytics:</strong> Anticipating safety issues before incidents occur</li>
      </ul>
      
      <h3>Conclusion</h3>
      
      <p>The integration of technology into fall protection systems represents a significant advancement in workplace safety. Organizations that embrace these digital tools not only improve compliance management but also gain valuable insights that can prevent incidents and save lives. As technology continues to evolve, we can expect even more sophisticated solutions that further enhance fall protection effectiveness.</p>
    `
  },
  {
    id: 4,
    title: "Best Practices for Documenting Fall Protection Inspections",
    description: "Step-by-step guidelines for creating and maintaining thorough documentation of all fall protection equipment inspections.",
    category: "Inspections",
    icon: FileCheck,
    date: "January 12, 2025",
    readTime: "6 min read",
    badgeColor: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    content: `
      <h2>Best Practices for Documenting Fall Protection Inspections</h2>
      
      <p>Proper documentation is a critical component of any fall protection program. Beyond regulatory compliance, thorough records provide legal protection, enable trend analysis, and demonstrate a commitment to safety. This article outlines best practices for documenting fall protection equipment inspections.</p>
      
      <h3>Essential Documentation Components</h3>
      
      <p>Effective inspection documentation should include these key elements:</p>
      
      <ol>
        <li><strong>Equipment Identification:</strong> Serial numbers, model numbers, and any company-specific asset tags</li>
        <li><strong>Date and Time:</strong> When the inspection was conducted</li>
        <li><strong>Inspector Information:</strong> Name, certification, and qualification of the person conducting the inspection</li>
        <li><strong>Inspection Type:</strong> Whether it was a pre-use, periodic, or post-incident inspection</li>
        <li><strong>Checklist of Inspected Components:</strong> Specific items examined with pass/fail indicators</li>
        <li><strong>Condition Details:</strong> Observations about wear, damage, or other relevant conditions</li>
        <li><strong>Pass/Fail Determination:</strong> Clear indication of whether the equipment is approved for continued use</li>
        <li><strong>Corrective Actions:</strong> For failed items, documentation of tagging procedures and repair/replacement plans</li>
        <li><strong>Next Inspection Date:</strong> When the equipment is due for its next inspection</li>
      </ol>
      
      <h3>Digital vs. Paper Documentation</h3>
      
      <p>While paper systems are still common, digital documentation offers significant advantages:</p>
      
      <table>
        <tr>
          <th>Paper Systems</th>
          <th>Digital Systems</th>
        </tr>
        <tr>
          <td>Simple to implement</td>
          <td>Searchable records</td>
        </tr>
        <tr>
          <td>No technology required</td>
          <td>Automatic backups</td>
        </tr>
        <tr>
          <td>Vulnerable to physical damage</td>
          <td>Remote accessibility</td>
        </tr>
        <tr>
          <td>Limited trend analysis</td>
          <td>Automated notifications</td>
        </tr>
        <tr>
          <td>Storage space needed</td>
          <td>Photo/video evidence capability</td>
        </tr>
      </table>
      
      <h3>Documentation Workflow</h3>
      
      <p>An efficient inspection documentation process follows these steps:</p>
      
      <ol>
        <li><strong>Preparation:</strong> Gather necessary inspection forms and tools</li>
        <li><strong>Initial Assessment:</strong> Identify the equipment and confirm inspection timing</li>
        <li><strong>Systematic Inspection:</strong> Follow a consistent sequence for all equipment types</li>
        <li><strong>Real-time Documentation:</strong> Record findings immediately rather than relying on memory</li>
        <li><strong>Evidence Collection:</strong> Photograph or document any concerns</li>
        <li><strong>Final Determination:</strong> Make clear pass/fail decisions</li>
        <li><strong>Sign-off:</strong> Verify the inspection with appropriate signatures</li>
        <li><strong>Filing:</strong> Store records in the designated system</li>
        <li><strong>Follow-up:</strong> Ensure corrective actions are documented as completed</li>
      </ol>
      
      <h3>Record Retention Guidelines</h3>
      
      <p>Follow these general principles for record retention:</p>
      
      <ul>
        <li>Keep records for the life of the equipment plus three years</li>
        <li>For equipment involved in incidents, maintain records indefinitely</li>
        <li>Store backup copies in separate locations or systems</li>
        <li>Implement access controls for sensitive information</li>
        <li>Develop a retrieval system that allows quick access during audits or investigations</li>
      </ul>
      
      <h3>Conclusion</h3>
      
      <p>Comprehensive documentation of fall protection inspections is not merely about checking regulatory boxes—it's about creating a safety culture that values thoroughness and accountability. By implementing these best practices, organizations can ensure their fall protection program stands up to scrutiny and, more importantly, effectively protects workers from harm.</p>
    `
  },
  {
    id: 5,
    title: "Fall Protection Certification: Why It Matters and How to Get It",
    description: "The importance of proper certification for fall protection equipment and personnel, with guidance on certification processes.",
    category: "Certifications",
    icon: Award,
    date: "December 18, 2024",
    readTime: "9 min read",
    badgeColor: "bg-green-100 text-green-800 hover:bg-green-200",
    content: `
      <h2>Fall Protection Certification: Why It Matters and How to Get It</h2>
      
      <p>Fall protection certification plays a pivotal role in workplace safety by ensuring that both equipment and personnel meet established standards. This article explores the importance of proper certification and outlines the pathways to achieve it.</p>
      
      <h3>The Value of Certification</h3>
      
      <p>Fall protection certification delivers multiple benefits:</p>
      
      <ul>
        <li><strong>Legal Compliance:</strong> Meets regulatory requirements from OSHA and other authorities</li>
        <li><strong>Risk Reduction:</strong> Ensures equipment and practices meet established safety standards</li>
        <li><strong>Liability Protection:</strong> Demonstrates due diligence in case of incidents</li>
        <li><strong>Insurance Benefits:</strong> May reduce premiums and improve coverage terms</li>
        <li><strong>Competitive Advantage:</strong> Many projects require certified personnel and equipment</li>
      </ul>
      
      <h3>Types of Fall Protection Certification</h3>
      
      <p>Certification in fall protection encompasses several categories:</p>
      
      <ol>
        <li><strong>Equipment Certification:</strong> Verification that fall protection equipment meets design and performance standards</li>
        <li><strong>User Certification:</strong> Training for workers who use fall protection equipment</li>
        <li><strong>Competent Person Certification:</strong> Advanced training for those who inspect equipment and oversee programs</li>
        <li><strong>Trainer Certification:</strong> Qualification to teach others about fall protection</li>
        <li><strong>Qualified Person Certification:</strong> Advanced engineering knowledge for system design</li>
      </ol>
      
      <h3>Equipment Certification Process</h3>
      
      <p>Fall protection equipment undergoes rigorous testing and certification:</p>
      
      <ol>
        <li><strong>Design Standards:</strong> Equipment must meet ANSI Z359 standards or equivalent</li>
        <li><strong>Laboratory Testing:</strong> Products undergo static and dynamic load testing</li>
        <li><strong>Third-Party Verification:</strong> Independent certification bodies verify compliance</li>
        <li><strong>Documentation:</strong> Manufacturers provide certification papers and equipment markings</li>
        <li><strong>Periodic Recertification:</strong> Some equipment requires recertification at specified intervals</li>
      </ol>
      
      <h3>Personnel Certification Pathways</h3>
      
      <p>For individuals seeking fall protection certification:</p>
      
      <h4>User Level Certification</h4>
      <ul>
        <li>Typically 4-8 hours of training</li>
        <li>Covers equipment use, inspection, and fall hazard awareness</li>
        <li>Usually valid for 2-3 years</li>
        <li>Available from equipment manufacturers and safety training providers</li>
      </ul>
      
      <h4>Competent Person Certification</h4>
      <ul>
        <li>16-40 hours of training</li>
        <li>Includes hazard analysis, equipment selection, and inspection criteria</li>
        <li>Often requires practical assessment components</li>
        <li>Typically valid for 2-3 years</li>
        <li>Available from specialized safety training organizations</li>
      </ul>
      
      <h4>Qualified Person Certification</h4>
      <ul>
        <li>Requires engineering background or equivalent experience</li>
        <li>Advanced coursework in fall protection system design</li>
        <li>May require professional engineer licensing</li>
        <li>Focuses on anchor systems and structural considerations</li>
      </ul>
      
      <h3>Selecting a Certification Provider</h3>
      
      <p>When choosing where to obtain certification, consider:</p>
      
      <ul>
        <li><strong>Industry Recognition:</strong> Is the certification widely accepted in your industry?</li>
        <li><strong>Curriculum Comprehensiveness:</strong> Does it cover all relevant standards and practices?</li>
        <li><strong>Instructor Qualifications:</strong> Are trainers experienced and properly credentialed?</li>
        <li><strong>Hands-on Components:</strong> Does the training include practical exercises?</li>
        <li><strong>Ongoing Support:</strong> Is post-certification technical support available?</li>
      </ul>
      
      <h3>Maintaining Certification</h3>
      
      <p>Most certifications require periodic renewal through:</p>
      
      <ul>
        <li>Refresher training</li>
        <li>Continuing education credits</li>
        <li>Documentation of relevant work experience</li>
        <li>Reexamination at specified intervals</li>
      </ul>
      
      <h3>Conclusion</h3>
      
      <p>Fall protection certification is a vital component of workplace safety that benefits workers, employers, and the industry as a whole. By pursuing appropriate certifications and maintaining them properly, organizations demonstrate their commitment to safety excellence while gaining tangible operational and legal benefits.</p>
    `
  },
  {
    id: 6,
    title: "Common Pitfalls in Fall Protection Compliance",
    description: "Identify and avoid the most common mistakes organizations make when implementing fall protection programs.",
    category: "Compliance",
    icon: ShieldCheck,
    date: "November 29, 2024",
    readTime: "11 min read",
    badgeColor: "bg-amber-100 text-amber-800 hover:bg-amber-200",
    content: `
      <h2>Common Pitfalls in Fall Protection Compliance</h2>
      
      <p>Even well-intentioned safety programs can fall short when it comes to fall protection compliance. This article identifies the most common mistakes organizations make and provides practical guidance on how to avoid them.</p>
      
      <h3>Inadequate Hazard Assessment</h3>
      
      <p><strong>The Pitfall:</strong> Many organizations fail to conduct thorough fall hazard assessments or update them when workplace conditions change.</p>
      
      <p><strong>How to Avoid It:</strong></p>
      <ul>
        <li>Implement a formal hazard assessment process that examines all work at heights</li>
        <li>Document assessments with specific hazard locations and characteristics</li>
        <li>Reassess whenever processes, equipment, or facilities change</li>
        <li>Include workers in the assessment process to capture real-world experiences</li>
      </ul>
      
      <h3>Improper Equipment Selection</h3>
      
      <p><strong>The Pitfall:</strong> Using fall protection equipment that is not appropriate for the specific application or hazard.</p>
      
      <p><strong>How to Avoid It:</strong></p>
      <ul>
        <li>Match equipment to the specific fall hazards identified in your assessment</li>
        <li>Consider environmental factors such as heat, cold, chemicals, and electrical hazards</li>
        <li>Ensure compatibility between components from different manufacturers</li>
        <li>Consult with qualified fall protection specialists when selecting equipment</li>
      </ul>
      
      <h3>Insufficient Training</h3>
      
      <p><strong>The Pitfall:</strong> Providing minimal training that meets the letter but not the spirit of regulations.</p>
      
      <p><strong>How to Avoid It:</strong></p>
      <ul>
        <li>Develop application-specific training that addresses actual workplace scenarios</li>
        <li>Include hands-on components where workers practice using their equipment</li>
        <li>Verify comprehension through testing and practical demonstrations</li>
        <li>Provide refresher training at regular intervals, not just when required</li>
      </ul>
      
      <h3>Neglected Equipment Inspections</h3>
      
      <p><strong>The Pitfall:</strong> Failing to implement a systematic inspection program or conducting superficial inspections.</p>
      
      <p><strong>How to Avoid It:</strong></p>
      <ul>
        <li>Establish a documented inspection schedule for all fall protection equipment</li>
        <li>Train inspectors thoroughly on what to look for with each equipment type</li>
        <li>Implement a tagging system to clearly identify inspection status</li>
        <li>Document inspection results with specific observations, not just pass/fail</li>
      </ul>
      
      <h3>Poor Rescue Planning</h3>
      
      <p><strong>The Pitfall:</strong> Focusing on fall prevention without adequate plans for post-fall rescue.</p>
      
      <p><strong>How to Avoid It:</strong></p>
      <ul>
        <li>Develop specific rescue procedures for each fall hazard scenario</li>
        <li>Train and equip rescue teams for prompt response</li>
        <li>Consider self-rescue options where appropriate</li>
        <li>Regularly practice rescue procedures to ensure readiness</li>
      </ul>
      
      <h3>Inadequate Documentation</h3>
      
      <p><strong>The Pitfall:</strong> Maintaining incomplete or disorganized records that can't demonstrate compliance.</p>
      
      <p><strong>How to Avoid It:</strong></p>
      <ul>
        <li>Implement a centralized documentation system (digital preferred)</li>
        <li>Maintain records of all training, inspections, and program reviews</li>
        <li>Include equipment purchase information and manufacturer instructions</li>
        <li>Document corrective actions taken in response to identified issues</li>
      </ul>
      
      <h3>Failure to Update Fall Protection Programs</h3>
      
      <p><strong>The Pitfall:</strong> Creating a program once and not reviewing or updating it as regulations, standards, or workplace conditions change.</p>
      
      <p><strong>How to Avoid It:</strong></p>
      <ul>
        <li>Schedule regular program reviews (at least annually)</li>
        <li>Assign responsibility for monitoring regulatory changes</li>
        <li>Incorporate lessons learned from incidents and near misses</li>
        <li>Seek worker feedback on program effectiveness</li>
      </ul>
      
      <h3>Overlooking Contractor Management</h3>
      
      <p><strong>The Pitfall:</strong> Failing to verify that contractors follow the same fall protection standards as employees.</p>
      
      <p><strong>How to Avoid It:</strong></p>
      <ul>
        <li>Include fall protection requirements in contractor prequalification</li>
        <li>Verify contractor training documentation before work begins</li>
        <li>Conduct joint inspections of contractor fall protection equipment</li>
        <li>Hold contractors to the same standard as internal teams</li>
      </ul>
      
      <h3>Conclusion</h3>
      
      <p>Fall protection compliance requires attention to detail and a commitment to continuous improvement. By recognizing and addressing these common pitfalls, organizations can build more effective fall protection programs that truly protect workers and withstand regulatory scrutiny. Remember that compliance is not just about avoiding citations—it's about preventing injuries and saving lives.</p>
    `
  }
];
