import Image from "next/image";
import type { MediaAsset } from "@/lib/types";

export function AppIcon({ asset }: { asset: MediaAsset }) {
  return (
    <div className="app-media-dim-icon relative size-12 shrink-0 overflow-hidden rounded-xl bg-white">
      <Image src={asset.src} alt={asset.alt} fill sizes="48px" className="object-cover" />
    </div>
  );
}
