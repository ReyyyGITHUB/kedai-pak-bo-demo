import { ArrowRight } from "lucide-react";

export default function HeroCopy() {
  return (
    <div className="md:col-span-7 flex flex-col justify-center px-6 md:pl-12 relative z-20">
      {/* Tagline kecil */}
      <div className="flex items-center gap-2 mb-4 md:mb-6">
        <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
        <span className="text-xs font-mono tracking-widest uppercase text-slate-500">
          Authentic Taste
        </span>
      </div>

      {/* Headline utama */}
      <h1 className="text-[14vw] md:text-[7vw] leading-[0.85] font-black tracking-tighter uppercase text-slate-900 mix-blend-darken">
        <span className="block">Kedai Spesial</span>
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
          Pak bo!
        </span>
      </h1>

      {/* Description + CTA */}
      <div className="mt-8 md:mt-12 flex flex-col gap-6 max-w-lg">
        <p className="text-sm md:text-lg leading-relaxed font-medium text-slate-600">
          Bukan sekadar nasi goreng. Ini adalah seni kuliner jalanan yang diangkat
          ke level berikutnya. {""}
          <span className="text-slate-900 font-bold decoration-orange-500 underline decoration-2 underline-offset-2">
            Gurih, Pedas, Nagih.
          </span>
        </p>

        <button className="group flex items-center gap-4 w-fit mt-2 bg-white border-2 border-slate-900 rounded-full px-5 py-2.5 shadow-[4px_4px_0_#1A1A1A] hover:shadow-[2px_2px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
          <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center border-2 border-slate-900">
            <ArrowRight className="w-4 h-4 -rotate-45 group-hover:translate-x-0.5 transition-transform" />
          </div>
          <span className="font-black text-sm tracking-wide uppercase">
            Pesan Sekarang
          </span>
        </button>
      </div>
    </div>
  );
}
