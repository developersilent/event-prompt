import TextAnimation from '@/animations/TextAnimation';
import Link from 'next/link';

export default function LandingPageText() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh]">
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20 flex flex-col items-center justify-center text-center px-4 md:px-6">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-foreground">
          <TextAnimation text="Explore the World" />
        </h1>
        <div className="max-w-[700px] text-muted-foreground md:text-xl mt-4">
          <TextAnimation
            text="Discover the beauty and diversity of countries around the globe. Plan
          your next adventure with our comprehensive travel guides."
          />
        </div>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Link
            href="#destinations"
            className="inline-flex scroll-smooth h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Explore Destinations
          </Link>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            prefetch={false}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
