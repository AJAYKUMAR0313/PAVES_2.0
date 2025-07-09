// src/app/insights/page.js
export default function InsightsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Insights</h1>
      <p className="mb-4">Explore our thought leadership, research, and breakthroughs in artificial intelligence and business strategy.</p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">AI Labs</h2>
        <p>Our labs drive experiments in LLMs, automation, vision, and decision systems — leading to deployable prototypes and patents.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Thought Leadership</h2>
        <p>We publish insights on digital transformation, ethical AI, and emerging tech, helping organizations navigate rapid innovation responsibly.</p>
      </div>
    </div>
  );
}