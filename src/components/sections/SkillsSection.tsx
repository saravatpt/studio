import SectionWrapper from '@/components/shared/SectionWrapper';
import SkillBadge from '@/components/shared/SkillBadge';
import { Code, Database, Cloud, GitFork, BrainCircuit, Settings2, MonitorSmartphone, Palette, Server } from 'lucide-react';

// Custom SVG icon example (replace with actual SVGs if needed)
const NextJsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="currentColor" {...props}><path d="M64 .27c-12.5-.02-24.99 3.9-35.21 11.99S11.99 31.47.27 43.98V128h84.05c12.5.02 24.99-3.9 35.21-11.99s16.72-18.71 18.43-31.22V0H64zM44.86 97.3H32.1V48.28h12.75zm23.81 0h-12.6V32.04h12.6zm23.91 0H80V64.53h12.58z"/></svg>
);
const TailwindCssIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 154" fill="none" {...props}>
    <path d="M128 0C108.867 0 90.2125 7.07946 75.5112 20.5041C44.8125 48.3839 44.8125 94.6808 75.5112 122.561C90.2125 135.985 108.867 143.065 128 143.065C147.133 143.065 165.787 135.985 180.489 122.561C211.187 94.6808 211.187 48.3839 180.489 20.5041C165.787 7.07946 147.133 0 128 0ZM64 71.5323C64 44.8973 85.3708 23.4355 112 23.4355C120.233 23.4355 127.879 25.5444 134.25 29.1734L100.375 63.0484C94.9917 56.9919 87.1333 53.6331 78.25 53.6331C70.4917 53.6331 64 59.8024 64 67.0645C64 68.1895 64.1167 69.2903 64.325 70.3669L64 71.5323ZM149.75 89.4315C155.008 95.625 162.867 98.9839 171.75 98.9839C179.508 98.9839 184.571 95.0927 184.571 89.7016C184.571 88.7177 184.483 87.7581 184.325 86.8226L192 85.3226C192 111.958 170.629 133.419 144 133.419C135.767 133.419 128.121 131.31 121.75 127.681L155.625 93.8065C152.746 91.746 150.538 89.4315 149.75 89.4315Z" fill="#38BDF8"/>
  </svg>
);


const skillsData = [
  { name: 'HTML', IconComponent: Code },
  { name: 'CSS', IconComponent: Palette },
  { name: 'JavaScript', IconComponent: Code },
  { name: 'TypeScript', IconComponent: Code },
  { name: 'React', IconComponent: Code, iconClassName: 'text-blue-500' },
  { name: 'Next.js', IconComponent: NextJsIcon, iconClassName: 'text-black dark:text-white' },
  { name: 'Redux', IconComponent: GitFork },
  { name: 'Tailwind CSS', IconComponent: TailwindCssIcon },
  { name: 'Node.js', IconComponent: Server },
  { name: 'Express.js', IconComponent: Server },
  { name: 'Python', IconComponent: Code, iconClassName: 'text-yellow-500' },
  { name: 'Django', IconComponent: Server },
  { name: 'Flask', IconComponent: Server },
  { name: 'MongoDB', IconComponent: Database },
  { name: 'MySQL', IconComponent: Database },
  { name: 'PostgreSQL', IconComponent: Database },
  { name: 'Firebase', IconComponent: Database, iconClassName: 'text-yellow-400' },
  { name: 'Docker', IconComponent: Cloud, iconClassName: 'text-blue-600' },
  { name: 'Kubernetes', IconComponent: Cloud, iconClassName: 'text-blue-700' },
  { name: 'Jenkins', IconComponent: Settings2 },
  { name: 'Git', IconComponent: GitFork },
  { name: 'GitHub Actions', IconComponent: Settings2 },
  { name: 'CI/CD', IconComponent: Settings2 },
  { name: 'AWS', IconComponent: Cloud, iconClassName: 'text-orange-500' },
  { name: 'GCP', IconComponent: Cloud, iconClassName: 'text-blue-400' },
  { name: 'Terraform', IconComponent: Cloud },
  { name: 'TensorFlow', IconComponent: BrainCircuit },
  { name: 'PyTorch', IconComponent: BrainCircuit },
  { name: 'Scikit-learn', IconComponent: BrainCircuit },
  { name: 'REST APIs', IconComponent: Server },
  { name: 'GraphQL', IconComponent: Server },
  { name: 'Linux', IconComponent: MonitorSmartphone },
  { name: 'Agile/Scrum', IconComponent: Settings2 },
];

const SkillsSection = () => {
  return (
    <SectionWrapper id="skills" title="My Tech Stack">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
        {skillsData.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} IconComponent={skill.IconComponent} iconClassName={skill.iconClassName} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
