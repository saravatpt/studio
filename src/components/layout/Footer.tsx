import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/saravatpt" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/saravantpt" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:saravantpt@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Saravanan Narayanan. All rights reserved.</p>
        <p>Built with Next.js, Tailwind CSS, ShadCN UI, and Genkit AI.</p>
      </div>
    </footer>
  );
};

export default Footer;
