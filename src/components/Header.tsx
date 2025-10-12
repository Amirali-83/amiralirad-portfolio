// src/components/Header.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// static import — must exist exactly at /public/logo.png
import logo from "../../public/logo.png";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/articles", label: "Articles" },
  { href: "/certificates", label: "Certificates" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // initialize so SSR and first paint look correct per route
  const [scrolled, setScrolled] = useState(!isHome);

  useEffect(() => {
    // On any non-home route, always show the blue bar
    if (!isHome) {
      setScrolled(true);
      return;
    }

    // On home route, toggle based on scroll
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll(); // ensure correct on first render
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div
          className={[
            "transition-colors duration-300",
            scrolled
              ? "bg-gradient-to-b from-[var(--clr-nav-from)] to-[var(--clr-nav-to)] text-white shadow"
              : "bg-transparent text-white",
          ].join(" ")}
        >
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Link
              href="/"
              aria-label="Go to homepage"
              className="flex items-center gap-2"
            >
              <Image
                src={logo}
                alt="logo"
                width={70}
                height={10}
                className="object-contain"
                priority
              />
            </Link>

            <nav className="flex gap-6 text-sm">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* add spacer on non-home to offset fixed header */}
      {!isHome && <div aria-hidden className="h-16" />}
    </>
  );
}
