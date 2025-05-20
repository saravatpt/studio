import SectionWrapper from '@/components/shared/SectionWrapper';
import ProjectCard from '@/components/shared/ProjectCard';

const projectsData = [
  {
    title: 'AI-Powered Claims Processing Automation (Optum)',
    description: 'Led a team of 15 in developing and deploying real-time automation and AI Agent solutions for claims processing, significantly improving operational efficiency and accuracy. This involved transforming the team into AI/ML specialists.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ai claims processing',
    tags: ['AI Agent', 'NLP', 'Python', 'MLOps', 'Automation', 'Technical Leadership'],
    // githubUrl: 'confidential', // Or omit if not public
  },
  {
    title: 'AI/ML Proof-of-Concept Initiative (Optum)',
    description: 'Initiated and presented multiple strategic AI/ML proof-of-concepts at CTO-level conferences, focusing on emerging technologies like RAG, Langchain, and VertexAI. These efforts led to successful organization-wide adoption of new AI capabilities.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ai innovation presentation',
    tags: ['AI/ML Strategy', 'RAG', 'Langchain', 'VertexAI/Gemini', 'POC Development', 'Innovation'],
  },
  {
    title: 'Profile Canvas (This Portfolio)',
    description: 'A personal portfolio website built with Next.js, React, Tailwind CSS, and ShadCN UI, featuring AI-powered description personalization using Genkit.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'website portfolio',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'ShadCN UI', 'Genkit AI'],
    githubUrl: 'https://github.com/saravatpt/saravatpt', // Assuming this is the correct repo
    demoUrl: '#',
  },
  {
    title: 'Full-Stack Enterprise Solutions',
    description: 'Developed and maintained diverse enterprise-level web applications using .NET (C#, ASP.NET Core), Angular, and Node.js, focusing on scalable architectures, API design, and database management (SQL Server, NoSQL).',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'enterprise software architecture',
    tags: ['.NET Core', 'Angular', 'Node.js', 'SQL Server', 'Microservices', 'Full-Stack'],
    // githubUrl: 'https://github.com/saravatpt/placeholder-repo-1', // Example
  },
];

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" title="Featured Projects & Initiatives" className="bg-muted/30">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Adjusted to lg:grid-cols-2 for better display of 4 projects */}
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
