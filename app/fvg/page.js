import Image from "next/image";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "What is Fair Value Gap (FVG) in Forex?",
  description:
    "Learn what Fair Value Gap (FVG) is in forex trading with simple explanations and examples.",
};

export default function FVG() {
  return (
    <ArticleLayout title="What is Fair Value Gap (FVG)?">

      <p>
        Fair Value Gap (FVG) is a price imbalance that happens when the market moves very fast.
      </p>

      <h2 className="text-2xl font-semibold mt-8">
        How does it form?
      </h2>

      <p>
        An FVG appears when there is a strong move and one candle does not fully overlap with the previous one.
      </p>

      <p>
        This creates a gap between candles, showing that price moved too quickly.
      </p>

      <Image
        src="/images/fvg-example.png"
        alt="FVG example"
        width={800}
        height={400}
        className="rounded-xl border my-6"
      />

      <h2 className="text-2xl font-semibold mt-8">
        Why does it matter?
      </h2>

      <p>
        Traders believe the market often returns to this gap before continuing in the same direction.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-8">
        <p className="font-medium">
          👉 Next step:
        </p>

        <div className="mt-2 flex flex-col gap-2">
          <a
            href="/liquidity"
            className="text-blue-600 underline"
          >
            Learn about Liquidity
          </a>

          <a
            href="/order-block"
            className="text-blue-600 underline"
          >
            Learn about Order Blocks
          </a>
        </div>
      </div>

    </ArticleLayout>
  );
}