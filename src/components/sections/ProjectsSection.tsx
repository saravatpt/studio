import SectionWrapper from '@/components/shared/SectionWrapper';
import ProjectCard from '@/components/shared/ProjectCard';

const projectsData = [
  {
    title: 'Profile Canvas (This Website)',
    description: 'A personal portfolio website built to showcase my skills, projects, and experience, featuring AI-powered description personalization.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'website portfolio',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'ShadCN UI', 'Genkit AI'],
    githubUrl: 'https://github.com/saravatpt/saravatpt', // Replace with actual repo if different
    demoUrl: '#', // Link to the live site
  },
  {
    title: 'Automated Cloud Provisioning Tool',
    description: 'A CLI tool designed to automate the setup and deployment of common cloud infrastructure patterns on AWS and GCP, streamlining DevOps workflows.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'cloud automation',
    tags: ['Python', 'Boto3', 'Google Cloud SDK', 'Docker', 'CLI'],
    githubUrl: 'https://github.com/saravatpt/placeholder-repo-1',
  },
  {
    title: 'Smart Task Manager',
    description: 'A feature-rich MERN stack application for managing tasks with intelligent prioritization, collaboration features, and a clean user interface.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'task manager app',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'REST API'],
    githubUrl: 'https://github.com/saravatpt/placeholder-repo-2',
    demoUrl: 'https://example.com/smart-task-manager-demo',
  },
   {
    title: 'AI-Powered Recommendation Engine',
    description: 'Developed a recommendation system using collaborative filtering and content-based approaches for an e-commerce platform, improving user engagement.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'recommendation system',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Flask', 'Machine Learning'],
    githubUrl: 'https://github.com/saravatpt/placeholder-repo-3',
  },
];

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" title="Featured Projects" className="bg-muted/30">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
