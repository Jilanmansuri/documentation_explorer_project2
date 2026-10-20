"use client";

import Link from "next/link";
import DocsLayout from "@/components/DocsLayout";
import CodeBlock from "@/components/CodeBlock";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/Icons";

export default function ConfigurationPage() {
  const code = `// orbit.config.ts
import { defineConfig } from "orbit-core";

export default defineConfig({
  target: "serverless",
  routes: {
    trailingSlash: false,
    cleanUrls: true,
  },
  experimental: {
    turbopack: true,
  },
});`;

  return (
    <DocsLayout>
      <div className="py-10 px-6 sm:px-12 max-w-3xl">
        <nav className="mb-4 text-xs font-mono text-gray-500">
          <Link href="/docs" className="hover:text-gray-800 transition-colors">
            Documentation
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span>Reference</span>
          <span className="mx-2 text-gray-300">/</span>
          <span className="text-gray-800">Configuration</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">
          Configuration Reference
        </h1>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
          Schema definitions, runtime parameters, and full schema dictionary for <code className="rounded bg-gray-100 px-1 py-0.5 text-xs font-mono text-gray-800">orbit.config.ts</code>.
        </p>

        <hr className="my-8 border-gray-200" />

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Configuration File Schema</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Orbit uses a TypeScript configuration file located at the root of your application:
          </p>
          <CodeBlock
            filename="orbit.config.ts"
            code={code}
          />
        </section>

        <hr className="my-10 border-gray-200" />

        <div className="flex items-center justify-between py-2 text-xs">
          <Link
            href="/docs/data-fetching"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <ArrowLeftIcon className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-gray-400">Previous</span>
              <span className="font-medium text-gray-900 group-hover:text-blue-600">Data Fetching</span>
            </div>
          </Link>

          <Link
            href="/docs/cli-commands"
            className="flex items-center gap-2 text-right text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-gray-400">Next</span>
              <span className="font-medium text-gray-900 group-hover:text-blue-600">CLI Commands</span>
            </div>
            <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
