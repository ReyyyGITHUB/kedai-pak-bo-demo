export default function Marquee() {
  return (
    <div className="absolute bottom-0 left-0 w-full bg-[#1A1A1A] text-[#F3F0EA] py-3 overflow-hidden z-20 whitespace-nowrap">
      <div className="marquee-track">
        <span className="text-xl md:text-2xl font-black italic tracking-widest mx-4">
          NASI GORENG SPESIAL • KEDAI PAK BO • BEST IN TOWN • ORDER NOW •{" "}
        </span>
        <span className="text-xl md:text-2xl font-black italic tracking-widest mx-4">
          NASI GORENG SPESIAL • KEDAI PAK BO • BEST IN TOWN • ORDER NOW •{" "}
        </span>
        <span className="text-xl md:text-2xl font-black italic tracking-widest mx-4">
          NASI GORENG SPESIAL • KEDAI PAK BO • BEST IN TOWN • ORDER NOW •{" "}
        </span>
      </div>
    </div>
  );
}
