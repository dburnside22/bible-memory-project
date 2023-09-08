"use client";
import { useState } from "react";
import Button from "../Button/button";

const Card = ({ verse, letters, verseLabel }) => {
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
        <Button onClick={() => toggleAnswer()}>
          {showAnswer ? "Hide Answer" : "Show Answer"}{" "}
        </Button>
      </div>
    </article>
  );
};

export default Card;
