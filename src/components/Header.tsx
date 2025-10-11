"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// ✅ static import — must exist exactly at /public/logo.png
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
    const [scrolled, setScrolled] = useState(!isHome);

    useEffect(() => {
        if (!isHome) return;
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [isHome]);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50">
                <div
                    className={
                        scrolled
                            ? "bg-gradient-to-b from-[var(--clr-nav-from)] to-[var(--clr-nav-to)] text-white shadow"
                            : "bg-transparent text-white"
                    }
                >
                    <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
                        <Link
                            href="/"
                            aria-label="Go to homepage"
                            className="flex items-center gap-2"
                        >
                            {/* 🔧 Smaller logo size here */}
                            <Image
                                src={logo}
                                alt="logo"
                                width={100}     // adjust this size as needed
                                height={40}
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

            {!isHome && <div aria-hidden className="h-16" />}
        </>
    );
}
