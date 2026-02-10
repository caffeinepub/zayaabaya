import { Instagram, MapPin, Mail, Phone } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="container max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            We'd love to hear from you. Connect with us through Instagram or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Instagram Card */}
          <a
            href="https://instagram.com/zaya_abaya_hijab"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-lg border bg-card hover:border-primary/50 hover:shadow-elegant transition-all"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Instagram className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Follow Us on Instagram</h3>
                <p className="text-muted-foreground mb-3">
                  Stay updated with our latest collections, styling tips, and exclusive offers.
                </p>
                <p className="text-primary font-medium">@zaya_abaya_hijab</p>
              </div>
            </div>
          </a>

          {/* Contact Info Card */}
          <div className="p-8 rounded-lg border bg-card">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Reach out to us for inquiries about our collections and services.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Location</p>
                    <p className="text-muted-foreground">Muthamil Nagar, Pammal, Chennai</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <p className="text-muted-foreground italic">Coming soon</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <p className="text-muted-foreground">zayaabaya1417@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  <strong>Website:</strong> www.zayaabaya.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
