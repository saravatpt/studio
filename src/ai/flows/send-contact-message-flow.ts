// src/ai/flows/send-contact-message-flow.ts
'use server';
/**
 * @fileOverview Handles sending contact form messages.
 *
 * - sendContactMessage - A function that processes the contact form submission.
 * - SendContactMessageInput - The input type for the sendContactMessage function.
 * - SendContactMessageOutput - The return type for the sendContactMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SendContactMessageInputSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});
export type SendContactMessageInput = z.infer<typeof SendContactMessageInputSchema>;

const SendContactMessageOutputSchema = z.object({
  success: z.boolean(),
  responseMessage: z.string(),
});
export type SendContactMessageOutput = z.infer<typeof SendContactMessageOutputSchema>;

export async function sendContactMessage(input: SendContactMessageInput): Promise<SendContactMessageOutput> {
  return sendContactMessageFlow(input);
}

const sendContactMessageFlow = ai.defineFlow(
  {
    name: 'sendContactMessageFlow',
    inputSchema: SendContactMessageInputSchema,
    outputSchema: SendContactMessageOutputSchema,
  },
  async (input) => {
    // In a real application, you would integrate with an email service or database here.
    // For now, we'll just log it and return a success message.
    console.log('Contact form submission received:', input);

    // Simulate some processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    // This is a placeholder for actual email sending logic or database save.
    // For now, we'll always simulate success.
    // TODO: Replace with actual implementation.
    const isSuccessfullySent = true;

    if (isSuccessfullySent) {
      return {
        success: true,
        responseMessage: "Message sent successfully! Thank you for reaching out. I'll get back to you soon.",
      };
    } else {
      // This branch is currently not reachable
      return {
        success: false,
        responseMessage: "Sorry, there was an issue sending your message. Please try again later.",
      };
    }
  }
);
