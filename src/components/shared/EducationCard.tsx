import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, CalendarDays } from 'lucide-react';

interface EducationCardProps {
  degree: string;
  institution: string;
  duration: string;
  details?: string[];
}

const EducationCard = ({ degree, institution, duration, details }: EducationCardProps) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="text-xl text-primary flex items-center">
            <GraduationCap className="mr-3 h-6 w-6" />
            {degree}
        </CardTitle>
        <CardDescription className="text-md text-foreground/80">{institution}</CardDescription>
        <div className="flex items-center text-sm text-muted-foreground mt-1">
            <CalendarDays className="mr-2 h-4 w-4" />
            <span>{duration}</span>
        </div>
      </CardHeader>
      {details && details.length > 0 && (
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-foreground/90 text-sm">
            {details.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
};

export default EducationCard;
