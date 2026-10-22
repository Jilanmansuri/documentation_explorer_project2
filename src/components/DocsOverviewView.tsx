"use client";

import Link from "next/link";
import DocsLayout from "@/components/DocsLayout";
import CodeBlock from "@/components/CodeBlock";
import { ArrowIntroIcon, BranchIcon, GearIcon, InfoIcon } from "@/components/Icons";

export default function DocsOverviewView() {
  const terminalCode = `$ npx orbit-cli create my-app --template standard\n$ cd my-app && npm run dev`;

  return (
    <DocsLayout>
      <div className="py-10 px-6 sm:px-12 max-w-4xl">
        <nav className="mb-4 text-xs font-mono text-gray-500">
          <span>Orbit Docs</span>
          <span className="mx-2 text-gray-300">/</span>
          <span className="text-gray-800">Overview</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">
          Documentation
        </h1>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl">
          Welcome to Orbit Docs. Explore the core architecture, installation guides, and complete API
          references for building scalable modern web applications.
        </p>

        <hr className="my-8 border-gray-200" />

        <div className="space-y-4 mb-8">
          <Link
            href="/docs/installation"
            className="block rounded-lg border border-gray-200 bg-white p-5 hover:border-blue-400 hover:shadow-sm transition-all"
          >
            <div className="flex items-start gap-3.5">
              <div className="text-blue-600 mt-0.5">
                <ArrowIntroIcon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                  Getting Started
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Quickstart guides, prerequisites, and initial project configuration.
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-blue-600">
                  <span>Start reading</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="/docs/routing"
            className="block rounded-lg border border-gray-200 bg-white p-5 hover:border-blue-400 hover:shadow-sm transition-all"
          >
            <div className="flex items-start gap-3.5">
              <div className="text-blue-600 mt-0.5">
                <BranchIcon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                  Core Concepts
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Deep dive into nested routing patterns, catch-all paths, and data loading.
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-blue-600">
                  <span>Explore concepts</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="/docs/configuration"
            className="block rounded-lg border border-gray-200 bg-white p-5 hover:border-blue-400 hover:shadow-sm transition-all"
          >
            <div className="flex items-start gap-3.5">
              <div className="text-blue-600 mt-0.5">
                <GearIcon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                  Reference
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Detailed configuration parameters, flags, and CLI commands.
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-blue-600">
                  <span>View reference</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="my-8 rounded-lg border-l-4 border-blue-600 bg-blue-50/60 p-4">
          <div className="flex items-start gap-3">
            <InfoIcon className="w-5 h-5 shrink-0 text-blue-600 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-1">
                Architecture Alignment
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Orbit 1.0 utilizes unified server-driven component composition with strict compile-time static checks. Ensure you review the configuration parameters before migration.
              </p>
            </div>
          </div>
        </div>

        <div className="my-8">
          <CodeBlock
            filename="Terminal - Quick Setup"
            code={terminalCode}
          />
        </div>

        <hr className="my-10 border-gray-200" />

        <footer className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-gray-500 pb-12">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-600" />
            <span>Orbit framework v1.0.4 stable release</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-gray-900 transition-colors">
              Documentation License
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Changelog
            </a>
          </div>
        </footer>
      </div>
    </DocsLayout>
  );
}
