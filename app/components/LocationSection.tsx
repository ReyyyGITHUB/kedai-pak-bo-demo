"use client";

import LocationHeader from "./location/LocationHeader";
import LocationMap from "./location/LocationMap";
import LocationInfo from "./location/LocationInfo";

export default function LocationSection() {
  return (
    <section className="relative bg-[#F3F0EA] text-[#1A1A1A] py-16 md:py-24 border-t-2 border-slate-900 border-dashed">
      {/* Background pattern tipis biar ga terlalu polos */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <div className="relative z-10 px-5 md:px-12 max-w-7xl mx-auto">
        {/* Header selalu di atas */}
        <LocationHeader />

        {/* Map di atas info (mobile), side-by-side di desktop */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          <LocationMap />
          <LocationInfo />
        </div>
      </div>
    </section>
  );
}
