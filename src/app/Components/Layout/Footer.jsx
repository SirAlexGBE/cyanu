"use client";
import React, {useState, useEffect} from "react";
import {MapPin, Phone, Mail, Clock, ArrowRight, Calendar, Shield, Award, Linkedin, Twitter, Github, Youtube} from "lucide-react";

const CyanuFooter = () => {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {threshold: 0.1}
    );

    const footerElement = document.getElementById("cyanu-footer");
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => observer.disconnect();
  }, []);

  const handleNewsletterSubmit = () => {
    if (email.trim() && email.includes("@")) {
      console.log("Newsletter signup:", email);
      setEmail("");
      // Add your newsletter signup logic here
    }
  };

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

  const companyLinks = ["About Us", "Our Portfolio", "Case Studies", "Careers", "Blog/Resources", "Support Center", "Contact Us", "Request Quote"];

  const socialLinks = [
    {icon: Linkedin, href: "#", label: "LinkedIn"},
    {icon: Twitter, href: "#", label: "Twitter"},
    {icon: Github, href: "#", label: "GitHub"},
    {icon: Youtube, href: "#", label: "YouTube"},
  ];

  return (
    <>
      {/* Footer */}
      <footer id="cyanu-footer" className="bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
        {/* Separator Line */}
        <div className="h-0.5 bg-[#cabb67] w-full"></div>

        {/* Main Footer Content */}
        <div className={`max-w-7xl mx-auto px-8 py-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Branding Section */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <div className="mb-6">
                <img src="/logo.png" alt="Company Logo" className="w-48" />{" "}
              </div>

              <div className="company-tagline text-[#cabb67] text-lg font-semibold mb-4">Building Tomorrow's Software Today</div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                We deliver cutting-edge custom software solutions that transform businesses and drive innovation. From AI-powered applications to secure cloud infrastructure, we're your technology
                partner.
              </p>

              {/* Contact Info */}
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
                    <a href="#" className="text-gray-300 text-sm hover:text-[#cabb67] transition-colors duration-300 relative group">
                      {service}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#cabb67] group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links Section */}
            <div className="lg:col-span-1">
              <h3 className="text-[#cabb67] text-lg font-bold mb-6 relative">
                Company
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#cabb67]"></div>
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 text-sm hover:text-[#cabb67] transition-colors duration-300 relative group">
                      {link}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#cabb67] group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social Section */}
            <div className="lg:col-span-1">
              <h3 className="text-[#cabb67] text-lg font-bold mb-6 relative">
                Get In Touch
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#cabb67]"></div>
              </h3>

              {/* Contact Info */}
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

              {/* Social Media Icons */}
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

              {/* Newsletter Signup */}
              <div>
                <h4 className="text-white text-sm font-semibold mb-3">Stay Updated</h4>
                <div className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white text-sm focus:border-[#cabb67] focus:outline-none transition-colors duration-300"
                  />
                  <button
                    onClick={handleNewsletterSubmit}
                    className="w-full bg-[#cabb67] text-black px-4 py-2 rounded font-semibold text-sm hover:bg-[#b8a85a] hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                  >
                    Subscribe
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-white mb-2">Ready to Start Your Project?</h3>
                <p className="text-gray-300 text-sm">Let's discuss how we can help transform your business with custom software solutions.</p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button className="bg-[#cabb67] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#b8a85a] hover:shadow-lg transition-all duration-300">Start Your Project</button>
                <button className="border border-[#cabb67] text-[#cabb67] px-6 py-3 rounded-lg font-semibold hover:bg-[#cabb67] hover:text-black transition-all duration-300 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="flex flex-wrap items-center justify-center space-x-8">
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <Shield className="w-5 h-5 mr-2 text-[#cabb67]" />
                SSL Secured
              </div>
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <Award className="w-5 h-5 mr-2 text-[#cabb67]" />
                ISO 27001 Certified
              </div>
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <Shield className="w-5 h-5 mr-2 text-[#cabb67]" />
                SOC 2 Compliant
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="bg-black border-t border-[#cabb67]">
          <div className="max-w-7xl mx-auto px-8 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
              <div className="mb-2 md:mb-0">© 2025 CYANU. All rights reserved.</div>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-[#cabb67] transition-colors duration-300">
                  Privacy Policy
                </a>
                <span className="text-gray-600">|</span>
                <a href="#" className="hover:text-[#cabb67] transition-colors duration-300">
                  Terms of Service
                </a>
                <span className="text-gray-600">|</span>
                <a href="#" className="hover:text-[#cabb67] transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CyanuFooter;
