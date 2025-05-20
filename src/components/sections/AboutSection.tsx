import SectionWrapper from '@/components/shared/SectionWrapper';
import DescriptionPersonalizer from '@/components/shared/DescriptionPersonalizer';
import Image from 'next/image';

const initialAboutText = `I'm a passionate and versatile Full Stack Developer with expertise in the MERN stack, Python, DevOps practices, and cloud technologies (AWS, GCP). I'm also an AI/ML enthusiast, constantly exploring new advancements in the field. 

My journey in tech is driven by a desire to build scalable, efficient, and innovative solutions that solve real-world problems. I thrive in collaborative environments, believe in continuous learning, and am always eager to take on new challenges that push my boundaries.

Beyond coding, I enjoy exploring new technologies, contributing to open-source projects, and mentoring aspiring developers. I'm committed to writing clean, maintainable code and following best practices to deliver high-quality software.`;

const AboutSection = () => {
  return (
    <SectionWrapper id="about" title="About Me" className="bg-muted/30">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p>
                Hello! I&apos;m Saravanan, a dedicated Full Stack Developer with a strong foundation in building dynamic web applications and robust backend systems. My expertise spans across the MERN stack (MongoDB, Express.js, React, Node.js), Python with frameworks like Django and Flask, and modern DevOps practices.
            </p>
            <p>
                I have a keen interest in cloud computing, particularly with AWS and GCP, where I&apos;ve worked on deploying and managing scalable applications. The rapidly evolving field of AI and Machine Learning also captivates me, and I&apos;m continuously learning and experimenting with new tools and techniques in this domain.
            </p>
            <p>
                My approach to development is rooted in problem-solving and a commitment to quality. I enjoy tackling complex challenges and transforming them into elegant, user-friendly solutions. Collaboration and continuous improvement are core to my work ethic.
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
