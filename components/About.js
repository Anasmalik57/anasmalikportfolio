"use client";

import { useState, useEffect } from "react";
import {
  HiCode,
  HiSparkles,
  HiLightBulb,
  HiAcademicCap,
  HiTrendingUp,
  HiHeart,
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
import { BiRocket, BiCoffee } from "react-icons/bi";
import Image from "next/image";

const About = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [animatedStats, setAnimatedStats] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    coffee: 0,
  });

  // Animate stats numbers
  useEffect(() => {
    const finalStats = {
      experience: 3,
      projects: 50,
      clients: 25,
      coffee: 1000,
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedStats({
        experience: Math.floor(finalStats.experience * progress),
        projects: Math.floor(finalStats.projects * progress),
        clients: Math.floor(finalStats.clients * progress),
        coffee: Math.floor(finalStats.coffee * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(finalStats);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: HiTrendingUp,
      label: "Years Experience",
      value: animatedStats.experience + "+",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: HiCode,
      label: "Projects Completed",
      value: animatedStats.projects + "+",
      color: "from-pink-500 to-cyan-500",
    },
    {
      icon: HiHeart,
      label: "Happy Clients",
      value: animatedStats.clients + "+",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: BiCoffee,
      label: "Cups of Coffee",
      value: animatedStats.coffee + "+",
      color: "from-orange-500 to-red-500",
    },
  ];

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

  return (
    <section
      id="about"
      className="relative py-20 lg:py-12 bg-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-cyan-900/10"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full border border-purple-500/20 mb-6">
            <HiSparkles className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">
              Get to know me
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate developer crafting digital experiences with modern
            technologies and creative solutions
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <div key={stat.label} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-cyan-600/10 rounded-2xl blur group-hover:blur-lg transition-all duration-300"></div>
              <div className="relative p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-gray-700 transition-all duration-300 text-center">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl mb-4`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Image & Info */}
          <div className="lg:col-span-5">
            <div className="sticky top-8">
              {/* Profile Image */}
              <div className="relative mb-8 group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                <div className="relative aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-gray-700">
                  <Image
                    src={"/myIMage.jpg"}
                    width={500}
                    height={500}
                    alt="my image"
                  />
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <HiCode className="w-12 h-12 text-white" />
                      </div>
                      <p className="text-gray-400 text-sm">Your Photo Here</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="space-y-6">
                <div className="p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                    <HiSparkles className="w-5 h-5 text-purple-400" />
                    <span>Quick Facts</span>
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Location</span>
                      <span className="text-white">Roorkee, Uttarakhand</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Experience</span>
                      <span className="text-white">3+ Years</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Specialization</span>
                      <span className="text-white">Full Stack</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Availability</span>
                      <span className="text-green-400 flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>Available</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full cursor-pointer flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white rounded-xl font-bold transition-all duration-300 hover:scale-105 group">
                    <HiDownload className="w-5 h-5 group-hover:scale-105" />
                    <span>Download Resume</span>
                  </button>

                  <button className="w-full cursor-pointer flex items-center justify-center space-x-3 px-6 py-4 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white rounded-xl font-medium transition-all duration-300 hover:bg-white/5 group">
                    <HiMail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Get In Touch</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Tabbed Content */}
          <div className="lg:col-span-7">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8 p-1 bg-gray-900/50 rounded-2xl border border-gray-800">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex cursor-pointer items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white border border-purple-500/30"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[500px]">
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                      Hello! I'm a passionate Full Stack Developer with over 3
                      years of experience creating digital solutions that make a
                      difference. I specialize in React, Node.js, and modern web
                      technologies to build scalable, user-friendly
                      applications.
                    </p>

                    <p className="text-gray-400 leading-relaxed mb-6">
                      My journey in web development started with a curiosity
                      about how things work on the internet. Today, I've had the
                      privilege of working with startups, agencies, and
                      established companies, helping them bring their digital
                      visions to life.
                    </p>

                    <p className="text-gray-400 leading-relaxed">
                      When I'm not coding, you'll find me exploring new
                      technologies, contributing to open-source projects, or
                      sharing my knowledge through tech blogs and community
                      meetups. I believe in continuous learning and staying
                      updated with the latest industry trends.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl">
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center space-x-2">
                        <BiRocket className="w-5 h-5 text-purple-400" />
                        <span>What I Do</span>
                      </h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Full Stack Web Development</li>
                        <li>• React & Next.js Applications</li>
                        <li>• API Design & Development</li>
                        <li>• Database Design & Optimization</li>
                        <li>• Cloud Solutions & Deployment</li>
                      </ul>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl">
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center space-x-2">
                        <HiLightBulb className="w-5 h-5 text-cyan-400" />
                        <span>My Approach</span>
                      </h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• User-Centered Design</li>
                        <li>• Clean, Maintainable Code</li>
                        <li>• Performance Optimization</li>
                        <li>• Agile Development</li>
                        <li>• Continuous Learning</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Skills Tab */}
              {activeTab === "skills" && (
                <div className="space-y-8 animate-fadeIn">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h4 className="text-xl font-bold text-white mb-6 capitalize flex items-center space-x-2">
                        <HiCode className="w-5 h-5 text-purple-400" />
                        <span>{category} Development</span>
                      </h4>
                      <div className="space-y-4">
                        {skillList.map((skill, index) => (
                          <div key={skill.name} className="group">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-3">
                                <skill.icon
                                  className={`w-5 h-5 ${skill.color}`}
                                />
                                <span className="text-white font-medium">
                                  {skill.name}
                                </span>
                              </div>
                              <span className="text-gray-400 text-sm">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-800 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Experience Tab */}
              {activeTab === "experience" && (
                <div className="space-y-6 animate-fadeIn">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="relative pl-8 pb-8 border-l-2 border-gray-800 last:border-l-0 last:pb-0"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                      <div className="p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-gray-700 transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <h4 className="text-xl font-bold text-white">
                            {exp.title}
                          </h4>
                          <span className="text-purple-400 font-medium">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-cyan-400 font-medium mb-3">
                          {exp.company}
                        </p>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-sm text-white"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Interests Tab */}
              {activeTab === "interests" && (
                <div className="animate-fadeIn">
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Beyond coding, I have a variety of interests that keep me
                    inspired and motivated. These hobbies help me stay creative
                    and bring fresh perspectives to my work.
                  </p>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {interests.map((interest, index) => (
                      <div
                        key={interest.name}
                        className="group p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-gray-700 hover:bg-gradient-to-br hover:from-purple-500/5 hover:to-cyan-500/5 transition-all duration-300 hover:scale-105"
                      >
                        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                          {interest.icon}
                        </div>
                        <h4 className="text-white font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                          {interest.name}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
