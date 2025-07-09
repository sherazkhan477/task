import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <Navbar />
      <section className="py-24 px-4 dark:bg-[#1B262C] bg-[#BBE1FA] text-white text-center">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <span className="text-lg font-semibold uppercase">FAQ</span>
            <h2 className="text-4xl font-bold mt-2 dark:text-[#BBE1FA] text-[#070F2B]">
              Any Questions? Look Here
            </h2>
            <p className="text-base mt-4 max-w-xl mx-auto dark:text-[#D6E6F2] text-[#192431]">
              Find answers to the most frequently asked questions. If you still
              have questions, feel free to reach out.
            </p>
          </div>

          <div className="grid gap-8 justify-items-center">
            <AccordionItem
              index={0}
              isActive={activeIndex === 0}
              handleToggle={handleToggle}
              header="How long does it take to deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes in-depth research and the creation of your monthly content marketing strategy."
            />
            <AccordionItem
              index={1}
              isActive={activeIndex === 1}
              handleToggle={handleToggle}
              header="What is the pricing structure?"
              text="Our pricing is flexible based on your needs. We offer various packages ranging from one-time blog posts to monthly subscription services."
            />
            <AccordionItem
              index={2}
              isActive={activeIndex === 2}
              handleToggle={handleToggle}
              header="Can I request revisions?"
              text="Absolutely! We offer up to two rounds of revisions for each blog post to ensure it meets your expectations."
            />
            <AccordionItem
              index={3}
              isActive={activeIndex === 3}
              handleToggle={handleToggle}
              header="Do you provide content for other platforms?"
              text="Yes, we provide content for websites, social media, and newsletters in addition to blog posts."
            />
            <AccordionItem
              index={4}
              isActive={activeIndex === 4}
              handleToggle={handleToggle}
              header="How do I get started?"
              text="You can get started by contacting us through our website. We'll schedule an initial consultation to discuss your content needs."
            />
            <AccordionItem
              index={5}
              isActive={activeIndex === 5}
              handleToggle={handleToggle}
              header="What if I need more than one blog post per week?"
              text="We can accommodate more frequent content requests. Just let us know your requirements, and we’ll tailor our services accordingly."
            />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

const AccordionItem = ({ index, isActive, handleToggle, header, text }) => {
  return (
    <div
      className={`w-full max-w-3xl p-6 rounded-lg transition-transform transform cursor-pointer ${
        isActive
          ? "scale-105 dark:bg-[#070F2B] bg-[#609ac6] dark:text-white text-gray-900 bg-opacity-60"
          : "dark:bg-[#0F4C75] bg-[#0F4C75] bg-opacity-20 backdrop-blur-sm"
      }`}
      onClick={() => handleToggle(index)}
    >
      <button className="w-full flex justify-between items-center text-left">
        <h4 className="text-lg font-semibold">{header}</h4>
        <div
          className={`transform transition-transform ${
            isActive ? "rotate-180" : ""
          }`}
        >
          <svg
            className="fill-current"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 12.5l-6-6h12l-6 6z" />
          </svg>
        </div>
      </button>
      {isActive && (
        <div className="mt-4">
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
