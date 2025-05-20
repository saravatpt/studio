
import SectionWrapper from '@/components/shared/SectionWrapper';
import ProjectCard from '@/components/shared/ProjectCard';

const projectsData = [
  {
    title: 'AI-Powered Claims Processing Automation (Optum)',
    description: 'As Technical Lead, led a team of 15 in developing and deploying real-time automation and AI Agent solutions for claims processing. This initiative significantly improved operational efficiency and accuracy. Upskilled and transformed the team into AI/ML Engineers through mentoring and strategic initiatives.',
    tags: ['AI Agent', 'Automation', 'NLP', 'Python', 'MLOps', 'Technical Leadership', 'Team Mentoring'],
  },
  {
    title: 'Strategic AI/ML Proof-of-Concept Initiative (Optum)',
    description: 'Initiated and presented multiple strategic AI/ML proof-of-concepts at CTO-level conferences, focusing on emerging technologies like RAG, Langchain, and VertexAI/Gemini. These efforts successfully led to organization-wide adoption of new AI capabilities.',
    tags: ['AI/ML Strategy', 'RAG', 'Langchain', 'VertexAI/Gemini', 'POC Development', 'Innovation Strategy'],
  },
  {
    title: 'LeafWise: AI Plant Care Assistant',
    description: 'An intelligent plant care assistant leveraging Genkit AI to help users identify plants from photos, diagnose potential issues, and receive tailored care recommendations. Built with Next.js and ShadCN UI.',
    tags: ['Genkit AI', 'Next.js', 'Image Recognition', 'Plant Care', 'AI Assistant', 'ShadCN UI'],
    demoUrl: 'https://studio--leafwise-9jn94.us-central1.hosted.app/',
  },
  {
    title: 'Full-Stack Enterprise Solutions',
    description: 'Extensive experience developing and maintaining diverse enterprise-level web applications using .NET (C#, ASP.NET Core), Angular, and Node.js. Focused on scalable architectures, API design, and robust database management (SQL Server, NoSQL).',
    tags: ['.NET Core', 'Angular', 'Node.js', 'SQL Server', 'Microservices', 'Full-Stack Development'],
  },
];

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" title="Featured Projects & Initiatives" className="bg-muted/30">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
