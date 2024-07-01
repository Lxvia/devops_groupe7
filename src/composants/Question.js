import React from 'react';

const Question = ({ question, handleInputChange }) => {
  return (
    <div className="question">
      <p>{question.question_text}</p>
      <div>
        <label>
          <input 
            type="radio" 
            name={question.question_id} 
            value="0" 
            onChange={handleInputChange} 
          />
          0
        </label>
        <label>
          <input 
            type="radio" 
            name={question.question_id} 
            value="1" 
            onChange={handleInputChange} 
          />
          1
        </label>
        <label>
          <input 
            type="radio" 
            name={question.question_id} 
            value="2" 
            onChange={handleInputChange} 
          />
          2
        </label>
      </div>
    </div>
  );
};

export default Question;


