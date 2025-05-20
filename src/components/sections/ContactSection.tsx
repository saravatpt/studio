import SectionWrapper from '@/components/shared/SectionWrapper';
import ContactForm from '@/components/shared/ContactForm';

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" title="Contact Me" className="bg-muted/30">
      <ContactForm />
    </SectionWrapper>
  );
};

export default ContactSection;
