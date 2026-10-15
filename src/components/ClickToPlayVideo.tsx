import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ClickToPlayVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[24px] border border-border shadow-2xl">
      {playing ? (
        <video src={src} poster={poster} width={720} height={1280} autoPlay loop muted playsInline controls preload="none" className="h-full w-full" />
      ) : (
        <>
          <img src={poster} alt={label} width={720} height={1280} loading="lazy" decoding="async" className="h-full w-full" />
          <Button type="button" size="icon" aria-label={`Reproduzir ${label}`} title={`Reproduzir ${label}`} onClick={() => setPlaying(true)} className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background/80 text-foreground shadow-xl hover:bg-background [&_svg]:size-7">
            <Play className="fill-current" />
          </Button>
        </>
      )}
    </div>
  );
}