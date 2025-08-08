'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from 'react';

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
    src: '/images/single_plot.jpg',
    aiHint: 'rural home garden'
  },
  {
    title: 'Organic Garden Close-up',
    description: 'A close-up shot of a fresh organic vegetable garden with wooden fencing and fruit trees in the background.',
    src: '/images/vegetable_garden.jpg',
    aiHint: 'organic garden'
  },
  {
    title: 'Health & Nature Scene',
    description: 'A family harvesting fresh vegetables in a green farmland, surrounded by fruit and timber trees.',
    src: '/images/family_in_guraden.jpg',
    aiHint: 'family harvesting vegetables'
  },
];

type GalleryItem = typeof galleryItems[0];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Concept Gallery</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            These renders showcase our vision for your future at RK FARM LAND. Click on an image to see a larger view.
          </p>
        </div>
        <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryItems.map((item) => (
              <DialogTrigger key={item.title} asChild onClick={() => setSelectedImage(item)}>
                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer">
                  <CardContent className="p-0">
                    <div className="aspect-w-16 aspect-h-9 relative">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        data-ai-hint={item.aiHint}
                      />
                    </div>
                    <div className="p-6 bg-card">
                      <h3 className="text-2xl font-headline font-semibold text-accent mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
            ))}
          </div>

          {selectedImage && (
              <DialogContent className="max-w-4xl p-0">
                  <DialogTitle className="sr-only">{selectedImage.title}</DialogTitle>
                  <div className="relative aspect-video">
                      <Image
                          src={selectedImage.src}
                          alt={selectedImage.title}
                          fill
                          className="object-contain"
                      />
                  </div>
              </DialogContent>
          )}
        </Dialog>
      </div>
    </div>
  );
}
