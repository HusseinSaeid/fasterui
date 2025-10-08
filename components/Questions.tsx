"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type QuestionsProps = {
  className?: string;
};

export default function Questions({ className }: QuestionsProps) {
  const faqs = [
    {
      question: "What is the Awesome UI Dark Template by FasterUI?",
      answer:
        "It’s a premium Webflow template designed by FasterUI, featuring a sleek dark theme, modern layouts, and smooth interactions tailored for creative agencies.",
    },
    {
      question: "Is the Awesome UI Dark Template responsive?",
      answer:
        "Yes, FasterUI designed it to be fully responsive across desktop, tablet, and mobile devices.",
    },
    {
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      question: "Do I get support with this template?",
      answer:
        "Yes, FasterUI provides documentation and free support to help you get started quickly.",
    },
  ];

  return (
    <div
      className={`flex flex-col items-center justify-center mt-10 mb-10 ${
        className || ""
      }`}
    >
      <div className="max-w-6xl w-full px-4 grid lg:grid-cols-2 gap-10">
        <h2 className="text-black dark:text-white text-4xl text-center lg:text-left sm:text-5xl md:text-6xl lg:text-7xl font-bold font-raleway">
          Frequently <br /> Asked <br /> Questions
        </h2>

        {/* Accordion Section */}
        <div className="h-[550px] overflow-y-auto flex flex-col gap-4">
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="py-2">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
