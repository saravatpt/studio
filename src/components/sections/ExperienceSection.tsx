import SectionWrapper from '@/components/shared/SectionWrapper';
import ExperienceCard from '@/components/shared/ExperienceCard';

const experienceData = [
  {
    role: 'Full Stack Developer',
    company: 'Self-Employed / Freelancer',
    duration: 'Jan 2021 - Present',
    descriptionItems: [
      'Developed and maintained diverse web applications for clients using MERN stack, Python (Django/Flask).',
      'Designed and implemented RESTful APIs and GraphQL endpoints for various projects.',
      'Implemented CI/CD pipelines using GitHub Actions and Jenkins for automated testing and deployment.',
      'Leveraged AWS (EC2, S3, RDS, Lambda) and GCP (Compute Engine, GKE) for hosting and managing client projects.',
      'Collaborated with clients to gather requirements, provide technical consultation, and deliver solutions meeting their needs.',
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'Innovatech Solutions (Hypothetical)',
    duration: 'Jun 2020 - Dec 2020',
    descriptionItems: [
      'Contributed to the development of a new SaaS product, focusing on backend API development using Node.js and Express.',
      'Assisted in database design and management with MongoDB.',
      'Gained hands-on experience with agile methodologies, sprint planning, and version control systems (Git).',
      'Participated in code reviews and collaborated with senior developers on feature implementation.',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <SectionWrapper id="experience" title="Work Experience">
      <div className="space-y-8 relative">
        {/* Optional: Add a timeline line if desired */}
        {/* <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform -translate-x-1/2 hidden md:block"></div> */}
        {experienceData.map((exp, index) => (
          <div key={index} className="md:max-w-2xl mx-auto">
            <ExperienceCard {...exp} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
