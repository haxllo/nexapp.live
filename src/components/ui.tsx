import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight, WindowsLogo } from "@phosphor-icons/react/ssr";

const textLinkClass =
  "group inline-flex items-center gap-1.5 text-[13.5px] text-paper transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-ember ";
const textLinkLabel =
  "underline decoration-current/30 underline-offset-[5px] transition-colors group-hover:decoration-current";
const textLinkArrow =
  "translate-y-px text-ember transition-transform duration-200 group-hover:translate-x-0.5";

export function Eyebrow({
  children,
  rule = false,
  className = "",
}: {
  children: ReactNode;
  rule?: boolean;
  className?: string;
}) {
  if (rule) {
    return (
      <span className={`eyebrow inline-flex items-center gap-2 ${className}`}>
        <span aria-hidden className="h-px w-5 bg-current opacity-50" />
        {children}
      </span>
    );
  }
  return <span className={`eyebrow ${className}`}>{children}</span>;
}

export function PageHead({
  title,
  lede,
  eyebrow,
  children,
}: {
  title: ReactNode;
  lede?: ReactNode;
  eyebrow?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="page-head">
      <div>
        <div className="mb-6">
          <Eyebrow rule>{eyebrow ?? title}</Eyebrow>
        </div>
        <h1>{title}</h1>
      </div>
      <div>
        {lede && <p className="page-head-lede">{lede}</p>}
        {children}
      </div>
    </div>
  );
}

export function TextLink({
  href,
  children,
  external = false,
  className = "",
  testId,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
  testId?: string;
}) {
  const inner = (
    <>
      <span className={textLinkLabel}>{children}</span>
      <ArrowUpRight size={13} aria-hidden className={textLinkArrow} />
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        data-testid={testId}
        className={`${textLinkClass} ${className}`}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} data-testid={testId} className={`${textLinkClass} ${className}`}>
      {inner}
    </Link>
  );
}

const buttonBase =
  "inline-flex max-w-full items-center justify-center rounded-full font-medium transition-[background-color,color,border-color,transform,box-shadow] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] active:translate-y-px";
const buttonSkin =
  "text-[#24332c] bg-[#e6eee9] border border-white/70 shadow-[inset_0_1px_0_#fff,0_3px_10px_#0002] hover:bg-white hover:-translate-y-px";

const buttonSizes = {
  md: "h-11 px-4.5 text-[13.5px] gap-2",
  lg: "h-12 px-5.5 text-[14.5px] gap-2.5",
};

export function Button({
  href,
  children,
  external = false,
  size = "md",
  withWindows = false,
  icon,
  className = "",
  testId,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  size?: keyof typeof buttonSizes;
  withWindows?: boolean;
  icon?: ReactNode;
  className?: string;
  testId?: string;
}) {
  const classes = `${buttonBase} ${buttonSizes[size]} ${buttonSkin} ${className}`;
  const inner = (
    <>
      {withWindows && (
        <WindowsLogo size={size === "lg" ? 15 : 14} weight="fill" aria-hidden className="shrink-0" />
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        data-testid={testId}
        className={classes}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} data-testid={testId} className={classes}>
      {inner}
    </Link>
  );
}

export function Kbd({
  children,
  wide = false,
}: {
  children: ReactNode;
  wide?: boolean;
}) {
  return <kbd className={`keycap ${wide ? "min-w-[2.75rem]" : ""}`}>{children}</kbd>;
}
