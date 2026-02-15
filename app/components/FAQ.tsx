"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "Bisa request level pedas?",
    a: "Bisa banget! Tulis aja di notes pas order: Level 1 (Sopan) sampai Level 5 (KDRT/Ngawur).",
  },
  {
    q: "Minimal order berapa?",
    a: "Gak ada minimal order bos. Mau beli kerupuk doang juga boleh (tapi rugi ongkir ya).",
  },
  {
    q: "Jam buka sampai kapan?",
    a: "Kita buka setiap hari mulai jam 17.00 sore sampai 00.00 malam. Pas banget buat jam rawan lapar.",
  },
  {
    q: "Bisa bayar pakai QRIS?",
    a: "Jelas bisa. Cash, QRIS, Transfer, sampai Curhat (tapi curhat gak bisa buat bayar makan ya).",
  },
  {
    q: "Menerima pesanan partai besar?",
    a: "Siap! Buat arisan, meeting, atau syukuran. Hubungi WA kami H-1 ya biar persiapan matang.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative bg-[#F3F0EA] text-[#1A1A1A] py-16 md:py-24 border-t-2 border-slate-900 border-dashed overflow-hidden">
      
      {/* --- DECORATION --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      {/* Decorative large icon */}
      <HelpCircle className="absolute -right-16 top-40 text-slate-900/5 rotate-12" size={400} strokeWidth={1} />
      
      <div className="relative z-10 px-5 md:px-12 max-w-4xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-slate-500 mb-3 bg-white px-3 py-1 rounded-full border border-slate-900 shadow-[2px_2px_0_#1A1A1A]">
            <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
            Pusat Bantuan
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
            Tanya <span className="text-orange-600 underline decoration-wavy underline-offset-4 decoration-2">Jawab.</span>
          </h2>
          <p className="text-slate-600 font-medium text-lg mt-4 max-w-xl mx-auto">
            Gak usah bingung, semua jawaban dari pertanyaan netizen ada di sini.
          </p>
        </div>

        {/* --- ACCORDION LIST --- */}
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={`group relative bg-white border-2 border-slate-900 rounded-xl
                  ${isOpen ? "shadow-[6px_6px_0_#ea580c] z-10" : "shadow-[4px_4px_0_#1A1A1A]"}
                `}
              >
                {/* Question Header (Clickable) */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    {/* Numbering Badge */}
                    <span className={`flex items-center justify-center w-8 h-8 rounded-lg border-2 border-slate-900 font-black text-sm transition-colors
                      ${isOpen ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500"}
                    `}>
                      {idx + 1}
                    </span>
                    <span className={`font-black text-lg md:text-xl transition-colors ${isOpen ? "text-orange-600" : "text-slate-900"}`}>
                      {item.q}
                    </span>
                  </div>
                  
                  {/* Icon Toggle (Plus/Minus) */}
                  <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 border-slate-900
                    ${isOpen ? "bg-orange-600 text-white" : "bg-white text-slate-900"}
                  `}>
                    {isOpen ? <Minus size={16} strokeWidth={4} /> : <Plus size={16} strokeWidth={4} />}
                  </div>
                </button>

                {/* Answer Body (simple render, no animation) */}
                {isOpen && (
                  <div className="p-6 pt-0 pl-[4.5rem] pr-6 md:pr-10">
                    <p className="text-slate-600 font-medium text-base md:text-lg leading-relaxed border-l-2 border-slate-200 pl-4">
                      {item.a}
                    </p>
                  </div>
                )}

              </div>
            );
          })}
        </div>
        
        {/* --- FOOTER CTA (Kalo gak nemu jawaban) --- */}
        <div className="mt-12 text-center">
             <p className="text-slate-600 font-medium text-sm mb-3">Masih bingung mau nanya apa?</p>
             <button className="inline-flex items-center gap-2 text-sm font-black border-2 border-slate-900 px-6 py-3 rounded-full bg-white hover:bg-slate-900 hover:text-white shadow-[4px_4px_0_#1A1A1A] active:translate-y-[2px] active:shadow-[2px_2px_0_#1A1A1A] transition-all">
                <MessageCircle size={18} />
                CHAT WA ADMIN
             </button>
        </div>

      </div>
    </section>
  );
}
