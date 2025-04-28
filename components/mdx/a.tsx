import { RiArrowRightUpLine } from "@remixicon/react";
import Link from "next/link";

export function mdxA(
  { children, className = "", href, ...props }
  : 
  React.AnchorHTMLAttributes<HTMLAnchorElement> & 
  { children: React.ReactNode, className?: string, href: string }
) {
  if (href.includes("https://") || href.includes("http://")) {
    return (
      <a
        href={href}
        className={`inline-flex items-start text-foreground/85 border-b border-foreground/50 font-[family-name:var(--font-geist-mono)] ${className}`}
        {...props}
      >
        {children}
        <span className="relative top-1">
          <RiArrowRightUpLine size={14}/>
        </span>
      </a>
    );
  } else {
    return (
      <Link
        href={href}
        className={`${className} text-foreground/85 border-b border-foreground/50 font-[family-name:var(--font-geist-mono)]`}
        {...props}
      >
        {children}
      </Link>
    );
  }
}