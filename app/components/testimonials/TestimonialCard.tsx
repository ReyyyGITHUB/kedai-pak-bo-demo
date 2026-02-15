import { Star, Quote, CheckCircle2 } from "lucide-react";
import type { Review } from "./reviews";

export default function TestimonialCard({ review }: { review: Review }) {
  return (
    <div
      className={
        `relative flex-shrink-0 w-[220px] sm:w-[260px] md:w-[320px] p-4 md:p-6 ${review.color} ` +
        "border-2 border-slate-900 rounded-xl shadow-[6px_6px_0_#1A1A1A] " +
        `${review.rotate} hover:scale-105 hover:rotate-0 hover:shadow-[10px_10px_0_#1A1A1A] ` +
        "hover:z-30 hover:border-orange-600 transition-all duration-300 ease-out cursor-cell"
      }
    >
      {/* Tape Effect */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-orange-200/50 border border-orange-300/50 rotate-1 backdrop-blur-sm"></div>

      {/* Quote Decoration */}
      <Quote className="absolute top-4 right-4 text-slate-900/5 rotate-180" size={64} />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, idx) => (
            <Star
              key={idx}
              size={14}
              className="fill-orange-500 text-slate-900 stroke-[1.5px]"
            />
          ))}
        </div>

        <p className="font-bold text-base md:text-xl leading-snug text-slate-900 mb-6 flex-1 font-sans">
          "{review.quote}"
        </p>

        <div className="flex items-center gap-3 border-t-2 border-dashed border-slate-200 pt-3 mt-auto">
          <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-xs shadow-sm">
            {review.name[0]}
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-black uppercase text-slate-900">
                @{review.name}
              </span>
              <CheckCircle2 size={12} className="text-blue-500 fill-blue-100" />
            </div>
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wide">
              via {review.platform}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
