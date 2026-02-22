import NavBar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturedGallery from "./components/FeaturedGallery";
import PhilosophySection from "./components/PhilosophySection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1a1a] selection:bg-stone-200">
      {/* Navigation */}
      <NavBar />

      <main className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <HeroSection />

        {/* Featured Gallery - Grid */}
        <FeaturedGallery />

        {/* Philosophy Section */}
        <PhilosophySection />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
