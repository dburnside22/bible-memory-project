"use client";
import { useState } from "react";

interface CardProps {
  verse: string;
  letters: string;
  verseLabel: string;
}

const Card = ({ verse, letters, verseLabel }: CardProps) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <article className="w-auto p-4 mx-2 mt-10 bg-white rounded md:mx-auto md:w-1/3 min-h-56">
      <header>
        <h2 className="pb-5 text-xl text-center text-semibold">{verseLabel}</h2>
      </header>
      <div className="flex flex-col h-full">
        <span className="pb-5 text-center grow">
          {showAnswer ? verse : letters}
        </span>
        <button
          onClick={() => toggleAnswer()}
          className="self-end p-2 text-white bg-blue-700 rounded text-bold"
        >
          {showAnswer ? "Hide Answer" : "Show Answer"}{" "}
        </button>
      </div>
    </article>
  );
};

export default Card;
