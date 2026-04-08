import Image from "next/image";

export const metadata = {
  title: "What is Fair Value Gap (FVG) in Forex? Simple Guide",
  description: "Learn what Fair Value Gap (FVG) is in forex trading with simple explanation and examples.",
};

export default function FVG() {
  return (
    <main className="p-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        What is Fair Value Gap (FVG) in Forex? (Simple Explanation)
      </h1>

      <p className="mb-4">
        Fair Value Gap (FVG) is a price imbalance that happens when the market moves very fast.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        How does it form?
      </h2>

      <p className="mb-4">
        An FVG appears when there is a strong move and one candle does not fully overlap with the previous one.
      </p>

      <p className="mb-4">
        This creates a "gap" between candles, showing that price moved too quickly.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Why does it matter?
      </h2>

      <p className="mb-4">
        Traders believe the market often returns to this gap to rebalance before continuing in the same direction.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Simple example
      </h2>

      <Image
        src="/images/fvg-example.png"
        alt="FVG example"
        width={800}
        height={400}
        className="my-6 rounded"
        />

      <p className="mb-4">
        In this example, price moves strongly upward, leaving a gap between candles. Later, price returns to this area before continuing higher.
      </p>

      <p className="mt-6">
        If you want to practice these concepts in real trading, you can use a broker like{" "}
        <a
            href="https://my.roboforex.com/en/?a=yajkc"
            target="_blank"
            className="text-blue-500 underline"
        >
            RoboForex
        </a>.
        </p> 
        <p className="mt-6">
            To understand this better, you should also learn about{' '}
            <a href="/liquidity" className="text-blue-500 underline">
                liquidity in forex
            </a>.
        </p>

      <p className="mt-6 text-gray-600">
        In future lessons, we will learn how to trade FVG step by step.
      </p>
    </main>
  );
}