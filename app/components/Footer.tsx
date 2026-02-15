export default function Footer() {
  return (
    <footer className="relative bg-[#1A1A1A] text-[#F3F0EA] py-12 md:py-16 border-t-2 border-slate-900">
      <div className="px-5 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <div className="text-lg font-black tracking-tight">KEDAI PAK BO</div>
            <p className="text-sm text-slate-300 mt-2 max-w-md">
              Kedai street‑food dengan rasa brutal, porsi pas, dan harga ramah.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <span className="font-mono uppercase tracking-wider text-slate-400">
              Kontak
            </span>
            <span>WA: 0812-3456-7890</span>
            <span>Semarang, Jawa Tengah</span>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <span className="font-mono uppercase tracking-wider text-slate-400">
              Jam Buka
            </span>
            <span>17.00 – 00.00 WIB</span>
            <span>Setiap Hari</span>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-700 text-xs text-slate-400 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <span>© 2026 Kedai Pak Bo. All rights reserved.</span>
          <span>Street Style • Neo‑Brutalism</span>
        </div>
      </div>
    </footer>
  );
}
