import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
};

export function Reveal({ children, delay = 0, className = "", as = "div" }: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Tag = as as "div";
  const style: CSSProperties = { transitionDelay: `${delay}ms` };
  return (
    <Tag
      ref={ref as never}
      style={style}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
