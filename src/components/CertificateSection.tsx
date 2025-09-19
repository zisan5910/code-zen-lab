
import { Element } from 'react-scroll';
import { FileText } from './icons';
import CertificateSlider from './CertificateSlider';
import ProfessionalLayout from './ProfessionalLayout';

interface CertificateSectionProps {
  language: 'en' | 'bn';
  content: any;
  certificates: any[];
}

const CertificateSection = ({ language, content, certificates }: CertificateSectionProps) => {
  return (
    <Element name="certificates">
      <ProfessionalLayout
        title={content[language].certifications}
        icon={<FileText className="text-green-600" size={24} />}
      >
        <CertificateSlider
          certificates={certificates}
          language={language}
        />
      </ProfessionalLayout>
    </Element>
  );
};

export default CertificateSection;
