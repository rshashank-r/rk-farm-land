'use server';

/**
 * @fileOverview Generates an AI image of a farmland estate based on a textual description.
 *
 * - generateFarmlandImage - A function that generates the farmland image.
 * - GenerateFarmlandImageInput - The input type for the generateFarmlandImage function.
 * - GenerateFarmlandImageOutput - The return type for the generateFarmlandImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFarmlandImageInputSchema = z.object({
  description: z.string().describe('A description of the farmland estate.'),
});
export type GenerateFarmlandImageInput = z.infer<typeof GenerateFarmlandImageInputSchema>;

const GenerateFarmlandImageOutputSchema = z.object({
  image: z
    .string()
    .describe(
      "The AI-generated image of the farmland, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateFarmlandImageOutput = z.infer<typeof GenerateFarmlandImageOutputSchema>;

export async function generateFarmlandImage(input: GenerateFarmlandImageInput): Promise<GenerateFarmlandImageOutput> {
  return generateFarmlandImageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFarmlandImagePrompt',
  input: {schema: GenerateFarmlandImageInputSchema},
  output: {schema: GenerateFarmlandImageOutputSchema},
  prompt: `Generate a photorealistic image of a farmland estate based on the following description: {{{description}}}`,
});

const generateFarmlandImageFlow = ai.defineFlow(
  {
    name: 'generateFarmlandImageFlow',
    inputSchema: GenerateFarmlandImageInputSchema,
    outputSchema: GenerateFarmlandImageOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: input.description,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    return {image: media!.url!};
  }
);
