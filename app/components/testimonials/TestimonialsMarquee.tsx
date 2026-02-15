import { reviews } from "./reviews";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsMarquee() {
  const looped = [...reviews, ...reviews, ...reviews];

  return (
    <div className="group relative flex overflow-hidden py-10 select-none">
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
      <div className="animate-marquee flex gap-4 md:gap-8 px-4 md:px-6 w-max will-change-transform">
        {looped.map((review, i) => (
          <TestimonialCard key={`${review.name}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
}
