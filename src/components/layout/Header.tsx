import Link from 'next/link';
import { CodeXml } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-6 bg-background/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          <CodeXml className="h-8 w-8" />
          <span>Saravanan</span>
        </Link>
        <nav className="space-x-4 sm:space-x-6">
          <Link href="#about" className="text-foreground hover:text-primary transition-colors">About</Link>
          <Link href="#skills" className="text-foreground hover:text-primary transition-colors">Skills</Link>
          <Link href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</Link>
          <Link href="#experience" className="text-foreground hover:text-primary transition-colors">Experience</Link>
          <Link href="#education" className="text-foreground hover:text-primary transition-colors">Education</Link>
          <Link href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
