export default function Home() {
  return (
    <main className="p-10 max-w-4xl mx-auto">

      {/* HERO */}
      <section className="mb-12">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Learn Trading the Way It Actually Works
        </h1>

        <p className="text-xl text-gray-700 mb-4">
          No fake promises. No signals. No “get rich quick”.
        </p>

        <p className="text-lg text-gray-600">
          Just real experience, real mistakes, and real understanding.
        </p>
      </section>

      {/* RELATABLE HOOK */}
      <section className="mb-12">
        <p className="text-gray-700 mb-4">
          If you’ve ever opened a trade and watched it go straight into loss…
          or followed a strategy that “worked” yesterday but failed today…
          you’re not alone.
        </p>

        <p className="text-gray-700">
          Most traders go through the same cycle — confusion, small wins, bigger losses, and starting over again.
        </p>
      </section>

      {/* TRUTH */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          The Truth About Trading
        </h2>

        <p className="text-gray-700 mb-3">
          There is no perfect indicator. No guaranteed setup. No magic strategy.
        </p>

        <p className="text-gray-700 mb-3">
          The market doesn’t care about your expectations.
        </p>

        <p className="text-gray-700">
          What actually matters is how you understand price, manage risk, and control your decisions.
        </p>
      </section>

      {/* STORY */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          My Experience
        </h2>

        <p className="text-gray-700 mb-3">
          I didn’t start trading as a trader.
        </p>

        <p className="text-gray-700 mb-3">
          My first exposure was through legal cases involving forex companies — seeing how people lose money when they don’t understand what they’re doing.
        </p>

        <p className="text-gray-700 mb-3">
          Years later, as a programmer, I worked on a trading indicator. That’s when I started seeing the market from the inside.
        </p>

        <p className="text-gray-700">
          After a lot of trial and error, things finally started to make sense when I discovered Smart Money Concepts (SMC) and ICT.
        </p>
      </section>

            {/* DAILY TRADES JOURNAL */}
      <section className="mb-12 bg-gray-50 p-6 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4">
          Daily Trading Journal (Real Trades)
        </h2>

        <p className="text-gray-700 mb-3">
          I share my trades almost every day — including entries, exits, and short explanations.
        </p>

        <p className="text-gray-700 mb-3">
          Not just winning trades. Losing ones too.
        </p>

        <p className="text-gray-700 mb-4">
          The goal is simple: to show how decisions are made in real market conditions.
        </p>

        <a
          href="/journal"
          className="inline-block text-blue-600 underline"
        >
          View Trading Journal →
        </a>
      </section>

      {/* RESULTS (SOFT TRUST) */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Real Progress
        </h2>

        <p className="text-gray-700 mb-3">
          At some point, I managed to grow a small account from $100 to around $1000 in about 2 months.
        </p>

        <p className="text-gray-700">
          But honestly — that’s not the important part.
          The important part is understanding why it worked… and why it could have easily failed.
        </p>
      </section>

      {/* VALUE */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          What You’ll Find Here
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Simple explanations of Smart Money Concepts</li>
          <li>ICT ideas broken down step by step</li>
          <li>Real trade examples (not just theory)</li>
          <li>Lessons based on mistakes, not just wins</li>
        </ul>
      </section>

      {/* BROKER CTA (SOFT, TRUST-BASED) */}
      <section className="mb-12 bg-gray-50 p-6 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to Practice?
        </h2>

        <p className="text-gray-700 mb-3">
          At some point, learning is not enough — you need to see how the market behaves in real conditions.
        </p>

        <p className="text-gray-700 mb-4">
          If you don’t have a trading account yet, you can start with a demo or a small amount.
        </p>

        <a
          href="YOUR_AFFILIATE_LINK_HERE"
          target="_blank"
          className="inline-block bg-black text-white px-6 py-3 rounded-xl"
        >
          Open a Trading Account
        </a>

        <p className="text-sm text-gray-500 mt-3">
          (Use demo first if you’re new. Don’t rush into real money.)
        </p>
      </section>

      {/* LEARNING LINKS */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Start Learning
        </h2>

        <div className="space-y-3">
          <a href="/fvg" className="block text-blue-600 underline">
            What is Fair Value Gap (FVG)?
          </a>

          <a href="/order-block" className="block text-blue-600 underline">
            What is Order Block?
          </a>

          <a href="/liquidity" className="block text-blue-600 underline">
            What is Liquidity?
          </a>
        </div>
      </section>

      {/* FINAL TRUST */}
      <section className="text-center text-gray-600">
        <p>
          This is the kind of resource I wish I had when I started.
        </p>
      </section>

    </main>
  );
}