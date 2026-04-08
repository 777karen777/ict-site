import Image from "next/image";

export default function Liquidity() {
  return (
    <main className="p-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        What is Liquidity in Forex?
      </h1>

      <p className="mb-4">
        Liquidity refers to areas where many stop losses and orders are placed.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Where is liquidity found?
      </h2>

      <p className="mb-4">
        Liquidity is usually found above highs and below lows, where traders place stop losses.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Why is liquidity important?
      </h2>

      <p className="mb-4">
        The market often moves to these areas to trigger stops before reversing direction.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
              Simple example
            </h2>
      
            <Image
              src="/images/liquidity-zone-example.png"
              alt="Liquidity Zone Example"
              width={800}
              height={400}
              className="my-6 rounded"
              />
      
            <p className="mb-4">
              In this example, there are several liquidity zones marked. Later we will discuss how and why they happen.
              Notice also that in the bottom one there is a little  movement down which is liquidity grab, which also we will descripe later.
            </p>

      <p className="mt-6 text-gray-600">
        Understanding liquidity helps traders avoid traps and enter better trades.
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
            To understand this better, you should also learn about{" "}
            <a href="/order-block" className="text-blue-500 underline">
                Order Block in trading . 
            </a>.
        </p>
    </main>
  );
}