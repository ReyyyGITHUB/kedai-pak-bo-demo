"use client";

import HeroCopy from "./components/HeroCopy";
import HeroVisual from "./components/HeroVisual";
import Marquee from "./components/Marquee";
import MenuFavorites from "./components/MenuFavorites";
import MenuFull from "./components/MenuFull";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import LocationSection from "./components/LocationSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function HeroSection() {
  return (
    <div className="bg-[#F3F0EA] text-[#1A1A1A] font-sans selection:bg-orange-500 selection:text-white">
      {/* Hero wrapper supaya marquee tetap jadi divider di akhir hero */}
      <section className="relative min-h-screen flex flex-col">
        <Navbar />

        {/* Main content */}
        <div className="relative z-10 flex-1 flex flex-col md:grid md:grid-cols-12 h-full pt-24 md:pt-0">
          <HeroCopy />
          <HeroVisual />
        </div>

        <Marquee />
      </section>

      <MenuFavorites />
      <MenuFull />
      <Testimonials />
      <LocationSection />
      <FAQ />
      <Footer />
    </div>
  );
}
