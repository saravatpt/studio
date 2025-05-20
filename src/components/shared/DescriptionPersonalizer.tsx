'use client';

import { useState, useTransition } from 'react';
import { personalizeDescription, type PersonalizeDescriptionInput } from '@/ai/flows/personalize-description';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface DescriptionPersonalizerProps {
  initialDescription: string;
}

const DescriptionPersonalizer = ({ initialDescription }: DescriptionPersonalizerProps) => {
  const [description, setDescription] = useState(initialDescription);
  const [targetAudience, setTargetAudience] = useState('potential employers');
  const [personalizedDescription, setPersonalizedDescription] = useState('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!description || !targetAudience) {
      toast({
        title: "Missing Information",
        description: "Please provide both a description and a target audience.",
        variant: "destructive",
      });
      return;
    }

    startTransition(async () => {
      try {
        const input: PersonalizeDescriptionInput = { description, targetAudience };
        const result = await personalizeDescription(input);
        setPersonalizedDescription(result.personalizedDescription);
        toast({
          title: "Description Personalized!",
          description: "Your new description is ready.",
        });
      } catch (error) {
        console.error("Error personalizing description:", error);
        setPersonalizedDescription('');
        toast({
          title: "Error",
          description: "Failed to personalize description. Please try again.",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Wand2 className="mr-2 h-6 w-6 text-accent" />
          Personalize Your Bio
        </CardTitle>
        <CardDescription>
          Tailor your introduction for different audiences using AI.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="current-description">Your Current Description</Label>
          <Textarea
            id="current-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter your current profile description..."
            rows={5}
            className="bg-background/70"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="target-audience">Target Audience</Label>
          <Input
            id="target-audience"
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            placeholder="e.g., recruiters, collaborators, clients"
            className="bg-background/70"
          />
        </div>
        <Button onClick={handleSubmit} disabled={isPending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          {isPending ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Wand2 className="mr-2 h-4 w-4" />
          )}
          Personalize
        </Button>
      </CardContent>
      {personalizedDescription && (
        <CardFooter className="flex-col items-start space-y-2 pt-4 border-t">
          <Label htmlFor="personalized-description" className="font-semibold text-primary">Personalized Description:</Label>
          <Textarea
            id="personalized-description"
            value={personalizedDescription}
            readOnly
            rows={5}
            className="bg-muted/50 border-primary/50"
          />
        </CardFooter>
      )}
    </Card>
  );
};

export default DescriptionPersonalizer;
