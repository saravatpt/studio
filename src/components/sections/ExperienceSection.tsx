import SectionWrapper from '@/components/shared/SectionWrapper';
import ExperienceCard from '@/components/shared/ExperienceCard';

const experienceData = [
  {
    role: 'Technical Lead (Associate Manager, Software Engineering)',
    company: 'Optum (formerly XLHealth India), Bengaluru',
    duration: '2022 - Present',
    descriptionItems: [
      'Leading a team of 15 members in the development and deployment of real-time automation & AI Agent solutions for claims processing.',
      'Successfully upskilled and transformed the team into AI/ML Engineers through targeted mentoring and strategic initiatives.',
      'Initiated and presented AI/ML projects and Proof-of-Concepts (POCs) at CTO-level conferences, leading to organization-wide adoption of new AI capabilities.',
      'Key technologies: AI Agents (AutoGen, Langchain), RAG, NLP, Azure OpenAI, VertexAI/Gemini, Python, MLOps, C#.NET, Web API, Angular, NodeJS, SQL, GIT, DevOps.',
    ],
  },
  {
    role: 'Lead Software Engineer',
    company: 'Conduent Business Services LLP, Bengaluru',
    duration: '2019 - 2022',
    descriptionItems: [
      'Worked on eTIMS applications for US Govt to manage traffic and parking violations (ticketing, scanning, processing, printing, batch management).',
      'Responsibilities included handling production issues, team leadership, migrating applications to newer technologies, and enhancing applications based on client requirements.',
      'Technologies Used: C#.NET, WinForms, WPF, Angular, NodeJS, SQL & GIT.',
    ],
  },
  {
    role: 'Senior Software Engineer / Software Engineer',
    company: 'Accenture Services Pvt Ltd, Bengaluru',
    duration: 'August 2014 - September 2019',
    descriptionItems: [
      'Developed enhancements for ATLAS, a commodity trading tool, to improve client service.',
      'Worked on the Telefonica project involving data migration (freezing/terminating Siebel data, activating in SALCUS).',
      'Provided technical support, technical design, development, code review, production defects management, and unit testing. Worked on-site in Germany for several months.',
      'Technologies Used: C#.NET, WinForms, TeamCity, ASP.NET, MVC, Web API & Services, Siebel CRM, VB6, Oracle & PL SQL.',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <SectionWrapper id="experience" title="Professional Experience">
      <div className="space-y-8 relative">
        {experienceData.map((exp, index) => (
          <div key={index} className="md:max-w-3xl mx-auto">
            <ExperienceCard {...exp} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
