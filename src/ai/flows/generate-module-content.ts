'use server';

/**
 * @fileOverview Generates starter content for system modules using AI.
 *
 * - generateModuleContent - A function that generates content for a system module.
 * - GenerateModuleContentInput - The input type for the generateModuleContent function.
 * - GenerateModuleContentOutput - The return type for the generateModuleContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateModuleContentInputSchema = z.object({
  moduleName: z.string().describe('The name of the system module (e.g., auth, data, realtime).'),
  userSkills: z.string().describe('A short description of the user skills.'),
  userExperience: z.string().describe('A short description of the user experience.'),
});

export type GenerateModuleContentInput = z.infer<typeof GenerateModuleContentInputSchema>;

const GenerateModuleContentOutputSchema = z.object({
  content: z.string().describe('The generated content for the system module.'),
});

export type GenerateModuleContentOutput = z.infer<typeof GenerateModuleContentOutputSchema>;

export async function generateModuleContent(input: GenerateModuleContentInput): Promise<GenerateModuleContentOutput> {
  return generateModuleContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateModuleContentPrompt',
  input: {schema: GenerateModuleContentInputSchema},
  output: {schema: GenerateModuleContentOutputSchema},
  prompt: `You are a highly skilled systems engineer with expertise in documenting system modules for a portfolio.

  Based on the module name, user skills and experience, generate starter content for the module documentation.

  The content should include:
    - A brief overview of the module's purpose.
    - Key architectural decisions and tradeoffs.
    - Potential improvements and future considerations.
    - Problem solving approaches.

  Module Name: {{{moduleName}}}
  User Skills: {{{userSkills}}}
  User Experience: {{{userExperience}}}

  Please provide well structured and detailed technical documentation.`, 
});

const generateModuleContentFlow = ai.defineFlow(
  {
    name: 'generateModuleContentFlow',
    inputSchema: GenerateModuleContentInputSchema,
    outputSchema: GenerateModuleContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
