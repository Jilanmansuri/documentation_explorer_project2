"use client";

import Link from "next/link";
import DocsLayout from "@/components/DocsLayout";
import CodeBlock from "@/components/CodeBlock";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/Icons";

export default function ParallelInterceptingPage() {
  const code = `// app/layout.tsx
export default function Layout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <>
      {children}
      {analytics}
      {team}
    </>
  );
}`;

  return (
    <DocsLayout>
      <div className="py-10 px-6 sm:px-12 max-w-3xl">
        <nav className="mb-4 text-xs font-mono text-gray-500">
          <Link href="/docs" className="hover:text-gray-800 transition-colors">
            Documentation
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <Link href="/docs/routing" className="hover:text-gray-800 transition-colors">
            Routing
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span className="text-gray-800">Parallel &amp; Intercepting</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">
          Parallel &amp; Intercepting Routes
        </h1>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
          Render one or more pages simultaneously within the same layout, and intercept routes for modals.
        </p>

        <hr className="my-8 border-gray-200" />

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Parallel Slots</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Parallel routes allow you to simultaneously or conditionally render one or more pages within the same layout:
          </p>
          <CodeBlock
            filename="app/layout.tsx"
            code={code}
          />
        </section>

        <hr className="my-10 border-gray-200" />

        <div className="flex items-center justify-between py-2 text-xs">
          <Link
            href="/guides"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <ArrowLeftIcon className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-gray-400">Previous</span>
              <span className="font-medium text-gray-900 group-hover:text-blue-600">Dynamic Routes</span>
            </div>
          </Link>

          <Link
            href="/docs/layouts"
            className="flex items-center gap-2 text-right text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-gray-400">Next</span>
              <span className="font-medium text-gray-900 group-hover:text-blue-600">Layouts</span>
            </div>
            <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
