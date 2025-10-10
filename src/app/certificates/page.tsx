import Image, {StaticImageData} from "next/image";

// Static imports ensure the build fails if a file is missing or misnamed
import ibmLogo from "@/public/cert/ibm.png";
import metaLogo from "@/public/cert/meta.png";
import googleLogo from "@/public/cert/google.png";
import bcgxLogo from "@/public/cert/bcg-x.png";
import kaggleLogo from "@/public/cert/kaggle.png";
import skyscannerLogo from "@/public/cert/skyscanner.png";
import efsetLogo from "@/public/cert/efset.png";
import canvaLogo from "@/public/cert/canva.png";

type CertBlock = { org: string; logo: StaticImageData; items: string[] };

const blocks: CertBlock[] = [
    {
        org: "IBM",
        logo: ibmLogo,
        items: [
            "Building Generative AI-Powered Applications with Python",
            "Developing AI Applications with Python and Flask",
            "IBM AI Developer",
            "Python for Data Science, AI & Development",
        ],
    },
    { org: "Meta", logo: metaLogo, items: ["Programming with JavaScript"] },
    {
        org: "Google",
        logo: googleLogo,
        items: [
            "Assets, Threats, and Vulnerabilities",
            "Network Security",
            "Foundations of Cybersecurity",
            "Google AI Essentials",
            "Google UX Design",
        ],
    },
    { org: "BCG X", logo: bcgxLogo, items: ["GenAI", "Data Science"] },
    { org: "kaggle", logo: kaggleLogo, items: ["Machine Learning", "Python"] },
    { org: "Skyscanner", logo: skyscannerLogo, items: ["Front-end Software Engineering", "Software Engineering"] },
    { org: "EF SET", logo: efsetLogo, items: ["English C2 Proficiency"] },
    { org: "Canva", logo: canvaLogo, items: ["Graphic Design Essentials"] },
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
                                priority={b.org === "IBM"} // optional
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
