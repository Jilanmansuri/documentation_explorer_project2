"use client";

import { useState } from "react";
import Link from "next/link";
import DocsLayout from "@/components/DocsLayout";
import CodeBlock from "@/components/CodeBlock";
import Callout from "@/components/Callout";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/Icons";

export default function DynamicRoutesGuideView() {
  const [feedback, setFeedback] = useState<string | null>(null);

  const codeSnippet1 = `export default function ProjectPage({ params }: { params: { id: string } }) {
  return (
    <section className="project-container">
      <h1>Active Project ID: {params.id}</h1>
    </section>
  );
}`;

  const codeSnippet2 = `type Props = {
  params: { slug?: string[] };
};

export default function DocsReader({ params }: Props) {
  const currentPath = params.slug ? params.slug.join('/') : 'index';
  return <article>Displaying documentation tree: {currentPath}</article>;
}`;

  return (
    <DocsLayout>
      <div className="py-10 px-6 sm:px-12 max-w-3xl">
        <nav className="mb-4 text-xs font-mono text-gray-500">
          <Link href="/guides" className="hover:text-gray-800 transition-colors">
            Guides
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span>Next.js</span>
          <span className="mx-2 text-gray-300">/</span>
          <span>App Router</span>
          <span className="mx-2 text-gray-300">/</span>
          <span className="text-gray-800">Dynamic Routes</span>
        </nav>

        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-blue-600 border border-blue-200">
            GUIDE
          </span>
          <span className="text-xs text-gray-400">Estimated read: 5 min</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">
          Dynamic Routes
        </h1>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
          Learn how to define dynamic route segments and handle catch-all parameters in nested application
          architectures.
        </p>

        <Callout type="info" title="Prerequisite Knowledge">
          In the App Router, dynamic segments allow segments of your URL path to be variable without relying on query parameters. Dynamic segments are evaluated at request time or pre-rendered at build time with <code className="rounded bg-blue-100/60 px-1 py-0.5 text-xs font-mono text-blue-900 border border-blue-200">generateStaticParams()</code>.
        </Callout>

        <section className="mt-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-blue-600 text-[11px] font-bold text-white shrink-0">
              1
            </span>
            <h2 className="text-base sm:text-lg font-bold text-gray-900">
              Creating the segment folder
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 pl-8">
            A Dynamic Segment can be created by wrapping a folder&apos;s name in square brackets: <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-mono text-gray-800 border border-gray-200">[id]</code> or <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-mono text-gray-800 border border-gray-200">[slug]</code>. For example, to handle an arbitrary project ID within Orbit, organize your app directory structure as follows:
          </p>
          <div className="pl-8">
            <CodeBlock
              filename="app/projects/[id]/page.tsx"
              code={codeSnippet1}
            />
          </div>
        </section>

        <section className="mt-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-blue-600 text-[11px] font-bold text-white shrink-0">
              2
            </span>
            <h2 className="text-base sm:text-lg font-bold text-gray-900">
              Accessing route parameters
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 pl-8">
            Dynamic segment values are passed as the <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-mono text-gray-800 border border-gray-200">params</code> object inside the page, layout, and metadata generator functions. In asynchronous environments, you resolve or destructure this object directly from your component arguments.
          </p>

          <div className="pl-8 overflow-x-auto rounded-lg border border-gray-200 text-xs my-4">
            <table className="w-full text-left font-mono">
              <thead className="bg-gray-50 border-b border-gray-200 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3">Route Pattern</th>
                  <th className="px-4 py-3">Example URL</th>
                  <th className="px-4 py-3">Resolved Params</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700 bg-white">
                <tr>
                  <td className="px-4 py-3 text-blue-600 font-medium">app/blog/[slug]/page.js</td>
                  <td className="px-4 py-3 text-gray-600">/blog/hello-world</td>
                  <td className="px-4 py-3 text-violet-700">{`{ slug: 'hello-world' }`}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-blue-600 font-medium">app/shop/[category]/[item]/page.js</td>
                  <td className="px-4 py-3 text-gray-600">/shop/shoes/boots</td>
                  <td className="px-4 py-3 text-violet-700">{`{ category: 'shoes', item: 'boots' }`}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-blue-600 text-[11px] font-bold text-white shrink-0">
              3
            </span>
            <h2 className="text-base sm:text-lg font-bold text-gray-900">
              Handling optional catch-all segments
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 pl-8">
            When building docs systems or multi-level CMS trees, paths can vary in depth. Use double brackets <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-mono text-gray-800 border border-gray-200">[[...slug]]</code> to make catch-all segments optional, matching both the root parent path and arbitrarily nested sub-paths.
          </p>
          <div className="pl-8">
            <CodeBlock
              filename="app/docs/[[...slug]]/page.tsx"
              code={codeSnippet2}
            />
          </div>
        </section>

        <section className="mt-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-blue-600 text-[11px] font-bold text-white shrink-0">
              4
            </span>
            <h2 className="text-base sm:text-lg font-bold text-gray-900">
              Providing fallback behavior
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 pl-8">
            When dynamic segments fail-to-resolve to a known record in your backend database or content source, trigger the standard <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-mono text-gray-800 border border-gray-200">notFound()</code> boundary to render your application&apos;s customized <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-mono text-gray-800 border border-gray-200">not-found.tsx</code> view immediately.
          </p>
          <div className="pl-8">
            <Callout type="warning" title="Safety Tip">
              Never serve un-sanitized dynamic route parameters directly into raw HTML or arbitrary queries. Always validate incoming params using schemas like Zod or Orbit Schema Validator before performing IO operations.
            </Callout>
          </div>
        </section>

        <hr className="my-10 border-gray-200" />

        <div className="flex items-center justify-between py-2 text-xs">
          <Link
            href="/docs/routing/defining-routes"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <ArrowLeftIcon className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-gray-400">Previous</span>
              <span className="font-medium text-gray-900 group-hover:text-blue-600">Defining Routes</span>
            </div>
          </Link>

          <Link
            href="/docs/routing/parallel-intercepting"
            className="flex items-center gap-2 text-right text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-gray-400">Next</span>
              <span className="font-medium text-gray-900 group-hover:text-blue-600">Parallel &amp; Intercepting</span>
            </div>
            <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-8 rounded-lg border border-gray-200/90 bg-gray-50/50 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <span className="text-gray-600 font-medium">Was this guide helpful?</span>
          {feedback ? (
            <span className="text-blue-600 font-medium">Thank you for your feedback!</span>
          ) : (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setFeedback("yes")}
                className="px-3 py-1.5 rounded-md border border-gray-300 bg-white font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Yes, thanks!
              </button>
              <button
                type="button"
                onClick={() => setFeedback("no")}
                className="px-3 py-1.5 rounded-md border border-gray-300 bg-white font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Could be better
              </button>
            </div>
          )}
        </div>
      </div>
    </DocsLayout>
  );
}
