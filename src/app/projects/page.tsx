import Image from "next/image";

type Project = {
    title: string;
    image: string;   // path in /public (URL-encode spaces, e.g. %20)
    github?: string;
};

type Section = {
    heading: string;
    items: Project[];
};

const sections: Section[] = [
    {
        heading: "Medical Projects",
        items: [
            { title: "Brain Tumor Detection from MRI", image: "/brain-MRI.jpg", github: "https://github.com/Amirali-83/Brain-Tumor-Detection-from-MRI" },
            { title: "Heart-Attack-Prediction", image: "/heart.png", github: "https://github.com/Amirali-83/Heart-Attack-Prediction" },
        ],
    },
    {
        heading: "AI Based Detector Projects",
        items: [
            { title: "Fake News Detection", image: "/fake.png", github: "https://github.com/Amirali-83/Fake-News-Detection" },
            { title: "Signature Forgery Detection", image: "/signature-detection.png", github: "https://github.com/Amirali-83/Multi-Network-Signature-Forgery-Detection" },
        ],
    },
    {
        heading: "Automobile Projects",
        items: [
            { title: "Driver Drowsiness Detection", image: "/driver.png", github: "https://github.com/Amirali-83/Driver-Drowsiness-Detection" },
            { title: "Autonomous Lane Detection System", image: "/lane.png", github: "https://github.com/Amirali-83/Autonomous-Lane-Detection-System" },
        ],
    },
    {
        heading: "API Projects",
        items: [
            { title: "Stock Market", image: "/stock.png", github: "https://github.com/Amirali-83/stock-web" },
            { title: "Airline-Reservation-System", image: "/flight.png", github: "https://github.com/Amirali-83/Airline-Reservation-System" },
        ],
    },
];

function GithubIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden className="inline-block">
            <path
                fill="currentColor"
                d="M12 .5A12 12 0 0 0 0 12.7c0 5.37 3.44 9.92 8.2 11.53.6.12.82-.27.82-.6v-2.2c-3.34.74-4.05-1.63-4.05-1.63-.55-1.44-1.35-1.82-1.35-1.82-1.1-.77.08-.75.08-.75 1.2.08 1.84 1.26 1.84 1.26 1.08 1.9 2.84 1.35 3.53 1.03.11-.8.42-1.35.76-1.66-2.66-.3-5.46-1.37-5.46-6.1 0-1.35.46-2.45 1.23-3.31-.12-.3-.54-1.53.12-3.18 0 0 1.02-.33 3.34 1.26a11.2 11.2 0 0 1 6.08 0c2.3-1.59 3.32-1.26 3.32-1.26.67 1.65.25 2.88.12 3.18.77.86 1.22 1.96 1.22 3.31 0 4.75-2.8 5.8-5.48 6.1.44.38.82 1.12.82 2.27v3.35c0 .33.2.73.82.6 4.77-1.6 8.2-6.16 8.2-11.53A12 12 0 0 0 12 .5Z"
            />
        </svg>
    );
}

export default function ProjectsPage() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-extrabold text-center text-zinc-800">My Projects</h1>

            <div className="mt-10 space-y-12">
                {sections.map((sec) => (
                    <section key={sec.heading}>
                        <h2 className="text-lg font-bold text-zinc-800">{sec.heading}</h2>

                        {/* Two cards per row on desktop */}
                        <div className="mt-4 grid gap-10 md:grid-cols-2">
                            {sec.items.map((p) => (
                                <article
                                    key={p.title}
                                    className="grid grid-cols-[160px_1fr] gap-6 items-center"
                                >
                                    <Image
                                        src={p.image}
                                        alt={p.title}
                                        width={160}
                                        height={120}
                                        className="rounded-md object-cover"
                                    />
                                    <div>
                                        <h3 className="text-xl font-medium">{p.title}</h3>
                                        {p.github && (
                                            <a
                                                href={p.github}
                                                className="mt-2 inline-flex items-center gap-2 text-sm text-zinc-700 underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <GithubIcon /> GitHub
                                            </a>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
}
