'use server';

/**
 * @fileOverview An AI agent for suggesting improvements to system module documentation.
 *
 * - suggestModuleImprovements - A function that suggests improvements to module documentation.
 * - SuggestModuleImprovementsInput - The input type for the suggestModuleImprovements function.
 * - SuggestModuleImprovementsOutput - The return type for the suggestModuleImprovements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestModuleImprovementsInputSchema = z.object({
  moduleDocumentation: z
    .string()
    .describe('The current documentation for the system module.'),
});
export type SuggestModuleImprovementsInput = z.infer<
  typeof SuggestModuleImprovementsInputSchema
>;

const SuggestModuleImprovementsOutputSchema = z.object({
  improvedDocumentation: z
    .string()
    .describe('The improved documentation for the system module.'),
});
export type SuggestModuleImprovementsOutput = z.infer<
  typeof SuggestModuleImprovementsOutputSchema
>;

export async function suggestModuleImprovements(
  input: SuggestModuleImprovementsInput
): Promise<SuggestModuleImprovementsOutput> {
  return suggestModuleImprovementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestModuleImprovementsPrompt',
  input: {schema: SuggestModuleImprovementsInputSchema},
  output: {schema: SuggestModuleImprovementsOutputSchema},
  prompt: `You are an expert systems engineer. Please review the following system module documentation and suggest improvements to problem-solving approaches, architectural decisions, tradeoffs, and potential improvements.\n\nDocumentation: {{{moduleDocumentation}}}\n\nImproved Documentation:`,
});

const suggestModuleImprovementsFlow = ai.defineFlow(
  {
    name: 'suggestModuleImprovementsFlow',
    inputSchema: SuggestModuleImprovementsInputSchema,
    outputSchema: SuggestModuleImprovementsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
