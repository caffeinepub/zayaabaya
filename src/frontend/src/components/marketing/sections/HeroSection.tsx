import { Instagram } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/abaya-store-hero-abaya-hijab.dim_1920x1080.png"
          alt="Elegant Abaya Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center space-y-8 px-4">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight">
            Zaya Abaya & Hijab
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Discover timeless elegance in modest fashion
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <a
            href="https://instagram.com/zaya_abaya_hijab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-elegant hover:shadow-xl text-base font-medium"
          >
            <Instagram className="h-5 w-5" />
            Visit Our Instagram
          </a>
          <a
            href="#collections"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-background/80 backdrop-blur text-foreground hover:bg-background transition-all border text-base font-medium"
          >
            Explore Collections
          </a>
        </div>

        <p className="text-sm text-muted-foreground animate-fade-in">
          Follow us @zaya_abaya_hijab for the latest styles
        </p>
      </div>
    </section>
  );
}
