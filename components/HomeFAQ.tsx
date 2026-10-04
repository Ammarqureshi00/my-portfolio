const HOME_FAQS = [
  {
    question: "What kind of work can I bring you?",
    answer: "WordPress or WooCommerce builds and fixes are a big part of my work. I also take on Shopify changes, React or Next.js interfaces, and the performance or integration issues around them. If you’re not sure which category fits, just describe what you need.",
  },
  {
    question: "What should I send in the first message?",
    answer: "A website link and a sentence about what is happening—or what you want to build—is enough to start. Screenshots, error messages, a deadline or a rough budget can help, but you don’t need a polished brief.",
  },
  {
    question: "Can you give me a timeline or price straight away?",
    answer: "I’ll need to understand the pages, problem and any integrations first. Once the scope is clear, I’ll send a project-specific estimate and timeline before any work begins.",
  },
  {
    question: "Will you rebuild my whole site?",
    answer: "Not unless that is the best answer. I’ll look at what is already working, explain the options and recommend the smallest sensible change first.",
  },
  {
    question: "Can you work on a live site safely?",
    answer: "For fixes and larger changes, I use a backup and staging copy where the setup allows it. We agree how to test and launch the change before anything goes on the live site.",
  },
  {
    question: "What if you’re not the right person for the job?",
    answer: "I’ll tell you. Send me the details and I’ll be clear about what I can take on, what needs another specialist, or what I’d need to check before giving you an answer.",
  },
];

export default function HomeFAQ() {
  return (
    <section id="faq" className="home-faq" aria-labelledby="home-faq-h">
      <div className="w nar">
        <div className="c faq-head">
          <span className="pill">FAQ</span>
          <h2 id="home-faq-h">Before you <em>get in touch</em></h2>
          <p className="lead">A few straight answers to the questions people usually have before starting a project.</p>
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