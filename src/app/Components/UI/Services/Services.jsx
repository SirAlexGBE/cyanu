"use client";
import React, {useState} from "react";
import Image from "next/image";
import {AIML, WEBDEV, MOBDEV, DESKAPP, CYBERSEC, NETINF, DEVOPS, CLOUD} from "@/assets/images";

const services = [
  {
    title: "AI & Machine Learning Solutions",
    shortDesc: "Harness the power of AI and ML to drive intelligent automation, predictive analytics, and data-driven decision-making tailored to your business needs.",
    detailedDesc: `
      <p>At CyANU, our AI & Machine Learning Solutions are engineered to propel your business into the future of intelligent operations. We deliver end-to-end AI/ML services that transform raw data into actionable insights, automating processes and enhancing decision-making with unparalleled precision.</p>
      
      <h4 class="text-xl font-semibold mt-6 mb-2">Our Comprehensive Development Process:</h4>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Consultation & Discovery:</strong> In-depth analysis of your business goals, data sources, and challenges to identify AI opportunities.</li>
        <li><strong>Data Preparation:</strong> Advanced data cleaning, augmentation, and feature engineering using tools like Pandas, NumPy, and Scikit-learn.</li>
        <li><strong>Model Design & Training:</strong> Custom models built with TensorFlow, PyTorch, or Keras, including CNNs, RNNs, transformers, and ensemble methods.</li>
        <li><strong>Validation & Optimization:</strong> Rigorous testing with cross-validation, hyperparameter tuning via Grid Search or Bayesian Optimization, achieving accuracies often exceeding 95%.</li>
        <li><strong>Deployment & Integration:</strong> Scalable deployment on cloud platforms (AWS SageMaker, Google AI Platform) with API endpoints for seamless integration.</li>
        <li><strong>Monitoring & Maintenance:</strong> Real-time performance tracking with MLflow, automated retraining pipelines, and drift detection to ensure long-term efficacy.</li>
      </ul>
      
      <h4 class="text-xl font-semibold mt-6 mb-2">Key Benefits & Technologies:</h4>
      <ul class="list-disc pl-6 space-y-2">
        <li>Up to 40% operational efficiency gains and cost reductions.</li>
        <li>Expertise in NLP (BERT, GPT models), Computer Vision (OpenCV, YOLO), and Predictive Analytics.</li>
        <li>Ethical AI practices with bias mitigation and explainability using SHAP and LIME.</li>
        <li>Case Studies: Predictive maintenance for manufacturing reducing downtime by 50%; personalized recommendations boosting e-commerce sales by 30%.</li>
      </ul>
      
      <p class="mt-6">Choose CyANU for AI solutions that not only meet but exceed industry standards, driving sustainable competitive advantage.</p>
    `,
    imageUrl: AIML,
  },
  {
    title: "Custom Web Development",
    shortDesc: "Build responsive, scalable, and secure web applications designed to enhance user experience and meet your unique business requirements.",
    detailedDesc: `
      <p>CyANU's Custom Web Development service crafts bespoke web applications that are robust, user-centric, and future-proof. We combine cutting-edge technologies with agile methodologies to deliver solutions that scale with your business growth.</p>
      
      <h4 class="text-xl font-semibold mt-6 mb-2">Development Lifecycle:</h4>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Planning & Design:</strong> Collaborative workshops to create wireframes, prototypes, and UI/UX designs using Figma and Adobe XD.</li>
        <li><strong>Frontend Development:</strong> Pixel-perfect interfaces with React, Vue.js, or Angular, enhanced by Tailwind CSS or Material-UI for responsive design.</li>
        <li><strong>Backend Development:</strong> Secure and efficient servers using Node.js, Express, Django, or Laravel, with databases like MongoDB or PostgreSQL.</li>
        <li><strong>Integration & Testing:</strong> API integrations (RESTful, GraphQL), comprehensive testing with Jest, Mocha, and Selenium for 99.9% uptime.</li>
        <li><strong>Deployment & Optimization:</strong> CI/CD pipelines with Jenkins or GitHub Actions, hosted on AWS, Heroku, or Vercel for global accessibility.</li>
        <li><strong>Post-Launch Support:</strong> Performance monitoring with New Relic, security audits, and iterative enhancements based on user feedback.</li>
      </ul>
      
      <h4 class="text-xl font-semibold mt-6 mb-2">Highlights & Expertise:</h4>
      <ul class="list-disc pl-6 space-y-2">
        <li>SEO-optimized and PWA-capable applications for superior visibility and offline functionality.</li>
        <li>Security compliance with OWASP, GDPR, and PCI-DSS standards.</li>
        <li>Proven track record: E-commerce platforms handling 100k+ users daily; SaaS applications reducing load times by 70%.</li>
        <li>Technologies: WebSockets for real-time features, Server-Side Rendering with Next.js for faster initial loads.</li>
      </ul>
      
      <p class="mt-6">Partner with CyANU to build web applications that captivate users and drive measurable ROI.</p>
    `,
    imageUrl: WEBDEV,
  },
  {
    title: "Mobile App Development",
    shortDesc: "Create intuitive and high-performance mobile apps for iOS and Android, delivering seamless user experiences across devices.",
    detailedDesc: `
      <p>CyANU specializes in Mobile App Development, creating apps that blend innovation with usability to engage users and achieve business objectives. Our cross-platform and native approaches ensure optimal performance and reach.</p>
      
      <h4 class="text-xl font-semibold mt-6 mb-2">Step-by-Step Process:</h4>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Ideation & Strategy:</strong> Market research, feature prioritization, and app architecture planning with tools like Miro.</li>
        <li><strong>Design & Prototyping:</strong> Intuitive UI/UX designs adhering to iOS Human Interface and Android Material Guidelines, prototyped in Sketch or InVision.</li>
        <li><strong>Development:</strong> Cross-platform with Flutter or React Native; native with Swift/Kotlin for specialized features like ARKit or Camera APIs.</li>
        <li><strong>Feature Integration:</strong> Push notifications (Firebase), offline sync, geolocation, and payment gateways (Stripe, Apple Pay).</li>
        <li><strong>Testing & Quality Assurance:</strong> Device farm testing, beta releases via TestFlight/App Center, ensuring crash-free rates above 99%.</li>
        <li><strong>Launch & Maintenance:</strong> App Store optimization, submission, and post-launch analytics with Google Analytics or Amplitude.</li>
      </ul>
      
      <h4 class="text-xl font-semibold mt-6 mb-2">Advanced Capabilities:</h4>
      <ul class="list-disc pl-6 space-y-2">
        <li>Integration of AI features like chatbots or image recognition.</li>
        <li>Security with biometric auth, encrypted storage, and secure backend communication.</li>
        <li>Success Stories: Fitness apps with 1M+ downloads; enterprise mobility solutions improving field productivity by 45%.</li>
        <li>Focus on accessibility (WCAG compliance) and performance optimization for battery and data efficiency.</li>
      </ul>
      
      <p class="mt-6">Trust CyANU to develop mobile apps that stand out in crowded markets and deliver exceptional value.</p>
    `,
    imageUrl: MOBDEV,
  },
  {
    title: "Windows Application Development",
    shortDesc: "Develop robust and user-friendly Windows applications optimized for performance, security, and integration with your existing systems.",
    detailedDesc: `
      <p>CyANU's Windows Application Development builds powerful desktop software tailored for the Windows ecosystem, ensuring seamless integration and high productivity for enterprise users.</p>
      
      <h4 class="text-xl font-semibold mt-6 mb-2">Development Phases:</h4>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Requirements Analysis:</strong> Detailed scoping sessions to align with your workflows, using UML diagrams for system modeling.</li>
        <li><strong>Architecture Design:</strong> Utilizing .NET Core/Framework, WPF or WinUI for modern UIs, and MVVM for maintainable code.</li>
        <li><strong>Coding & Implementation:</strong> C#/VB.NET development with features like multi-threading, COM interop, and Windows API calls.</li>
        <li><strong>Integration:</strong> Connectivity to SQL Server, Azure services, or legacy systems via ODBC/JDBC.</li>
        <li><strong>Testing:</strong> Unit testing with xUnit, UI automation with Appium, and stress testing for enterprise-scale loads.</li>
        <li><strong>Deployment & Support:</strong> MSI/ClickOnce installers, auto-updates, and remote monitoring with Application Insights.</li>
      </ul>
      
      <h4 class="text-xl font-semibold mt-6 mb-2">Core Strengths:</h4>
      <ul class="list-disc pl-6 space-y-2">
        <li>Support for Windows 11 features like Snap Layouts and DirectX for graphics-intensive apps.</li>
        <li>Security with code signing, AppLocker compatibility, and encryption using Windows Hello.</li>
        <li>Achievements: CRM systems for 10k+ users; scientific software accelerating computations by 60%.</li>
        <li>Emphasis on offline capabilities, data synchronization, and cross-platform migration paths.</li>
      </ul>
      
      <p class="mt-6">Select CyANU for Windows applications that empower your team with reliability and innovation.</p>
    `,
    imageUrl: DESKAPP,
  },
  {
    title: "Cybersecurity Services",
    shortDesc: "Protect your business with comprehensive cybersecurity solutions, including threat detection, risk assessment, and secure system architecture.",
    detailedDesc: `
      <p>CyANU's Cybersecurity Services provide a multi-layered defense strategy to safeguard your assets against sophisticated threats, ensuring compliance and business continuity.</p>
      
      <h4 class="text-xl font-semibold mt-6 mb-2">Service Framework:</h4>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Risk Assessment:</strong> Vulnerability scans with Nessus, penetration testing using Kali Linux tools, and threat modeling.</li>
        <li><strong>Architecture Design:</strong> Implementation of zero-trust models, firewalls (Palo Alto), and endpoint protection (Endpoint Detection and Response).</li>
        <li><strong>Threat Detection & Response:</strong> 24/7 SOC monitoring with Splunk SIEM, AI-powered anomaly detection, and incident response playbooks.</li>
        <li><strong>Compliance & Auditing:</strong> Alignment with NIST, ISO 27001, HIPAA; regular audits and reporting.</li>
        <li><strong>Training & Awareness:</strong> Customized phishing simulations and employee training programs.</li>
        <li><strong>Recovery & Resilience:</strong> Backup solutions with Veeam, disaster recovery planning, and cyber insurance guidance.</li>
      </ul>
      
      <h4 class="text-xl font-semibold mt-6 mb-2">Expertise & Outcomes:</h4>
      <ul class="list-disc pl-6 space-y-2">
        <li>Advanced persistent threat (APT) mitigation and ransomware protection.</li>
        <li>Cloud security for AWS, Azure with native tools like Security Hub.</li>
        <li>Proven Results: Prevented data breaches for financial clients; achieved 100% compliance in audits.</li>
        <li>Ongoing threat intelligence feeds and adaptive security postures.</li>
      </ul>
      
      <p class="mt-6">With CyANU, fortify your defenses and turn cybersecurity into a strategic advantage.</p>
    `,
    imageUrl: CYBERSEC,
  },
  {
    title: "Network Infrastructure",
    shortDesc: "Design and implement reliable, scalable, and secure network infrastructure to ensure seamless connectivity and operational efficiency.",
    detailedDesc: `
      <p>CyANU's Network Infrastructure services create robust, high-performance networks that support your digital transformation, from edge to cloud.</p>
      
      <h4 class="text-xl font-semibold mt-6 mb-2">Implementation Stages:</h4>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Assessment & Planning:</strong> Network audits, traffic analysis with Wireshark, and design using Visio or Lucidchart.</li>
        <li><strong>Hardware Deployment:</strong> Routers, switches (Cisco Catalyst), and SD-WAN solutions for optimized routing.</li>
        <li><strong>Configuration:</strong> VLAN segmentation, QoS for VoIP/video, and VPNs with IPsec or WireGuard.</li>
        <li><strong>Wireless & Mobility:</strong> Wi-Fi 6/7 deployments with Aruba or Ubiquiti, including guest portals and roaming.</li>
        <li><strong>Security Integration:</strong> NAC with Cisco ISE, intrusion prevention, and DDoS mitigation.</li>
        <li><strong>Monitoring & Management:</strong> Tools like Zabbix or PRTG for proactive alerts and automation.</li>
      </ul>
      
      <h4 class="text-xl font-semibold mt-6 mb-2">Advanced Features:</h4>
      <ul class="list-disc pl-6 space-y-2">
        <li>Hybrid networks integrating on-prem with cloud (Azure Virtual WAN).</li>
        <li>Scalability for IoT devices and 5G integration.</li>
        <li>Case Studies: Global networks with 99.999% uptime; reduced latency by 50% for remote workforces.</li>
        <li>Energy-efficient designs and green networking practices.</li>
      </ul>
      
      <p class="mt-6">Build with CyANU for networks that are resilient, agile, and ready for tomorrow's demands.</p>
    `,
    imageUrl: NETINF,
  },
  {
    title: "Cloud Solutions & Migration",
    shortDesc: "Leverage cloud technology with tailored solutions for migration, management, and optimization to enhance scalability and reduce costs.",
    detailedDesc: `
      <p>CyANU's Cloud Solutions & Migration services enable seamless transitions to the cloud, unlocking agility, cost savings, and innovation potential.</p>
      
      <h4 class="text-xl font-semibold mt-6 mb-2">Migration & Setup Process:</h4>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Assessment:</strong> Cloud readiness evaluations, cost-benefit analysis using AWS Pricing Calculator or Azure Advisor.</li>
        <li><strong>Strategy Development:</strong> Choosing lift-and-shift, refactor, or re-platform approaches.</li>
        <li><strong>Data Migration:</strong> Secure transfers with AWS Snowball, Azure Data Box, or database replication tools.</li>
        <li><strong>Infrastructure Provisioning:</strong> IaC with Terraform or CloudFormation for VPCs, EC2 instances, and Kubernetes clusters.</li>
        <li><strong>Optimization:</strong> Auto-scaling groups, serverless architectures (Lambda, Functions), and cost management dashboards.</li>
        <li><strong>Security & Governance:</strong> IAM policies, encryption with KMS, and compliance monitoring.</li>
      </ul>
      
      <h4 class="text-xl font-semibold mt-6 mb-2">Benefits & Specializations:</h4>
      <ul class="list-disc pl-6 space-y-2">
        <li>Multi-cloud and hybrid strategies for vendor neutrality.</li>
        <li>Disaster recovery with RTO/RPO under 1 hour.</li>
        <li>Results: 35% average cost reduction; scalable infrastructures handling petabyte-scale data.</li>
        <li>Integration with AI/ML services like Amazon SageMaker or Google Vertex AI.</li>
      </ul>
      
      <p class="mt-6">Elevate your operations with CyANU's cloud expertise for a flexible, secure future.</p>
    `,
    imageUrl: CLOUD,
  },
  {
    title: "DevOps & Automation",
    shortDesc: "Streamline your development pipeline with DevOps practices and automation tools to accelerate delivery and improve software quality.",
    detailedDesc: `
      <p>CyANU's DevOps & Automation services foster collaboration, automate workflows, and accelerate time-to-market while maintaining high quality and security.</p>
      
      <h4 class="text-xl font-semibold mt-6 mb-2">DevOps Implementation Roadmap:</h4>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Assessment & Culture Shift:</strong> DevOps maturity audits and training for agile/lean practices.</li>
        <li><strong>Toolchain Setup:</strong> Version control with Git, CI/CD with Jenkins or GitLab, configuration management with Ansible.</li>
        <li><strong>Automation:</strong> Scripted deployments, infrastructure provisioning with Puppet or Chef.</li>
        <li><strong>Containerization & Orchestration:</strong> Docker for packaging, Kubernetes for scaling and management.</li>
        <li><strong>Monitoring & Feedback:</strong> Observability with Prometheus/Grafana, logging via ELK stack.</li>
        <li><strong>Security Integration (DevSecOps):</strong> Automated scans with SonarQube, SAST/DAST tools.</li>
      </ul>
      
      <h4 class="text-xl font-semibold mt-6 mb-2">Key Advantages:</h4>
      <ul class="list-disc pl-6 space-y-2">
        <li>Deployment frequency increased by 10x, with rollback capabilities.</li>
        <li>Support for microservices and blue-green/canary deployments.</li>
        <li>Client Outcomes: Reduced mean time to recovery (MTTR) by 80%; enhanced collaboration across teams.</li>
        <li>Cloud-native DevOps for AWS CodePipeline or Azure DevOps.</li>
      </ul>
      
      <p class="mt-6">Transform your delivery with CyANU's DevOps mastery for efficient, reliable software lifecycles.</p>
    `,
    imageUrl: DEVOPS,
  },
];

