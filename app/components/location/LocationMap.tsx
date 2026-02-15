import { ExternalLink } from "lucide-react";
import { LOCATION_INFO } from "./locationData";

export default function LocationMap() {
  return (
    <div className="lg:w-[55%] order-1 lg:order-2">
      {/* Map card */}
      <div className="bg-white border-2 border-slate-900 rounded-2xl p-3 shadow-[8px_8px_0_#1A1A1A]">
        <div className="relative w-full aspect-[4/3] md:aspect-video rounded-xl overflow-hidden border-2 border-slate-900 grayscale hover:grayscale-0 transition-all duration-500">
          <iframe
            title="Kedai Pak Bo Map"
            src={`https://www.google.com/maps?q=${LOCATION_INFO.mapQuery}&output=embed`}
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 px-1">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
              Live Location
            </span>
          </div>
          <a
            href={LOCATION_INFO.mapsLink}
            target="_blank"
            className="flex items-center gap-2 text-xs md:text-sm font-black border-2 border-slate-900 px-4 py-2 rounded-full bg-orange-600 text-white shadow-[2px_2px_0_#1A1A1A] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#1A1A1A] transition-all"
          >
            Buka Google Maps <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
