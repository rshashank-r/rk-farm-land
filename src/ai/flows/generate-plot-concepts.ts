'use server';

/**
 * @fileOverview A flow to generate images showcasing various concept plots and garden designs.
 *
 * - generatePlotConcepts - A function that handles the image generation process.
 * - GeneratePlotConceptsInput - The input type for the generatePlotConcepts function.
 * - GeneratePlotConceptsOutput - The return type for the generatePlotConcepts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePlotConceptsInputSchema = z.object({
  conceptDescription: z
    .string()
    .describe('A description of the concept plot or garden design to generate an image for.'),
});
export type GeneratePlotConceptsInput = z.infer<typeof GeneratePlotConceptsInputSchema>;

const GeneratePlotConceptsOutputSchema = z.object({
  imageUri: z
    .string()
    .describe(
      'The generated image as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' // Corrected description
    ),
});
export type GeneratePlotConceptsOutput = z.infer<typeof GeneratePlotConceptsOutputSchema>;

export async function generatePlotConcepts(input: GeneratePlotConceptsInput): Promise<GeneratePlotConceptsOutput> {
  return generatePlotConceptsFlow(input);
}

const generatePlotConceptsFlow = ai.defineFlow(
  {
    name: 'generatePlotConceptsFlow',
    inputSchema: GeneratePlotConceptsInputSchema,
    outputSchema: GeneratePlotConceptsOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: input.conceptDescription,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate image.');
    }

    return {imageUri: media.url};
  }
);
