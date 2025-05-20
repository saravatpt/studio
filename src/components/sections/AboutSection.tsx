import SectionWrapper from '@/components/shared/SectionWrapper';

const AboutSection = () => {
  return (
    <SectionWrapper id="about" title="About Me" className="bg-muted/30">
      <div className="grid md:grid-cols-1 gap-8 items-start">
        <div className="space-y-6 text-lg text-foreground/90 leading-relaxed max-w-3xl mx-auto">
            <p>
              I'm a passionate Software and AI/ML Engineer with over 11 years of experience in building impactful software solutions, including more than 2 years focused on intelligent AI agents. I love turning complex problems into smart, scalable systems that make a real difference.
            </p>
            <p>
              My strengths lie in full-stack development, integrating AI/ML seamlessly into products, and leading teams through technical challenges. I enjoy mentoring, sharing knowledge, and helping engineers grow into confident AI/ML practitioners.
            </p>
            <p>
              Currently, I work as a Technical Lead at Optum, where I lead the development of real-time automation and AI agent solutions—especially in the area of claims processing. A big part of my role is guiding my team’s transition into AI/ML engineering through hands-on mentoring and initiatives. I also champion the wider adoption of AI/ML across the organization by launching projects and showcasing proof-of-concepts to leadership.
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
