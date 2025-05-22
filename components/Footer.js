"use client";

import Link from "next/link";
import { HiCode, HiSparkles, HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaArrowUp } from "react-icons/fa";
import { BiRocket } from "react-icons/bi";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/yourusername",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
      color: "hover:text-sky-400",
    },
  ];

  const contactInfo = [
    {
      icon: HiMail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
    },
    {
      icon: HiPhone,
      label: "Phone",
      value: "+91 96901 70502",
      href: "tel:+919690170502",
    },
    {
      icon: HiLocationMarker,
      label: "Location",
      value: "Your City, Country",
      href: "#",
    },
  ];

  const services = [
    "Web Development",
    "React Development", 
    "Next.js Applications",
    "Full Stack Solutions",
    "UI/UX Design",
  ];

  return (
    <>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        </button>
      )}

      {/* Main Footer */}
      <footer className="relative bg-black border-t border-gray-800 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-cyan-900/10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-600/5 to-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Main Footer Content */}
          <div className="py-16 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              
              {/* Brand Section */}
              <div className="lg:col-span-1">
                <div className="group mb-8">
                  <Link href="#home" className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <HiCode className="w-6 h-6 text-white animate-pulse" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-cyan-400 transition-all duration-500">
                        DevPortfolio
                      </h3>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        Full Stack Developer
                      </p>
                    </div>
                  </Link>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Crafting digital experiences with modern technologies. 
                  Passionate about clean code, innovative solutions, and bringing ideas to life.
                </p>

                {/* Social Links */}
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 text-gray-400 ${social.color} rounded-xl border border-gray-800 hover:border-gray-700 hover:bg-white/5 transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="lg:col-span-1">
                <h4 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
                  <HiSparkles className="w-5 h-5 text-purple-400" />
                  <span>Quick Links</span>
                </h4>
                <ul className="space-y-4">
                  {navItems.map((item, index) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                      >
                        <div className="w-1 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="lg:col-span-1">
                <h4 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
                  <BiRocket className="w-5 h-5 text-cyan-400" />
                  <span>Services</span>
                </h4>
                <ul className="space-y-4">
                  {services.map((service, index) => (
                    <li key={service}>
                      <span className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 group cursor-default">
                        <div className="w-1 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span>{service}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h4 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
                  <HiMail className="w-5 h-5 text-pink-400" />
                  <span>Get In Touch</span>
                </h4>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                    >
                      <div className="p-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg group-hover:from-purple-500/20 group-hover:to-cyan-500/20 transition-all duration-300 mt-0.5">
                        <contact.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">
                          {contact.label}
                        </p>
                        <p className="text-sm">{contact.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <Link
                    href="https://api.whatsapp.com/send?phone=+919690170502&text=Hello%20Anas%20Malik,%20I%20need%20your%20service"
                    target="_blank"
                    className="inline-flex items-center space-x-2 px-6 py-3 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                  >
                    <BiRocket className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Start Project</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>© 2025 DevPortfolio. Made with</span>
                <FaHeart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>and lots of coffee</span>
              </div>
              
              <div className="flex items-center space-x-6">
                <Link
                  href="#privacy"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#terms"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                <div className="text-sm text-gray-500">
                  Built with Next.js & Tailwind CSS
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;