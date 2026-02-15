import { Star } from "lucide-react";

export default function TestimonialsHeader() {
  return (
    <div className="relative z-10 px-5 md:px-12 max-w-7xl mx-auto mb-12 text-center">
      {/* Badge Kecil */}
      <div className="inline-flex items-center gap-2 border border-slate-900 bg-white px-3 py-1 rounded-full shadow-[2px_2px_0_#1A1A1A] mb-4 rotate-[-2deg]">
        <Star size={12} className="fill-orange-500 text-orange-500" />
        <span className="text-xs font-bold font-mono uppercase tracking-wider">
          Approved by Warga Sampangan
        </span>
      </div>

      {/* Judul Besar */}
      <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
        Ulasan {""}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
          Jujur.
        </span>
      </h2>
      <p className="text-slate-600 font-medium text-lg mt-3">
        Tanpa buzzer, murni dari perut yang kenyang.
      </p>
    </div>
  );
}
