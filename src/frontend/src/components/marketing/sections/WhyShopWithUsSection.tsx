import { Shield, Sparkles, Heart, Package, Award, Users } from 'lucide-react';

export function WhyShopWithUsSection() {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Only the finest fabrics and materials, ensuring lasting beauty and comfort.',
    },
    {
      icon: Sparkles,
      title: 'Elegant Designs',
      description: 'Timeless styles that blend traditional modesty with contemporary fashion.',
    },
    {
      icon: Heart,
      title: 'Thoughtful Curation',
      description: 'Each piece is carefully selected to meet our high standards of quality and style.',
    },
    {
      icon: Package,
      title: 'Careful Packaging',
      description: 'Your items arrive beautifully packaged, ready to wear or gift.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Dedicated to providing exceptional service and a seamless shopping experience.',
    },
    {
      icon: Shield,
      title: 'Trusted Brand',
      description: 'Building lasting relationships through quality, integrity, and authenticity.',
    },
  ];

  return (
    <section className="section-padding bg-muted/20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight">
            Why Shop With Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the Zaya difference in every detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-lg bg-background border hover:border-primary/30 transition-all hover:shadow-sm"
              >
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
