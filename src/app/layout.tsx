// src/app/layout.tsx
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Amirali Sotoudeh Rad – Portfolio",
  description: "Projects, articles, certificates, and contact.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Make the page a full-height flex column */}
      <body className="text-zinc-900 min-h-screen flex flex-col bg-[var(--clr-page)]">
        <Header />

        {/* This grows to fill remaining height so the footer sits at bottom */}
        <main className="flex-1">{children}</main>

        <footer className="mt-auto">
          <div className="bg-[linear-gradient(180deg,var(--clr-nav-from),var(--clr-nav-to))] text-white">
            <div className="mx-auto max-w-6xl px-4 py-3 text-center text-xs">
              © {new Date().getFullYear()} All Rights Reserved By Amirali Sotoudeh Rad
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
