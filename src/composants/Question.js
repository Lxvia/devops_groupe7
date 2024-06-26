// src/components/SubAxis.js
import React from 'react';
import Question from './Question';

const SubAxis = ({ questions }) => {
  return (
    <div>
      {questions.map((question, index) => (
        <Question key={index} question={question} />
      ))}
    </div>
  );
};

export default SubAxis;