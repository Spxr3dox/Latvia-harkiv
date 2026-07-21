import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Honorary Consulate of the Republic of Latvia in Kharkiv",
  description:
    "Official website of the Honorary Consulate of the Republic of Latvia in Kharkiv — a digital platform of Latvian–Ukrainian cooperation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body
        style={{
          // Use platform sans as display+body — no external font requests.
          // If Inter/Fraunces/etc. are available at runtime, they'll be picked up
          // via CSS vars set in <html> tag by tooling.
          ["--font-sans" as any]: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          ["--font-display" as any]: "'Fraunces', Georgia, 'Times New Roman', serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
