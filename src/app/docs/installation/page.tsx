"use client";

import Link from "next/link";
import DocsLayout from "@/components/DocsLayout";
import CodeBlock from "@/components/CodeBlock";
import Callout from "@/components/Callout";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/Icons";

export default function InstallationPage() {
  const npmInstallCode = `# Using npm
$ npm install orbit-core orbit-cli

# Using pnpm
$ pnpm add orbit-core orbit-cli

# Using yarn
$ yarn add orbit-core orbit-cli`;

  return (
    <DocsLayout>
      <div className="py-10 px-6 sm:px-12 max-w-3xl">
        <nav className="mb-4 text-xs font-mono text-gray-500">
          <Link href="/docs" className="hover:text-gray-800 transition-colors">
            Documentation
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span>Getting Started</span>
          <span className="mx-2 text-gray-300">/</span>
          <span className="text-gray-800">Installation</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">
          Installation
        </h1>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
          Get started by setting up Orbit in your environment. Orbit requires Node.js 18.17 or later.
        </p>

        <hr className="my-8 border-gray-200" />

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Package Manager Installation</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Install the core Orbit runtime and developer CLI tools using your preferred package manager:
          </p>
          <CodeBlock
            filename="Terminal"
            code={npmInstallCode}
          />
        </section>

        <Callout type="info" title="System Requirements">
          Ensure your system supports modern ES modules and has Node.js v18.17+ installed. Check your version with <code className="rounded bg-blue-100/60 px-1 py-0.5 text-xs font-mono text-blue-900">node -v</code>.
        </Callout>

        <hr className="my-10 border-gray-200" />

        <div className="flex items-center justify-between py-2 text-xs">
          <Link
            href="/docs"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <ArrowLeftIcon className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-gray-400">Previous</span>
              <span className="font-medium text-gray-900 group-hover:text-blue-600">Introduction</span>
            </div>
          </Link>

          <Link
            href="/docs/project-setup"
            className="flex items-center gap-2 text-right text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-gray-400">Next</span>
              <span className="font-medium text-gray-900 group-hover:text-blue-600">Project Setup</span>
            </div>
            <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
