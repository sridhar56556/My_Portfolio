import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Developers',
      icon: <Code2 className="text-pink-400" size={28} />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Backend & Databases',
      icon: <Server className="text-blue-400" size={28} />,
      skills: ['Java (J2EE)', 'SQL', 'MySQL', 'Servlets', 'JSP', 'Apache Tomcat'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Tools & Others',
      icon: <Wrench className="text-amber-400" size={28} />,
      skills: ['Git', 'GitHub', 'Power BI', 'MS Excel', 'VS Code', 'OOP', 'Data Structures', 'Debugging'],
      color: 'from-amber-400 to-orange-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="py-20 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white inline-block relative">
            Technical Skills
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-purple-500 rounded-full"></div>
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants} className="glass-card p-8 group">
              <div className={`inline-flex items-center justify-center p-4 rounded-xl mb-6 bg-gradient-to-br ${category.color} bg-opacity-10 backdrop-blur-md`}>
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 bg-white/5 border border-white/10 hover:bg-white/20 transition-all duration-200 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
