"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SearchIcon } from "./Icons";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SEARCH_ITEMS = [
  {
    title: "Documentation Overview",
    section: "Getting Started",
    href: "/docs",
  },
  {
    title: "Installation & Setup",
    section: "Getting Started",
    href: "/docs/installation",
  },
  {
    title: "Project Setup",
    section: "Getting Started",
    href: "/docs/project-setup",
  },
  {
    title: "Routing & Architecture",
    section: "Core Concepts",
    href: "/docs/routing",
  },
  {
    title: "Dynamic Routes Guide",
    section: "Guides / App Router",
    href: "/guides",
  },
  {
    title: "Defining Routes",
    section: "Core Concepts",
    href: "/docs/routing/defining-routes",
  },
  {
    title: "Parallel & Intercepting",
    section: "Core Concepts",
    href: "/docs/routing/parallel-intercepting",
  },
  {
    title: "Layouts & Templates",
    section: "Core Concepts",
    href: "/docs/layouts",
  },
  {
    title: "Data Fetching & Caching",
    section: "Core Concepts",
    href: "/docs/data-fetching",
  },
  {
    title: "Configuration Reference (orbit.config.ts)",
    section: "Reference",
    href: "/docs/configuration",
  },
  {
    title: "CLI Commands (orbit-cli)",
    section: "Reference",
    href: "/docs/cli-commands",
  },
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filtered = SEARCH_ITEMS.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.section.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/40 backdrop-blur-xs p-4">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-xl rounded-xl border border-gray-200 bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center gap-3 border-b border-gray-200 px-4 py-3">
          <SearchIcon className="w-4 h-4 text-gray-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documentation, guides, and APIs..."
            className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-hidden"
            autoFocus
          />
          <kbd className="rounded border border-gray-200 bg-gray-50 px-1.5 py-0.5 text-[10px] text-gray-400">
            ESC
          </kbd>
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-gray-500">
              No results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            <div className="space-y-1">
              {filtered.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <span className="font-medium">{item.title}</span>
                  <span className="text-[11px] text-gray-400">{item.section}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
