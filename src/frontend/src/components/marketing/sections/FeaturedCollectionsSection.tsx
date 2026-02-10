import { Sparkles, Heart, Star } from 'lucide-react';

export function FeaturedCollectionsSection() {
  const collections = [
    {
      icon: Sparkles,
      title: 'Everyday Elegance',
      description: 'Comfortable and stylish abayas perfect for daily wear, combining practicality with refined aesthetics.',
    },
    {
      icon: Star,
      title: 'Special Occasions',
      description: 'Exquisite designs featuring delicate embellishments and luxurious fabrics for your most memorable moments.',
    },
    {
      icon: Heart,
      title: 'Premium Hijabs',
      description: 'A curated selection of high-quality hijabs in various styles, colors, and fabrics to complement any outfit.',
    },
  ];

  return (
    <section id="collections" className="section-padding">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight">
            Our Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections designed for the modern modest woman
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => {
            const Icon = collection.icon;
            return (
              <div
                key={index}
                className="group relative bg-card rounded-lg p-8 border hover:border-primary/50 transition-all hover:shadow-elegant"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold">
                    {collection.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {collection.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://instagram.com/zaya_abaya_hijab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            View full collection on Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}
