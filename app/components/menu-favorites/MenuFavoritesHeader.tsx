import { ArrowRight, Star } from "lucide-react";

export default function MenuFavoritesHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
      {/* Heading + subcopy */}
      <div className="max-w-2xl">
        <div className="flex items-center gap-2 mb-4">
          <span className="flex items-center justify-center w-6 h-6 bg-orange-600 border border-slate-900 rounded-full text-white">
            <Star size={12} fill="currentColor" />
          </span>
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-slate-500 font-bold">
            Menu Andalan
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-[0.9]">
          Paling {""}
          <span className="text-orange-600 underline decoration-4 decoration-slate-900 underline-offset-4">
            Best Seller.
          </span>
        </h2>

        <p className="text-slate-600 text-base md:text-lg mt-4 font-medium leading-relaxed">
          Menu yang paling sering ludes sebelum jam tutup. Rasa konsisten, porsi
          brutal, harga masuk akal.
        </p>
      </div>

      {/* CTA desktop */}
      <a
        href="#menu-full"
        className="hidden md:flex group items-center gap-2 text-sm font-black border-2 border-slate-900 px-6 py-3 rounded-full bg-white text-slate-900 shadow-[4px_4px_0_#1A1A1A] hover:shadow-[2px_2px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:translate-x-[3px] active:translate-y-[3px]"
      >
        LIHAT MENU LENGKAP
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
}
