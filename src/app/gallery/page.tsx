import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const galleryItems = [
  {
    title: 'Full Estate View',
    description: 'An aerial view of a lush, planned farmland estate with traditional houses, surrounded by coconut, mango, teak, and sandalwood trees.',
    src: '/images/full_estate_view.jpeg',
    aiHint: 'farmland estate aerial'
  },
  {
    title: 'Single Plot Concept',
    description: 'A traditional single-floor rural home in the middle of a 10,000 sq ft green plot with surrounding trees and a small garden.',
    src: 'https://placehold.co/1200x675.png',
    aiHint: 'rural home garden'
  },
  {
    title: 'Organic Garden Close-up',
    description: 'A close-up shot of a fresh organic vegetable garden with wooden fencing and fruit trees in the background.',
    src: 'https://placehold.co/1200x675.png',
    aiHint: 'organic garden'
  },
  {
    title: 'Health & Nature Scene',
    description: 'A family harvesting fresh vegetables in a green farmland, surrounded by fruit and timber trees.',
    src: 'https://placehold.co/1200x675.png',
    aiHint: 'family harvesting vegetables'
  },
];

export default function GalleryPage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Concept Gallery</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            These renders showcase our vision for your future at RK FARM LAND.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryItems.map((item) => (
            <Card key={item.title} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
              <CardContent className="p-0">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src={item.src}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={item.aiHint}
                  />
                </div>
                <div className="p-6 bg-card">
                  <h3 className="text-2xl font-headline font-semibold text-accent mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
