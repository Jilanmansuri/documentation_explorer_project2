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
      <div className="my-4 rounded border-l-4 border-yellow-500 bg-yellow-50 p-4 text-sm text-yellow-900">
        <div className="flex items-start gap-3">
          <AlertTriangleIcon className="w-5 h-5 shrink-0 text-yellow-600 mt-0.5" />
          <div className="leading-relaxed">
            {title && <span className="font-semibold">{title}: </span>}
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-4 rounded border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
      <div className="flex items-start gap-3">
        <InfoIcon className="w-5 h-5 shrink-0 text-blue-600 mt-0.5" />
        <div className="leading-relaxed">
          {title && <span className="font-semibold">{title}: </span>}
          {children}
        </div>
      </div>
    </div>
  );
}
