"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowIntroIcon,
  DownloadIcon,
  FolderIcon,
  BranchIcon,
  LayoutIcon,
  RefreshIcon,
  GearIcon,
  TerminalIcon,
  CodeIcon,
  FileTextIcon,
  CompassIcon,
} from "./Icons";

export default function Sidebar() {
  const pathname = usePathname();
  const isGuides = pathname.startsWith("/guides");

  const isRouteActive = (href: string) => {
    if (href === "/docs") {
      return pathname === "/" || pathname === "/docs" || pathname === "/docs/introduction";
    }
    return pathname === href;
  };

  const isRoutingExpanded =
    pathname.startsWith("/docs/routing") || pathname.startsWith("/guides");

  return (
    <aside className="w-64 shrink-0 border-r border-gray-200/80 bg-white min-h-[calc(100vh-3.5rem)] flex flex-col justify-between select-none">
      <div className="p-5 pb-6 overflow-y-auto">
        <div className="mb-6">
          {isGuides ? (
            <div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-indigo-600 mb-1">
                <CompassIcon className="w-3.5 h-3.5" />
                <span>GUIDES CONTEXT</span>
              </div>
              <h2 className="text-sm font-semibold text-gray-900">Next.js App Router</h2>
              <p className="text-xs text-gray-400">v1.0 Architecture Guide</p>
            </div>
          ) : (
            <div>
              <h2 className="text-sm font-semibold text-gray-900">Core Documentation</h2>
              <p className="text-xs text-gray-400">v1.0 Architecture Guide</p>
            </div>
          )}
        </div>

        <nav className="space-y-6 text-xs">
          <div>
            <div className="px-2 mb-2 text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
              Getting Started
            </div>
            <ul className="space-y-0.5">
              <li>
                <Link
                  href="/docs"
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-md transition-colors ${
                    isRouteActive("/docs")
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <ArrowIntroIcon className="w-4 h-4 shrink-0 text-gray-400" />
                  <span>Introduction</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/installation"
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-md transition-colors ${
                    isRouteActive("/docs/installation")
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <DownloadIcon className="w-4 h-4 shrink-0 text-gray-400" />
                  <span>Installation</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/project-setup"
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-md transition-colors ${
                    isRouteActive("/docs/project-setup")
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <FolderIcon className="w-4 h-4 shrink-0 text-gray-400" />
                  <span>Project Setup</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="px-2 mb-2 text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
              Core Concepts
            </div>
            <ul className="space-y-0.5">
              <li>
                <Link
                  href="/docs/routing"
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-md transition-colors ${
                    isRouteActive("/docs/routing")
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <BranchIcon className="w-4 h-4 shrink-0 text-gray-400" />
                  <span>Routing</span>
                </Link>

                {isRoutingExpanded && (
                  <ul className="mt-1 ml-6 pl-2.5 border-l border-gray-200/80 space-y-1">
                    <li>
                      <Link
                        href="/docs/routing/defining-routes"
                        className={`block py-1 text-xs transition-colors ${
                          isRouteActive("/docs/routing/defining-routes")
                            ? "text-blue-600 font-medium"
                            : "text-gray-500 hover:text-gray-800"
                        }`}
                      >
                        Defining Routes
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/guides"
                        className={`block py-1 text-xs transition-colors ${
                          pathname === "/guides" || pathname.startsWith("/guides/nextjs")
                            ? "text-blue-600 font-medium"
                            : "text-gray-500 hover:text-gray-800"
                        }`}
                      >
                        Dynamic Routes
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/routing/parallel-intercepting"
                        className={`block py-1 text-xs transition-colors ${
                          isRouteActive("/docs/routing/parallel-intercepting")
                            ? "text-blue-600 font-medium"
                            : "text-gray-500 hover:text-gray-800"
                        }`}
                      >
                        Parallel &amp; Intercepting
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link
                  href="/docs/layouts"
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-md transition-colors ${
                    isRouteActive("/docs/layouts")
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <LayoutIcon className="w-4 h-4 shrink-0 text-gray-400" />
                  <span>Layouts</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/data-fetching"
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-md transition-colors ${
                    isRouteActive("/docs/data-fetching")
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <RefreshIcon className="w-4 h-4 shrink-0 text-gray-400" />
                  <span>Data Fetching</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="px-2 mb-2 text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
              Reference
            </div>
            <ul className="space-y-0.5">
              <li>
                <Link
                  href="/docs/configuration"
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-md transition-colors ${
                    isRouteActive("/docs/configuration")
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <GearIcon className="w-4 h-4 shrink-0 text-gray-400" />
                  <span>Configuration</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/cli-commands"
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-md transition-colors ${
                    isRouteActive("/docs/cli-commands")
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <TerminalIcon className="w-4 h-4 shrink-0 text-gray-400" />
                  <span>CLI Commands</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="p-4 border-t border-gray-200/80 space-y-2 text-xs">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors py-1 px-1 rounded"
        >
          <CodeIcon className="w-3.5 h-3.5 text-gray-400" />
          <span>GitHub Repo</span>
        </a>
        <Link
          href="/docs/configuration"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors py-1 px-1 rounded"
        >
          <FileTextIcon className="w-3.5 h-3.5 text-gray-400" />
          <span>API Reference</span>
        </Link>
      </div>
    </aside>
  );
}
