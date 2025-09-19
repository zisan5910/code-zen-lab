import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { Download, ScrollText, Search, PenTool } from 'lucide-react';
import { cn } from '../lib/utils';

interface ProfileProps {
  language: 'en' | 'bn';
  content: any;
  scrollToSection: (section: string) => void;
}

const Profile = ({ language, content, scrollToSection }: ProfileProps) => {
  const heroData = {
    name: {
      en: 'Md Ridoan Mahmud Zisan',
      bn: 'মোঃ রিদোয়ান মাহমুদ জিসান',
    },
    title: {
      en: 'Student & Web Developer',
      bn: 'ছাত্র ও ওয়েব ডেভেলপার',
    },
    description: {
      en: 'Passionate about creating digital solutions and contributing to community development through technology.',
      bn: 'প্রযুক্তির মাধ্যমে ডিজিটাল সমাধান তৈরি এবং সমাজ সেবায় অবদান রাখতে আগ্রহী।',
    },
    resumeButton: {
      en: 'Download Resume',
      bn: 'রিজিউমি ডাউনলোড করুন',
    },
  };

  return (
    <Element name="profile">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-surface via-surface/80 to-muted/20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse"></div>
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full mx-auto shadow-2xl border-4 border-white relative z-10 object-cover"
              />
            </motion.div>

            {/* Profile Content */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold text-foreground mb-4"
              >
                {content[language]?.name || heroData.name[language]}
              </motion.h1>

              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-xl md:text-2xl text-primary font-medium mb-6"
              >
                {content[language]?.role || heroData.title[language]}
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                {content[language]?.statement || heroData.description[language]}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              >
                <motion.a
                  href="/Resume.pdf"
                  download="Md Ridoan Mahmud Zisan.pdf"
                  className={cn(
                    'px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2',
                    'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground',
                    'hover:shadow-lg transition-all duration-300',
                    'hover:scale-105'
                  )}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={20} />
                  {content[language]?.downloadCV || heroData.resumeButton[language]}
                </motion.a>

                <motion.button
                  onClick={() => scrollToSection('certificates')}
                  className={cn(
                    'px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2',
                    'bg-surface border-2 border-primary text-primary',
                    'hover:bg-primary hover:text-primary-foreground transition-all duration-300'
                  )}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ScrollText size={20} />
                  {content[language]?.certifications || (language === 'en' ? 'Certificates' : 'সার্টিফিকেট')}
                </motion.button>

                <motion.button
                  onClick={() => scrollToSection('research')}
                  className={cn(
                    'px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2',
                    'bg-surface border-2 border-accent text-accent',
                    'hover:bg-accent hover:text-accent-foreground transition-all duration-300'
                  )}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Search size={20} />
                  {language === 'en' ? 'Research' : 'গবেষণা'}
                </motion.button>

                <motion.button
                  onClick={() => scrollToSection('blog')}
                  className={cn(
                    'px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2',
                    'bg-surface border-2 border-secondary text-secondary',
                    'hover:bg-secondary hover:text-secondary-foreground transition-all duration-300'
                  )}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <PenTool size={20} />
                  {language === 'en' ? 'Blog' : 'ব্লগ'}
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </Element>
  );
};

export default Profile;