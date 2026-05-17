import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "About - ICT Simple",
};

export default function About() {
  return (
    <ArticleLayout title="About This Site">
      {/* <main className="p-10 max-w-3xl mx-auto"> */}
        {/* <h1 className="text-4xl font-bold mb-6">
          About This Site
        </h1> */}

        <p className="mb-4">
          This website is dedicated to explaining ICT (Inner Circle Trader)
          concepts in a simple and practical way.
        </p>

        <p className="mb-4">
          It is created by a trader with experience in forex and smart money
          concepts, focused on simplifying complex strategies for beginners.
        </p>

        <p className="mb-4">
          The goal is to help traders understand concepts like liquidity,
          order blocks, and fair value gaps without confusion.
        </p>

        <p className="mb-4">
          All content is for educational purposes only and does not constitute
          financial advice.
        </p>
      {/* </main> */}
    </ArticleLayout>
  );
}