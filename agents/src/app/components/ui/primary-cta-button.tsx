import * as React from "react";

import { cn } from "./utils";

type PrimaryCtaButtonProps = React.ComponentProps<"button"> & {
  active?: boolean;
  icon?: React.ReactNode;
};

function PrimaryCtaButton({
  active = true,
  icon,
  className,
  children,
  style,
  type,
  ...props
}: PrimaryCtaButtonProps) {
  return (
    <button
      data-slot="primary-cta-button"
      type={type ?? "button"}
      className={cn(
        "inline-flex h-[40px] shrink-0 items-center justify-center gap-[8px] rounded-[9999px] px-[20px] py-[8px] transition-[background-color,color] duration-200 focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      style={{
        backgroundColor: active
          ? "var(--cta-primary-bg)"
          : "var(--cta-primary-bg-inactive)",
        color: active
          ? "var(--cta-primary-foreground)"
          : "var(--cta-primary-foreground-inactive)",
        ...style,
      }}
      {...props}
    >
      {icon}
      <span
        className="font-['SF_Pro:Medium',sans-serif] text-[14px] leading-[20px] font-medium whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {children}
      </span>
    </button>
  );
}

export { PrimaryCtaButton };
