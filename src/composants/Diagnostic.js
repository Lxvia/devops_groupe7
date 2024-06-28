import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Diagnostic = () => {
  const [scores, setScores] = useState([]);
  const [subaxes, setSubaxes] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/diagnostic')
      .then(response => {
        console.log('Réponse du backend:', response.data); // Vérifiez la réponse du backend
        setScores(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3001/api/data')
      .then(response => {
        console.log('Réponse du backend:', response.data);
        const { subaxes, recommendations } = response.data;
        setSubaxes(subaxes);
        setRecommendations(recommendations);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, []);

  useEffect(() => {
    console.log('Subaxes:', subaxes);
    console.log('Recommendations:', recommendations);
  }, [subaxes, recommendations]);

  const getRecommendationText = (subaxisId, recommendationType) => {
    const recommendation = recommendations.find(rec => rec.subaxis_id === subaxisId && rec.recommendation_type === recommendationType);
    return recommendation ? recommendation.recommendation_text : 'Recommandation non trouvée';
  };

  return (
    <div className='diagnostic'>
      <h2>Diagnostic des scores par sous-axe :</h2>
      <ul>
        {scores.map((score, index) => {
          // Trouver le nom du sous-axe correspondant à partir de subaxes
          const subaxis = subaxes.find(subaxis => subaxis.subaxis_id === score.subaxis_id);
          const subaxisName = subaxis ? subaxis.subaxis_name : 'Nom non trouvé'; // Utilisation du ternaire pour gérer les cas où le sous-axe n'est pas trouvé
          const recommendationText = getRecommendationText(score.subaxis_id, score.recommendation);

          return (
            <div className='diag'>
            <li key={index}>
                <h5>Sous-axe: {subaxisName}</h5>
                <p>Score moyen: {score.average_score}</p>
                <p>Recommandation: {recommendationText}</p>
            </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Diagnostic;




