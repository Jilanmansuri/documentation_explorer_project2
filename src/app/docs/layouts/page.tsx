"use client";

import Link from "next/link";
import DocsLayout from "@/components/DocsLayout";
import CodeBlock from "@/components/CodeBlock";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/Icons";

export default function LayoutsPage() {
  const code = `export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>Orbit Navbar</nav>
        {children}
      </body>
    </html>
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
          <span>Core Concepts</span>
          <span className="mx-2 text-gray-300">/</span>
          <span className="text-gray-800">Layouts</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">
          Layouts and Templates
        </h1>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
          A layout is UI that is shared between multiple routes. On navigation, layouts preserve state and do not re-render.
        </p>

        <hr className="my-8 border-gray-200" />

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Root Layout</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            The root layout is defined at the top level of the <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-mono text-gray-800 border border-gray-200">app</code> directory and applies to all routes:
          </p>
          <CodeBlock
            filename="app/layout.tsx"
            code={code}
          />
        </section>

        <hr className="my-10 border-gray-200" />

        <div className="flex items-center justify-between py-2 text-xs">
          <Link
            href="/docs/routing"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <ArrowLeftIcon className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-gray-400">Previous</span>
              <span className="font-medium text-gray-900 group-hover:text-blue-600">Routing</span>
            </div>
          </Link>

          <Link
            href="/docs/data-fetching"
            className="flex items-center gap-2 text-right text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-gray-400">Next</span>
              <span className="font-medium text-gray-900 group-hover:text-blue-600">Data Fetching</span>
            </div>
            <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
