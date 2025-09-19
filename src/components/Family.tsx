import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { Heart, ExternalLink, Users, Calendar, User } from 'lucide-react';
import { useState, useEffect } from 'react';

interface FamilyProps {
  language: 'en' | 'bn';
}

const Family = ({ language }: FamilyProps) => {
  const [age, setAge] = useState<number>(0);

  // Calculate age
  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date('2007-12-31');
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      setAge(age);
    };

    calculateAge();
    const interval = setInterval(calculateAge, 86400000); // Update daily
    return () => clearInterval(interval);
  }, []);

  const familyData = {
    familyInfo: {
      title: {
        en: 'Family Information',
        bn: 'পারিবারিক তথ্য',
      },
      members: [
        {
          relation: { en: 'Father', bn: 'পিতা' },
          name: { en: 'Md Rokibul Hasan Shekh', bn: 'মো রকিবুল হাসান সেখ' },
          link: 'https://drive.google.com/file/d/1QoS1c0Wo39AtjBK4s-SS9sR7lxaMCEpr/view?usp=drivesdk',
        },
        {
          relation: { en: 'Mother', bn: 'মাতা' },
          name: { en: 'Mst. Zosna Khatun', bn: 'মোছা. জোসনা খাতুন' },
          link: 'https://drive.google.com/file/d/1Qj3JdVJu1mNzSkZ9l0ofPYKS-B3rOFG3/view?usp=drivesdk',
        },
        {
          relation: { en: 'Siblings', bn: 'ভাইবোন' },
          name: { en: '1 Younger Sister', bn: '১ বোন' },
          link: 'https://drive.google.com/file/d/1QkgYSEZqGRfOSTg3qSRuIL5mP6t5Gfqs/view?usp=drivesdk',
        },
      ],
    },
    personalInfo: {
      title: {
        en: 'Personal Information',
        bn: 'ব্যক্তিগত তথ্য',
      },
      details: [
        {
          label: { en: 'Date of Birth', bn: 'জন্ম তারিখ' },
          value: { en: '31 December, 2007', bn: '৩১ ডিসেম্বর ২০০৭' },
          link: 'https://drive.google.com/file/d/1Q_nVUU1-cJ8bXF-RwoI8kh8ojz3I7ITq/view?usp=drivesdk',
          icon: <Calendar size={20} />,
        },
        {
          label: { en: 'Age', bn: 'বয়স' },
          value: { en: `${age} years`, bn: `${age} বছর` },
          link: null,
          icon: <User size={20} />,
        },
        {
          label: { en: 'Blood Group', bn: 'রক্তের গ্রুপ' },
          value: { en: 'B+', bn: 'বি+' },
          link: 'https://drive.google.com/file/d/1QXyH-GK_4FJoWeOZDGnZer4UDBfoK_0B/view?usp=drivesdk',
          icon: <Heart size={20} />,
        },
        {
          label: { en: 'Nationality', bn: 'জাতীয়তা' },
          value: { en: 'Bangladeshi', bn: 'বাংলাদেশী' },
          link: null,
          icon: <Users size={20} />,
        },
        {
          label: { en: 'Religion', bn: 'ধর্ম' },
          value: { en: 'Humanity', bn: 'মানবধর্ম' },
          link: null,
          icon: <Heart size={20} />,
        },
      ],
    },
  };

  return (
    <Element name="family">
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
            <div className="p-3 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl">
              <Heart className="text-secondary" size={28} />
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              {language === 'en' ? 'Family & Personal Information' : 'পারিবারিক ও ব্যক্তিগত তথ্য'}
            </h2>
          </div>
        </motion.div>

        <div className="space-y-8">
          {/* Family Information */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="bg-gradient-to-br from-secondary/5 to-primary/5 p-6 rounded-xl border border-border/30"
          >
            <h3 className="font-bold text-xl mb-6 flex items-center gap-3 text-foreground">
              <div className="p-2 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg">
                <Users size={24} className="text-secondary" />
              </div>
              {familyData.familyInfo.title[language]}
            </h3>
            <div className="grid gap-4">
              {familyData.familyInfo.members.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-surface p-4 rounded-lg border border-border/20 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-primary">
                        {member.relation[language]}:
                      </span>{' '}
                      <span className="text-foreground font-medium">
                        {member.name[language]}
                      </span>
                    </div>
                    {member.link && (
                      <a
                        href={member.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors p-2 rounded-full hover:bg-primary/10"
                        aria-label={`View ${member.relation[language]} document`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Information */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
            className="bg-gradient-to-br from-accent/5 to-secondary/5 p-6 rounded-xl border border-border/30"
          >
            <h3 className="font-bold text-xl mb-6 flex items-center gap-3 text-foreground">
              <div className="p-2 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg">
                <User size={24} className="text-accent" />
              </div>
              {familyData.personalInfo.title[language]}
            </h3>
            <div className="grid gap-4">
              {familyData.personalInfo.details.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-surface p-4 rounded-lg border border-border/20 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-accent opacity-70">
                        {detail.icon}
                      </div>
                      <div>
                        <span className="font-semibold text-accent">
                          {detail.label[language]}:
                        </span>{' '}
                        <span className="text-foreground font-medium">
                          {detail.value[language]}
                        </span>
                      </div>
                    </div>
                    {detail.link && (
                      <a
                        href={detail.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 transition-colors p-2 rounded-full hover:bg-accent/10"
                        aria-label={`View ${detail.label[language]} document`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </Element>
  );
};

export default Family;