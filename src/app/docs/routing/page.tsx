"use client";

import Link from "next/link";
import DocsLayout from "@/components/DocsLayout";
import OnThisPage from "@/components/OnThisPage";
import CodeBlock from "@/components/CodeBlock";
import Callout from "@/components/Callout";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/Icons";

export default function RoutingDocsPage() {
  const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "catch-all-routes", label: "Catch-all Routes" },
    { id: "route-groups", label: "Route Groups" },
  ];

  const codeCatchAll = `// app/[...slug]/page.tsx
export default function Page({ params }: { params: { slug: string[] } }) {
  return <div>Path: {params.slug.join('/')}</div>;
}`;

  return (
    <DocsLayout>
      <div className="flex justify-between w-full">
        <div className="py-10 px-6 sm:px-12 max-w-3xl flex-1">
          <nav className="mb-4 text-xs font-mono text-gray-500">
            <Link href="/docs" className="hover:text-gray-800 transition-colors">
              Documentation
            </Link>
            <span className="mx-2 text-gray-300">/</span>
            <span>Core Concepts</span>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-800">Routing</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">
            Routing
          </h1>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Orbit uses a file-system based routing mechanism with support for static paths, nested segments, and catch-all routes.
          </p>

          <hr className="my-8 border-gray-200" />

          <section id="overview" className="scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Every directory inside the <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-mono text-gray-800 border border-gray-200">app</code> directory maps directly to a matching URL path segment. When an incoming request reaches your edge cluster, Orbit analyzes the matching segment tree and evaluates each layout node before rendering leaf page handlers.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Route resolution runs deterministically with zero runtime regex overhead. Leaf pages defined via <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-mono text-gray-800 border border-gray-200">page.tsx</code> or <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-mono text-gray-800 border border-gray-200">route.ts</code> automatically export their execution strategy to either static edge renderers or dynamic compute clusters.
            </p>

            <Callout type="info" title="Convention Note">
              Orbit reserves system file identifiers including <code className="rounded bg-blue-100/60 px-1 py-0.5 text-xs font-mono text-blue-900 border border-blue-200">layout.tsx</code>, <code className="rounded bg-blue-100/60 px-1 py-0.5 text-xs font-mono text-blue-900 border border-blue-200">loading.tsx</code>, and <code className="rounded bg-blue-100/60 px-1 py-0.5 text-xs font-mono text-blue-900 border border-blue-200">error.tsx</code> to isolate distinct lifecycle tiers.
            </Callout>
          </section>

          <section id="catch-all-routes" className="mt-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Catch-all Routes</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Dynamic segments can be extended to catch all subsequent URL segments by prepending an ellipsis inside square brackets: <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-mono text-gray-800 border border-gray-200">[...slug]</code>. The matched parameters are parsed into an array of path parts.
            </p>

            <CodeBlock
              filename="app/[...slug]/page.tsx"
              code={codeCatchAll}
            />

            <div className="my-6 overflow-x-auto rounded-lg border border-gray-200 text-xs">
              <table className="w-full text-left font-mono">
                <thead className="bg-gray-50 border-b border-gray-200 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3">Route Path Pattern</th>
                    <th className="px-4 py-3">Example URL</th>
                    <th className="px-4 py-3">Params Object</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-700 bg-white">
                  <tr>
                    <td className="px-4 py-3 text-blue-600 font-medium">app/shop/[...slug]/page.tsx</td>
                    <td className="px-4 py-3 text-gray-600">/shop/clothes</td>
                    <td className="px-4 py-3 text-violet-700">{`{ slug: ['clothes'] }`}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-blue-600 font-medium">app/shop/[...slug]/page.tsx</td>
                    <td className="px-4 py-3 text-gray-600">/shop/clothes/tops</td>
                    <td className="px-4 py-3 text-violet-700">{`{ slug: ['clothes', 'tops'] }`}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="route-groups" className="mt-10 scroll-mt-20">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Route Groups</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Folders wrapped with parentheses, such as <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-mono text-gray-800 border border-gray-200">(marketing)</code> or <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-mono text-gray-800 border border-gray-200">(dashboard)</code>, serve purely as organizational conventions and are omitted from the final URL path resolution. Refer to the <a href="#" className="text-blue-600 underline underline-offset-2 hover:text-blue-700">nested layout hierarchy</a> or explore <a href="#" className="text-blue-600 underline underline-offset-2 hover:text-blue-700">multi-root application strategies</a> for complex multi-tenant projects.
            </p>
          </section>

          <hr className="my-10 border-gray-200" />

          <div className="flex items-center justify-between py-2 text-xs">
            <Link
              href="/docs/project-setup"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
            >
              <ArrowLeftIcon className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-gray-400">Previous</span>
                <span className="font-medium text-gray-900 group-hover:text-blue-600">Project Setup</span>
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

        <OnThisPage
          items={tocItems}
          activeId="catch-all-routes"
        />
      </div>
    </DocsLayout>
  );
}
