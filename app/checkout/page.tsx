"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useCart } from "../components/cart/CartProvider";
import { calcTotal, formatRupiah } from "../components/cart/cartTypes";

const WA_NUMBER = "6285799799857";

export default function CheckoutPage() {
  const { items, setQty, clear } = useCart();
  const total = useMemo(() => calcTotal(items), [items]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const waText = useMemo(() => {
    const lines = items.map(
      (i) => `- ${i.name} x${i.qty} = ${formatRupiah(i.price * i.qty)}`,
    );

    return (
      `Halo Kedai Pak Bo, saya mau pesan.\n\n` +
      `Nama: ${name || "-"}\n` +
      `No HP: ${phone || "-"}\n\n` +
      `Pesanan:\n` +
      `${lines.join("\n")}\n\n` +
      `${note ? `Catatan: ${note}\n\n` : ""}` +
      `Total bayar: ${formatRupiah(total)}`
    );
  }, [items, name, phone, note, total]);

  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waText)}`;
  const phoneDigits = phone.replace(/\D/g, "");
  const canSubmit = name.trim().length > 0 && phoneDigits.length >= 12;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#F3F0EA] text-[#1A1A1A] px-5 md:px-12 py-16">
        <h1 className="text-3xl md:text-5xl font-black">Checkout</h1>
        <p className="mt-3 text-slate-600">Keranjang kamu kosong.</p>
        <Link
          href="/"
          className="inline-block mt-6 text-sm font-black border-2 border-slate-900 px-4 py-2 rounded-full bg-orange-600 text-white shadow-[3px_3px_0_#1A1A1A]"
        >
          Kembali Pilih Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F3F0EA] text-[#1A1A1A] px-5 md:px-12 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-end justify-between gap-4">
          <h1 className="text-3xl md:text-5xl font-black">Checkout</h1>
          <Link
            href="/"
            className="text-xs md:text-sm font-black border-2 border-slate-900 px-4 py-2 rounded-full bg-white text-slate-900 shadow-[3px_3px_0_#1A1A1A]"
          >
            Tambah Menu
          </Link>
        </div>

        <div className="mt-8 bg-white border-2 border-slate-900 rounded-2xl p-4 shadow-[6px_6px_0_#1A1A1A]">
          <h2 className="text-lg font-black mb-4">Ringkasan Pesanan</h2>
          <div className="space-y-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3"
              >
                <div>
                  <div className="font-black">{item.name}</div>
                  <div className="text-xs text-slate-500">
                    {formatRupiah(item.price)} / porsi
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQty(item.id, item.qty - 1)}
                    className="w-7 h-7 flex items-center justify-center rounded-full border-2 border-slate-900"
                  >
                    -
                  </button>
                  <span className="min-w-[24px] text-center font-black">
                    {item.qty}
                  </span>
                  <button
                    onClick={() => setQty(item.id, item.qty + 1)}
                    className="w-7 h-7 flex items-center justify-center rounded-full border-2 border-slate-900 bg-orange-600 text-white"
                  >
                    +
                  </button>
                </div>
                <div className="font-black">
                  {formatRupiah(item.price * item.qty)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t-2 border-dashed border-slate-200 flex items-center justify-between">
            <span className="font-black">Total</span>
            <span className="text-lg font-black">{formatRupiah(total)}</span>
          </div>
        </div>

        <div className="mt-8 bg-white border-2 border-slate-900 rounded-2xl p-4 shadow-[6px_6px_0_#1A1A1A]">
          <h2 className="text-lg font-black mb-4">Data Pemesan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama"
              className="w-full border-2 border-slate-900 rounded-full px-4 py-2 font-bold"
            />
            <div className="flex flex-col gap-2">
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="No HP (min 12 digit)"
                type="tel"
                inputMode="numeric"
                minLength={12}
                required
                className={`w-full border-2 rounded-full px-4 py-2 font-bold ${
                  phone.length > 0 && phoneDigits.length < 12
                    ? "border-red-500"
                    : "border-slate-900"
                }`}
              />
              {phone.length > 0 && phoneDigits.length < 12 && (
                <p className="text-xs font-bold text-red-600">
                  Nomor HP minimal 12 digit.
                </p>
              )}
            </div>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Catatan ke Penjual"
              className="md:col-span-2 w-full border-2 border-slate-900 rounded-2xl px-4 py-3 font-bold min-h-[100px]"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4">
          <a
            href={canSubmit ? waLink : "#"}
            target={canSubmit ? "_blank" : undefined}
            className={`inline-flex items-center justify-center gap-2 text-sm md:text-base font-black border-2 border-slate-900 px-6 py-3 rounded-full shadow-[4px_4px_0_#1A1A1A] ${
              canSubmit
                ? "bg-green-600 text-white"
                : "bg-slate-200 text-slate-500 cursor-not-allowed"
            }`}
            aria-disabled={!canSubmit}
            onClick={(e) => {
              if (!canSubmit) {
                e.preventDefault();
                return;
              }
              clear();
            }}
          >
            <img alt="WhatsApp" className="w-4 h-4" />
            Kirim Pesanan via WhatsApp
          </a>
          <button
            onClick={clear}
            className="text-xs md:text-sm font-black border-2 border-slate-900 px-4 py-2 rounded-full bg-white text-slate-900"
          >
            Kosongkan Keranjang
          </button>
        </div>
      </div>
    </div>
  );
}
