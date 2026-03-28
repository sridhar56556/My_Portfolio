import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Cover Image */}
      <div className="absolute inset-0 -z-20">
        <img src={`${import.meta.env.BASE_URL}bg.jpeg`} alt="Cover background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-900"></div>
      </div>

      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="inline-block md:block mb-4">
              <span className="text-sm md:text-2xl text-white md:text-cyan-400 bg-cyan-600 md:bg-transparent px-3 py-1 md:p-0 rounded-full font-medium drop-shadow-md">
                Hello, I'm
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              Konda Sridhar
            </h1>
            <h3 className="text-2xl md:text-3xl text-white md:text-gray-300 font-semibold mb-6 drop-shadow-md">
              Backend Developer / Full Stack Developer
            </h3>
            <p className="text-white md:text-gray-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed mx-auto md:mx-0 drop-shadow-lg">
              A Computer Science graduate with hands-on experience building Java backend systems, 
              MySQL databases, and responsive web applications. Passionate about innovation and delivering quality digital solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-8">
              <a 
                href="https://drive.google.com/file/d/171JnstEBM0p8qTSfnbpo2sA1UyYkkD4t/view?usp=drivesdk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-2 rounded-xl text-white font-medium transition-all border border-cyan-400/60 hover:bg-cyan-500/10 hover:border-cyan-300 backdrop-blur-md"
              >
                View Resume
              </a>
              <a 
                href="https://github.com/sridhar56556" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-2 rounded-xl text-white font-medium transition-all border border-cyan-400/60 hover:bg-cyan-500/10 hover:border-cyan-300 backdrop-blur-md"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/kondasridhar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-2 rounded-xl text-white font-medium transition-all border border-cyan-400/60 hover:bg-cyan-500/10 hover:border-cyan-300 backdrop-blur-md"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:sridharkonda553@gmail.com" 
                className="px-6 py-2 rounded-xl text-white font-medium transition-all border border-cyan-400/60 hover:bg-cyan-500/10 hover:border-cyan-300 backdrop-blur-md"
              >
                Email
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 glass relative">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10 relative">
                <img 
                  src={`${import.meta.env.BASE_URL}profile.jpeg`} 
                  alt="Konda Sridhar profile" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://ui-avatars.com/api/?name=Konda+Sridhar&background=0284c7&color=fff&size=512";
                  }}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
