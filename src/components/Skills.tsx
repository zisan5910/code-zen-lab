import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import {
  Award,
  Languages,
  Target,
  MessageSquare,
  PlusCircle,
  Star,
  ChevronRight,
} from 'lucide-react';

interface SkillsProps {
  language: 'en' | 'bn';
}

const Skills = ({ language }: SkillsProps) => {
  const skillsData = {
    languages: {
      title: {
        en: 'Languages',
        bn: 'ভাষা',
      },
      skills: [
        {
          name: {
            en: 'Bengali (Fluent)',
            bn: 'বাংলা (সাবলীল)',
          },
          level: 5,
        },
        {
          name: {
            en: 'English (Professional)',
            bn: 'ইংরেজি (পেশাদার)',
          },
          level: 4,
        },
      ],
    },
    professional: {
      title: {
        en: 'Core Professional Skills',
        bn: 'মূল পেশাদার দক্ষতা',
      },
      skills: [
        { en: 'MS Office Suite', bn: 'এমএস অফিস' },
        { en: 'Email Communication', bn: 'ইমেইল যোগাযোগ' },
        { en: 'Team Collaboration', bn: 'দলগত সমন্বয়' },
        { en: 'Time Management', bn: 'সময় ব্যবস্থাপনা' },
        { en: 'Problem Solving', bn: 'সমস্যা সমাধান' },
        { en: 'Professional Ethics', bn: 'পেশাদার নীতি' },
      ],
    },
    communication: {
      title: {
        en: 'Communication Skills',
        bn: 'যোগাযোগ দক্ষতা',
      },
      skills: [
        { en: 'Report Writing', bn: 'রিপোর্ট লেখা' },
        { en: 'Active Listening', bn: 'সক্রিয় শোনা' },
        { en: 'Presentation', bn: 'প্রেজেন্টেশন' },
        { en: 'Professional Email', bn: 'পেশাদার ইমেইল' },
      ],
    },
    additional: {
      title: {
        en: 'Additional Skills',
        bn: 'অতিরিক্ত দক্ষতা',
      },
      skills: [
        { en: 'Canva/Photoshop', bn: 'ক্যানভা/ফটোশপ' },
        { en: 'Social Media', bn: 'সোশ্যাল মিডিয়া' },
        { en: 'Web and App Development', bn: 'ওয়েব এবং এ্যাপ ডেভেলপমেন্ট' },
        { en: 'The concept of AI', bn: 'AI এর ধারণা' },
      ],
    },
  };

  const renderLanguageSkill = (skill: any, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
          <ChevronRight size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          {skill.name[language]}
        </span>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              size={16}
              className={`${
                i <= skill.level
                  ? 'text-accent fill-current'
                  : 'text-muted'
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${(skill.level / 5) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.2 }}
          className="bg-gradient-to-r from-accent to-accent/80 h-2 rounded-full"
        />
      </div>
    </motion.div>
  );

  const renderSkillCard = (skill: any, index: number, color: string) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`${color} p-4 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center gap-3 border border-border/50`}
    >
      <ChevronRight size={16} className="text-primary opacity-70" />
      <span className="text-foreground font-medium">{skill[language]}</span>
    </motion.div>
  );

  return (
    <Element name="skills">
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-surface via-surface/80 to-muted/20 p-8 rounded-2xl shadow-card border border-border"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
              <Award className="text-primary" size={28} />
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              {language === 'en' ? 'Skills & Competencies' : 'দক্ষতা ও সক্ষমতা'}
            </h2>
          </div>
        </motion.div>

        <div className="space-y-8">
          {/* Language Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl border border-border/30"
          >
            <h3 className="font-bold text-xl flex items-center gap-3 mb-6 text-foreground">
              <div className="p-2 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                <Languages size={24} className="text-primary" />
              </div>
              {skillsData.languages.title[language]}
            </h3>
            <div className="space-y-6">
              {skillsData.languages.skills.map(renderLanguageSkill)}
            </div>
          </motion.div>

          {/* Professional Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-secondary/5 to-primary/5 p-6 rounded-xl border border-border/30"
          >
            <h3 className="font-bold text-xl flex items-center gap-3 mb-6 text-foreground">
              <div className="p-2 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg">
                <Target size={24} className="text-secondary" />
              </div>
              {skillsData.professional.title[language]}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsData.professional.skills.map((skill, index) =>
                renderSkillCard(skill, index, 'bg-gradient-to-br from-secondary/5 to-primary/5')
              )}
            </div>
          </motion.div>

          {/* Communication Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-accent/5 to-secondary/5 p-6 rounded-xl border border-border/30"
          >
            <h3 className="font-bold text-xl flex items-center gap-3 mb-6 text-foreground">
              <div className="p-2 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg">
                <MessageSquare size={24} className="text-accent" />
              </div>
              {skillsData.communication.title[language]}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsData.communication.skills.map((skill, index) =>
                renderSkillCard(skill, index, 'bg-gradient-to-br from-accent/5 to-secondary/5')
              )}
            </div>
          </motion.div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl border border-border/30"
          >
            <h3 className="font-bold text-xl flex items-center gap-3 mb-6 text-foreground">
              <div className="p-2 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                <PlusCircle size={24} className="text-primary" />
              </div>
              {skillsData.additional.title[language]}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsData.additional.skills.map((skill, index) =>
                renderSkillCard(skill, index, 'bg-gradient-to-br from-primary/5 to-accent/5')
              )}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </Element>
  );
};

export default Skills;