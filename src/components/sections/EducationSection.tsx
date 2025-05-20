import SectionWrapper from '@/components/shared/SectionWrapper';
import EducationCard from '@/components/shared/EducationCard';

const educationData = [
  {
    degree: 'Master of Computer Applications (Distance Education)',
    institution: 'Anna University, Chennai, Tamil Nadu',
    duration: '2011 - 2014',
    details: [],
  },
  {
    degree: 'Bachelor of Computer Science',
    institution: 'Sacred Heart College, Tirupattur, Vellore, Tamil Nadu',
    duration: '2006 - 2009',
    details: [],
  },
];

const EducationSection = () => {
  return (
    <SectionWrapper id="education" title="Education" className="bg-muted/30">
      <div className="space-y-8 relative">
        {educationData.map((edu, index) => (
          <div key={index} className="md:max-w-3xl mx-auto">
            <EducationCard {...edu} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default EducationSection;
