import SectionWrapper from '@/components/shared/SectionWrapper';
import { Smile } from 'lucide-react';

const HobbiesSection = () => {
  const hobbies = ['Travel', 'Music', 'Yoga', 'Movies', 'Astronomy', 'Playing with Kids'];
  return (
    <SectionWrapper id="hobbies" title="Hobbies & Interests" className="bg-background"> {/* Changed background for variation */}
      <div className="max-w-3xl mx-auto text-center">
         <div className="flex justify-center items-center mb-6">
          <Smile className="h-12 w-12 text-primary" />
        </div>
        <p className="text-xl text-foreground/90 leading-relaxed space-x-2">
          {hobbies.map((hobby, index) => (
            <span key={hobby} className="inline-block">
              {hobby}
              {index < hobbies.length - 1 && <span className="text-primary mx-2"> • </span>}
            </span>
          ))}
        </p>
      </div>
    </SectionWrapper>
  );
};

export default HobbiesSection;
