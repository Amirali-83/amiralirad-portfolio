import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-extrabold text-center text-zinc-800">About Me</h1>

            {/* Experience + photo */}
            <section className="mt-10 grid md:grid-cols-2 gap-10 items-start">
                {/* Left side: Experience + Education */}
                <div>
                    <h2 className="text-xl font-bold">Experience</h2>
                    <ul className="mt-4 space-y-2 text-lg">
                        <li>Digital Enablement – ESMT Berlin</li>
                        <li>Web Developer – Pamiral GmbH</li>
                    </ul>

                    <h2 className="text-xl font-bold mt-10">Education</h2>
                    <ul className="mt-4 space-y-2 text-lg">
                        <li>BSc Software Engineering – University of Europe for Applied Sciences</li>
                    </ul>
                </div>

                {/* Right side: Image */}
                <div className="justify-self-center">
                    <Image
                        src="/Amirali.jpg"
                        alt="Amirali Sotoudeh Rad"
                        width={420}
                        height={520}
                        className="rounded-md shadow object-cover"
                    />
                </div>
            </section>


            {/* Skills */}
            <section className="mt-14 grid md:grid-cols-2 gap-10">
                {/* Coding Skills */}
                <div>
                    <h3 className="text-lg font-bold mb-3">Coding Skills</h3>
                    <div className="flex flex-wrap gap-4 items-center">
                        <Image
                            src="/python.jpg"
                            alt="Python"
                            width={60}
                            height={60}
                            className="object-contain hover:scale-105 transition-transform"
                        />
                        <Image
                            src="/Js.png"
                            alt="JavaScript"
                            width={60}
                            height={60}
                            className="object-contain hover:scale-105 transition-transform"
                        />
                        <Image
                            src="/java.png"
                            alt="Java"
                            width={60}
                            height={60}
                            className="object-contain hover:scale-105 transition-transform"
                        />
                        <Image
                            src="/php.png"
                            alt="PHP"
                            width={60}
                            height={60}
                            className="object-contain hover:scale-105 transition-transform"
                        />
                        <Image
                            src="/HTML-CSS.jpg"
                            alt="HTML & CSS"
                            width={60}
                            height={60}
                            className="object-contain hover:scale-105 transition-transform rounded-md"
                        />
                    </div>
                </div>

                {/* Soft Skills (keep as text or icons if you want later) */}
                <div>
                    <h3 className="text-lg font-bold mb-3">Soft Skills</h3>
                    <ul className="list-disc list-inside text-zinc-700">
                        <li>Teamwork</li>
                        <li>Problem Solving</li>
                        <li>Adaptability</li>
                        <li>Communication</li>
                    </ul>
                </div>
            </section>

        </main>
    );
}
