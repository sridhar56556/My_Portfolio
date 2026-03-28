import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white inline-block relative">
            Get In Touch
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-500 rounded-full"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8"
          >
            <h3 className="text-3xl font-semibold text-white">Let's Connect</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              I'm open to new opportunities to build scalable and responsive software. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6 mt-8">
              <a href="mailto:sridharkonda553@gmail.com" className="flex items-center p-4 glass-card group hover:scale-[1.02] transition-transform">
                <div className="bg-blue-500/20 p-3 rounded-full mr-4 group-hover:bg-blue-500/40 transition-colors">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-300 text-sm">Email</h4>
                  <p className="text-white font-medium">sridharkonda553@gmail.com</p>
                </div>
              </a>

              <a href="tel:+919347389152" className="flex items-center p-4 glass-card group hover:scale-[1.02] transition-transform">
                <div className="bg-emerald-500/20 p-3 rounded-full mr-4 group-hover:bg-emerald-500/40 transition-colors">
                  <Phone className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-300 text-sm">Phone</h4>
                  <p className="text-white font-medium">+91 9347389152</p>
                </div>
              </a>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="https://linkedin.com/in/kondasridhar" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full text-gray-300 hover:text-[#0a66c2] hover:bg-white/10 transition-all border border-white/20">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/sridhar56556" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all border border-white/20">
                <FaGithub size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all resize-none"
                  placeholder="Hello Sridhar, I'd like to talk about..."
                />
              </div>
              <button 
                type="button" 
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium py-3 rounded-lg transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
