// src/app/page.tsx
"use client"; // ← needed for Framer Motion on the client

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // ← add this

// Small animation variants (kept here to avoid touching other files)
const hero = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, ease: "easeOut" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <main className="mx-auto max-w-none">
      {/* HERO — fills first viewport; header floats above */}
      <section className="bg-[linear-gradient(180deg,var(--clr-nav-from),var(--clr-nav-to))] text-white">
        {/* ⬇️ Only this container and its three children are motion-ized */}
        <motion.div
          className="mx-auto max-w-6xl px-4 min-h-screen flex flex-col items-center justify-center text-center pt-20"
          variants={hero}
          initial="hidden"
          animate="show"
        >
          <motion.p
            className="text-xl sm:text-2xl text-[color:var(--clr-accent)]"
            variants={fadeUp}
          >
            THE BEAUTY OF STRUCTURE, THE CHAOS OF CREATION
          </motion.p>

          {/* Logo */}
          <motion.div className="mt-8" variants={fadeUp}>
            <Image
              src="/logo.png" // make sure /public/logo.png exists (case-sensitive)
              alt="ASR logo"
              width={220}
              height={220}
              className="object-contain drop-shadow"
              priority
            />
          </motion.div>

          <motion.h1
            className="mt-8 text-3xl sm:text-4xl font-extrabold tracking-wide text-[color:var(--clr-accent)]"
            variants={fadeUp}
          >
            AMIRALI SOTOUDEH RAD
          </motion.h1>
        </motion.div>
      </section>

      {/* DETAILS — light section below hero */}
      <section className="bg-[var(--clr-page)]">
        <div className="mx-auto max-w-6xl px-4 pt-12 pb-20 -mt-6 rounded-t-3xl bg-[var(--clr-page)]">
          <div className="grid gap-10 md:grid-cols-2 items-start">
            {/* Left column */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-zinc-800">Who am I?</h2>

              <p className="text-lg leading-relaxed text-zinc-800">
                Hi, my name is Amirali Sotoudeh Rad. I’m a Software Engineering student at
                the University of Europe for Applied Sciences and a Digital Enablement intern
                at ESMT Berlin. I am passionate about computer networking, UI/UX, and Artificial
                intelligence, with a strong focus on solving complex challenges through technology.
              </p>

              <div className="mt-6 text-sm">
                <p className="font-medium text-zinc-700">Get in Touch</p>
                <div className="mt-3 flex gap-4 items-center">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/amirali-sotoudeh-rad-78399a295/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition"
                  >
                    <Image
                      src="/Linkedin.png" // make sure file name matches exactly
                      alt="LinkedIn"
                      width={60}
                      height={60}
                      className="rounded-md"
                    />
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/Amirali-83"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition"
                  >
                    <Image
                      src="/GitHub.png" // case-sensitive — must match file name
                      alt="GitHub"
                      width={60}
                      height={60}
                      className="rounded-md"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="justify-self-center">
              <Image
                src="/IT-MAN.png"
                alt="Developer at desk"
                width={620}
                height={420}
                className="rounded-md shadow object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
