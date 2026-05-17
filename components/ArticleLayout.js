export default function ArticleLayout({
  title,
  children,
}) {
  return (
    <main className="max-w-3xl mx-auto px-6 py-8">
      <article className="bg-white rounded-2xl shadow-sm p-8">

        <h1 className="text-4xl font-bold mb-6">
          {title}
        </h1>

        <div className="space-y-4 text-gray-800 leading-7">
          {children}
        </div>

      </article>
    </main>
  );
}