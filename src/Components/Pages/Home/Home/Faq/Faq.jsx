import React, { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
// import faqData from "./faqData";
const faqData = [
  {
    id: 1,
    question: "How long does software development take?",
    answer:
      "We cannot possibly answer this question precisely because there are projects finished in 2 to 3 weeks, but there are also tasks that take several years to complete. To provide you with a precise answer, we have to evaluate the project complexity and the work scope. Knowing this information, we can provide you with the estimated time frame",
  },
  {
    id: 2,
    question:
      "Should I be familiar with the technical details to work with you?",
    answer:
      "There is absolutely no need for this. After all, you do not have to know medical nuances when seeking a dentist’s services. You do not have to be an expert in software development because, actually, we are. We are ready to explain to you all unclear moments and the essence of all stages while working on the project.",
  },
  {
    id: 3,
    question: "How do you guarantee the product quality?",
    answer:
      "We work in a short iteration mode and regularly test the work results, taking into account all customer preferences and the target audience reaction. This approach allows us to provide our customers with high-quality products, observing the specified deadlines. Quality is our top priority.",
  },
  {
    id: 4,
    question: "What is the approach to ensuring software quality in our projects?",
    answer:
      "We prioritize software quality through comprehensive measures, including requirements analysis, robust design and architecture, code quality maintenance, thorough testing, and continuous quality assurance processes.",
  },
  {
    id: 5,
    question: "How do you balance low pricing with the best service for software development?",
    answer:
      "We achieve competitive pricing through accurate cost estimation, process optimization, and competitive pricing strategies. We also provide the best service by offering excellent customer support, emphasizing the value our software delivers, and continuous improvement.",
  },
];
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAnswer = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto pb-20">
        <h1 className="text-2xl font-semibold mb-8 text-slate-600">
          Frequently Asked Questions
        </h1>

        <div className="flex flex-col gap-8">
          {faqData.map((faq, index) => (
            <div key={index} className="">

              <div
                onClick={() => toggleAnswer(index)}
                className={`w-full shadow text-left drop-shadow-sm bg-slate-100 hover:bg-primary hover:text-white duration-300 p-3 font-semibold  flex justify-between 
            ${
              openIndex === index
                ? " text-blue-500 rounded-t-md bg-blue-500"
                : "text-slate-600 rounded-md"
            }`}

              >
                <p className="leading-normal">0{index + 1}. {faq.question}</p>

                <span className="transform transition-transform duration-300">
                  {openIndex === index ? (
                    <HiChevronUp size={24} />
                  ) : (
                    <HiChevronDown size={24} />
                  )}
                </span>
              </div>

              <div
                className={` bg-gray-100 transition-all duration-700 ease-in-out text-gray-500 ${
                  openIndex === index
                    ? "max-h-96 opacity-100 duration-300 rounded-b-md drop-shadow"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="leading-relaxed p-4">{faq.answer}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
