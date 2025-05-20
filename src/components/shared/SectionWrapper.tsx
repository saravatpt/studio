import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
}

const SectionWrapper = ({ id, title, children, className, titleClassName, contentClassName }: SectionWrapperProps) => {
  return (
    <section id={id} className={cn('py-16 sm:py-20 scroll-mt-20', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={cn('text-3xl sm:text-4xl font-bold text-primary mb-10 sm:mb-12 text-center', titleClassName)}>
          {title}
        </h2>
        <div className={cn(contentClassName)}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;
