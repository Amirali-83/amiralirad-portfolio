// src/app/contact/page.tsx
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold">Contact</h1>

      <p className="mt-4 text-lg text-zinc-800">
        The best way to reach me is through{" "}
        <a
          href="https://www.linkedin.com/in/amirali-sotoudeh-rad-78399a295/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[color:var(--clr-accent)] underline hover:opacity-80 transition"
        >
          LinkedIn
        </a>
        . I’m always open to connecting, collaborating, or discussing new ideas.
      </p>

      <div className="mt-8 text-sm">
        <p className="font-medium text-zinc-700">Let’s be in Touch</p>
        <div className="mt-3 flex gap-4 items-center">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/amirali-sotoudeh-rad-78399a295/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <Image
              src="/Linkedin.png" // make sure this file exists exactly in /public
              alt="LinkedIn"
              width={60}
              height={60}
              className="rounded-md"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
