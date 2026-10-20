"use client";

import Link from "next/link";
import DocsLayout from "@/components/DocsLayout";
import CodeBlock from "@/components/CodeBlock";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/Icons";

export default function DataFetchingPage() {
  const code = `async function getData() {
  const res = await fetch("https://api.orbit.dev/feed", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <main>{/* render items */}</main>;
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
          <span className="text-gray-800">Data Fetching</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">
          Data Fetching and Caching
        </h1>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
          Orbit extends the native fetch API to allow each request on the server to configure its own caching and revalidation behavior.
        </p>

        <hr className="my-8 border-gray-200" />

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Server Component Fetching</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            You can fetch data inside async Server Components directly:
          </p>
          <CodeBlock
            filename="app/page.tsx"
            code={code}
          />
        </section>

        <hr className="my-10 border-gray-200" />

        <div className="flex items-center justify-between py-2 text-xs">
          <Link
            href="/docs/layouts"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <ArrowLeftIcon className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-gray-400">Previous</span>
              <span className="font-medium text-gray-900 group-hover:text-blue-600">Layouts</span>
            </div>
          </Link>

          <Link
            href="/docs/configuration"
            className="flex items-center gap-2 text-right text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-gray-400">Next</span>
              <span className="font-medium text-gray-900 group-hover:text-blue-600">Configuration</span>
            </div>
            <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
