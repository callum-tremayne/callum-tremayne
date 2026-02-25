"use client";

import { useEffect } from "react";

export function AutoPrint() {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const shouldPrint = searchParams.get("print") === "1";
    if (!shouldPrint) return;

    let cancelled = false;

    const runPrint = async () => {
      try {
        if (document.fonts?.ready) {
          await document.fonts.ready;
        }
      } catch {
        // Ignore font readiness errors and continue to print.
      }

      if (!cancelled) {
        window.print();
      }
    };

    const timer = window.setTimeout(runPrint, 350);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, []);

  return null;
}
