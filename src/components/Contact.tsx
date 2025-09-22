import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface ContactProps {
  language: 'en' | 'bn';
}


const Contact = ({ language }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactData = {
    title: {
      en: 'Contact',
      bn: 'যোগাযোগ',
    },
    form: {
      name: {
        en: 'Your Name',
        bn: 'আপনার নাম',
      },
      subject: {
        en: 'Subject',
        bn: 'বিষয়',
      },
      message: {
        en: 'Compose email',
        bn: 'ইমেল লিখুন',
      },
      submit: {
        en: 'Send Message',
        bn: 'বার্তা পাঠান',
      },
      success: {
        en: 'Message sent successfully!',
        bn: 'বার্তা সফলভাবে পাঠানো হয়েছে!',
      },
    },
    items: [
      {
        icon: <Mail size={20} className="text-green-700" />,
        content: {
          en: 'ridoan.zisan@gmail.com',
          bn: 'ridoan.zisan@gmail.com',
        },
        link: 'mailto:ridoan.zisan@gmail.com',
        isExternal: false,
      },
      {
        icon: <Phone size={20} className="text-green-700" />,
        content: {
          en: '+8801712525910',
          bn: '+৮৮০১৭১২৫২৫৯১০',
        },
        link: 'tel:+8801712525910',
        isExternal: false,
      },
      {
        icon: <MapPin size={20} className="text-green-700" />,
        content: {
          en: 'Bogura, Bangladesh',
          bn: 'বগুড়া, বাংলাদেশ',
        },
        link: 'https://maps.app.goo.gl/EV2Yob73hVp2KKpQ8',
        isExternal: true,
      },
      {
        icon: <Linkedin size={20} className="text-green-700" />,
        content: {
          en: 'LinkedIn Profile',
          bn: 'লিঙ্কডইন প্রোফাইল',
        },
        link: 'https://linkedin.com/in/ridoan-zisan',
        isExternal: true,
      },
    ],
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, subject, message } = formData;
    
    const emailBody = `Dear,\n\n${message}\n\nBest regards,\n${name}\n`;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      const mailtoLink = `mailto:ridoan.zisan@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;
    } else {
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=ridoan.zisan@gmail.com&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(emailBody)}`;
      window.open(gmailLink, '_blank');
    }

    setIsSubmitted(true);
    setFormData({ name: '', subject: '', message: '' });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Element name="contact">
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50/30">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
                <Mail className="text-white" size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {language === 'en' ? 'Contact' : 'যোগাযোগ'}
              </h2>
            </div>
          </motion.div>

        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg flex items-center gap-2"
          >
            <CheckCircle className="text-green-600" />
            {contactData.form.success[language]}
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="space-y-4"
          >
            <div className="p-4 sm:p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              {contactData.items.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 last:mb-0"
                >
                  <span>{item.icon}</span>
                  {item.isExternal ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-700 flex items-center gap-1 text-sm sm:text-base"
                    >
                      {item.content[language]}
                      {item.isExternal && (
                        <ExternalLink size={16} className="text-blue-600" />
                      )}
                    </a>
                  ) : (
                    <a
                      href={item.link}
                      className="hover:text-green-700 text-sm sm:text-base"
                    >
                      {item.content[language]}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                >
                  {contactData.form.name[language]}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                >
                  {contactData.form.subject[language]}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                >
                  {contactData.form.message[language]}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-green-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Send size={18} />
                {contactData.form.submit[language]}
              </motion.button>
            </form>
          </motion.div>
        </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;