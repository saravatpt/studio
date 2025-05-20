import type { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  IconComponent?: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>; // Allow custom SVGs
  iconClassName?: string;
}

const SkillBadge = ({ name, IconComponent, iconClassName }: SkillBadgeProps) => {
  return (
    <Card className="bg-card hover:shadow-lg transition-shadow duration-300 group transform hover:-translate-y-1">
      <CardContent className="p-4 flex flex-col items-center justify-center space-y-2 h-full">
        {IconComponent && (
          <IconComponent className={cn("h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300", iconClassName)} />
        )}
        <p className="text-sm font-medium text-center text-foreground group-hover:text-primary transition-colors duration-300">{name}</p>
      </CardContent>
    </Card>
  );
};

export default SkillBadge;
