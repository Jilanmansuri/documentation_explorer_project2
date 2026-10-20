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
    <div className="my-4 rounded-lg overflow-hidden border border-gray-800 bg-[#0c121e] text-gray-200 text-xs shadow-sm">
      {(filename || rightBadge || showCopy) && (
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#090d16] border-b border-gray-800/80 text-[11px] font-mono text-gray-400">
          <div className="flex items-center gap-2">
            {filename?.startsWith("●") ? (
              <span className="text-gray-400">{filename}</span>
            ) : (
              <span className="text-gray-300">{filename}</span>
            )}
          </div>
          <div className="flex items-center gap-3">
            {rightBadge && (
              <span className="text-[10px] tracking-wider font-semibold text-gray-400 uppercase">
                {rightBadge}
              </span>
            )}
            {showCopy && (
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
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
      <pre className="p-4 overflow-x-auto font-mono leading-relaxed text-[13px] text-gray-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}
