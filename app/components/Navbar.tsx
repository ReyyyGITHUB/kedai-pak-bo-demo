export default function Navbar() {
  return (
    <nav className="absolute top-4 left-0 right-0 px-5 md:px-12 flex items-center justify-between z-40">
      <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md border-2 border-slate-900 px-4 py-2 rounded-full shadow-[4px_4px_0_#1A1A1A]">
        <span className="font-black tracking-tight text-sm md:text-base">
          PAK BO.
        </span>
        <span className="hidden md:inline text-[10px] font-mono tracking-widest uppercase text-slate-600">
          (EST. 2024 — SEMARANG)
        </span>
      </div>
      <button className="text-xs md:text-sm font-black border-2 border-slate-900 px-4 py-2 rounded-full bg-orange-600 text-white shadow-[3px_3px_0_#1A1A1A]">
        MENU LENGKAP
      </button>
    </nav>
  );
}
