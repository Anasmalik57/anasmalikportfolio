"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX, HiCode, HiSparkles } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter,FaInstagram, FaDownload } from "react-icons/fa";
import { BiRocket } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: HiSparkles },
    { name: "About", href: "#about", icon: HiCode },
    { name: "Skills", href: "#skills", icon: BiRocket },
    { name: "Projects", href: "#projects", icon: HiCode },
    { name: "Contact", href: "#contact", icon: HiSparkles },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Anasmalik57",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/anasmalik57/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/anas.malik5022/",
      label: "Twitter",
      color: "hover:text-red-400",
    },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-black/90 backdrop-blur-2xl shadow-2xl border-b border-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-8xl mx-auto px-3 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
            {/* Logo Section */}
            <div className="flex-shrink-0 group">
              <Link
                href="#home"
                className="flex items-center space-x-2 sm:space-x-3"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <HiCode className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-pulse" />
                  </div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg sm:text-xl lg:text-2xl font-black bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-cyan-400 transition-all duration-500">
                    DevPortfolio
                  </h1>
                  <p className="text-xs text-gray-400 -mt-1 group-hover:text-gray-300 transition-colors">
                    Full Stack Developer
                  </p>
                </div>
                <div className="block sm:hidden">
                  <span className="text-xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    DP
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1 xl:space-x-2">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group relative px-4 xl:px-6 py-2 xl:py-3 text-sm xl:text-base font-medium text-gray-300 hover:text-white transition-all duration-300 rounded-xl overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-cyan-500/10 transition-all duration-500 rounded-xl"></div>
                    <div className="relative flex items-center space-x-2">
                      <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span>{item.name}</span>
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {/* Social Links */}
              <div className="flex items-center space-x-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 lg:p-3 text-gray-400 ${social.color} rounded-xl border border-gray-700/50 hover:border-gray-600 hover:bg-white/5 transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  </a>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center space-x-2 lg:space-x-3">
                <Link
                href={"/resume.pdf"}
                download={true} className="hidden lg:flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white border border-gray-700 hover:border-gray-600 rounded-xl hover:bg-white/5 transition-all duration-300">
                  <FaDownload className="w-4 h-4" />
                  <span>Resume</span>
                </Link>

                <button className="relative group px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base font-bold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative flex items-center space-x-2">
                    <BiRocket className="w-4 h-4 lg:w-5 lg:h-5 group-hover:rotate-12 transition-transform duration-300" />
                    <Link
                      href={
                        "https://api.whatsapp.com/send?phone=+919690170502%E2%80%AC&text=Hello%20Anas%20Malik,%20I%20need%20your%20service"
                      }
                      target="_blank"
                      className="hidden sm:inline"
                    >
                      Hire Me
                    </Link>
                    <span className="sm:hidden">Hire</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-300 hover:text-white rounded-xl border border-gray-700 hover:border-gray-600 hover:bg-white/5 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <HiX className="w-6 h-6" />
                ) : (
                  <HiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-500 ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-4 pt-4 pb-6 space-y-3 bg-black/95 backdrop-blur-2xl border-t border-gray-800">
            {/* Mobile Navigation Items */}
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-center space-x-4 px-4 py-4 text-gray-300 hover:text-white rounded-xl border border-gray-800 hover:border-gray-700 hover:bg-gradient-to-r hover:from-purple-500/5 hover:via-pink-500/5 hover:to-cyan-500/5 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <div className="p-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">{item.name}</span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                </div>
              </Link>
            ))}

            {/* Mobile Social Links */}
            <div className="pt-6 pb-4">
              <p className="text-sm text-gray-500 mb-4 px-4">Connect with me</p>
              <div className="flex items-center justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 text-gray-400 ${social.color} border border-gray-800 hover:border-gray-700 rounded-xl hover:bg-white/5 transition-all duration-300 hover:scale-110`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="space-y-3 pt-4">
              <Link
                href={"/resume.pdf"}
                download={true}
                className="w-full flex items-center justify-center space-x-3 px-6 py-4 text-gray-300 hover:text-white border border-gray-700 hover:border-gray-600 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                <FaDownload className="w-5 h-5" />
                <span className="text-lg font-medium">Download Resume</span>
              </Link>

              <button className="w-full relative group px-6 py-4 text-lg font-bold text-white rounded-xl overflow-hidden transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative flex items-center justify-center space-x-3">
                  <BiRocket className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Let&#39;s Work Together</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-16 sm:h-18 lg:h-20"></div>
    </>
  );
};

export default Navbar;
