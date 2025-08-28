"use client";
import React, {useState} from "react";
import {MapPin, Phone, Mail, Clock, ArrowRight, Calendar, Linkedin, Twitter, Github, Youtube} from "lucide-react";

const services = [
  "AI & Machine Learning Solutions",
  "Custom Web Development",
  "Mobile App Development",
  "Windows Application Development",
  "Cybersecurity Services",
  "Network Infrastructure",
  "Cloud Solutions & Migration",
  "DevOps & Automation",
];

const companyLinks = [
  {label: "About Us", href: "/about"},
  {label: "Our Portfolio", href: "/services#portfolio"},
  {label: "Case Studies", href: "/services#portfolio"},
  {label: "Careers", href: "/careers"},
  {label: "Blog/Resources", href: "/blog"},
  {label: "Support Center", href: "/support"},
  {label: "Contact Us", href: "/contact"},
  {
    label: "Request Quote",
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=hello@cyanu.com&su=${encodeURIComponent("Quote request")}`,
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

const socialLinks = [
  {icon: Linkedin, href: "#", label: "LinkedIn"},
  {icon: Twitter, href: "#", label: "Twitter"},
  {icon: Github, href: "#", label: "GitHub"},
  {icon: Youtube, href: "#", label: "YouTube"},
];

const CyanuFooter = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = () => {
    if (email.trim() && email.includes("@")) {
      console.log("Newsletter signup:", email);
      setEmail("");
      // Add your newsletter signup logic here
    }
  };

  return (
    <footer id="cyanu-footer" className="bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Separator Line */}
      <div className="h-0.5 bg-[#cabb67] w-full"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Branding Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img src="/Logo.png" alt="Company Logo" className="w-48" />
            </div>
            <div className="text-[#cabb67] text-lg font-semibold mb-4">Building Tomorrow's Software Today</div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              We deliver cutting-edge custom software solutions that transform businesses and drive innovation. From AI-powered applications to secure cloud infrastructure, we're your technology
              partner.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mr-3 text-[#cabb67]" />
                123 Tech Boulevard, San Francisco, CA 94105
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="w-4 h-4 mr-3 text-[#cabb67]" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="w-4 h-4 mr-3 text-[#cabb67]" />
                hello@cyanu.com
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Clock className="w-4 h-4 mr-3 text-[#cabb67]" />
                Mon-Fri 9AM-6PM PST
              </div>
            </div>
          </div>
          {/* Services Section */}
          <div className="lg:col-span-1">
            <h3 className="text-[#cabb67] text-lg font-bold mb-6 relative">
              Our Services
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#cabb67]"></div>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="/services#services" className="text-gray-300 text-sm hover:text-[#cabb67] relative group">
                    {service}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#cabb67] group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-[#cabb67] text-lg font-bold mb-6 relative">
              Company
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#cabb67]"></div>
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 text-sm hover:text-[#cabb67] relative group">
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#cabb67] group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-1">
            <h3 className="text-[#cabb67] text-lg font-bold mb-6 relative">
              Get In Touch
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#cabb67]"></div>
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="w-4 h-4 mr-3 text-[#cabb67]" />
                hello@cyanu.com
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="w-4 h-4 mr-3 text-[#cabb67]" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mr-3 text-[#cabb67]" />
                San Francisco, CA
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-white text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-[#cabb67] hover:bg-gray-700 hover:scale-110 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-3">Stay Updated</h4>
              <div className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white text-sm"
                />
                <button
                  onClick={handleNewsletterSubmit}
                  className="w-full bg-[#cabb67] text-black px-4 py-2 rounded font-semibold text-sm hover:bg-[#b8a85a] hover:shadow-lg flex items-center justify-center group"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
      </div>

      {/* Copyright Bar */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <div className="mb-2 md:mb-0">© {new Date().getFullYear()} CYANU. All rights reserved.</div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#cabb67] relative group">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#cabb67] group-hover:w-full transition-all duration-300"></span>
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-[#cabb67] relative group">
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#cabb67] group-hover:w-full transition-all duration-300"></span>
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-[#cabb67] relative group">
                Cookie Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#cabb67] group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CyanuFooter;
