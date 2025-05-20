import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, CalendarDays } from 'lucide-react';

interface ExperienceCardProps {
  role: string;
  company: string;
  duration: string;
  descriptionItems: string[];
}

const ExperienceCard = ({ role, company, duration, descriptionItems }: ExperienceCardProps) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="text-xl text-primary flex items-center">
            <Briefcase className="mr-3 h-6 w-6" />
            {role}
        </CardTitle>
        <CardDescription className="text-md text-foreground/80">{company}</CardDescription>
        <div className="flex items-center text-sm text-muted-foreground mt-1">
            <CalendarDays className="mr-2 h-4 w-4" />
            <span>{duration}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2 text-foreground/90 text-sm">
          {descriptionItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
