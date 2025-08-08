import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Home as HomeIcon, Zap, Milestone, Sprout, ShieldCheck, Leaf, DollarSign, HeartPulse, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import GoogleMap from '@/components/GoogleMap';

const whyChooseUsItems = [
  { icon: HomeIcon, text: "Near to Village", description: "Access to markets and community services." },
  { icon: Zap, text: "24/7 Power Supply", description: "Reliable electricity for homes and farming." },
  { icon: Milestone, text: "Good Road Connectivity", description: "Easy travel and transport for goods." },
  { icon: Sprout, text: "Full Greenery", description: "Surrounded by fresh air and scenic beauty." },
  { icon: ShieldCheck, text: "Safe Area", description: "Secure environment with friendly neighbors." },
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
    icon: DollarSign, 
    title: "Wealth", 
    points: [
      "Coconut trees for steady yearly income.", 
      "Mango trees for seasonal profit.", 
      "Teak and sandalwood for high-value long-term gains.", 
      "Organic vegetable farming for extra income."
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
];

const processSteps = [
    { number: "01", title: "Purchase", description: "You purchase pure, empty farmland from us." },
    { number: "02", title: "Develop", description: "We develop it according to our master plan: traditional home construction, plantation of money-making trees, and organic garden setup." },
    { number: "03", title: "Enjoy", description: "You enjoy Peace, Wealth, and Health for years to come." },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <WhyChooseUsSection />
        <PromiseSection />
        <ProcessSection />
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
        RK FARM LAND – Peace. Wealth. Health.
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl mb-8" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
        Buy pure farmland today. We develop it into a green estate with homes, plantations, and gardens tomorrow.
      </p>
      <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
        <Link href="#contact-us">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
        {whyChooseUsItems.map((item) => (
          <div key={item.text} className="flex flex-col items-center p-4">
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Our Peace + Wealth + Health Promise</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {promiseItems.map((item) => (
                    <Card key={item.title} className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-background border-4 border-primary mb-6 z-10">
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


const LocationSection = () => (
  <section className="py-16 md:py-24 bg-background">
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
  <section id="contact-us" className="py-16 md:py-24 bg-card">
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

    