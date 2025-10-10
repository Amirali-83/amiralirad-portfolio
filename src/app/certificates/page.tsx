import Image from "next/image";

type CertBlock = { org: string; logo: string; items: string[] };

const blocks: CertBlock[] = [
    {
        org: "IBM",
        logo: "/ibm.png",
        items: [
            "Building Generative AI-Powered Applications with Python",
            "Developing AI Applications with Python and Flask",
            "IBM AI Developer",
            "Python for Data Science, AI & Development",
        ],
    },
    { org: "Meta", logo: "/meta.png", items: ["Programming with JavaScript"] },
    {
        org: "Google",
        logo: "/google.png",
        items: [
            "Assets, Threats, and Vulnerabilities",
            "Network Security",
            "Foundations of Cybersecurity",
            "Google AI Essentials",
            "Google UX Design",
        ],
    },
    { org: "BCG X", logo: "/BCD-X.png", items: ["GenAI", "Data Science"] },
    { org: "kaggle", logo: "/kaggle.png", items: ["Machine Learning", "Python"] },
    { org: "Skyscanner", logo: "/skyscanner.png", items: ["Front-end Software Engineering", "Software Engineering"] },
    { org: "EF SET", logo: "/efset.png", items: ["English C2 Proficiency"] },
    { org: "Canva", logo: "/canva.png", items: ["Graphic Design Essentials"] },
];

export default function CertificatesPage() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-extrabold text-center text-zinc-800">My Certificates</h1>

            <div className="mt-10 grid md:grid-cols-2 gap-x-16 gap-y-12">
                {blocks.map((b) => (
                    <section key={b.org}>
                        <div className="flex items-center">
                            <Image
                                src={b.logo}
                                alt={`${b.org} logo`}
                                width={120}
                                height={50}
                                className="object-contain"
                            />
                        </div>

                        <ul className="mt-4 list-disc pl-5 space-y-1">
                            {b.items.map((t) => <li key={t}>{t}</li>)}
                        </ul>
                    </section>
                ))}
            </div>
        </main>
    );
}
