import SectionWrapper from '@/components/shared/SectionWrapper';
import ExperienceCard from '@/components/shared/ExperienceCard';

const experienceData = [
  {
    role: 'Technical Lead (AI/ML)',
    company: 'Optum',
    duration: 'Approx. 2022 - Present', // Based on "2+ years in building AI agents"
    descriptionItems: [
      'Leading a team of 15 members in the development and deployment of real-time automation & AI Agent solutions for claims processing.',
      'Successfully upskilled and transformed the team into proficient AI/ML Engineers through targeted mentoring and strategic initiatives.',
      'Initiated and presented impactful AI/ML projects and Proof-of-Concepts (POCs) at CTO-level conferences, driving organization-wide adoption of new technologies.',
      'Championing the use of modern AI/ML tools and frameworks like Langchain, RAG, VertexAI, and MLOps practices.',
    ],
  },
  {
    role: 'Senior Software Engineer / AI Developer',
    company: 'Previous Engagements (Multiple Organizations)',
    duration: 'Approx. 2013 - 2021', // Covering the remaining 9 of 11+ years
    descriptionItems: [
      'Developed and maintained a wide range of software applications using .NET (C#, ASP.NET, .NET Core), Python, and JavaScript frameworks (Angular, Node.js).',
      'Specialized in full-stack development, RESTful API design, database architecture (SQL Server, Oracle, NoSQL), and cloud platform services (Azure, GCP).',
      'Contributed to early adoption and integration of AI/ML techniques in software solutions.',
      'Applied DevOps principles for CI/CD, automated testing, and infrastructure management.',
      'Consistently delivered high-quality, scalable, and maintainable code in agile environments.',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <SectionWrapper id="experience" title="Professional Experience">
      <div className="space-y-8 relative">
        {experienceData.map((exp, index) => (
          <div key={index} className="md:max-w-3xl mx-auto"> {/* Increased max-width for better readability */}
            <ExperienceCard {...exp} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
