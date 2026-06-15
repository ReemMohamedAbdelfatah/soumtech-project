import type { ReactNode } from "react";

export interface PropertyDetailsScrollPanelProps {
  children: ReactNode;
  contentDirection?: "ltr" | "rtl";
}

export default function PropertyDetailsScrollPanel({
  children,
  contentDirection = "ltr",
}: PropertyDetailsScrollPanelProps) {
  return (
    <div className="property-details-scroll-panel">
      <div dir="ltr" className="property-details-scroll-viewport">
        <div dir={contentDirection} className="flex flex-col gap-6 pe-3">
          {children}
        </div>
      </div>
    </div>
  );
}
