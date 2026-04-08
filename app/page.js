export default function Home() {
  return (
    <main className="p-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">
        ICT Concepts Made Simple
      </h1>

      <p className="mb-6 text-lg">
        Learn Smart Money concepts with simple explanations and real examples.
      </p>

      <div className="space-y-3">
        <a href="/fvg" className="block text-blue-500 underline">
          What is Fair Value Gap (FVG) in Forex? (Simple Explanation)
        </a>
        <a href="/order-block" className="block text-blue-500 underline">
          What is Order Block in Forex? (Beginner Guide)
        </a>
        <a href="/liquidity" className="block text-blue-500 underline">
          What is Liquidity Zone in Forex? (ICT Esplanation)
        </a>

        <p className="text-sm text-gray-500">
          More lessons coming soon...
        </p>
      </div>
    </main>
  );
}