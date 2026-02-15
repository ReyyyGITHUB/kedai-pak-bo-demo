"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, UtensilsCrossed, ArrowRight } from "lucide-react";

// DATA: Dikelompokkan berdasarkan kategori untuk memudahkan navigasi
const menuCategories = [
  { id: "all", label: "Semua" },
  { id: "nasgor", label: "Nasi Goreng" },
  { id: "bakmi", label: "Bakmi Jawa" },
  { id: "ricebowl", label: "Rice Bowl" },
];

const items = [
  { id: 1, category: "nasgor", name: "Nasi Goreng Spesial", desc: "Toping komplit ayam + telur.", price: "Rp 18.000", img: "/images/pak-bo.png" },
  { id: 2, category: "nasgor", name: "Nasi Goreng Gila", desc: "Pedas, sosis, bakso melimpah.", price: "Rp 19.000", img: "/images/pak-bo.png" },
  { id: 3, category: "nasgor", name: "Nasi Goreng Seafood", desc: "Udang & cumi fresh.", price: "Rp 22.000", img: "/images/pak-bo.png" },
  { id: 4, category: "bakmi", name: "Bakmi Goreng Jawa", desc: "Manis gurih, masak arang.", price: "Rp 17.000", img: "/images/pak-bo.png" },
  { id: 5, category: "bakmi", name: "Bakmi Godog Kental", desc: "Kuah telur bebek creamy.", price: "Rp 16.000", img: "/images/pak-bo.png" },
  { id: 6, category: "bakmi", name: "Mie Ayam Spesial", desc: "Ayam cincang jamur manis.", price: "Rp 17.000", img: "/images/pak-bo.png" },
  { id: 7, category: "ricebowl", name: "Nasi Ayam Teriyaki", desc: "Saus manis gurih jepang.", price: "Rp 20.000", img: "/images/pak-bo.png" },
  { id: 8, category: "ricebowl", name: "Nasi Telur Crispy", desc: "Telur dadar keriting viral.", price: "Rp 15.000", img: "/images/pak-bo.png" },
];

export default function MenuFull() {
  const [activeCategory, setActiveCategory] = useState("all");

  // LOGIC: Filter item berdasarkan kategori yang dipilih
  const filteredItems = activeCategory === "all" 
    ? items 
    : items.filter((item) => item.category === activeCategory);

  return (
    <section className="relative bg-[#F3F0EA] text-[#1A1A1A] py-16 md:py-24 border-t-2 border-slate-900 border-dashed">
      
      {/* --- DECORATION: Paper Texture --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      {/* Accent blobs for warmth */}
      <div className="absolute -top-20 -left-10 w-56 h-56 bg-orange-200/50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-40 -right-16 w-64 h-64 bg-amber-200/40 rounded-full blur-3xl -z-10"></div>

      <div className="px-5 md:px-12 max-w-7xl mx-auto">
        
        {/* --- HEADER: Left Aligned --- */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-slate-500 mb-3">
              <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
              Menu Lengkap
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-2">
              Daftar <span className="text-orange-600">Menu</span>
            </h2>
            <p className="text-slate-600 font-medium text-lg">
              Mau makan apa hari ini?
            </p>
          </div>

          {/* SEARCH BAR: Visual enhancement */}
          <div className="relative group w-full md:w-auto">
            <input 
              type="text" 
              placeholder="Cari menu kesukaan..." 
              className="w-full md:w-80 bg-white border-2 border-slate-900 rounded-full py-3 px-5 pl-12 font-bold placeholder:text-slate-400 focus:outline-none focus:shadow-[4px_4px_0_#1A1A1A] transition-shadow"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-900" size={20} />
          </div>
        </div>

        {/* --- STICKY CATEGORY TABS --- */}
        {/* UX: Sticky top biar user gampang ganti kategori pas scroll */}
        <div className="sticky top-4 z-30 mb-8 py-2 bg-[#F3F0EA]/95 backdrop-blur-sm -mx-5 px-5 md:mx-0 md:px-0 overflow-x-auto no-scrollbar">
          <div className="flex gap-3 w-max">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full border-2 border-slate-900 font-black text-sm uppercase tracking-wide transition-all duration-200 
                  ${activeCategory === cat.id 
                    ? "bg-slate-900 text-white shadow-[4px_4px_0_#orange-600]" 
                    : "bg-white text-slate-900 hover:bg-orange-100"}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* --- LIST LAYOUT (Perubahan Utama) --- */}
        {/* Menggunakan grid 1 kolom (List) atau 2 kolom di layar besar, beda dengan section sebelumnya */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="group flex items-center justify-between p-4 border-b-2 border-slate-300 hover:border-slate-900 hover:bg-white/80 transition-colors duration-300 cursor-pointer"
            >
              {/* KIRI: Info Menu */}
              <div className="flex items-center gap-4 flex-1">
                {/* Image Thumbnail (Kecil) */}
                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-slate-100 rounded-lg border border-slate-900 overflow-hidden shrink-0">
                  <Image 
                    src={item.img} 
                    alt={item.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform" 
                  />
                </div>
                
                {/* Teks */}
                <div>
                  <h3 className="font-black text-lg md:text-xl leading-tight group-hover:text-orange-600 transition-colors">
                    {item.name}
                  </h3>
                  
                  {/* Harga Mobile (Muncul di bawah nama saat layar kecil) */}
                  <span className="md:hidden inline-block mt-2 font-mono font-bold text-slate-900 bg-orange-100 px-2 py-0.5 rounded text-xs border border-slate-900">
                    {item.price}
                  </span>
                </div>
              </div>

              {/* KANAN: Harga & Action (Desktop) */}
              <div className="hidden md:flex items-center gap-6">
                {/* Garis putus-putus penghubung (Leader line) */}
                <div className="flex-1 border-b-2 border-dashed border-slate-300 w-12 lg:w-24 opacity-50"></div>
                
                <span className="font-mono font-bold text-lg text-slate-900 whitespace-nowrap">
                  {item.price}
                </span>

                {/* Add Button (Icon Only) */}
                <button className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors">
                  <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                </button>
              </div>

              {/* Action Mobile */}
              <button className="md:hidden ml-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-900 text-white">
                 <ArrowRight size={16} className="-rotate-45" />
              </button>
            </div>
          ))}
        </div>

        {/* --- EMPTY STATE (Jika filter kosong) --- */}
        {filteredItems.length === 0 && (
          <div className="py-20 text-center flex flex-col items-center opacity-50">
            <UtensilsCrossed size={48} className="mb-4 text-slate-400" />
            <p className="font-bold text-lg">Menu tidak ditemukan.</p>
          </div>
        )}

      </div>
    </section>
  );
}
