"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { OrbitLogo, SearchIcon } from "./Icons";

interface NavbarProps {
  onOpenSearch?: () => void;
}

export default function Navbar({ onOpenSearch }: NavbarProps) {
  const pathname = usePathname();

  const isGuides = pathname.startsWith("/guides");
  const isAbout = pathname.startsWith("/about");
  const isDocs = !isGuides && !isAbout;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200/80 bg-white/95 backdrop-blur-sm">
      <div className="flex h-14 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-8">
          <Link href="/docs" className="flex items-center gap-2.5 group">
            <OrbitLogo className="w-6 h-6 transition-transform group-hover:scale-105" />
            <span className="text-base font-semibold tracking-tight text-gray-900">
              Orbit Docs
            </span>
          </Link>

          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <Link
              href="/docs"
              className={`transition-colors relative py-4 ${
                isDocs
                  ? "text-blue-600 font-medium"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Documentation
              {isDocs && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
              )}
            </Link>

            <Link
              href="/guides"
              className={`transition-colors relative py-4 ${
                isGuides
                  ? "text-blue-600 font-medium"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Guides
              {isGuides && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
              )}
            </Link>

            <Link
              href="/about"
              className={`transition-colors relative py-4 ${
                isAbout
                  ? "text-blue-600 font-medium"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              About
              {isAbout && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
              )}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenSearch}
            className="flex h-9 w-60 md:w-72 items-center justify-between rounded-lg border border-gray-200 bg-gray-50/70 px-3 text-xs text-gray-500 shadow-2xs hover:border-gray-300 hover:bg-gray-100/70 transition-all cursor-pointer"
          >
            <span className="flex items-center gap-2 truncate">
              <SearchIcon className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <span className="truncate">
                {isGuides ? "Search guides, APIs, conf..." : "Search documentation..."}
              </span>
            </span>
            <kbd className="hidden sm:inline-flex items-center rounded border border-gray-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-gray-400">
              ⌘K
            </kbd>
          </button>

          <span className="inline-flex items-center rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-mono text-gray-600">
            v1.0
          </span>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Repository"
            className="hidden sm:flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:text-gray-800 hover:bg-gray-50 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M7 8l4 4-4 4" />
              <line x1="13" y1="16" x2="17" y2="16" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
