import { Header } from './components/marketing/Header';
import { Footer } from './components/marketing/Footer';
import { HeroSection } from './components/marketing/sections/HeroSection';
import { AboutSection } from './components/marketing/sections/AboutSection';
import { FeaturedCollectionsSection } from './components/marketing/sections/FeaturedCollectionsSection';
import { WhyShopWithUsSection } from './components/marketing/sections/WhyShopWithUsSection';
import { ContactSection } from './components/marketing/sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <FeaturedCollectionsSection />
        <WhyShopWithUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
