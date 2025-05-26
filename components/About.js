"use client";

import { useState } from "react";
import {
  HiCode,
  HiSparkles,
  HiLightBulb,
  HiAcademicCap,
  HiDownload,
  HiMail,
} from "react-icons/hi";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaPython,
  FaGitAlt,
  FaAws,
  FaDocker,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";
import { BiRocket } from "react-icons/bi";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const skills = {
    frontend: [
      { name: "React.js", icon: FaReact, level: 95, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, level: 90, color: "text-white" },
      { name: "JavaScript", icon: FaJs, level: 92, color: "text-yellow-400" },
      {
        name: "TypeScript",
        icon: SiTypescript,
        level: 85,
        color: "text-blue-400",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        level: 90,
        color: "text-cyan-300",
      },
    ],
    backend: [
      { name: "Node.js", icon: FaNodeJs, level: 88, color: "text-green-400" },
      { name: "Python", icon: FaPython, level: 80, color: "text-blue-300" },
      { name: "MongoDB", icon: SiMongodb, level: 85, color: "text-green-500" },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        level: 82,
        color: "text-blue-400",
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        level: 78,
        color: "text-orange-400",
      },
    ],
    tools: [
      { name: "Git", icon: FaGitAlt, level: 90, color: "text-orange-500" },
      { name: "AWS", icon: FaAws, level: 75, color: "text-orange-400" },
      { name: "Docker", icon: FaDocker, level: 70, color: "text-blue-400" },
      { name: "Figma", icon: FaFigma, level: 85, color: "text-purple-400" },
    ],
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: HiSparkles },
    { id: "skills", label: "Skills", icon: HiCode },
    { id: "experience", label: "Experience", icon: HiAcademicCap },
    { id: "interests", label: "Interests", icon: HiLightBulb },
  ];

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2023 - Present",
      description:
        "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting system solutions.",
      technologies: ["React", "Node.js", "AWS", "MongoDB"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2022 - 2023",
      description:
        "Developed and maintained multiple client projects, focusing on performance optimization and user experience improvements.",
      technologies: ["Next.js", "PostgreSQL", "Docker", "TypeScript"],
    },
    {
      title: "Frontend Developer",
      company: "Creative Agency",
      period: "2021 - 2022",
      description:
        "Created responsive web applications and collaborated with design teams to implement pixel-perfect interfaces.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Figma"],
    },
  ];

  const interests = [
    { name: "AI & Machine Learning", icon: "🤖" },
    { name: "Open Source Projects", icon: "🌟" },
    { name: "Tech Blogging", icon: "✍️" },
    { name: "Photography", icon: "📸" },
    { name: "Gaming", icon: "🎮" },
    { name: "Traveling", icon: "✈️" },
  ];

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const tabContentVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, x: 30, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <section
      id="about"
      className="relative py-20 lg:py-32 bg-gray-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-gray-950 to-cyan-900/30"></div>
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500/40 to-cyan-500/40 rounded-full border border-purple-400/60 mb-6">
            <HiSparkles className="w-5 h-5 text-purple-300" />
            <span className="text-sm font-medium text-gray-100">
              Get to know me
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Passionate developer crafting digital experiences with modern
            technologies and creative solutions
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Image & Info */}
          <motion.div
            className="lg:col-span-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="sticky top-8">
              {/* Profile Image */}
              <motion.div
                className="relative mb-8 group"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-cyan-500/40 rounded-3xl blur-lg opacity-25 group-hover:opacity-50 transition-all duration-500"></div>
                <div className="relative aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-purple-500/40">
                  <Image
                    src="/myIMage.jpg"
                    width={500}
                    height={500}
                    alt="Profile image"
                    loading="lazy"
                    
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Quick Info */}
              <motion.div
                className="p-6 bg-gray-900/90 backdrop-blur-lg border border-purple-400/40 rounded-2xl"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                  <HiSparkles className="w-5 h-5 text-purple-300" />
                  <span>Quick Facts</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-200">Location</span>
                    <span className="text-white">Roorkee, Uttarakhand</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-200">Experience</span>
                    <span className="text-white">3+ Years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-200">Specialization</span>
                    <span className="text-white">Full Stack</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-200">Availability</span>
                    <span className="text-green-400 flex items-center space-x-1">
                      <motion.div
                        className="w-2 h-2 bg-green-400 rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      <span>Available</span>
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <div className="space-y-3 mt-6">
                <motion.button
                  className="w-full cursor-pointer flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white rounded-xl font-bold"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(236, 72, 153, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiDownload className="w-5 h-5" />
                  <span>Download Resume</span>
                </motion.button>

                <motion.button
                  className="w-full cursor-pointer flex items-center justify-center space-x-3 px-6 py-4 border border-purple-400/60 text-gray-100 rounded-xl font-medium hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiMail className="w-5 h-5" />
                  <span>Get In Touch</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Tabbed Content */}
          <div className="lg:col-span-7">
            {/* Tab Navigation */}
            <motion.div
              className="flex flex-wrap gap-2 mb-8 p-1 bg-gray-900/90 backdrop-blur-lg rounded-2xl border border-purple-400/40"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex cursor-pointer items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-purple-500/50 to-cyan-500/50 text-white border border-purple-400/60"
                      : "text-gray-200 hover:text-white hover:bg-purple-500/20"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </motion.button>
              ))}
            </motion.div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="min-h-[500px]"
              >
                {/* Overview Tab */}
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    <div className="prose prose-invert max-w-none">
                      <p className="text-lg text-gray-200 leading-relaxed mb-6">
                        Hello! I&#39;m a passionate Full Stack Developer with over 3
                        years of experience creating digital solutions that make a
                        difference. I specialize in React, Node.js, and modern web
                        technologies to build scalable, user-friendly
                        applications.
                      </p>

                      <p className="text-gray-200 leading-relaxed mb-6">
                        My journey in web development started with a curiosity
                        about how things work on the internet. Today, I&#39;ve had the
                        privilege of working with startups, agencies, and
                        established companies, helping them bring their digital
                        visions to life.
                      </p>

                      <p className="text-gray-200 leading-relaxed">
                        When I&#39;m not coding, you&#39;ll find me exploring new
                        technologies, contributing to open-source projects, or
                        sharing my knowledge through tech blogs and community
                        meetups. I believe in continuous learning and staying
                        updated with the latest industry trends.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <motion.div
                        className="p-6 bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-400/60 rounded-2xl"
                        whileHover={{ scale: 1.02 }}
                      >
                        <h4 className="text-lg font-bold text-white mb-3 flex items-center space-x-2">
                          <BiRocket className="w-5 h-5 text-purple-300" />
                          <span>What I Do</span>
                        </h4>
                        <ul className="space-y-2 text-gray-200">
                          <li>• Full Stack Web Development</li>
                          <li>• React & Next.js Applications</li>
                          <li>• API Design & Development</li>
                          <li>• Database Design & Optimization</li>
                          <li>• Cloud Solutions & Deployment</li>
                        </ul>
                      </motion.div>

                      <motion.div
                        className="p-6 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border border-cyan-400/60 rounded-2xl"
                        whileHover={{ scale: 1.02 }}
                      >
                        <h4 className="text-lg font-bold text-white mb-3 flex items-center space-x-2">
                          <HiLightBulb className="w-5 h-5 text-cyan-300" />
                          <span>My Approach</span>
                        </h4>
                        <ul className="space-y-2 text-gray-200">
                          <li>• User-Centered Design</li>
                          <li>• Clean, Maintainable Code</li>
                          <li>• Performance Optimization</li>
                          <li>• Agile Development</li>
                          <li>• Continuous Learning</li>
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                )}

                {/* Skills Tab */}
                {activeTab === "skills" && (
                  <div className="space-y-8">
                    {Object.entries(skills).map(([category, skillList]) => (
                      <motion.div
                        key={category}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <h4 className="text-xl font-bold text-white mb-6 capitalize flex items-center space-x-2">
                          <HiCode className="w-5 h-5 text-purple-300" />
                          <span>{category} Development</span>
                        </h4>
                        <div className="space-y-4">
                          {skillList.map((skill, index) => (
                            <motion.div
                              key={skill.name}
                              className="group"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center space-x-3">
                                  <skill.icon
                                    className={`w-5 h-5 ${skill.color}`}
                                  />
                                  <span className="text-white font-medium">
                                    {skill.name}
                                  </span>
                                </div>
                                <span className="text-gray-200 text-sm">
                                  {skill.level}%
                                </span>
                              </div>
                              <div className="w-full bg-gray-800/50 rounded-full h-2.5">
                                <motion.div
                                  className="bg-gradient-to-r from-purple-400 to-cyan-400 h-2.5 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ duration: 1, ease: "easeOut" }}
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Experience Tab */}
                {activeTab === "experience" && (
                  <div className="space-y-6">
                    {experiences.map((exp, index) => (
                      <motion.div
                        key={index}
                        className="relative pl-8 pb-8 border-l-2 border-purple-400/40 last:border-l-0 last:pb-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                      >
                        <motion.div
                          className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <div className="p-6 bg-gray-900/90 backdrop-blur-lg border border-purple-400/40 rounded-2xl hover:border-purple-400/60 transition-all duration-300">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h4 className="text-xl font-bold text-white">
                              {exp.title}
                            </h4>
                            <span className="text-purple-300 font-medium">
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-cyan-300 font-medium mb-3">
                            {exp.company}
                          </p>
                          <p className="text-gray-200 mb-4 leading-relaxed">
                            {exp.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.span
                                key={techIndex}
                                className="px-3 py-1 bg-gradient-to-r from-purple-500/40 to-cyan-500/40 border border-purple-400/60 rounded-full text-sm text-white"
                                whileHover={{ scale: 1.05 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Interests Tab */}
                {activeTab === "interests" && (
                  <div>
                    <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                      Beyond coding, I have a variety of interests that keep me
                      inspired and motivated. These hobbies help me stay creative
                      and bring fresh perspectives to my work.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {interests.map((interest, index) => (
                        <motion.div
                          key={interest.name}
                          className="group p-6 bg-gray-900/90 backdrop-blur-lg border border-purple-400/40 rounded-2xl hover:border-purple-400/60 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <motion.div
                            className="text-4xl mb-3"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            {interest.icon}
                          </motion.div>
                          <h4 className="text-white font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text">
                            {interest.name}
                          </h4>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;