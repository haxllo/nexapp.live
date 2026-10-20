import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, WindowsLogo } from "@/components/icons";

const ease = "ease-[cubic-bezier(0.22,1,0.36,1)]";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  withWindowsMark?: boolean;
  icon?: ReactNode;
  className?: string;
};

const sizes = {
  sm: "h-8 px-3 text-[12.5px] gap-1.5",
  md: "h-10 px-4 text-[13.5px] gap-2",
  lg: "h-11 px-5 text-[14px] gap-2",
};

const variants = {
  primary:
    "bg-paper text-ink hover:bg-white active:bg-[#e2e5ea] border border-transparent",
  secondary:
    "border border-line-2 text-paper hover:bg-white/[0.045] active:bg-white/[0.07]",
  quiet: "text-muted hover:text-paper border border-transparent",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  withWindowsMark = false,
  icon,
  className = "",
}: ButtonProps) {
  const content = (
    <>
      {withWindowsMark && (
        <WindowsLogo size={14} weight="fill" aria-hidden className="shrink-0" />
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="whitespace-nowrap">{children}</span>
    </>
  );

  const classes = `inline-flex items-center justify-center rounded-[8px] font-medium tracking-[-0.005em] transition-[background-color,color,border-color,transform] duration-200 ${ease} active:translate-y-px ${sizes[size]} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  const classes = `group inline-flex items-center gap-1.5 text-[13.5px] text-paper transition-colors duration-200 ${ease} hover:text-signal ${className}`;
  const inner = (
    <>
      <span className="underline decoration-white/25 underline-offset-[3px] transition-colors group-hover:decoration-signal/70">
        {children}
      </span>
      <ArrowRight
        size={13}
        aria-hidden
        className="translate-y-px transition-transform duration-200 group-hover:translate-x-0.5"
      />
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}

export function Kbd({ children, wide = false }: { children: ReactNode; wide?: boolean }) {
  return <kbd className={`keycap ${wide ? "min-w-[2.6rem]" : ""}`}>{children}</kbd>;
}

export function SectionHead({
  title,
  children,
  className = "",
}: {
  title: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-[46rem] ${className}`}>
      <h2 className="text-[28px] leading-[1.06] tracking-[-0.032em] text-paper sm:text-[35px]">
        {title}
      </h2>
      {children && (
        <p className="mt-4 max-w-[54ch] text-[15px] leading-[1.65] text-muted">
          {children}
        </p>
      )}
    </div>
  );
}

export function PageHead({
  title,
  lede,
  children,
}: {
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-[52rem]">
      <h1 className="text-[38px] leading-[1.02] tracking-[-0.035em] text-paper sm:text-[46px] md:text-[54px]">
        {title}
      </h1>
      {lede && (
        <p className="mt-5 max-w-[52ch] text-[16px] leading-[1.65] text-muted">
          {lede}
        </p>
      )}
      {children && <div className="mt-8">{children}</div>}
    </div>
  );
}

export function Figure({
  value,
  label,
  note,
}: {
  value: string;
  label: string;
  note?: string;
}) {
  return (
    <div>
      <div className="mono text-[26px] leading-none tracking-[-0.02em] text-paper tabular-nums">
        {value}
      </div>
      <div className="mt-3 text-[13px] text-muted">{label}</div>
      {note && <div className="mono mt-1 text-[10.5px] text-faint">{note}</div>}
    </div>
  );
}
