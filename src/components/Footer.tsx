import { Linkedin, MessageCircle, Facebook, Twitter, Youtube, Chrome, Github, Mail } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'bn';
}

const Footer = ({ language }: FooterProps) => {
  const footerData = {
    social: {
      title: {
        en: 'Connect with me',
        bn: 'আমার সাথে যুক্ত হোন',
      },
      links: [
        {
          icon: <Chrome size={24} />, // Chrome icon for Google
          href: 'https://www.google.com/search?q=Md+Ridoan+Mahmud+Zisan',
          color: 'hover:text-blue-600',
        },
        {
          icon: <Linkedin size={24} />,
          href: 'https://www.linkedin.com/in/ridoan-zisan',
          color: 'hover:text-blue-400',
        },
        {
          icon: <Github size={24} />,
          href: 'https://github.com/RidoanDev',
          color: 'hover:text-blue-600',
        },
        {
          icon: <Facebook size={24} />,
          href: 'https://www.facebook.com/rid0anzisan',
          color: 'hover:text-blue-500',
        },
        {
          icon: <Youtube size={24} />,
          href: 'https://youtube.com/@ridoan-zisan',
          color: 'hover:text-red-500',
        },
        {
          icon: <Mail size={24} />,
          href: 'mailto:ridoan.zisan@gmail.com',
          color: 'hover:text-blue-600',
        },
        {
          icon: <Twitter size={24} />,
          href: 'https://x.com/ridoan_zisan',
          color: 'hover:text-sky-400',
        },
        {
          icon: <MessageCircle size={24} />,
          href: 'https://wa.me/8801712525910',
          color: 'hover:text-green-400',
        },
      ],
    },
  };

  return (
    <footer className="relative py-16 overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
                <Mail className="text-white" size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {footerData.social.title[language]}
              </h2>
            </div>
          </div>
          
          <div className="flex justify-center flex-wrap gap-6 mb-8">
            {footerData.social.links.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20`}
                aria-label={`Social link ${index}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">© 2024 Md Ridoan Mahmud Zisan. All rights reserved.</p>
            <p>{language === 'en' ? 'Made with ❤️ in Bangladesh' : 'বাংলাদেশে ❤️ দিয়ে তৈরি'}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;