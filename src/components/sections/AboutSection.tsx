import SectionWrapper from '@/components/shared/SectionWrapper';
import DescriptionPersonalizer from '@/components/shared/DescriptionPersonalizer';

const initialAboutText = `Results-driven Software and AI/ML Engineer with 11+ years of experience in software development and 2+ years in building intelligent AI agents. 

Proven expertise in full-stack development, AI/ML integration, and technical leadership. Strong analytical, problem-solving, and team management skills. Currently leading projects at Optum as a Technical Lead, focusing on real-time automation & AI Agent solutions for claims processing, upskilling teams, and driving AI/ML adoption.`;

const AboutSection = () => {
  return (
    <SectionWrapper id="about" title="About Me" className="bg-muted/30">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p>
                I am a results-driven Software and AI/ML Engineer with over 11 years of experience in software development, including more than 2 years dedicated to building intelligent AI agents. My career is focused on leveraging technology to create impactful solutions and leading teams towards achieving challenging goals.
            </p>
            <p>
                My expertise lies in full-stack development, seamless AI/ML integration into software products, and providing strong technical leadership. I possess robust analytical and problem-solving capabilities, complemented by effective team management skills. I am passionate about mentoring and fostering growth within technical teams.
            </p>
            <p>
                Currently, as a Technical Lead at Optum, I spearhead initiatives in developing and deploying real-time automation and AI Agent solutions, particularly for claims processing. A significant part of my role involves upskilling and transforming team members into proficient AI/ML engineers through strategic mentoring and initiatives. I also drive the adoption of AI/ML technologies organisation-wide by initiating projects and presenting proof-of-concepts at executive levels.
            </p>
        </div>
        <div className="mt-8 md:mt-0">
          <DescriptionPersonalizer initialDescription={initialAboutText} />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
