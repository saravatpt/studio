import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download, Send } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="hero" className="bg-gradient-to-br from-primary/10 via-background to-background py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4">
            Hi, I&apos;m Saravanan Narayanan
          </h1>
          <p className="text-xl sm:text-2xl text-foreground mb-6">
            Software/AI ML Engineer, Technical Lead
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Seeking a Technical Lead or Engineering Manager role to drive high-impact AI and software initiatives. Results-driven with 11+ years in software development and 2+ years in building intelligent AI agents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
              <a href="/resume.pdf" download="Saravanan_Narayanan_Resume.pdf"> {/* Assume resume.pdf will be updated or use a placeholder */}
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 shadow-lg transition-transform hover:scale-105">
              <Link href="#contact">
                <Send className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative h-80 w-80 sm:h-96 sm:w-96 lg:h-[450px] lg:w-[450px] mx-auto md:mx-0 md:ml-auto rounded-full overflow-hidden shadow-2xl border-4 border-primary/50">
          <Image
            src="https://placehold.co/600x600.png"
            alt="Saravanan Narayanan - Profile Picture"
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 hover:scale-110"
            data-ai-hint="professional headshot"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
