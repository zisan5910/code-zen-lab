import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { GraduationCap, School, ExternalLink, BookOpen } from 'lucide-react';

interface EducationProps {
  language: 'en' | 'bn';
}

// Professional Layout Component
const ProfessionalLayout = ({ children, title, icon, className = '' }: {
  children: React.ReactNode;
  title: string;
  icon: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`professional-card professional-section ${className}`}
    >
      <div className="professional-title">
        <div className="icon-professional">
          <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg">
            {icon}
          </div>
        </div>
        <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent font-bold">
          {title}
        </span>
      </div>
      {children}
    </motion.section>
  );
};

const Education = ({ language }: EducationProps) => {
  const educationHistory = [
    {
      id: 'hsc',
      title: {
        en: 'Higher Secondary Certificate (HSC)',
        bn: 'উচ্চ মাধ্যমিক সার্টিফিকেট (এইচএসসি)',
      },
      institution: {
        en: 'KARATOA MULTIMEDIA SCHOOL AND COLLEGE',
        bn: 'করতোয়া মাল্টিমিডিয়া স্কুল অ্যান্ড কলেজ',
      },
      duration: {
        en: '2023-2024',
        bn: '২০২৩-২০২৪',
      },
      gpa: {
        en: 'GPA: 5.00/5.00 (Predicted)',
        bn: 'জিপিএ: ৫.০০/৫.০০ (আনুমানিক)',
      },
      details: {
        en: ['Group: Science', 'Major: Higher Math'],
        bn: ['গ্রুপ: বিজ্ঞান', 'মেজর: উচ্চতর গণিত'],
      },
      link: 'https://g.co/kgs/WZW688y',
      icon: <GraduationCap size={20} className="text-blue-500" />,
    },
    {
      id: 'ssc',
      title: {
        en: 'Secondary School Certificate (SSC)',
        bn: 'মাধ্যমিক স্কুল সার্টিফিকেট (এসএসসি)',
      },
      institution: {
        en: 'DHUNAT GOVT N.U. PILOT MODEL HIGH SCHOOL',
        bn: 'ধুনট সরকারি এন. ইউ. পাইলট মডেল উচ্চ বিদ্যালয়',
      },
      duration: {
        en: '2021-2022',
        bn: '২০২১-২০২২',
      },
      gpa: {
        en: 'GPA: 5.00/5.00',
        bn: 'জিপিএ: ৫.০০/৫.০০',
      },
      details: {
        en: ['Group: Science', 'Major: Higher Math'],
        bn: ['গ্রুপ: বিজ্ঞান', 'মেজর: উচ্চতর গণিত'],
      },
      link: 'https://g.co/kgs/W57Ts2o',
      icon: <School size={20} className="text-green-500" />,
    },
  ];

  return (
    <Element name="education">
      <ProfessionalLayout
        title={language === 'en' ? 'Education' : 'শিক্ষা'}
        icon={<BookOpen className="text-white" size={24} />}
      >

        <div className="space-y-6">
          {educationHistory.map((education) => (
            <motion.div
              key={education.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4 }}
              className="border-l-4 border-emerald-500 pl-4 py-4 hover:bg-emerald-50 rounded-r-lg transition-all duration-300 group relative"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-100 rounded-full group-hover:bg-emerald-200 transition-colors flex-shrink-0 shadow-sm">
                  {education.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-bold text-lg text-gray-800">
                      {education.title[language]}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {education.duration[language]}
                    </p>
                  </div>
                  
                  <p className="text-gray-700 mt-1 flex items-center gap-1">
                    {education.institution[language]}
                    <a
                      href={education.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 inline-flex items-center"
                      aria-label={language === 'en' ? 'View institution' : 'প্রতিষ্ঠান দেখুন'}
                    >
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </p>
                  
                  <p className="font-medium mt-2 text-emerald-700">
                    {education.gpa[language]}
                  </p>
                  
                  <ul className="mt-2 space-y-1 text-gray-700">
                    {education.details[language].map((detail, index) => (
                      <li key={index} className="text-sm">• {detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </ProfessionalLayout>
    </Element>
  );
};

export default Education;