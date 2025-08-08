'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Home as HomeIcon, Zap, Milestone, Sprout, Leaf, DollarSign, HeartPulse, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import GoogleMap from '@/components/GoogleMap';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from 'react';


const whyChooseUsItems = [
  { icon: HomeIcon, text: "Near to Village", description: "Access to markets and community services." },
  { icon: Zap, text: "24/7 Power Supply", description: "Reliable electricity for homes and farming." },
  { icon: Milestone, text: "Good Road Connectivity", description: "Easy travel and transport for goods." },
  { icon: Sprout, text: "Full Greenery", description: "Surrounded by fresh air and scenic beauty." },
];

const promiseItems = [
  { 
    icon: Leaf, 
    title: "Peace", 
    points: [
      "Quiet natural surroundings.", 
      "Green views from every corner.", 
      "Pollution-free air."
    ] 
  },
  { 
    icon: HeartPulse, 
    title: "Health", 
    points: [
      "Fresh organic fruits and vegetables.", 
      "Clean air boosts immunity.", 
      "Stress-free environment improves mental health.", 
      "Outdoor space for daily activity and sunlight."
    ] 
  },
  { 
    icon: DollarSign, 
    title: "Wealth", 
    points: [
      "Coconut trees for steady yearly income.", 
      "Mango trees for seasonal profit.", 
      "Teak and sandalwood for high-value long-term gains.", 
      "Organic vegetable farming for extra income."
    ] 
  },
];

const processSteps = [
    { number: "01", title: "Purchase", description: "You purchase pure, empty farmland from us." },
    { number: "02", title: "Develop", description: "We develop it according to our master plan: traditional home construction, plantation of money-making trees, and organic garden setup." },
    { number: "03", title: "Enjoy", description: "You enjoy Peace, Health, and Wealth for years to come." },
];

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


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <WhyChooseUsSection />
        <PromiseSection />
        <ProcessSection />
        <AboutSection />
        <GallerySection />
        <LocationSection />
        <ContactSection />
      </main>
    </div>
  );
}

const HeroSection = () => (
  <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
    <Image
      src="/images/full_estate_view.jpeg"
      alt="Aerial view of lush farmland"
      layout="fill"
      objectFit="cover"
      className="z-0"
      data-ai-hint="aerial view farmland"
    />
    <div className="absolute inset-0 bg-black/50 z-10"></div>
    <div className="relative z-20 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
        RK FARM LAND – Peace. Health. Wealth.
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl mb-8" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
        Buy pure farmland today. We develop it into a green estate with homes, plantations, and gardens tomorrow.
      </p>
      <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
        <Link href="#contact">
          Enquire Now <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  </section>
);

const WhyChooseUsSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Why Choose RK FARM LAND?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {whyChooseUsItems.map((item) => (
          <div key={item.text} className="flex flex-col items-center p-4 transition-transform duration-300 hover:scale-105">
             <div className="bg-primary/10 p-4 rounded-full mb-4">
                <item.icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-headline font-semibold mb-2 text-accent">{item.text}</h3>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PromiseSection = () => (
    <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Our Peace + Health + Wealth Promise</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {promiseItems.map((item) => (
                    <Card key={item.title} className="bg-card text-card-foreground shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <item.icon className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="text-2xl text-accent">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                                {item.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);


const ProcessSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">Our Simple 3-Step Process</h2>
      <div className="relative">
          <div className="absolute left-1/2 top-10 h-full w-px bg-border -translate-x-1/2 hidden md:block"></div>
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
              {processSteps.map((step, index) => (
                  <div key={step.number} className={`flex flex-col items-center text-center md:items-start md:text-left ${index === 1 ? 'md:items-center md:text-center' : ''} ${index === 2 ? 'md:items-end md:text-right' : ''}`}>
                      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-background border-4 border-primary mb-6 z-10 transition-transform duration-300 hover:scale-110">
                          <span className="text-3xl font-bold text-primary">{step.number}</span>
                      </div>
                      <h3 className="text-2xl font-headline font-bold mb-3 text-accent">{step.title}</h3>
                      <p className="text-muted-foreground max-w-sm">{step.description}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
    <section id="about" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              About RK FARM LAND
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At RK FARM LAND, we don’t just sell land — we deliver a complete vision for your future. Our goal is to create assets that provide peace, generate wealth, and support good health. We carefully choose fertile, safe, and accessible locations, then develop them into fully planned green estates after you buy. We believe in creating a legacy that benefits you and the generations to come, combining the tranquility of nature with smart, sustainable investment.
            </p>
          </div>

          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-4">
              Our Vision
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We envision a world where a healthy, prosperous life is not a luxury but a fundamental right. By connecting people with pristine, fertile farmland, we aim to provide a sanctuary from urban chaos while building a foundation for financial stability and long-term well-being. Our expertly managed estates are designed to grow with you, ensuring a lifetime of returns in the form of fresh air, organic produce, and valuable timber.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-4">
              The RK FARM LAND Difference
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What sets us apart is our commitment to a holistic lifestyle. We take care of every detail, from the initial land purchase to the final development of your green estate. Our process ensures that your investment is not just a piece of property, but a vibrant, living ecosystem tailored for a life of Peace, Health, and Wealth. We are more than just land developers; we are partners in your journey toward a better, more natural future.
            </p>
          </div>
        </div>
      </div>
    </section>
);


const GallerySection = () => {
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

    return (
        <section id="gallery" className="bg-card py-16 md:py-24">
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
        </section>
    );
};


const LocationSection = () => (
  <section id="location" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Our Location</h2>
      <div className="max-w-4xl mx-auto text-center mb-8">
        <p className="text-lg text-muted-foreground">
          Located close to the village for convenience, yet far enough to preserve peace and privacy.
        </p>
      </div>
      <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-white">
        <GoogleMap />
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Ready to invest in your future?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Send us your details and our team will contact you with availability and pricing.
        </p>
      </div>
      <div className="max-w-2xl mx-auto bg-background p-8 rounded-lg shadow-lg">
        <ContactForm />
      </div>
    </div>
  </section>
);
