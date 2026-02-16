"use client";

import { Flame, Minus, Plus } from "lucide-react";
import Image from "next/image";
import type { MenuItem } from "./menuFavoritesData";
import { useCart } from "../cart/CartProvider";

export default function MenuFavoritesCard({ item }: { item: MenuItem }) {
  const { items, addItem, setQty } = useCart();
  const current = items.find((i) => i.id === `fav-${item.id}`);
  const qty = current?.qty ?? 0;

  return (
    <div className="group relative flex flex-col h-full bg-white border-2 border-slate-900 rounded-2xl p-3 shadow-[6px_6px_0_#1A1A1A] hover:shadow-[10px_10px_0_#1A1A1A] hover:-translate-y-1 transition-all duration-300">
      {/* Badge Best Seller */}
      {item.isBestSeller && (
        <div className="absolute -top-3 -right-3 z-20 bg-[#FFD700] text-slate-900 text-[10px] font-black uppercase tracking-wider px-3 py-1.5 border-2 border-slate-900 rounded-full shadow-sm transform rotate-12 group-hover:rotate-6 transition-transform">
          Best Seller!
        </div>
      )}

      {/* Image */}
      <div className="relative w-full aspect-square bg-slate-100 rounded-xl border-2 border-slate-900 overflow-hidden mb-4 group-hover:bg-orange-50 transition-colors">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1A1A1A_1px,transparent_1px)] [background-size:8px_8px]"></div>
        <Image
          src={item.img}
          alt={item.name}
          fill
          className="object-contain p-4 group-hover:scale-110 transition-transform duration-500 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-black text-lg md:text-xl leading-tight text-slate-900">
            {item.name}
          </h3>
          {item.spicyLevel > 0 && (
            <div className="flex shrink-0 mt-1" title={`Level Pedas: ${item.spicyLevel}`}>
              {[...Array(item.spicyLevel)].map((_, i) => (
                <Flame key={i} size={14} className="text-red-500 fill-red-500" />
              ))}
            </div>
          )}
        </div>

        <p className="text-sm text-slate-500 font-medium leading-snug mb-4 line-clamp-2">
          {item.desc}
        </p>

        {/* Price + action */}
        <div className="mt-auto pt-4 border-t-2 border-dashed border-slate-200">
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                Harga
              </span>
              <span className="text-lg font-black text-slate-900">
                {item.price}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {qty > 0 ? (
                <div className="flex items-center gap-2 border-2 border-slate-900 rounded-full px-2 py-1 bg-white shadow-[2px_2px_0_#1A1A1A]">
                  <button
                    onClick={() => setQty(`fav-${item.id}`, qty - 1)}
                    className="w-7 h-7 flex items-center justify-center rounded-full border-2 border-slate-900"
                    aria-label="Kurangi jumlah"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="text-sm font-black min-w-[18px] text-center">
                    {qty}
                  </span>
                  <button
                    onClick={() =>
                      addItem({
                        id: `fav-${item.id}`,
                        name: item.name,
                        price: item.priceValue,
                      })
                    }
                    className="w-7 h-7 flex items-center justify-center rounded-full border-2 border-slate-900 bg-orange-600 text-white"
                    aria-label="Tambah jumlah"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() =>
                    addItem({
                      id: `fav-${item.id}`,
                      name: item.name,
                      price: item.priceValue,
                    })
                  }
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white hover:bg-orange-600 border-2 border-slate-900 shadow-[2px_2px_0_#ccc]"
                  aria-label="Tambah pesanan"
                >
                  <Plus size={20} strokeWidth={3} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
