import React, { useState } from 'react';

const FormComponent = () => {
  // État pour gérer les réponses aux questions
  const [formData, setFormData] = useState({
    category1: {
      question1: '',
      question2: ''
    },
    category2: {
      question1: '',
      question2: ''
    }
    // Ajoutez d'autres catégories et questions selon vos besoins
  });

  // Fonction pour mettre à jour les réponses
  const handleCheckboxChange = (category, question, choice) => {
    setFormData(prevState => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [question]: choice
      }
    }));
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données soumises : ', formData);
    // Ici, vous pouvez ajouter la logique pour envoyer les données à votre backend ou effectuer d'autres actions nécessaires.
  };

  return (
    <div>
      {/* Parcourir chaque catégorie et ses questions */}
      {Object.keys(formData).map(category => (
        <div key={category}>
          <h2>Nom de la catégorie : {category}</h2>
          <form onSubmit={handleSubmit}>
            <h3>Question 1</h3>
            <label>
              <input
                type="checkbox"
                value="Choix 1"
                checked={formData[category].question1 === 'Choix 1'}
                onChange={() => handleCheckboxChange(category, 'question1', 'Choix 1')}
              />
              Choix 1
            </label>
            {/* Répéter le même schéma pour les autres questions de cette catégorie */}
            <button type="submit">Soumettre</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default FormComponent;


