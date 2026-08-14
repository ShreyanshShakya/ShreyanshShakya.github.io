"use client";

import Script from "next/script";

export function PlausibleAnalytics() {
  return (
    <Script
      strategy="lazyOnload"
      data-domain="shreyanshshakya.github.io"
      src="https://plausible.io/js/script.js"
    />
  );
}