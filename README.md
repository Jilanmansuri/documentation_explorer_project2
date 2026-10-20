# Orbit Docs

A modern documentation portal and architecture guide built with Next.js App Router and Tailwind CSS.

## Features

- **File-system Routing Architecture:** Comprehensive docs covering static paths, nested segments, and catch-all routes.
- **Interactive Dynamic Routes Guide:** Step-by-step interactive guide with code snippets, copy functionality, and tables.
- **Diagnostics 404 Page:** Route cache lookup, diagnostic tracer, and suggested articles.
- **Quick Command Palette:** Fast search modal activated via `⌘K` or `Ctrl+K`.
- **Modular Design:** Handcrafted reusable components for navbar, sidebars, callouts, and code blocks.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the documentation portal.

## Project Structure

```
src/
├── app/                  # Next.js App Router pages and layouts
│   ├── docs/             # Documentation routes (routing, layouts, fetching, config)
│   ├── guides/           # Architecture guides (dynamic routes)
│   ├── about/            # About page
│   └── not-found.tsx     # Custom 404 error page
└── components/           # Reusable UI components
    ├── Navbar.tsx
    ├── Sidebar.tsx
    ├── DocsLayout.tsx
    ├── CodeBlock.tsx
    ├── Callout.tsx
    ├── OnThisPage.tsx
    ├── SearchModal.tsx
    └── Icons.tsx
```

## Scripts

- `npm run dev`: Starts local Turbopack dev server.
- `npm run build`: Generates optimized static production build.
- `npm run start`: Runs production server.
- `npm run lint`: Runs ESLint checks.
