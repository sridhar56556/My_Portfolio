import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Secure Banking System (NeoBank)",
      description: "A sophisticated modern banking platform featuring real-time transaction processing, secure OTP authentication via EmailJS, and an instant loan approval system. Built with a focus on premium UI/UX and robust security protocols.",
      technologies: ["React", "Node.js", "Express", "Tailwind CSS", "EmailJS", "Framer Motion"],
      github: "https://github.com/sridhar56556/Secure-banking-system",
      live: "https://secure-banking-system-nyv5.onrender.com/",
      color: "from-emerald-600 to-cyan-600"
    },
    {
      title: "Encrypted Deduplication System",
      description: "Designed a Java-based encrypted deduplication system to eliminate redundant data storage. Developed backend logic using Java Servlets for file upload, encryption, and duplicate checking, and built MySQL metadata tables.",
      technologies: ["Java (J2EE)", "JDBC", "JSP", "Servlets", "MySQL", "Apache Tomcat"],
      github: "https://github.com/sridhar56556",
      live: null,
      color: "from-purple-600 to-indigo-600"
    },
    {
      title: "Online Ticket Booking System",
      description: "Developed a responsive web application for booking tickets across bus, train, flight, and ship. Created an interactive dashboard displaying bookings, travel history, and total cost with an intuitive real-time fare breakdown.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/sridhar56556/ticket-booking-system",
      live: "https://sridhar56556.github.io/ticket-booking-system/",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Online Banking",
      description: "A comprehensive online banking platform designed to enable users to manage accounts, perform secure transactions, and seamlessly view transaction history with a focus on robust security.",
      technologies: ["Java", "SQL", "Web Technologies"],
      github: "https://github.com/sridhar56556/Online-Banking",
      live: null,
      color: "from-blue-600 to-indigo-500"
    },
    {
      title: "TicTacToe Game",
      description: "An interactive and classic Tic-Tac-Toe game featuring a clean user interface. Implemented core game logic including win/draw detection and player turn management.",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/sridhar56556/TicTacToe-Game",
      live: null,
      color: "from-emerald-500 to-teal-400"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white inline-block relative">
            Featured Projects
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-emerald-500 rounded-full"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card group overflow-hidden flex flex-col h-full"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color} w-full`} />
              <div className="p-8 flex-1 flex flex-col relative z-20">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 flex-1 text-justify leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs font-semibold px-3 py-1 bg-white/5 border border-white/10 rounded-md text-cyan-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10">
                      <FaGithub size={18} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors border border-cyan-500/30 px-4 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