const ServiceCards = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section className="bg-black text-white py-16">
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 12px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #000000;
          border-radius: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cabb67;
          border-radius: 6px;
          border: 2px solid #000000;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #b3a55e;
        }

        /* Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #cabb67 #000000;
        }
      `}</style>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our <span className="text-[#cabb67] border-b-2 border-[#cabb67]">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-[#cabb67] flex flex-col items-center">
              <div className="w-full h-40 relative mb-4">
                <Image src={service.imageUrl} alt={service.title} fill className="object-cover rounded-md" sizes="(max-width: 768px) 100vw, 25vw" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#cabb67]">{service.title}</h3>
              <p className="text-gray-300 mb-4 text-center">{service.shortDesc}</p>
              <button onClick={() => openModal(service)} className="px-4 py-2 bg-[#cabb67] text-black rounded-md hover:bg-[#b3a55e] transition duration-300">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" onClick={handleBackdropClick}>
          <div className="bg-gray-900 rounded-lg max-w-3xl w-full mx-4 max-h-[80vh] overflow-y-auto border border-[#cabb67] custom-scrollbar relative" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="sticky top-0 bg-gray-900 border-b border-[#cabb67] flex items-center justify-between p-4 z-10">
              <h3 className="text-2xl font-bold text-[#cabb67]">{selectedService.title}</h3>
              <button onClick={closeModal} className="text-[#cabb67] hover:text-[#b3a55e] transition-colors duration-200">
                ✕
              </button>
            </div>

            {/* Image */}
            <div className="w-full h-64 relative">
              <Image src={selectedService.imageUrl} alt={selectedService.title} fill className="object-cover rounded-t-md" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>

            {/* Content */}
            <div className="p-6 text-gray-300">
              <div dangerouslySetInnerHTML={{__html: selectedService.detailedDesc}}></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceCards;
