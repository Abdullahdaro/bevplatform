import AccordionFAQ from '@ui/AccordionFAQ';

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: 'How do we select volunteers?',
    answer:
      'We have a rigorous vetting process that includes background checks, skill assessments, and reference verification to ensure you get qualified volunteers.',
  },
  {
    question: 'In which cities is it available?',
    answer:
      "Our service is currently available in major cities across the United States, Canada, and Europe. We're expanding to new locations regularly.",
  },
  {
    question: 'How much does the service cost?',
    answer:
      "We offer different pricing tiers based on your needs. There's a free basic tier, and premium options starting at $29/month for more extensive features.",
  },
];

function FAQ() {
  return (
    <section className="mx-auto w-full max-w-3xl px-8 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Still have questions?</h2>
      <div className="space-y-2">
        {faqItems.map(({ question, answer }, index) => (
          <AccordionFAQ key={index} question={question} answer={answer} />
        ))}
      </div>
    </section>
  );
}

export default FAQ;
