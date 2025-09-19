import React from 'react';
import { motion } from 'framer-motion';

interface ProfessionalLayoutProps {
  children: React.ReactNode;
  title: string;
  icon: React.ReactNode;
  className?: string;
}

const ProfessionalLayout: React.FC<ProfessionalLayoutProps> = ({
  children,
  title,
  icon,
  className = ''
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
          {icon}
        </div>
        {title}
      </div>
      {children}
    </motion.section>
  );
};

export default ProfessionalLayout;