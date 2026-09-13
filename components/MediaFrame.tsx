import Image from "next/image";
import type { MediaAsset, MediaTone } from "@/lib/types";

type Variant = "icon" | "phone" | "wide" | "dashboard";

const hatch: Record<Variant, Record<MediaTone, string>> = {
  icon: {
    frost: "bg-[repeating-linear-gradient(135deg,#2A3236_0_6px,#222A2D_6px_12px)] text-frost",
    green:
      "bg-[repeating-linear-gradient(135deg,#26302A_0_6px,#1F2823_6px_12px)] text-[#A3BCA7]",
    ember:
      "bg-[repeating-linear-gradient(135deg,#33261D_0_6px,#2A2018_6px_12px)] text-[#E08B5F]",
    neutral:
      "bg-[repeating-linear-gradient(135deg,#2A3236_0_6px,#222A2D_6px_12px)] text-meta",
  },
  phone: {
    frost:
      "bg-[repeating-linear-gradient(120deg,#242321_0_7px,#1D1C1A_7px_14px)] text-[#A7B1B3]",
    green:
      "bg-[repeating-linear-gradient(120deg,#242321_0_7px,#1D1C1A_7px_14px)] text-[#A3BCA7]",
    ember:
      "bg-[repeating-linear-gradient(120deg,#242321_0_7px,#1D1C1A_7px_14px)] text-[#C9A07F]",
    neutral:
      "bg-[repeating-linear-gradient(120deg,#242321_0_7px,#1D1C1A_7px_14px)] text-meta",
  },
  wide: {
    frost:
      "bg-[repeating-linear-gradient(120deg,#242321_0_7px,#1D1C1A_7px_14px)] text-[#A7B1B3]",
    green:
      "bg-[repeating-linear-gradient(120deg,#242321_0_7px,#1D1C1A_7px_14px)] text-[#A3BCA7]",
    ember:
      "bg-[repeating-linear-gradient(120deg,#2A2320_0_7px,#221D1A_7px_14px)] text-[#C9A07F]",
    neutral:
      "bg-[repeating-linear-gradient(120deg,#242321_0_7px,#1D1C1A_7px_14px)] text-meta",
  },
  dashboard: {
    frost:
      "bg-[repeating-linear-gradient(120deg,#242321_0_8px,#1D1C1A_8px_16px)] text-frost",
    green:
      "bg-[repeating-linear-gradient(120deg,#242321_0_8px,#1D1C1A_8px_16px)] text-[#A3BCA7]",
    ember:
      "bg-[repeating-linear-gradient(120deg,#242321_0_8px,#1D1C1A_8px_16px)] text-[#C9A07F]",
    neutral:
      "bg-[repeating-linear-gradient(120deg,#242321_0_8px,#1D1C1A_8px_16px)] text-meta",
  },
};

const frames: Record<Variant, string> = {
  icon: "size-[68px] rounded-2xl text-[10px] tracking-[0.06em]",
  phone:
    "aspect-[9/19.5] max-w-[200px] flex-1 rounded-[20px] border border-frame text-[10.5px] leading-[1.6] tracking-[0.05em]",
  wide: "min-w-0 flex-1 aspect-video rounded-md p-2.5 text-[10.5px] tracking-[0.06em]",
  dashboard:
    "aspect-[16/10] rounded-md border border-frame-soft p-4 text-[11.5px] leading-[1.6] tracking-[0.05em]",
};

const sizes: Record<Variant, string> = {
  icon: "68px",
  phone: "(max-width: 640px) 45vw, 200px",
  wide: "(max-width: 640px) 70vw, 400px",
  dashboard: "(max-width: 640px) 100vw, 560px",
};

export function MediaFrame({
  asset,
  variant,
  interactiveDim = false,
}: {
  asset: MediaAsset;
  variant: Variant;
  interactiveDim?: boolean;
}) {
  const filled = Boolean(asset.src);
  const filledIcon = variant === "icon" && filled;
  const filledPhone = variant === "phone" && filled;
  const phonePad = variant === "phone" && !filled ? "p-2.5" : "";

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden text-center font-mono ${frames[variant]} ${phonePad} ${filledPhone ? "border-transparent" : ""} ${filledIcon ? "bg-white" : hatch[variant][asset.tone]} ${interactiveDim && filled ? (variant === "icon" ? "app-media-dim-icon" : "app-media-dim") : ""}`}
    >
      {asset.src ? (
        <>
          <Image
            src={asset.src}
            alt={asset.alt}
            fill
            sizes={sizes[variant]}
            className="object-cover"
          />
          {variant === "phone" ? (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(25_25_24/0.22)_0%,rgb(25_25_24/0.5)_55%,rgb(25_25_24/0.88)_100%)] shadow-[inset_0_0_28px_12px_#191918]"
            />
          ) : null}
        </>
      ) : (
        <span className="whitespace-pre-line">{asset.label}</span>
      )}
    </div>
  );
}
