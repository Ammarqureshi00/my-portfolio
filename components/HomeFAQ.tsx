const HOME_FAQS = [
  {
    question: "What services do you offer?",
    answer: "I work on WordPress and WooCommerce sites, Shopify storefronts, React and Next.js interfaces, backend APIs, performance, technical SEO, and workflow automation.",
  },
  {
    question: "How does a project start?",
    answer: "Share the site or project brief, what you want to change, and any constraints. I’ll clarify the scope, outline the proposed work and quote, and confirm the plan with you before starting.",
  },
  {
    question: "How long will my project take?",
    answer: "Timing depends on scope, content readiness, and third-party dependencies. I’ll include a project-specific timeline in the agreed scope rather than promise a generic turnaround.",
  },
  {
    question: "How do revisions work?",
    answer: "The included review and revision rounds are agreed in writing before work starts. Changes beyond that scope can be discussed before they are added.",
  },
  {
    question: "Do you provide support after launch?",
    answer: "Post-launch support can be included in the project scope or arranged separately. Mention the kind of help you expect when you get in touch so it can be accounted for up front.",
  },
  {
    question: "How do payment and communication work?",
    answer: "Payment milestones, communication channels, and update cadence are agreed as part of the project scope before work begins.",
  },
];

export default function HomeFAQ() {
  return (
    <section id="faq" className="home-faq" aria-labelledby="home-faq-h">
      <div className="w nar">
        <div className="c faq-head">
          <span className="pill">FAQ</span>
          <h2 id="home-faq-h">Common <em>questions</em></h2>
          <p className="lead">Clear answers about scope, timing, communication and what to expect when we work together.</p>
        </div>
        <div className="home-faq-list">
          {HOME_FAQS.map(({ question, answer }, index) => (
            <details className="home-faq-item" key={question} open={index === 0}>
              <summary>
                <span className="home-faq-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="home-faq-question">{question}</span>
                <span className="home-faq-icon" aria-hidden="true" />
              </summary>
              <div className="home-faq-answer"><p>{answer}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}