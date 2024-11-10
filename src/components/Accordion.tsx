"use client";
import { useState } from "react";

const AccordionItem = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-t border-blue-800 border-solid pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 px-6 text-left text-lg font-semibold"
      >
        <span className="text-black font-bold text-2xl">{title}</span>
        <div className={`transform transition-transform duration-300 ${
        isOpen ? "rotate-180" : "rotate-0"
        } text-blue-800`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white bg-background rounded-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>
      </button>
      {isOpen && <div className="px-6 pb-2 text-gray-700">{content}</div>}
    </div>
  );
};

export default AccordionItem;
