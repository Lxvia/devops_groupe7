// src/components/Question.js
import React from 'react';

const Question = ({ question }) => {
  return (
    <div className="question">
      <p>{question.text}</p>
      <p>Score: {question.score} / {question.maxScore}</p>
    </div>
  );
};

export default Question;
