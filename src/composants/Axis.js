// src/components/Axis.js
import React from 'react';
import SubAxis from './SubAxis';

const Axis = ({ axis, questions }) => {
  return (
    <div>
      <h2>{axis}</h2>
      <SubAxis questions={questions} />
    </div>
  );
};

export default Axis;
