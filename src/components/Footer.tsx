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
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center">
          <h4 className="text-md font-medium mb-4">
            {footerData.social.title[language]}
          </h4>
          <div className="flex justify-center space-x-5">
            {footerData.social.links.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-300 ${social.color} transition-colors duration-200`}
                aria-label={`Social link ${index}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;