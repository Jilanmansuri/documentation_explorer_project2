"use client";

import Link from "next/link";
import DocsLayout from "@/components/DocsLayout";
import { OrbitLogo } from "@/components/Icons";

export default function AboutPage() {
  return (
    <DocsLayout>
      <div className="py-10 px-6 sm:px-12 max-w-3xl">
        <nav className="mb-4 text-xs font-mono text-gray-500">
          <Link href="/docs" className="hover:text-gray-800 transition-colors">
            Orbit Docs
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span className="text-gray-800">About</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <OrbitLogo className="w-8 h-8" />
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            About Orbit Docs
          </h1>
        </div>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
          Orbit Docs is a modern, high-performance documentation platform designed for modern web applications. Built from the ground up for speed, developer delight, and intuitive exploration.
        </p>

        <hr className="my-8 border-gray-200" />

        <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
          <p>
            Orbit combines file-based routing architecture with strict compile-time validation. It ensures zero runtime regex overhead when matching nested segments, dynamic routes, and catch-all parameters.
          </p>

          <div className="rounded-lg border border-gray-200 bg-gray-50/50 p-5">
            <h3 className="text-base font-semibold text-gray-900 mb-2">Key Principles</h3>
            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-gray-600">
              <li><strong>Zero Overhead:</strong> Deterministic routing engine optimized for edge clusters.</li>
              <li><strong>Type Safety:</strong> Automatic parameter typing with TypeScript inference.</li>
              <li><strong>Modular Architecture:</strong> Component-driven layouts, slots, and interception boundaries.</li>
            </ul>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
