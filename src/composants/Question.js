import React from 'react';

const Question = ({ question }) => {
  return (
    <div className="question">
      <p>{question.question_text}</p>
    </div>
  );
};

export default Question;
