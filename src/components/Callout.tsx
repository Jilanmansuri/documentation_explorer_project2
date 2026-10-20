import React from "react";
import { InfoIcon, AlertTriangleIcon } from "./Icons";

type CalloutType = "info" | "warning" | "note";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

export default function Callout({
  type = "info",
  title,
  children,
}: CalloutProps) {
  if (type === "warning") {
    return (
      <div className="my-5 rounded-lg border-l-4 border-amber-500 bg-amber-50/70 p-4 text-xs sm:text-sm text-amber-900">
        <div className="flex items-start gap-3">
          <AlertTriangleIcon className="w-5 h-5 shrink-0 text-amber-600 mt-0.5" />
          <div className="leading-relaxed">
            {title && <span className="font-semibold">{title}: </span>}
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-5 rounded-lg border border-blue-200/80 bg-blue-50/60 p-4 text-xs sm:text-sm text-blue-950">
      <div className="flex items-start gap-3">
        <InfoIcon className="w-5 h-5 shrink-0 text-blue-600 mt-0.5" />
        <div className="leading-relaxed">
          {title && <span className="font-semibold text-blue-900">{title}: </span>}
          {children}
        </div>
      </div>
    </div>
  );
}
