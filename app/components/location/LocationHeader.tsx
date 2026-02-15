export default function LocationHeader() {
  return (
    <div className="mb-10">
      <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-slate-500 mb-3">
        <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
        Lokasi & Kontak
      </div>
      <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4 leading-none">
        Datang <span className="text-orange-600">Langsung</span>
      </h2>
      <p className="text-slate-600 font-medium text-base md:text-lg">
        Mampir ke kedai kami atau order via kontak di bawah.
      </p>
    </div>
  );
}
