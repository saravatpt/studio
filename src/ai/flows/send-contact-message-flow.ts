
// src/ai/flows/send-contact-message-flow.ts
'use server';
/**
 * @fileOverview Handles sending contact form messages and saving them to a Markdown file.
 *
 * - sendContactMessage - A function that processes the contact form submission.
 * - SendContactMessageInput - The input type for the sendContactMessage function.
 * - SendContactMessageOutput - The return type for the sendContactMessage function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import fs from 'fs';
import path from 'path';

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
    const { name, email, message } = input;

    const markdownContent = `
# New Contact Message

**Date:** ${new Date().toISOString()}
**Name:** ${name}
**Email:** ${email}

---

**Message:**
${message}
    `.trim();

    const messagesDir = path.join(process.cwd(), 'messages');
    const fileName = `contact_submission_${Date.now()}.md`;
    const filePath = path.join(messagesDir, fileName);

    try {
      // Ensure the messages directory exists
      if (!fs.existsSync(messagesDir)) {
        fs.mkdirSync(messagesDir, { recursive: true });
      }

      // Write the file
      fs.writeFileSync(filePath, markdownContent);
      console.log(`Contact form submission saved to: ${filePath}`);

      return {
        success: true,
        responseMessage: "Message saved successfully! Thank you for reaching out. I'll get back to you soon.",
      };
    } catch (error) {
      console.error('Error saving contact message to file:', error);
      return {
        success: false,
        responseMessage: "Sorry, there was an issue saving your message. Please try again later.",
      };
    }
  }
);
