import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SubAxis from './SubAxis'; // Assurez-vous que le chemin est correct

const Axes = () => {
  const [axes, setAxes] = useState([]);
  const [subaxes, setSubaxes] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/api/data')
      .then(response => {
        console.log('Réponse du backend:', response.data); // Vérifiez la réponse du backend
        const { axes, subaxes, recommendations, questions, responses } = response.data;
        setAxes(axes);
        setSubaxes(subaxes);
        setRecommendations(recommendations);
        setQuestions(questions);
        setResponses(responses);
        setLoading(false); // Mettre fin au chargement
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
        setError('Erreur lors de la récupération des données'); // Définir l'erreur
        setLoading(false); // Mettre fin au chargement en cas d'erreur
      });
  }, []);

  useEffect(() => {
    console.log('Axes:', axes);
    console.log('Subaxes:', subaxes);
    console.log('Recommendations:', recommendations);
    console.log('Questions:', questions);
    console.log('Responses:', responses);
  }, [axes, subaxes, recommendations, questions, responses]);

  if (loading) {
    return <div>Chargement...</div>; // Afficher un message de chargement si les données sont en cours de récupération
  }

  if (error) {
    return <div>Erreur: {error}</div>; // Afficher un message d'erreur s'il y a eu une erreur lors de la récupération des données
  }

  return (
    <div className="diagnostic">
      <h1>Questions du diagnostic :</h1>
      <div className="axis-list">
        {axes.length > 0 ? (
          axes.map((axis, index) => (
            <div key={index} className="axis">
              <h2>{axis.axis_name}</h2>
              {/* Passez les subaxes et les questions au composant SubAxis */}
              <SubAxis subaxes={subaxes.filter(sub => sub.axis_id === axis.axis_id)} questions={questions} />
            </div>
          ))
        ) : (
          <div>Aucune donnée disponible</div>
        )}
      </div>
    </div>
  );  
};

export default Axes;

