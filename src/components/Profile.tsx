import { Element } from 'react-scroll';
import { Download, ScrollText, Search, PenTool } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

interface ProfileProps {
  language: 'en' | 'bn';
  content: any;
  scrollToSection: (section: string) => void;
}

const Profile = ({
  language,
  content,
  scrollToSection,
}: ProfileProps) => {
  return (
    <Element name="profile">
      <header
        className={cn(
          'relative pt-20 pb-16 overflow-hidden',
          'bg-gradient-to-br from-slate-50 via-white to-blue-50/30 backdrop-blur-sm',
          'text-slate-800'
        )}
      >
        {/* Subtle animated background elements */}
        <motion.div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2 }}
        >
          <motion.div 
            className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-blue-400 filter blur-xl"
            animate={{
              scale: [1, 1.1, 1],
              translateX: [-10, 10, -10],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-purple-400 filter blur-xl"
            animate={{
              scale: [1, 1.05, 1],
              translateY: [0, -10, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Profile Image with subtle animation */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-pulse"></div>
              <img
                src="/profile.jpg"
                alt="Md Ridoan Mahmud Zisan"
                className="w-48 h-48 rounded-full border-4 border-white shadow-xl object-cover relative z-10"
              />
            </motion.div>

            {/* Profile Content */}
            <motion.div 
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3 text-slate-800">
                  {content[language].name}
                </h1>
                <p className="text-lg md:text-xl mb-4 text-slate-600 font-medium">
                  {content[language].role}
                </p>
                <p className="text-base max-w-2xl mx-auto lg:mx-0 mb-6 text-slate-600 leading-relaxed">
                  {content[language].statement}
                </p>
              </div>

              {/* Action Buttons with subtle hover animations */}
              <motion.div 
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.a
                  href="/Resume.pdf"
                  download="Md Ridoan Mahmud Zisan.pdf"
                  className={cn(
                    'px-6 py-2 rounded-md font-medium flex items-center justify-center gap-2',
                    'bg-gradient-to-r from-blue-500 to-blue-600 text-white',
                    'hover:shadow-md transition-all',
                    'relative overflow-hidden'
                  )}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={18} />
                  {content[language].downloadCV}
                </motion.a>
                <motion.button
                  onClick={() => scrollToSection('certificates')}
                  className={cn(
                    'px-6 py-2 rounded-md font-medium flex items-center justify-center gap-2',
                    'bg-white border border-slate-300 text-slate-700',
                    'hover:bg-slate-50 transition-colors',
                    'backdrop-blur-sm'
                  )}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ScrollText size={18} />
                  {content[language].certifications}
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('research')}
                  className={cn(
                    'px-6 py-2 rounded-md font-medium flex items-center justify-center gap-2',
                    'bg-white border border-purple-300 text-purple-600',
                    'hover:bg-blue-50 transition-colors',
                    'backdrop-blur-sm'
                  )}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Search size={18} />
                  {language === 'en' ? 'Research' : 'গবেষণা'}
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('blog')}
                  className={cn(
                    'px-6 py-2 rounded-md font-medium flex items-center justify-center gap-2',
                    'bg-white border border-emerald-300 text-emerald-600',
                    'hover:bg-purple-50 transition-colors',
                    'backdrop-blur-sm'
                  )}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <PenTool size={18} />
                  {language === 'en' ? 'Blog' : 'ব্লগ'}
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </header>
    </Element>
  );
};

export default Profile;