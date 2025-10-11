// src/app/certificates/page.tsx
import Image from "next/image";

type CertBlock = { org: string; logo: string; items: string[] };

// bump this string when you replace any image file without renaming it
const V = "v=4";

const blocks: CertBlock[] = [
    {
        org: "IBM",
        logo: `/cert/ibm.png?${V}`,
        items: [
            "Building Generative AI-Powered Applications with Python",
            "Developing AI Applications with Python and Flask",
            "IBM AI Developer",
            "Python for Data Science, AI & Development",
        ],
    },
    { org: "Meta", logo: `/cert/meta.png?${V}`, items: ["Programming with JavaScript"] },
    {
        org: "Google",
        logo: `/cert/google.png?${V}`,
        items: [
            "Assets, Threats, and Vulnerabilities",
            "Network Security",
            "Foundations of Cybersecurity",
            "Google AI Essentials",
            "Google UX Design",
        ],
    },
    { org: "BCG X", logo: `/cert/bcg-x.png?${V}`, items: ["GenAI", "Data Science"] },
    { org: "kaggle", logo: `/cert/kaggle.png?${V}`, items: ["Machine Learning", "Python"] },
    {
        org: "Skyscanner",
        logo: `/cert/skyscanner.png?${V}`,
        items: ["Front-end Software Engineering", "Software Engineering"],
    },
    { org: "EF SET", logo: `/cert/efset.png?${V}`, items: ["English C2 Proficiency"] },
    { org: "Canva", logo: `/cert/canva.png?${V}`, items: ["Graphic Design Essentials"] },
];

export default function CertificatesPage() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-extrabold text-center text-zinc-800">
                My Certificates
            </h1>

            <div className="mt-10 grid md:grid-cols-2 gap-x-16 gap-y-12">
                {blocks.map((b) => (
                    <section key={b.org}>
                        <div className="flex items-center">
                            <Image
                                src={b.logo} // served from /public; Next handles basePath
                                alt={`${b.org} logo`}
                                width={120}
                                height={50}
                                className="object-contain"
                                priority={b.org === "IBM"}
                                unoptimized // safe even with output:'export'
                            />
                        </div>

                        <ul className="mt-4 list-disc pl-5 space-y-1">
                            {b.items.map((t) => (
                                <li key={t}>{t}</li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </main>
    );
}
