import SectionWrapper from '@/components/shared/SectionWrapper';

const AboutSection = () => {
  return (
    <SectionWrapper id="about" title="About Me" className="bg-muted/30">
      <div className="grid md:grid-cols-1 gap-8 items-start">
        <div className="space-y-6 text-lg text-foreground/90 leading-relaxed max-w-3xl mx-auto">
            <p>
              I am a results-driven Software and AI/ML Engineer with over 11 years of experience in software development, including more than 2 years dedicated to building intelligent AI agents. My expertise spans full-stack development, AI/ML integration, and technical leadership. I possess strong analytical, problem-solving, and team management skills.
            </p>
            <p>
              Currently, I am leading projects at Optum as a Technical Lead. My responsibilities include guiding a team of 15 members in developing and deploying real-time automation and AI Agent solutions, particularly for claims processing. A significant part of my role involves upskilling and transforming the team into AI/ML Engineers through mentorship and strategic initiatives. I have also initiated AI/ML projects and presented Proof-of-Concepts at CTO-level conferences, contributing to organization-wide adoption of these technologies.
            </p>
             <p>
              My career objective is to secure a Technical Lead or Engineering Manager role where I can drive high-impact AI and software initiatives, mentor teams, and build scalable, intelligent solutions.
            </p>
            <p>
              I’m always excited about exploring new technologies, solving tough problems, and driving innovation through collaboration and continuous learning.
            </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
