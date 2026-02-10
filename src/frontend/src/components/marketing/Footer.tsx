import { Instagram, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'zayaabaya'
  );

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/generated/zaya-logo.dim_512x512.png" 
                alt="Zaya Abaya & Hijab" 
                className="h-10 w-10 object-contain"
              />
              <div>
                <h3 className="font-serif font-semibold text-lg">Zaya Abaya & Hijab</h3>
                <p className="text-xs text-muted-foreground">Modest Fashion</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Elegant and modest fashion for the modern woman. Quality craftsmanship meets timeless style.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </a>
              <a href="#collections" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Collections
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">Connect With Us</h4>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">www.zayaabaya.com</p>
              <a
                href="https://instagram.com/zaya_abaya_hijab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
                @zaya_abaya_hijab
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Zaya Abaya & Hijab. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Built with <Heart className="h-3 w-3 fill-current text-accent" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
