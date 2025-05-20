import SectionWrapper from '@/components/shared/SectionWrapper';
import ExperienceCard from '@/components/shared/ExperienceCard';

const experienceData = [
  {
    role: 'Associate Manager, Software Engineering',
    company: 'XLHealth India (Optum), Bengaluru',
    duration: '2022 - Present',
    descriptionItems: [
      'Lead AI/ML initiatives and POC development, manage a cross-functional development team, and oversee end-to-end project delivery including requirements gathering, estimations, technical support, and code/document reviews.',
      'Developed an AI Agent using Azure OpenAI, RAG, and NLP that automated medical claim reviews, increasing throughput by 100x and reducing manual review time by 80%.',
      'Developed a Browser Agent using Azure OpenAI, BrowserUse, and OpenCV to automate daily tasks in the claims portal, reducing manual effort by 50%.',
      'Developed a SQL Agent using Azure OpenAI, Text2SQL, and NLP to help business stakeholders generate database reports through natural language prompts.',
      'Technologies Used: AutoGen, AzureOpenAI, NLP, BrowserUse, Copilot, Python, Vibe Coding, C#.NET, Web API, Angular, NodeJS, SQL, GIT, UI Path & DevOps.',
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
    duration: 'August 2014 - September 2019', // Combined duration from image
    descriptionItems: [
      'Developed enhancements for ATLAS, a commodity trading tool, to improve client service (as Senior Software Engineer from 2017-2019 and Software Engineer from 2014-2017).',
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
