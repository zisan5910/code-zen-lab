import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  X,
  User,
  GraduationCap,
  Briefcase,
  Award,
  Code,
  Mail,
  Search,
  PenTool,
  Phone,
  Linkedin,
  Download,
  Send,
  Calendar,
  Globe,
  Coffee,
  Zap,
} from 'lucide-react';
import { format } from 'date-fns';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface FloatingMenuProps {
  navigationItems?: Array<{
    id: string;
    icon: JSX.Element;
    target?: string;
  }>;
  activeSection?: string;
  scrollToSection?: (section: string) => void;
  language?: 'en' | 'bn';
  currentPage?: string;
}

const FloatingMenu = ({ 
  activeSection = '', 
  scrollToSection = () => {}, 
  language = 'en'
}: FloatingMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'nav' | 'chat' | 'info'>('nav');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    subject: '',
    message: ''
  });
  
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Professional data structure
  const professionalData = {
    personal: {
      name: language === 'en' ? 'Md Ridoan Mahmud Zisan' : 'মো: রিদওয়ান মাহমুদ জিসান',
      role: language === 'en' 
        ? 'Passionate Tech Learner | Social Impact Innovator | Web App & IT Solutions Developer'
        : 'প্রযুক্তিপ্রেমী শিক্ষার্থী | সামাজিক প্রভাব সৃষ্টিকারী উদ্ভাবক | ওয়েব অ্যাপ ও আইটি সমাধান ডেভেলপার',
      age: new Date().getFullYear() - 2007,
      location: language === 'en' ? 'Bogura, Bangladesh' : 'বগুড়া, বাংলাদেশ',
      email: 'ridoan.zisan@gmail.com',
      phone: '+8801712525910',
      bloodGroup: 'B+',
      religion: language === 'en' ? 'Islam' : 'ইসলাম',
    },
    education: [
      {
        degree: language === 'en' ? 'Higher Secondary Certificate (HSC)' : 'উচ্চ মাধ্যমিক সার্টিফিকেট (এইচএসসি)',
        institution: language === 'en' ? 'Karatoa Multimedia School and College' : 'করতোয়া মাল্টিমিডিয়া স্কুল অ্যান্ড কলেজ',
        year: '2023-2024',
        gpa: '5.00/5.00',
        group: language === 'en' ? 'Science' : 'বিজ্ঞান'
      },
      {
        degree: language === 'en' ? 'Secondary School Certificate (SSC)' : 'মাধ্যমিক স্কুল সার্টিফিকেট (এসএসসি)',
        institution: language === 'en' ? 'Dhunat Govt N.U. Pilot Model High School' : 'ধুনট সরকারি এন. ইউ. পাইলট মডেল উচ্চ বিদ্যালয়',
        year: '2021-2022',
        gpa: '5.00/5.00',
        group: language === 'en' ? 'Science' : 'বিজ্ঞান'
      }
    ],
    skills: {
      technical: [
        'React.js', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Firebase', 'Node.js', 'Python', 'AI/ML Basics'
      ],
      languages: [
        { name: language === 'en' ? 'Bengali (Native)' : 'বাংলা (মাতৃভাষা)', level: 5 },
        { name: language === 'en' ? 'English (Professional)' : 'ইংরেজি (পেশাদার)', level: 4 }
      ],
      soft: [
        language === 'en' ? 'Leadership' : 'নেতৃত্ব',
        language === 'en' ? 'Team Collaboration' : 'দলগত সমন্বয়',
        language === 'en' ? 'Problem Solving' : 'সমস্যা সমাধান',
        language === 'en' ? 'Communication' : 'যোগাযোগ'
      ]
    },
    projects: [
      {
        name: 'BOBDO',
        description: language === 'en' 
          ? 'Blood donation platform serving 68k+ members'
          : '৬৮ হাজার+ সদস্যের জন্য রক্তদাতা প্ল্যাটফর্ম',
        url: 'https://bobdo.netlify.app',
        tech: ['React', 'Firebase', 'PWA']
      },
      {
        name: 'UniConverter',
        description: language === 'en'
          ? 'Universal unit converter with 50+ categories'
          : '৫০+ বিভাগ সহ সর্বজনীন একক রূপান্তরকারী',
        url: 'https://uniconverter.netlify.app',
        tech: ['React', 'PWA', 'JavaScript']
      }
    ],
    achievements: [
      language === 'en' ? 'AI Olympiad Semi-Finalist' : 'AI অলিম্পিয়াড সেমি-ফাইনালিস্ট',
      language === 'en' ? 'ICT Olympiad Quarter-Finalist' : 'ICT অলিম্পিয়াড কোয়ার্টার-ফাইনালিস্ট',
      language === 'en' ? 'Mathematics Olympiad Participant' : 'গণিত অলিম্পিয়াড অংশগ্রহণকারী',
      language === 'en' ? 'Academic Excellence (SSC & HSC GPA 5.00)' : 'একাডেমিক শ্রেষ্ঠত্ব (এসএসসি ও এইচএসসি জিপিএ ৫.০০)'
    ]
  };

  // Quick navigation items
  const quickNavItems = [
    { id: 'profile', icon: <User size={16} />, label: language === 'en' ? 'Profile' : 'প্রোফাইল' },
    { id: 'education', icon: <GraduationCap size={16} />, label: language === 'en' ? 'Education' : 'শিক্ষা' },
    { id: 'experience', icon: <Briefcase size={16} />, label: language === 'en' ? 'Experience' : 'অভিজ্ঞতা' },
    { id: 'skills', icon: <Code size={16} />, label: language === 'en' ? 'Skills' : 'দক্ষতা' },
    { id: 'certificates', icon: <Award size={16} />, label: language === 'en' ? 'Certificates' : 'সার্টিফিকেট' },
    { id: 'contact', icon: <Mail size={16} />, label: language === 'en' ? 'Contact' : 'যোগাযোগ' },
    { id: 'research', icon: <Search size={16} />, label: language === 'en' ? 'Research' : 'গবেষণা' },
    { id: 'blog', icon: <PenTool size={16} />, label: language === 'en' ? 'Blog' : 'ব্লগ' },
  ];

  // AI Chat functionality
  const getAIResponse = async (userInput: string): Promise<string> => {
    const lowerInput = userInput.toLowerCase();
    
    // Predefined responses for common queries
    if (lowerInput.includes('education') || lowerInput.includes('study')) {
      return `Education Background:\n\n${professionalData.education.map(edu => 
        `🎓 ${edu.degree}\n${edu.institution}\n${edu.year} | GPA: ${edu.gpa}\nGroup: ${edu.group}`
      ).join('\n\n')}`;
    }
    
    if (lowerInput.includes('skill') || lowerInput.includes('technical')) {
      return `Technical Skills: ${professionalData.skills.technical.join(', ')}\n\nSoft Skills: ${professionalData.skills.soft.join(', ')}\n\nLanguages:\n${professionalData.skills.languages.map(lang => `• ${lang.name} (${lang.level}/5)`).join('\n')}`;
    }
    
    if (lowerInput.includes('project') || lowerInput.includes('work')) {
      return `Notable Projects:\n\n${professionalData.projects.map(project => 
        `🚀 ${project.name}\n${project.description}\nTech: ${project.tech.join(', ')}\nURL: ${project.url}`
      ).join('\n\n')}`;
    }
    
    if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone')) {
      return `Contact Information:\n\n📧 Email: ${professionalData.personal.email}\n📞 Phone: ${professionalData.personal.phone}\n📍 Location: ${professionalData.personal.location}\n🔗 LinkedIn: https://linkedin.com/in/ridoan2007`;
    }
    
    if (lowerInput.includes('achievement') || lowerInput.includes('award')) {
      return `Key Achievements:\n\n${professionalData.achievements.map((achievement, index) => `${index + 1}. ${achievement}`).join('\n')}`;
    }
    
    return `Hello! I'm an AI assistant that can provide information about ${professionalData.personal.name}. You can ask about:\n\n• Education & Academic Background\n• Technical Skills & Expertise\n• Projects & Development Work\n• Contact Information\n• Achievements & Certifications\n• Or any other professional details!`;
  };

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getAIResponse(userMessage.content);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, I encountered an error. Please try again.',
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Suppress unused variable warnings for future features
  void contactForm;
  void setContactForm;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (activeTab === 'chat') {
      scrollToBottom();
    }
  }, [messages, activeTab]);

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: 'var(--gradient-primary)',
          boxShadow: 'var(--shadow-glow)'
        }}
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Floating Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: '100%' }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: '100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed top-4 right-4 bottom-4 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 flex flex-col overflow-hidden"
            style={{
              background: 'var(--gradient-surface)',
              boxShadow: 'var(--shadow-elevated)'
            }}
          >
            {/* Header */}
            <div className="p-4 border-b border-slate-200 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-bold">Professional Assistant</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Tab Navigation */}
              <div className="flex gap-1">
                {[
                  { id: 'nav', label: language === 'en' ? 'Navigate' : 'নেভিগেশন', icon: <Globe size={16} /> },
                  { id: 'chat', label: language === 'en' ? 'AI Chat' : 'AI চ্যাট', icon: <Zap size={16} /> },
                  { id: 'info', label: language === 'en' ? 'Info' : 'তথ্য', icon: <Coffee size={16} /> }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-white/20 text-white'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden">
              {/* Navigation Tab */}
              {activeTab === 'nav' && (
                <div className="p-4 space-y-4 h-full overflow-y-auto">
                  <h3 className="font-semibold text-slate-800 mb-3">
                    {language === 'en' ? 'Quick Navigation' : 'দ্রুত নেভিগেশন'}
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {quickNavItems.map(item => (
                      <motion.button
                        key={item.id}
                        onClick={() => {
                          scrollToSection(item.id);
                          setIsOpen(false);
                        }}
                        className={`flex items-center gap-2 p-3 rounded-lg text-sm transition-all ${
                          activeSection === item.id
                            ? 'bg-blue-100 text-blue-700 border border-blue-200'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                      </motion.button>
                    ))}
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="mt-6 space-y-2">
                    <h4 className="font-semibold text-slate-700 text-sm">
                      {language === 'en' ? 'Quick Actions' : 'দ্রুত কর্ম'}
                    </h4>
                    <a
                      href="/Resume.pdf"
                      download="Md Ridoan Mahmud Zisan.pdf"
                      className="flex items-center gap-2 p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
                    >
                      <Download size={16} />
                      <span className="font-medium">{language === 'en' ? 'Download CV' : 'সিভি ডাউনলোড'}</span>
                    </a>
                    <a
                      href="mailto:ridoan.zisan@gmail.com"
                      className="flex items-center gap-2 p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <Mail size={16} />
                      <span className="font-medium">{language === 'en' ? 'Send Email' : 'ইমেইল পাঠান'}</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Chat Tab */}
              {activeTab === 'chat' && (
                <div className="flex flex-col h-full">
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.length === 0 && (
                      <div className="text-center text-slate-500 mt-8">
                        <Zap className="w-12 h-12 mx-auto text-blue-500 mb-3" />
                        <p className="font-medium">AI Assistant Ready</p>
                        <p className="text-sm mt-1">
                          {language === 'en' 
                            ? 'Ask me anything about Ridoan\'s professional background!'
                            : 'রিদওয়ানের পেশাদার পটভূমি সম্পর্কে যেকোনো প্রশ্ন করুন!'
                          }
                        </p>
                      </div>
                    )}
                    
                    {messages.map(message => (
                      <div
                        key={message.id}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] p-3 rounded-lg ${
                            message.role === 'user'
                              ? 'bg-blue-500 text-white'
                              : 'bg-slate-100 text-slate-800'
                          }`}
                        >
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {format(message.timestamp, 'HH:mm')}
                          </p>
                        </div>
                      </div>
                    ))}
                    
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="bg-slate-100 p-3 rounded-lg">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                  
                  {/* Chat Input */}
                  <form onSubmit={handleChatSubmit} className="p-4 border-t border-slate-200">
                    <div className="flex gap-2">
                      <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={language === 'en' ? 'Ask about skills, projects, education...' : 'দক্ষতা, প্রকল্প, শিক্ষা সম্পর্কে জিজ্ঞাসা করুন...'}
                        className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        disabled={isLoading}
                      />
                      <button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        <Send size={16} />
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Info Tab */}
              {activeTab === 'info' && (
                <div className="p-4 space-y-4 h-full overflow-y-auto">
                  {/* Personal Info */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5 text-blue-500" />
                      <h3 className="font-semibold text-slate-800">
                        {language === 'en' ? 'Personal' : 'ব্যক্তিগত'}
                      </h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">{language === 'en' ? 'Age:' : 'বয়স:'}</span>
                        <span className="font-medium">{professionalData.personal.age} {language === 'en' ? 'years' : 'বছর'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">{language === 'en' ? 'Location:' : 'অবস্থান:'}</span>
                        <span className="font-medium">{professionalData.personal.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">{language === 'en' ? 'Blood Group:' : 'রক্তের গ্রুপ:'}</span>
                        <span className="font-medium">{professionalData.personal.bloodGroup}</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-green-500" />
                      <h3 className="font-semibold text-slate-800">
                        {language === 'en' ? 'Contact' : 'যোগাযোগ'}
                      </h3>
                    </div>
                    <div className="space-y-2">
                      <a href={`mailto:${professionalData.personal.email}`} className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                        <Mail size={16} className="text-green-600" />
                        <span className="text-sm font-medium">{professionalData.personal.email}</span>
                      </a>
                      <a href={`tel:${professionalData.personal.phone}`} className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                        <Phone size={16} className="text-blue-600" />
                        <span className="text-sm font-medium">{professionalData.personal.phone}</span>
                      </a>
                      <a href="https://linkedin.com/in/ridoan2007" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                        <Linkedin size={16} className="text-blue-600" />
                        <span className="text-sm font-medium">LinkedIn Profile</span>
                      </a>
                    </div>
                  </div>

                  {/* Current Focus */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-purple-500" />
                      <h3 className="font-semibold text-slate-800">
                        {language === 'en' ? 'Current Focus' : 'বর্তমান ফোকাস'}
                      </h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <span className="text-blue-700 font-medium">
                          {language === 'en' ? '🎓 HSC Student' : '🎓 এইচএসসি শিক্ষার্থী'}
                        </span>
                      </div>
                      <div className="p-2 bg-green-50 rounded-lg">
                        <span className="text-green-700 font-medium">
                          {language === 'en' ? '🩸 BOBDO Volunteer' : '🩸 বিওবিডিও স্বেচ্ছাসেবী'}
                        </span>
                      </div>
                      <div className="p-2 bg-purple-50 rounded-lg">
                        <span className="text-purple-700 font-medium">
                          {language === 'en' ? '💻 Web Developer' : '💻 ওয়েব ডেভেলপার'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingMenu;