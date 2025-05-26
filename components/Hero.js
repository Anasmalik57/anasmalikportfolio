"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaDownload,
  FaPlay,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaArrowDown,
  FaStar,
  FaCheckCircle,
  FaInstagram,
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
import { Anta, Dancing_Script } from "next/font/google";
import Link from "next/link";

const anta = Anta({ weight: "400", subsets: ["latin"] });
const dancingScript = Dancing_Script({ weight: ["400", "700"], subsets: ["latin"] });

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const roles = [
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "Freelancer",
    "Next.js Developer",
    "Tech Innovator",
  ];

  const techStack = [
    {
      icon: SiReact,
      name: "React",
      color: "text-blue-400",
      glow: "group-hover:shadow-blue-400/50",
    },
    {
      icon: SiNextdotjs,
      name: "Next.js",
      color: "text-white",
      glow: "group-hover:shadow-white/50",
    },
    {
      icon: SiTypescript,
      name: "TypeScript",
      color: "text-blue-500",
      glow: "group-hover:shadow-blue-500/50",
    },
    {
      icon: SiNodedotjs,
      name: "Node.js",
      color: "text-green-400",
      glow: "group-hover:shadow-green-400/50",
    },
    {
      icon: SiMongodb,
      name: "MongoDB",
      color: "text-green-500",
      glow: "group-hover:shadow-green-500/50",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind",
      color: "text-cyan-400",
      glow: "group-hover:shadow-cyan-400/50",
    },
    {
      icon: SiPython,
      name: "Python",
      color: "text-yellow-400",
      glow: "group-hover:shadow-yellow-400/50",
    },
    {
      icon: SiJavascript,
      name: "JavaScript",
      color: "text-yellow-400",
      glow: "group-hover:shadow-yellow-400/50",
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-25, 25, -25],
      rotate: [-6, 6, -6],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 0.7, 0.5],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const slideVariants = {
    enter: { x: 100, opacity: 0 },
    center: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { x: -100, opacity: 0, transition: { duration: 0.4, ease: "easeIn" } },
  };

  return (
    <section
      id="home"
      className="pt-12 relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-950 to-black"
    >
      {/* Dynamic Mouse-Following Gradient */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/15 via-pink-600/15 to-cyan-600/15 rounded-full blur-3xl pointer-events-none"
        animate={{ x: mousePosition.x - 192, y: mousePosition.y - 192 }}
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
      />

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Premium Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 rounded-full blur-3xl"
          variants={pulseVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 rounded-full blur-3xl"
          variants={pulseVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-600/20 to-emerald-600/20 rounded-full blur-3xl"
          variants={pulseVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        {/* Floating Tech Icons */}
        <motion.div
          className="absolute top-20 left-10 opacity-25"
          variants={floatingVariants}
          animate="animate"
        >
          <HiCode className="w-14 h-14 text-purple-400" />
        </motion.div>
        <motion.div
          className="absolute top-32 right-16 opacity-20"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        >
          <BiRocket className="w-12 h-12 text-cyan-400" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 opacity-25"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        >
          <HiSparkles className="w-16 h-16 text-pink-400" />
        </motion.div>
        <motion.div
          className="absolute top-64 right-32 opacity-15"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        >
          <HiGlobe className="w-10 h-10 text-emerald-400" />
        </motion.div>
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Content */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Premium Badge */}
          <motion.div className="mb-6" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-cyan-500/30 border border-purple-400/50 rounded-full backdrop-blur-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(236, 72, 153, 0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <BiDiamond className="w-5 h-5 text-purple-300" />
              <span className="text-white font-medium">Premium Developer</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                  >
                    <FaStar className="w-3 h-3 text-yellow-400" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Name with Enhanced Typography */}
          <motion.h1
            className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-6 leading-none"
            variants={itemVariants}
          >
            <span className="relative">
              <motion.span
                className={`${dancingScript.className} bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent`}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                Anas Malik
              </motion.span>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-cyan-600/30 blur-2xl -z-10"
                variants={pulseVariants}
                animate="animate"
              />
            </span>
          </motion.h1>

          {/* Enhanced Dynamic Role */}
          <motion.div
            className="mb-8 h-16 flex items-center justify-center"
            variants={itemVariants}
          >
            <h2
              className={`${dancingScript.className} text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-200`}
            >
              I&#39;m a{" "}
              <span className={`${anta.className} relative inline-block`}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRole}
                    className="bg-gradient-to-r from-purple-400 via-pink-400 to-emerald-400 bg-clip-text text-transparent"
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    {roles[currentRole]}
                  </motion.span>
                </AnimatePresence>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-emerald-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </span>
            </h2>
          </motion.div>

          {/* Premium Description */}
          <motion.div
            className="max-w-4xl mx-auto mb-12"
            variants={itemVariants}
          >
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed mb-6">
              Transforming{" "}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                visions into reality
              </motion.span>{" "}
              with cutting-edge technology and exceptional craftsmanship.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Specializing in full-stack development with MERN, Next.js, and
              modern frameworks to deliver premium digital experiences that
              drive results.
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            variants={itemVariants}
          >
            <motion.button
              className="group cursor-pointer relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-bold text-lg rounded-2xl overflow-hidden"
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-cyan-700 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <div className="relative flex items-center justify-center space-x-3">
                <motion.div
                  whileHover={{ rotate: 12 }}
                  transition={{ duration: 0.3 }}
                >
                  <BiRocket className="w-6 h-6" />
                </motion.div>
                <span>Start Your Project</span>
                <motion.div
                  className="opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                >
                  <HiSparkles className="w-5 h-5" />
                </motion.div>
              </div>
            </motion.button>

            <motion.button
              className="group cursor-pointer w-full sm:w-auto flex items-center justify-center space-x-3 px-10 py-5 text-gray-200 hover:text-white border-2 border-gray-700 hover:border-gray-500 rounded-2xl backdrop-blur-lg"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                boxShadow: "0 25px 50px -12px rgba(34, 211, 238, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                whileHover={{ scale: 1.25 }}
                transition={{ duration: 0.3 }}
              >
                <FaPlay className="w-5 h-5" />
              </motion.div>
              <span className="font-semibold text-lg">View Portfolio</span>
            </motion.button>
          </motion.div>

          {/* Key Features */}
          <motion.div className="mb-16" variants={itemVariants}>
            <div className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-gray-800/60 to-gray-700/60 border border-gray-600/40 rounded-full backdrop-blur-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium text-gray-200">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Tech Stack */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-8">
              Powered by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Premium Technologies
              </span>
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className={`group cursor-pointer relative flex flex-col items-center space-y-3 p-4 sm:p-6 rounded-2xl border border-gray-800 hover:border-gray-600 bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-lg ${tech.glow}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{
                    scale: 1.1,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl"
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.25, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <tech.icon
                      className={`w-8 h-8 sm:w-10 sm:h-10 ${tech.color} relative z-10`}
                    />
                  </motion.div>
                  <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white relative z-10">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Premium Stats */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto"
            variants={itemVariants}
          >
            {achievements.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group cursor-pointer relative p-8 rounded-3xl border border-gray-800 hover:border-gray-600 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.2)",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-pink-500/10 to-cyan-500/15 opacity-0 group-hover:opacity-100 rounded-3xl"
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <motion.div
                      className={`p-3 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 ${stat.color} shadow-lg`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <stat.icon className="w-8 h-8" />
                    </motion.div>
                  </div>
                  <motion.div
                    className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm sm:text-base text-gray-300 group-hover:text-gray-200 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            className="flex items-center justify-center space-x-6 mb-16"
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com/Anasmalik57"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 text-gray-300 hover:text-white border-2 border-gray-800 hover:border-gray-600 rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-lg"
              whileHover={{
                scale: 1.1,
                y: -4,
                boxShadow: "0 20px 40px -12px rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ rotate: 12 }}
                transition={{ duration: 0.3 }}
              >
                <FaGithub className="w-6 h-6" />
              </motion.div>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/anasmalik57"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 text-gray-300 hover:text-blue-400 border-2 border-gray-800 hover:border-blue-500/60 rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-lg hover:bg-blue-500/15"
              whileHover={{
                scale: 1.1,
                y: -4,
                boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ rotate: 12 }}
                transition={{ duration: 0.3 }}
              >
                <FaLinkedin className="w-6 h-6" />
              </motion.div>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/anas.malik5022/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 text-gray-300 hover:text-pink-400 border-2 border-gray-800 hover:border-pink-500/60 rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-lg hover:bg-pink-500/15"
              whileHover={{
                scale: 1.1,
                y: -4,
                boxShadow: "0 20px 40px -12px rgba(244, 114, 182, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ rotate: 12 }}
                transition={{ duration: 0.3 }}
              >
                <FaInstagram className="w-6 h-6" />
              </motion.div>
            </motion.a>
            <motion.button
              className="group relative p-4 text-gray-300 hover:text-emerald-400 border-2 border-gray-800 hover:border-emerald-500/60 rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-lg hover:bg-emerald-500/15"
              whileHover={{
                scale: 1.1,
                y: -4,
                boxShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/resume.pdf" download>
                <motion.div
                  whileHover={{ y: [-2, 2, -2] }}
                  transition={{ duration: 0.3, repeat: Infinity }}
                >
                  <FaDownload className="w-6 h-6" />
                </motion.div>
              </Link>
            </motion.button>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            className="flex flex-col items-center space-y-6"
            variants={itemVariants}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm font-medium text-gray-300">Discover More</span>
              <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                <motion.div
                  className="w-1 h-3 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full mt-2"
                  animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
            <FaArrowDown className="w-5 h-5 text-gray-300" />
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
    </section>
  );
};

export default Hero;