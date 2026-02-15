import { useState } from "react";
import { MapPin, Clock, Phone, Copy, Check } from "lucide-react";
import { LOCATION_INFO } from "./locationData";

export default function LocationInfo() {
  const [copied, setCopied] = useState("");

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="lg:w-[40%] order-2 lg:order-1">
      <div className="space-y-4">
        {/* Alamat (Click to Copy) */}
        <div
          onClick={() => handleCopy(LOCATION_INFO.address, "address")}
          className="group bg-white border-2 border-slate-900 rounded-xl p-5 shadow-[4px_4px_0_#1A1A1A] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#1A1A1A] transition-all cursor-pointer flex items-center justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <MapPin size={16} className="text-orange-600" />
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500">
                Alamat
              </p>
            </div>
            <p className="font-black text-base md:text-lg">
              {LOCATION_INFO.address}
            </p>
          </div>
          <div className="text-slate-400 group-hover:text-slate-900 transition-colors">
            {copied === "address" ? (
              <Check size={20} className="text-green-600" />
            ) : (
              <Copy size={20} />
            )}
          </div>
        </div>

        {/* Jam Buka */}
        <div className="bg-white border-2 border-slate-900 rounded-xl p-5 shadow-[4px_4px_0_#1A1A1A] flex items-center gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Clock size={16} className="text-blue-600" />
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500">
                Jam Buka
              </p>
            </div>
            <p className="font-black text-base md:text-lg">
              {LOCATION_INFO.hours}
            </p>
          </div>
        </div>

        {/* Kontak (Click to Copy) */}
        <div
          onClick={() => handleCopy(LOCATION_INFO.whatsapp, "contact")}
          className="group bg-white border-2 border-slate-900 rounded-xl p-5 shadow-[4px_4px_0_#1A1A1A] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#1A1A1A] transition-all cursor-pointer flex items-center justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Phone size={16} className="text-green-600" />
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500">
                WhatsApp
              </p>
            </div>
            <p className="font-black text-base md:text-lg">
              {LOCATION_INFO.whatsapp}
            </p>
          </div>
          <div className="text-slate-400 group-hover:text-slate-900 transition-colors">
            {copied === "contact" ? (
              <Check size={20} className="text-green-600" />
            ) : (
              <Copy size={20} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
