export default function ArticlesPage() {
    const articles = [
        {
            title: "Building a Fast Portfolio with Next.js 15",
            summary: "Step-by-step guide to creating a modern developer portfolio using Next.js and Tailwind CSS.",
            date: "August 2025",
            link: "#", // link to Medium, Dev.to, or your blog post
        },
        {
            title: "Understanding React Server Components",
            summary: "A practical explanation of RSC and how they make Next.js apps faster and more efficient.",
            date: "June 2025",
            link: "#",
        },
        {
            title: "How I Automated My Workflow with GitHub Actions",
            summary: "Learn how I use GitHub Actions for testing, deployment, and notifications.",
            date: "January 2025",
            link: "#",
        },
    ];

    return (
        <main className="max-w-3xl mx-auto px-4 py-12">
            <h1 className="text-2xl font-bold">Articles</h1>
            <p className="mt-2 text-gray-700">
                Articles I’ve written about web development, performance, and best practices.
            </p>

            <ul className="mt-6 space-y-6">
                {articles.map((article, index) => (
                    <li key={index} className="border rounded-lg p-4">
                        <h2 className="text-xl font-semibold">{article.title}</h2>
                        <p className="mt-2 text-gray-700">{article.summary}</p>
                        <p className="mt-1 text-sm text-gray-500">{article.date}</p>
                        {article.link && (
                            <a
                                href={article.link}
                                className="inline-block mt-3 underline text-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read Article →
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </main>
    );
}
