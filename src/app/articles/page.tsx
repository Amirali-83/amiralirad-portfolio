// src/app/articles/page.tsx

export default function ArticlesPage() {
  const articles = [
    {
      title:
        "The Impact of AI and Social Media on Modern Relationships: Connection or Disconnection?",
      summary:
        "Social media and AI are reshaping how we form and maintain relationships, often blurring the line between real and virtual connections. While they offer new ways to bond, they also risk reducing empathy and authenticity in human interactions.",
      date: "October 2025",
      link: "/article.pdf", // ✅ points to /public/article.pdf
    },
  ];

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold">Articles</h1>
      <p className="mt-2 text-gray-700">
        Articles I’ve written about AI and social media effects on relationships.
      </p>

      <ul className="mt-6 space-y-6">
        {articles.map((article, index) => (
          <li key={index} className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold">{article.title}</h2>

            {article.summary && (
              <p className="mt-2 text-gray-700">{article.summary}</p>
            )}

            <p className="mt-1 text-sm text-gray-500">{article.date}</p>

            {article.link && (
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                type="application/pdf"
                className="inline-block mt-3 underline text-sm text-blue-600 hover:text-blue-800 transition-colors"
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
