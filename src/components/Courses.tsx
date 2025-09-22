import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import {
  BookOpen,
  Code,
  LineChart,
  BrainCircuit,
  Trophy,
  Calculator,
  Target,
  Binary,
  Network,
  ExternalLink,
  Shield,
  Database,
  Cloud,
} from 'lucide-react';

interface CoursesProps {
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
          <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
            {icon}
          </div>
        </div>
        <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent font-bold">
          {title}
        </span>
      </div>
      {children}
    </motion.section>
  );
};

const Courses = ({ language }: CoursesProps) => {
  const professionalCourses = [
    {
      id: 'google-it-course',
      title: {
        en: 'Google IT Support Professional Certificate',
        bn: 'গুগল আইটি সাপোর্ট প্রফেশনাল সার্টিফিকেট',
      },
      description: {
        en: 'Comprehensive training on IT fundamentals, troubleshooting, customer service, systems administration, and security',
        bn: 'আইটি বুনিয়াদি, সমস্যা সমাধান, গ্রাহক সেবা, সিস্টেম প্রশাসন এবং নিরাপত্তা সম্পর্কে বিস্তৃত প্রশিক্ষণ',
      },
      platform: 'Google via Coursera',
      duration: language === 'en' ? '6 months' : 'ছয় মাস',
      icon: <Shield size={20} className="text-blue-500" />,
      certificateUrl: 'https://coursera.org/share/ea676f483e647fe0f5488ce6a1c111bd',
      courseUrl: 'https://www.coursera.org/professional-certificates/google-it-support',
    },
    {
      id: 'digital-marketing-course',
      title: {
        en: 'Digital Marketing Certification',
        bn: 'ডিজিটাল মার্কেটিং সার্টিফিকেশন',
      },
      description: {
        en: 'Mastered SEO, SEM, social media marketing, content strategy, and analytics',
        bn: 'এসইও, এসইএম, সোশ্যাল মিডিয়া মার্কেটিং, কন্টেন্ট কৌশল এবং অ্যানালিটিক্স আয়ত্ত',
      },
      platform: 'HubSpot Academy',
      duration: language === 'en' ? '8 weeks' : '৮ সপ্তাহ',
      icon: <LineChart size={20} className="text-green-500" />,
      certificateUrl: 'https://drive.google.com/file/d/1Nn9RHmgluP_gwMa9Z6qPlI_bE1cXRSz3/view?usp=drivesdk',
      courseUrl: 'https://academy.hubspot.com/',
    },
    {
      id: 'web-development-course',
      title: {
        en: 'Complete Web Development Bootcamp',
        bn: 'সম্পূর্ণ ওয়েব ডেভেলপমেন্ট বুটক্যাম্প',
      },
      description: {
        en: 'Full-stack development with HTML, CSS, JavaScript, React, Node.js, and MongoDB',
        bn: 'এইচটিএমএল, সিএসএস, জাভাস্ক্রিপ্ট, রিয়্যাক্ত, Node.js, এবং MongoDB দিয়ে ফুল-স্ট্যাক ডেভেলপমেন্ট',
      },
      platform: 'Programming Hero',
      duration: language === 'en' ? '6 months' : 'ছয় মাস',
      icon: <Code size={20} className="text-orange-500" />,
      certificateUrl: 'https://drive.google.com/drive/folders/11FkUYKGYxO7OeeMtZgl-3iUlB4lu7wIp',
      courseUrl: 'https://www.programming-hero.com',
    },
    {
      id: 'ai-ml-course',
      title: {
        en: 'Artificial Intelligence & Machine Learning',
        bn: 'আর্টিফিশিয়াল ইন্টেলিজেন্স এবং মেশিন লার্নিং',
      },
      description: {
        en: 'Fundamentals of AI, machine learning algorithms, neural networks, and deep learning',
        bn: 'এআই-এর মৌলিক বিষয়, মেশিন লার্নিং অ্যালগরিদম, নিউরাল নেটওয়ার্ক এবং ডিপ লার্নিং',
      },
      platform: 'IBM via Coursera | Simplilearn',
      duration: language === 'en' ? '4 months' : 'চার মাস',
      icon: <BrainCircuit size={20} className="text-purple-500" />,
      certificateUrl: 'https://example.com/certificates/ai-ml',
      courseUrls: [
        'https://www.coursera.org/professional-certificates/ai-engineer',
        'https://www.simplilearn.com/artificial-intelligence-master-program-training-course'
      ]
    },
    {
      id: 'cloud-computing-course',
      title: {
        en: 'Cloud Computing Fundamentals',
        bn: 'ক্লাউড কম্পিউটিং ফান্ডামেন্টালস',
      },
      description: {
        en: 'Introduction to cloud services, deployment models, and virtualization technologies',
        bn: 'ক্লাউড পরিষেবা, ডেপ্লয়মেন্ট মডেল এবং ভার্চুয়ালাইজেশন প্রযুক্তির পরিচিতি',
      },
      platform: 'Microsoft Learn',
      duration: language === 'en' ? '1 month' : 'এক মাস',
      icon: <Cloud size={20} className="text-blue-400" />,
      certificateUrl: 'https://example.com/certificates/cloud-computing',
      courseUrl: 'https://docs.microsoft.com/learn/',
    },
    {
      id: 'data-science-course',
      title: {
        en: 'Data Science Essentials',
        bn: 'ডেটা সায়েন্স এসেনশিয়ালস',
      },
      description: {
        en: 'Data analysis, visualization, statistical modeling, and predictive analytics',
        bn: 'ডেটা বিশ্লেষণ, ভিজ্যুয়ালাইজেশন, পরিসংখ্যানগত মডেলিং এবং প্রেডিক্টিভ অ্যানালিটিক্স',
      },
      platform: 'Sololearn',
      duration: language === 'en' ? '2 months' : 'দুই মাস',
      icon: <Database size={20} className="text-teal-500" />,
      certificateUrl: 'https://example.com/certificates/data-science',
      courseUrl: 'https://www.sololearn.com/',
    },
  ];

  const olympiads = [
    {
      id: 'zero-olympiad',
      title: {
        en: 'Zero Olympiad',
        bn: 'জিরো অলিম্পিয়াড',
      },
      description: {
        en: 'UN SDGs and climate action strategies',
        bn: 'জাতিসংঘের এসডিজি এবং জলবায়ু কর্ম কৌশল',
      },
      icon: <Target size={20} className="text-red-500" />,
      certificateUrl: 'https://drive.google.com/drive/folders/10q_vKhkwR6a5rKgoutz_spN4qpOp1J1C',
      websiteUrl: 'https://faatihaaayat.com/zeroolympiad/',
    },
    {
      id: 'ai-olympiad',
      title: {
        en: 'Bangladesh Artificial Intelligence Olympiad',
        bn: 'বাংলাদেশ আর্টিফিশিয়াল ইন্টেলিজেন্স অলিম্পিয়াড',
      },
      description: {
        en: 'National AI competition testing knowledge in machine learning, neural networks, and AI ethics',
        bn: 'মেশিন লার্নিং, নিউরাল নেটওয়ার্ক এবং এআই নীতিশাস্ত্রের জ্ঞান পরীক্ষা করে জাতীয় এআই প্রতিযোগিতা',
      },
      icon: <Binary size={20} className="text-indigo-500" />,
      certificateUrl: 'https://example.com/certificates/ai-olympiad',
      websiteUrl: 'https://bdaio.org/',
    },
    {
      id: 'ict-olympiad',
      title: {
        en: 'ICT Olympiad Bangladesh',
        bn: 'আইসিটি অলিম্পিয়াড বাংলাদেশ',
      },
      description: {
        en: 'National competition testing knowledge in information and communication technologies',
        bn: 'তথ্য ও যোগাযোগ প্রযুক্তি বিষয়ক জ্ঞান পরীক্ষা করে জাতীয় প্রতিযোগিতা',
      },
      icon: <Network size={20} className="text-emerald-500" />,
      certificateUrl: 'https://drive.google.com/drive/folders/1bfZ0wgs_YPL9VW0IFRD_G2MW4xkrZUwP',
      websiteUrl: 'https://www.ictolympiadbangladesh.com/',
    },
    {
      id: 'math-olympiad',
      title: {
        en: 'Math Olympiad',
        bn: 'গণিত অলিম্পিয়াড',
      },
      description: {
        en: 'Prestigious mathematics competition for exceptional problem-solving skills',
        bn: 'অসাধারণ সমস্যা সমাধানের দক্ষতার জন্য মর্যাদাপূর্ণ গণিত প্রতিযোগিতা',
      },
      icon: <Calculator size={20} className="text-cyan-500" />,
      certificateUrl: 'https://drive.google.com/drive/folders/1v6cYDB9Rdyc4YyaFSZ-54w7EZ-dy6QbC',
      websiteUrl: 'https://online.matholympiad.org.bd/',
    },
  ];

  const renderCourseItem = (course: any) => (
    <motion.div
      key={course.id}
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="border-l-4 border-emerald-500 pl-4 py-4 hover:bg-emerald-50 rounded-r-lg transition-colors duration-200 group relative"
    >
      <div className="flex items-start gap-4">
        <div className="p-2 bg-emerald-100 rounded-full group-hover:bg-emerald-200 transition-colors flex-shrink-0">
          {course.icon}
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{course.title[language]}</h4>
          <p className="text-gray-600 mt-2">{course.description[language]}</p>
          <p className="text-sm mt-3 text-gray-500">
            <span className="font-medium">{course.platform}</span>
            <span className="mx-2">•</span>
            <span>{course.duration}</span>
          </p>
          <div className="flex gap-3 mt-3">
            {course.certificateUrl && (
              <a 
                href={course.certificateUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs flex items-center gap-1 text-emerald-600 hover:text-emerald-800 transition-colors"
                aria-label={language === 'en' ? 'View certificate' : 'সার্টিফিকেট দেখুন'}
              >
                <ExternalLink size={14} />
                {language === 'en' ? 'Certificate' : 'সার্টিফিকেট'}
              </a>
            )}
            {course.courseUrl ? (
              <a 
                href={course.courseUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                aria-label={language === 'en' ? 'View course' : 'কোর্স দেখুন'}
              >
                <ExternalLink size={14} />
                {language === 'en' ? 'Course' : 'কোর্স'}
              </a>
            ) : course.courseUrls?.map((url: string, index: number) => (
              <a 
                key={index}
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                aria-label={language === 'en' ? 'View course' : 'কোর্স দেখুন'}
              >
                <ExternalLink size={14} />
                {language === 'en' ? `Course ${index + 1}` : `কোর্স ${index + 1}`}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderOlympiadItem = (olympiad: any) => (
    <motion.div
      key={olympiad.id}
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="border-l-4 border-amber-500 pl-4 py-4 hover:bg-amber-50 rounded-r-lg transition-colors duration-200 group relative"
    >
      <div className="flex items-start gap-4">
        <div className="p-2 bg-amber-100 rounded-full group-hover:bg-amber-200 transition-colors flex-shrink-0">
          {olympiad.icon}
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{olympiad.title[language]}</h4>
          <p className="text-gray-600 mt-2">{olympiad.description[language]}</p>
          {olympiad.level && (
            <p className="text-sm mt-3 font-medium text-amber-700">{olympiad.level[language]}</p>
          )}
          <div className="flex gap-3 mt-3">
            {olympiad.certificateUrl && (
              <a 
                href={olympiad.certificateUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs flex items-center gap-1 text-amber-600 hover:text-amber-800 transition-colors"
                aria-label={language === 'en' ? 'View certificate' : 'সার্টিফিকেট দেখুন'}
              >
                <ExternalLink size={14} />
                {language === 'en' ? 'Certificate' : 'সার্টিফিকেট'}
              </a>
            )}
            {olympiad.websiteUrl && (
              <a 
                href={olympiad.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                aria-label={language === 'en' ? 'View website' : 'ওয়েবসাইট দেখুন'}
              >
                <ExternalLink size={14} />
                {language === 'en' ? 'Website' : 'ওয়েবসাইট'}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <Element name="courses">
      <ProfessionalLayout
        title={language === 'en' ? 'Professional Development' : 'পেশাদার উন্নয়ন'}
        icon={<BookOpen className="text-white" size={24} />}
      >

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
            <Trophy className="text-amber-500" />
            {language === 'en' ? 'Academic Olympiads' : 'একাডেমিক অলিম্পিয়াড'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {olympiads.map(renderOlympiadItem)}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
            <BookOpen className="text-emerald-500" />
            {language === 'en' ? 'Professional Courses & Certifications' : 'পেশাদার কোর্স এবং সার্টিফিকেশন'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {professionalCourses.map(renderCourseItem)}
          </div>
        </div>
      </ProfessionalLayout>
    </Element>
  );
};

export default Courses;