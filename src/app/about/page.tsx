import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-center text-zinc-800">About Me</h1>

      {/* Experience + photo */}
      <section className="mt-10 grid md:grid-cols-2 gap-10 items-start">
        {/* Left side: Experience + Education */}
        <div>
          {/* Experience Section */}
          <h2 className="text-xl font-bold">Experience</h2>
          <ul className="mt-4 space-y-4 text-lg">
            <li>
              <div className="font-semibold">Digital Enablement – ESMT Berlin</div>
              <div className="text-gray-600 text-base">Oct 2025 – Present</div>
            </li>
            <li>
              <div className="font-semibold">Web Developer – Pamiral GmbH</div>
              <div className="text-gray-600 text-base">May 2025 – July 2025</div>
            </li>
          </ul>

          {/* Education Section */}
          <h2 className="text-xl font-bold mt-10">Education</h2>
          <ul className="mt-4 space-y-4 text-lg">
            <li>
              <div className="font-semibold">
                BSc Software Engineering – University of Europe for Applied Sciences
              </div>
              <div className="text-gray-600 text-base">Oct 2023 – Aug 2026</div>
              <div className="text-gray-600 text-base">Grade: 1.7</div>
            </li>
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
      </section> {/* <-- this was missing */}

      {/* Skills */}
<section className="mt-14 grid md:grid-cols-4 gap-x-10 items-start">
  {/* Coding Skills */}
  <div>
    <h3 className="text-lg font-bold mb-3">Coding Skills</h3>
    <div className="flex flex-col items-start gap-3">
      <div className="flex items-center gap-3">
        <Image
          src="/python.jpg"
          alt="Python"
          width={55}
          height={55}
          className="object-contain hover:scale-105 transition-transform"
        />
        <span className="text-zinc-700 font-medium">Python</span>
      </div>
      <div className="flex items-center gap-3">
        <Image
          src="/Js.png"
          alt="JavaScript"
          width={55}
          height={55}
          className="object-contain hover:scale-105 transition-transform"
        />
        <span className="text-zinc-700 font-medium">JavaScript</span>
      </div>
      <div className="flex items-center gap-3">
        <Image
          src="/java.png"
          alt="Java"
          width={55}
          height={55}
          className="object-contain hover:scale-105 transition-transform"
        />
        <span className="text-zinc-700 font-medium">Java</span>
      </div>
      <div className="flex items-center gap-3">
        <Image
          src="/php.png"
          alt="PHP"
          width={55}
          height={55}
          className="object-contain hover:scale-105 transition-transform"
        />
        <span className="text-zinc-700 font-medium">PHP</span>
      </div>
      <div className="flex items-center gap-3">
        <Image
          src="/HTML-CSS.jpg"
          alt="HTML & CSS"
          width={55}
          height={55}
          className="object-contain hover:scale-105 transition-transform rounded-md"
        />
        <span className="text-zinc-700 font-medium">HTML & CSS</span>
      </div>
    </div>
  </div>

  {/* Tech Skills */}
  <div>
    <h3 className="text-lg font-bold mb-3">Tech Skills</h3>
    <ul className="list-disc pl-5 text-zinc-700 space-y-1">
      <li>Machine Learning</li>
      <li>Artificial Intelligence</li>
      <li>Figma / Canva</li>
      <li>CI/CD</li>
      <li>Software Quality Assurance</li>
      <li>UI/UX</li>
      <li>Data Analysis</li>
      <li>Agile Methodology (Scrum, Jira)</li>
    </ul>
  </div>

  {/* Soft Skills */}
  <div>
    <h3 className="text-lg font-bold mb-3">Soft Skills</h3>
    <ul className="list-disc pl-5 text-zinc-700 space-y-1">
      <li>Teamwork</li>
      <li>Collaboration</li>
      <li>Problem Solving</li>
      <li>Adaptability</li>
      <li>Communication</li>
      <li>Time Management</li>
      <li>Quick Learning</li>
    </ul>
  </div>

  {/* Languages */}
  <div>
    <h3 className="text-lg font-bold mb-3">Languages</h3>
    <ul className="list-disc pl-5 text-zinc-700 space-y-1">
      <li>English</li>
      <li>German</li>
      <li>Persian</li>
      <li>Turkish</li>
    </ul>
  </div>
</section>

    </main>
  );
}
