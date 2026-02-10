import { Instagram } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/assets/generated/zaya-logo.dim_512x512.png" 
            alt="Zaya Abaya & Hijab" 
            className="h-12 w-12 object-contain"
          />
          <div>
            <h1 className="text-xl font-serif font-semibold tracking-tight">Zaya Abaya & Hijab</h1>
            <p className="text-xs text-muted-foreground">Modest Fashion</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
          <a href="#collections" className="text-sm font-medium hover:text-primary transition-colors">
            Collections
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <a
          href="https://instagram.com/zaya_abaya_hijab"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
        >
          <Instagram className="h-4 w-4" />
          <span className="hidden sm:inline">Follow Us</span>
        </a>
      </div>
    </header>
  );
}
