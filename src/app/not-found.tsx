"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DocsLayout from "@/components/DocsLayout";
import CodeBlock from "@/components/CodeBlock";
import {
  ArrowLeftIcon,
  SearchIcon,
  DownloadIcon,
  BranchIcon,
  GearIcon,
  ArrowRightIcon,
} from "@/components/Icons";

export default function NotFound() {
  const router = useRouter();
  const [lookupQuery, setLookupQuery] = useState("/docs/routing/catch-all-param");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (lookupQuery.includes("routing")) {
      router.push("/docs/routing");
    } else if (lookupQuery.includes("install") || lookupQuery.includes("quickstart")) {
      router.push("/docs/installation");
    } else {
      router.push("/docs");
    }
  };

  const diagnosticTrace = `# Diagnostic router trace
$ orbit-cli verify --path "${lookupQuery}"
ERR_ROUTER_SLUG_UNMATCHED: No route matching slug segment in manifest tree.
→ Suggested resolution: run orbit sync --manifest or inspect orbit.routes.json`;

  return (
    <DocsLayout>
      <div className="py-10 px-6 sm:px-12 max-w-3xl">
        <nav className="mb-4 text-xs font-mono text-gray-500">
          <Link href="/docs" className="hover:text-gray-800 transition-colors">
            Documentation
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span className="text-gray-800">404 Not Found</span>
        </nav>

        <div className="mb-3">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-indigo-50 text-indigo-600 border border-indigo-200">
            STATUS: 404_PAGE_NOT_FOUND
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">
          Page not found
        </h1>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
          The documentation page you requested could not be located. The path may have changed or the slug identifier might be invalid.
        </p>

        <div className="mb-8">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            <span>Back to Documentation</span>
          </Link>
        </div>

        <hr className="my-8 border-gray-200" />

        <div className="mb-10 rounded-lg border border-gray-200 bg-white p-5">
          <div className="flex items-center justify-between text-xs mb-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
              Quick Path Lookup
            </span>
            <span className="text-gray-400 font-mono text-[11px]">
              Search query cache
            </span>
          </div>

          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={lookupQuery}
                onChange={(e) => setLookupQuery(e.target.value)}
                className="w-full rounded-md border border-gray-200 bg-gray-50/60 py-2 pl-9 pr-3 text-xs sm:text-sm font-mono text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-hidden"
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-4 py-2 text-xs sm:text-sm font-medium text-white hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Search
            </button>
          </form>
        </div>

        <div className="mb-10">
          <div className="flex items-center justify-between text-xs mb-4">
            <h2 className="text-sm font-semibold text-gray-900">
              Suggested articles
            </h2>
            <span className="text-gray-400 text-[11px]">
              Frequently accessed resources
            </span>
          </div>

          <div className="space-y-3">
            <Link
              href="/docs/installation"
              className="group flex items-center justify-between rounded-lg border border-gray-200/90 bg-white p-4 hover:border-gray-300 hover:shadow-2xs transition-all"
            >
              <div className="flex items-start gap-3.5">
                <div className="rounded-md border border-gray-100 bg-gray-50 p-2 text-blue-600 mt-0.5">
                  <DownloadIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Quickstart &amp; Installation
                  </h3>
                  <p className="mt-0.5 text-xs text-gray-500">
                    Step-by-step setup guide to initialize your Orbit project scaffolding, package requirements, and environment flags.
                  </p>
                </div>
              </div>
              <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-gray-700 group-hover:translate-x-1 transition-all shrink-0 ml-3" />
            </Link>

            <Link
              href="/docs/routing"
              className="group flex items-center justify-between rounded-lg border border-gray-200/90 bg-white p-4 hover:border-gray-300 hover:shadow-2xs transition-all"
            >
              <div className="flex items-start gap-3.5">
                <div className="rounded-md border border-gray-100 bg-gray-50 p-2 text-blue-600 mt-0.5">
                  <BranchIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Routing and Catch-All Rules
                  </h3>
                  <p className="mt-0.5 text-xs text-gray-500">
                    Comprehensive overview of file-based routing protocols, dynamic segment syntax, and custom 404 fallback handlers.
                  </p>
                </div>
              </div>
              <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-gray-700 group-hover:translate-x-1 transition-all shrink-0 ml-3" />
            </Link>

            <Link
              href="/docs/configuration"
              className="group flex items-center justify-between rounded-lg border border-gray-200/90 bg-white p-4 hover:border-gray-300 hover:shadow-2xs transition-all"
            >
              <div className="flex items-start gap-3.5">
                <div className="rounded-md border border-gray-100 bg-gray-50 p-2 text-blue-600 mt-0.5">
                  <GearIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Configuration Reference
                  </h3>
                  <p className="mt-0.5 text-xs text-gray-500">
                    Schema definitions, runtime parameters, and full schema dictionary for <code className="rounded bg-gray-100 px-1 py-0.5 text-[11px] font-mono text-gray-800">orbit.config.ts</code>.
                  </p>
                </div>
              </div>
              <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-gray-700 group-hover:translate-x-1 transition-all shrink-0 ml-3" />
            </Link>
          </div>
        </div>

        <div className="mb-10">
          <CodeBlock
            filename="● orbit-diagnostic.log"
            rightBadge="HTTP 404"
            code={diagnosticTrace}
            showCopy={false}
          />
        </div>

        <hr className="my-10 border-gray-200" />

        <footer className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-gray-500 pb-12">
          <span>Looking for something specific that should be here?</span>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-gray-900 transition-colors">
              Report broken link
            </a>
            <span>·</span>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Community Discord
            </a>
          </div>
        </footer>
      </div>
    </DocsLayout>
  );
}
