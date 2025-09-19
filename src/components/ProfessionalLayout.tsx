import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface ProfessionalLayoutProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const ProfessionalLayout = ({ title, icon, children, className }: ProfessionalLayoutProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={cn(
        'bg-gradient-to-br from-white via-gray-50 to-gray-100 backdrop-blur-sm',
        'p-8 rounded-2xl shadow-card border border-gray-200',
        'text-[#0a192f]',
        className
      )}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-[#64ffda]/10 to-[#64ffda]/20 rounded-xl">
            {icon}
          </div>
          <h2 className="text-3xl font-bold text-[#0a192f]">
            {title}
          </h2>
        </div>
      </motion.div>
      
      {children}
    </motion.section>
  );
};

export default ProfessionalLayout;