import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="md:col-span-5 relative flex items-end justify-center md:h-screen mt-8 md:mt-0 overflow-visible">
      {/* Gambar Chef */}
      <div className="relative z-10 w-[70%] sm:w-[85%] md:w-[80%] md:-ml-[24%] lg:w-[80%] lg:-ml-[18%] bottom-2 overflow-visible">
        <Image
          src="/images/bo-new.png"
          alt="Chef Pak Bo"
          width={600}
          height={800}
          className="object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.25)] md:scale-[1.06] lg:scale-100"
          unoptimized
          priority
        />
      </div>
    </div>
  );
}
