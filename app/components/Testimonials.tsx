"use client";

import React from "react";
import TestimonialsHeader from "./testimonials/TestimonialsHeader";
import TestimonialsMarquee from "./testimonials/TestimonialsMarquee";

export default function Testimonials() {
  return (
    <section className="relative bg-[#F3F0EA] text-[#1A1A1A] py-20 border-t-2 border-slate-900 border-dashed overflow-hidden">
      {/* CSS animasi dipindah ke globals.css */}

      {/* Background dots */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none bg-[radial-gradient(#1A1A1A_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <TestimonialsHeader />

      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#F3F0EA] via-[#F3F0EA]/80 to-transparent z-20"></div>
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#F3F0EA] via-[#F3F0EA]/80 to-transparent z-20"></div>

      <TestimonialsMarquee />
    </section>
  );
}
