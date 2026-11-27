import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boomerang — Campus Lost & Found",
  description: "Report, find, and claim lost campus items at the custodian desk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
        {children}
      </body>
    </html>
  );
}
