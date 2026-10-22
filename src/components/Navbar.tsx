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
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white">
      <div className="flex h-14 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-7">
          <Link href="/docs" className="flex items-center gap-2">
            <OrbitLogo className="w-6 h-6" />
            <span className="text-base font-bold text-gray-800">
              Orbit Docs
            </span>
          </Link>

          <nav className="hidden sm:flex items-center gap-5 text-sm">
            <Link
              href="/docs"
              className={`py-4 transition-colors ${
                isDocs
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Documentation
            </Link>

            <Link
              href="/guides"
              className={`py-4 transition-colors ${
                isGuides
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Guides
            </Link>

            <Link
              href="/about"
              className={`py-4 transition-colors ${
                isAbout
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              About
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenSearch}
            className="flex h-9 w-56 md:w-64 items-center justify-between rounded border border-gray-300 bg-gray-50 px-3 text-xs text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <span className="flex items-center gap-2 truncate">
              <SearchIcon className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <span className="truncate">
                {isGuides ? "Search guides, APIs..." : "Search docs..."}
              </span>
            </span>
            <kbd className="hidden sm:inline-block rounded border border-gray-300 bg-white px-1.5 py-0.5 text-[10px] text-gray-500 font-mono">
              Ctrl+K
            </kbd>
          </button>

          <span className="inline-flex items-center rounded border border-gray-300 bg-gray-100 px-2 py-0.5 text-xs font-mono text-gray-600">
            v1.0
          </span>
        </div>
      </div>
    </header>
  );
}
