import React from 'react';
import Question from './Question'; // Assurez-vous que le chemin est correct

const SubAxis = ({ subaxes, questions }) => {
  return (
    <div>
      {subaxes.map((subaxe, index) => {
        const subaxisQuestions = questions.filter(question => question.subaxis_id === subaxe.subaxis_id);
        console.log(`Questions for ${subaxe.subaxis_name}:`, subaxisQuestions);

        return (
          <div key={index} className="subaxis">
            <h3>{subaxe.subaxis_name}</h3>
            {subaxisQuestions.length > 0 ? (
              subaxisQuestions.map((question, qIndex) => (
                <Question key={qIndex} question={question} />
              ))
            ) : (
              <p>Aucune question disponible</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SubAxis;


