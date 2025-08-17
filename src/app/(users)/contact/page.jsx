"use client";
import React, {useState} from "react";
import {motion} from "framer-motion";
import {Mail, Phone, MapPin, Send, CheckCircle, Linkedin, Twitter, Github, Youtube, MessageSquare, Clock, Calendar} from "lucide-react";
import AnimatedGridBackground from "@/app/Components/UI/Home/HeroInteractiveElement/AnimatedGridBackground";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        inquiryType: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@cyanu.com",
      href: "mailto:hello@cyanu.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "123 Tech Boulevard, San Francisco, CA 94105",
      href: "https://maps.google.com",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon-Fri 9AM-6PM PST",
      href: null,
    },
  ];

  const socialLinks = [
    {icon: Linkedin, href: "#", label: "LinkedIn"},
    {icon: Twitter, href: "#", label: "Twitter"},
    {icon: Github, href: "#", label: "GitHub"},
    {icon: Youtube, href: "#", label: "YouTube"},
  ];

  return (
    <section className="bg-black text-white">
      <AnimatedGridBackground />

      {/* Hero Section */}
      <div className="relative z-10 pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}} className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Let's Build Something <span className="text-[#cabb67]">Amazing</span> Together
          </motion.h1>
          <motion.p
            initial={{opacity: 0, y: 40}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.2, duration: 0.7, ease: "easeOut"}}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to transform your business with cutting-edge technology? Get in touch with our team of experts.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div initial={{opacity: 0, x: -50}} animate={{opacity: 1, x: 0}} transition={{delay: 0.3, duration: 0.7}} className="order-2 lg:order-1">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-10 hover:border-[#cabb67] transition-all duration-300">
              <h2 className="text-2xl font-bold text-[#cabb67] mb-6">Send us a Message</h2>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-white font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-[#cabb67] focus:outline-none transition-colors duration-200 text-white placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-[#cabb67] focus:outline-none transition-colors duration-200 text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-white font-semibold mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-[#cabb67] focus:outline-none transition-colors duration-200 text-white"
                    >
                      <option value="">Select inquiry type</option>
                      <option value="ai-ml">AI & Machine Learning</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="consultation">General Consultation</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-[#cabb67] focus:outline-none transition-colors duration-200 text-white placeholder-gray-400 resize-none"
                      placeholder="Tell us about your project, requirements, or any questions you have..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#cabb67] text-black font-bold py-4 px-6 rounded-lg hover:bg-[#b8a659] transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-300 text-lg">Thank you for reaching out! We'll get back to you within 24 hours.</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div initial={{opacity: 0, x: 50}} animate={{opacity: 1, x: 0}} transition={{delay: 0.4, duration: 0.7}} className="order-1 lg:order-2 space-y-8">
            {/* Contact Details */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-[#cabb67] transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#cabb67] mb-6 relative">
                Get In Touch
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#cabb67]"></div>
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  const content = (
                    <div className="flex items-center gap-4 group hover:text-[#cabb67] transition-colors duration-200">
                      <div className="w-12 h-12 bg-[#cabb67] rounded-lg flex items-center justify-center group-hover:bg-white transition-colors duration-200">
                        <IconComponent className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <p className="font-semibold">{item.label}</p>
                        <p className="text-gray-300 text-sm">{item.value}</p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a key={index} href={item.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-[#cabb67] transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#cabb67] mb-6 relative">
                Follow Us
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#cabb67]"></div>
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="flex items-center gap-3 p-3 rounded-lg border border-gray-700 hover:border-[#cabb67] hover:bg-[#cabb67] transition-all duration-200 group"
                    >
                      <IconComponent className="w-5 h-5 text-[#cabb67] group-hover:text-black group-hover:scale-110 transition-all duration-200" />
                      <span className="text-sm group-hover:text-black">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-[#cabb67] to-[#b8a659] rounded-2xl p-6 text-black">
                <div className="flex items-center gap-3 mb-2">
                  <MessageSquare className="w-6 h-6" />
                  <h4 className="font-bold text-lg">Need Quick Help?</h4>
                </div>
                <p className="text-sm opacity-90 mb-4">Prefer real-time support? Use our chat button for immediate assistance.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-transparent border border-[#cabb67] text-[#cabb67] px-6 py-3 rounded-lg font-semibold hover:bg-[#cabb67] hover:text-black transition-all duration-300 flex items-center justify-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Call
                </button>
                <a href="/services" className="flex-1 bg-[#cabb67] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#b8a659] transition-all duration-300 text-center">
                  View Services
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
