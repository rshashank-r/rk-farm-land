import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-card py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">Our Vision</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At RK FARM LAND, we don’t just sell land — we deliver a complete vision for your future. Our goal is to create assets that provide peace, generate wealth, and support good health. We carefully choose fertile, safe, and accessible locations, then develop them into fully planned green estates after you buy.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://placehold.co/800x600.png"
                alt="Lush green farmland with a clear sky"
                layout="fill"
                objectFit="cover"
                data-ai-hint="farmland landscape"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
