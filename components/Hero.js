"use client";

import { useState, useEffect } from "react";
import {
  FaDownload,
  FaPlay,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaArrowDown,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";
import {
  HiCode,
  HiSparkles,
  HiLightningBolt,
  HiGlobe,
  HiTrendingUp,
} from "react-icons/hi";
import { BiRocket, BiWorld, BiTrophy, BiDiamond } from "react-icons/bi";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiPython,
} from "react-icons/si";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const roles = [
    "Full Stack Developer",
    "MERN Stack Expert",
    "Next.js Specialist",
    "UI/UX Enthusiast",
    "Tech Innovator",
  ];

  const techStack = [
    {
      icon: SiReact,
      name: "React",
      color: "text-blue-400",
      glow: "group-hover:shadow-blue-400/30",
    },
    {
      icon: SiNextdotjs,
      name: "Next.js",
      color: "text-white",
      glow: "group-hover:shadow-white/30",
    },
    {
      icon: SiTypescript,
      name: "TypeScript",
      color: "text-blue-500",
      glow: "group-hover:shadow-blue-500/30",
    },
    {
      icon: SiNodedotjs,
      name: "Node.js",
      color: "text-green-400",
      glow: "group-hover:shadow-green-400/30",
    },
    {
      icon: SiMongodb,
      name: "MongoDB",
      color: "text-green-500",
      glow: "group-hover:shadow-green-500/30",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind",
      color: "text-cyan-400",
      glow: "group-hover:shadow-cyan-400/30",
    },
    {
      icon: SiPython,
      name: "Python",
      color: "text-yellow-400",
      glow: "group-hover:shadow-yellow-400/30",
    },
    {
      icon: SiJavascript,
      name: "JavaScript",
      color: "text-yellow-400",
      glow: "group-hover:shadow-yellow-400/30",
    },
  ];

  const achievements = [
    {
      icon: BiTrophy,
      number: "50+",
      label: "Projects Delivered",
      color: "text-yellow-400",
    },
    {
      icon: FaStar,
      number: "5.0",
      label: "Client Rating",
      color: "text-purple-400",
    },
    {
      icon: HiTrendingUp,
      number: "3+",
      label: "Years Experience",
      color: "text-green-400",
    },
    {
      icon: BiDiamond,
      number: "100%",
      label: "Success Rate",
      color: "text-cyan-400",
    },
  ];

  const features = [
    "Premium Quality Code",
    "Lightning Fast Delivery",
    "24/7 Support Available",
    "Modern Tech Stack",
    "Responsive Design",
    "SEO Optimized",
  ];

  useEffect(() => {
    setIsVisible(true);

    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(roleInterval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [roles.length]);

  return (
    <section
      id="home"
      className=" pt-12 relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-950 to-black"
    >
      {/* Dynamic Mouse-Following Gradient */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-cyan-600/10 rounded-full blur-3xl transition-all duration-300 ease-out pointer-events-none"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Premium Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/15 via-pink-600/15 to-cyan-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-blue-600/15 via-indigo-600/15 to-purple-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-600/10 to-emerald-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Floating Tech Icons */}
        <div className="absolute top-20 left-10 opacity-20 animate-float">
          <HiCode className="w-12 h-12 text-purple-400" />
        </div>
        <div className="absolute top-32 right-16 opacity-15 animate-float-delayed">
          <BiRocket className="w-10 h-10 text-cyan-400" />
        </div>
        <div className="absolute bottom-40 left-20 opacity-20 animate-float-slow">
          <HiSparkles className="w-14 h-14 text-pink-400" />
        </div>
        <div className="absolute top-64 right-32 opacity-10 animate-float">
          <HiGlobe className="w-8 h-8 text-emerald-400" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Content */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Premium Badge */}
          <div className="mb-6">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm">
              <BiDiamond className="w-5 h-5 text-purple-400 animate-pulse" />
              <span className="text-white font-medium">Premium Developer</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-3 h-3 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>

          {/* Name with Enhanced Typography */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 leading-none">
            <span className="relative">
              <span className="bg-gradient-to-r from-white via-purple-200 via-pink-200 to-cyan-200 bg-clip-text text-transparent">
                Anas Malik
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 blur-2xl -z-10"></div>
            </span>
          </h1>

          {/* Enhanced Dynamic Role */}
          <div className="mb-8 h-16 flex items-center justify-center">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-300">
              Elite{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
                  {roles[currentRole]}
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 via-cyan-400 to-emerald-400 rounded-full transform scale-x-0 animate-scale-x"></div>
              </span>
            </h2>
          </div>

          {/* Premium Description */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-6">
              Transforming{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">
                visions into reality
              </span>{" "}
              with cutting-edge technology and exceptional craftsmanship.
            </p>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              Specializing in full-stack development with MERN, Next.js, and
              modern frameworks to deliver premium digital experiences that
              drive results.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <button className="group cursor-pointer relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-bold text-lg rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="relative flex items-center justify-center space-x-3">
                <BiRocket className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Start Your Project</span>
                <HiSparkles className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            </button>

            <button className="group cursor-pointer w-full sm:w-auto flex items-center justify-center space-x-3 px-10 py-5 text-gray-300 hover:text-white border-2 border-gray-700 hover:border-gray-500 rounded-2xl hover:bg-gradient-to-r hover:from-white/5 hover:to-white/10 transition-all duration-500 backdrop-blur-sm">
              <FaPlay className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
              <span className="font-semibold text-lg">View Portfolio</span>
            </button>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <div className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/30 rounded-full backdrop-blur-sm hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <FaCheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium text-gray-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Tech Stack */}
          <div className="mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-8">
              Powered by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Premium Technologies
              </span>
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`group relative flex flex-col items-center space-y-3 p-4 sm:p-6 rounded-2xl border border-gray-800 hover:border-gray-600 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:-translate-y-2 ${tech.glow} hover:shadow-2xl`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-300"></div>
                  <tech.icon
                    className={`w-8 h-8 sm:w-10 sm:h-10 ${tech.color} group-hover:scale-125 transition-all duration-300 relative z-10`}
                  />
                  <span className="text-xs sm:text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300 relative z-10">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
            {achievements.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative p-8 rounded-3xl border border-gray-800 hover:border-gray-600 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-cyan-500/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <div
                      className={`p-3 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 ${stat.color} shadow-lg`}
                    >
                      <stat.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Social Links */}
          <div className="flex items-center justify-center space-x-6 mb-16">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 text-gray-400 hover:text-white border-2 border-gray-800 hover:border-gray-600 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:shadow-xl"
            >
              <FaGithub className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 text-gray-400 hover:text-blue-400 border-2 border-gray-800 hover:border-blue-500/50 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm hover:bg-blue-500/10 transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20"
            >
              <FaLinkedin className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 text-gray-400 hover:text-sky-400 border-2 border-gray-800 hover:border-sky-500/50 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm hover:bg-sky-500/10 transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/20"
            >
              <FaTwitter className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <button className="group relative p-4 text-gray-400 hover:text-emerald-400 border-2 border-gray-800 hover:border-emerald-500/50 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm hover:bg-emerald-500/10 transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/20">
              <FaDownload className="w-6 h-6 group-hover:bounce transition-transform duration-300" />
            </button>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="flex flex-col items-center space-y-6 animate-bounce">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm font-medium text-gray-400">
                Discover More
              </span>
              <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
            <FaArrowDown className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(
            circle at 1px 1px,
            rgba(255, 255, 255, 0.05) 1px,
            transparent 0
          );
          background-size: 50px 50px;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-5deg);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(3deg);
          }
        }

        @keyframes scale-x {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }

        .animate-scale-x {
          animation: scale-x 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
