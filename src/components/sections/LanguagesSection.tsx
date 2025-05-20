import SectionWrapper from '@/components/shared/SectionWrapper';
import { MessageSquareText } from 'lucide-react'; // Changed icon to MessageSquareText for better relevance

const LanguagesSection = () => {
  const languages = ['Tamil', 'English', 'Telugu', 'Kannada'];
  return (
    <SectionWrapper id="languages" title="Languages Known" className="bg-muted/30">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center items-center mb-6">
          <MessageSquareText className="h-12 w-12 text-primary" />
        </div>
        <p className="text-xl text-foreground/90 space-x-4">
          {languages.map((lang, index) => (
            <span key={lang} className="inline-block">
              {lang}
              {index < languages.length - 1 && <span className="text-primary mx-2"> • </span>}
            </span>
          ))}
        </p>
      </div>
    </SectionWrapper>
  );
};

export default LanguagesSection;
