import Image from "next/image";
import type { ReactNode } from "react";

export function DesktopFrame({
  src,
  alt,
  sizes,
  position = "center",
  height = "h-[452px]",
  priority = false,
  dim = false,
  children,
  className = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  position?: string;
  height?: string;
  priority?: boolean;
  dim?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[18px] border border-white/[0.14] bg-white/[0.03] p-2 shadow-[0_60px_140px_-60px_rgba(0,0,0,0.95)] ${className}`}
    >
      <div className={`relative ${height} overflow-hidden rounded-[13px] bg-ink-2`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          style={{ objectPosition: position }}
          className="object-cover"
        />
        <div
          aria-hidden
          className={`absolute inset-0 bg-[radial-gradient(130%_100%_at_50%_8%,rgba(255,255,255,0)_38%,rgba(8,10,14,0.26)_100%)] ${dim ? "bg-black/25" : ""}`}
        />
        <div className="absolute inset-0 flex items-center justify-center p-3">
          {children}
        </div>
      </div>
    </div>
  );
}
