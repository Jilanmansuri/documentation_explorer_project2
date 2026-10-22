"use client";

import { useState } from "react";
import { CopyIcon, CheckIcon } from "./Icons";

interface CodeBlockProps {
  filename?: string;
  rightBadge?: string;
  code: string;
  showCopy?: boolean;
}

export default function CodeBlock({
  filename,
  rightBadge,
  code,
  showCopy = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="my-4 rounded border border-gray-800 bg-slate-900 text-gray-100 text-xs">
      {(filename || rightBadge || showCopy) && (
        <div className="flex items-center justify-between px-4 py-2 bg-slate-950 border-b border-gray-800 text-xs font-mono text-gray-400">
          <div className="flex items-center gap-2">
            <span>{filename}</span>
          </div>
          <div className="flex items-center gap-3">
            {rightBadge && (
              <span className="text-[11px] font-semibold text-gray-400">
                {rightBadge}
              </span>
            )}
            {showCopy && (
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
              >
                {copied ? (
                  <>
                    <CheckIcon className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400 text-xs">Copied!</span>
                  </>
                ) : (
                  <>
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      )}
      <pre className="p-4 overflow-x-auto font-mono text-xs leading-relaxed text-gray-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}
