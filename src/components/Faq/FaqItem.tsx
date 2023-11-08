import React from "react";

type Props = {
  question: string;
  answer: string;
};

const FaqItem = ({ question, answer }: Props) => {
  return (
    <details className="w-full border rounded-lg">
      <summary className="px-4 py-6 font-semibold focus:outline-none focus-visible:ri">
        {question}
      </summary>
      <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">{answer}</p>
    </details>
  );
};

export default FaqItem;
