// src/ai/flows/personalize-description.ts
'use server';

/**
 * @fileOverview AI-powered tool to personalize profile descriptions based on target audience.
 *
 * - personalizeDescription - A function that personalizes the description based on the input.
 * - PersonalizeDescriptionInput - The input type for the personalizeDescription function.
 * - PersonalizeDescriptionOutput - The return type for the personalizeDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeDescriptionInputSchema = z.object({
  description: z.string().describe('The original profile description.'),
  targetAudience: z.string().describe('The target audience for the personalized description (e.g., recruiters, collaborators).'),
});
export type PersonalizeDescriptionInput = z.infer<typeof PersonalizeDescriptionInputSchema>;

const PersonalizeDescriptionOutputSchema = z.object({
  personalizedDescription: z.string().describe('The personalized profile description tailored for the target audience.'),
});
export type PersonalizeDescriptionOutput = z.infer<typeof PersonalizeDescriptionOutputSchema>;

export async function personalizeDescription(input: PersonalizeDescriptionInput): Promise<PersonalizeDescriptionOutput> {
  return personalizeDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeDescriptionPrompt',
  input: {schema: PersonalizeDescriptionInputSchema},
  output: {schema: PersonalizeDescriptionOutputSchema},
  prompt: `You are an expert at writing compelling profile descriptions.

  Please personalize the following profile description for the given target audience. The personalized description should be engaging and tailored to highlight the most relevant skills and experience for the specified audience.

  Original Description: {{{description}}}
  Target Audience: {{{targetAudience}}}

  Personalized Description:`, // Ensure the AI returns only the personalized description
});

const personalizeDescriptionFlow = ai.defineFlow(
  {
    name: 'personalizeDescriptionFlow',
    inputSchema: PersonalizeDescriptionInputSchema,
    outputSchema: PersonalizeDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
