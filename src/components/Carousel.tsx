import { useEffect, useRef, useState } from "react";

export function Carousel({ id, label = "", count = 4, aspect = "aspect-[3/4]", images }: { id: string; label?: string; count?: number; aspect?: string; images?: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const total = images?.length ?? count;

  const go = (i: number) => {
    const el = ref.current;
    if (!el) return;
    el.scrollTo({ left: el.clientWidth * i, behavior: "smooth" });
  };

  useEffect(() => {
    const t = setInterval(() => go((active + 1) % total), 3500);
    return () => clearInterval(t);
  }, [active, total]);

  return (
    <div id={id} className="mx-auto w-full max-w-sm">
      <div
        ref={ref}
        onScroll={(e) => {
          const el = e.currentTarget;
          setActive(Math.round(el.scrollLeft / el.clientWidth));
        }}
        className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} className="w-full shrink-0 snap-center px-2">
            {images ? (
              <img src={images[i]} alt={`${label} ${i + 1}`} loading="lazy" className="w-full rounded-2xl border-2 border-gold/50 bg-card object-contain shadow-2xl" />
            ) : (
              <div className={`${aspect} flex items-center justify-center rounded-2xl border-2 border-gold/50 bg-placeholder p-4 text-center font-semibold text-muted-foreground`}>
                {label} {i + 1}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <button key={i} aria-label={`Slide ${i + 1}`} onClick={() => go(i)} className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-gold" : "w-2 bg-muted"}`} />
        ))}
      </div>
    </div>
  );
}
