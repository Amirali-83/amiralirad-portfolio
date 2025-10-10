// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="mx-auto max-w-none">
            {/* HERO — fills first viewport; header floats above */}
            <section className="bg-[linear-gradient(180deg,var(--clr-nav-from),var(--clr-nav-to))] text-white">
                <div className="mx-auto max-w-6xl px-4 min-h-screen flex flex-col items-center justify-center text-center pt-20">
                    <p className="text-xl sm:text-2xl text-[color:var(--clr-accent)]">
                        TTHE BEAUTY OF STRUCTURE, THE CHAOS OF CREATION
                    </p>

                    {/* Logo */}
                    <div className="mt-8">
                        <Image
                            src="/logo.png"  // make sure /public/logo.png exists
                            alt="Amirali Sotoudeh Rad logo"
                            width={220}
                            height={220}
                            className="object-contain drop-shadow"
                            priority
                        />
                    </div>

                    <h1 className="mt-8 text-3xl sm:text-4xl font-extrabold tracking-wide">
                        AMIRALI SOTOUDEH RAD
                    </h1>


                </div>
            </section>

            {/* DETAILS — light section below hero */}
            <section className="bg-[var(--clr-page)]">
                {/* rounded top to separate from the hero; -mt creates a soft overlap */}
                <div className="mx-auto max-w-6xl px-4 pt-12 pb-20 -mt-6 rounded-t-3xl bg-[var(--clr-page)]">
                    <div className="grid gap-10 md:grid-cols-2 items-start">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-zinc-800">Who am I?</h2>
                            <p className="text-lg leading-relaxed text-zinc-800">
                                My name is Amirali Sotoudeh Rad. I’m a software engineer student at UE University
                                and an intern at ESMT Berlin. I’m passionate about AI/ML, UI/UX, and Networking.
                            </p>

                            <div className="mt-6 text-sm">
                                <p className="font-medium text-zinc-700">Let’s be in touch</p>
                                <div className="mt-3 flex gap-4 items-center">
                                    {/* LinkedIn */}
                                    <a
                                        href="https://www.linkedin.com/in/amirali-sotoudeh-rad-78399a295/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:opacity-80 transition"
                                    >
                                        <Image
                                            src="/Linkedin.png" // make sure file name matches exactly (case-sensitive)
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
                                            src="/GitHub.png" // same here — must match your /public file
                                            alt="GitHub"
                                            width={60}
                                            height={60}
                                            className="rounded-md"
                                        />
                                    </a>
                                </div>
                            </div>

                        </div>

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
