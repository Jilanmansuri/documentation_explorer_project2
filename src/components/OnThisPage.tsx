import React from "react";
import { EditIcon } from "./Icons";

export interface TocItem {
  id: string;
  label: string;
}

interface OnThisPageProps {
  items: TocItem[];
  activeId?: string;
  githubUrl?: string;
}

export default function OnThisPage({
  items,
  activeId,
  githubUrl = "https://github.com",
}: OnThisPageProps) {
  return (
    <aside className="hidden xl:block w-56 shrink-0 py-8 px-6 text-xs sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto">
      <div className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase mb-3">
        On this page
      </div>

      <ul className="space-y-1">
        {items.map((item) => {
          const isActive = activeId ? activeId === item.id : false;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block px-2.5 py-1.5 rounded transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>

      <hr className="my-5 border-gray-200" />

      <a
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors"
      >
        <EditIcon className="w-3.5 h-3.5 text-gray-400" />
        <span>Edit this page on GitHub</span>
      </a>
    </aside>
  );
}
