import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Diagnostic = () => {
  const { userId } = useParams();
  const [scores, setScores] = useState([]);
  const [subaxes, setSubaxes] = useState([]);
  const [recommendationsAr, setRecommendationsAr] = useState([]);

  useEffect(() => {
    // Récupérer les scores par utilisateur
    axios.get(`http://localhost:3001/api/resultat/${userId}`)
      .then(response => {
        console.log('Réponse du backend pour scores:', response.data);
        setScores(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des scores:', error);
      });

    // Récupérer les données initiales pour les sous-axes et les recommandations
    axios.get('http://localhost:3001/api/data')
      .then(response => {
        console.log('Réponse du backend pour données initiales:', response.data);
        const { subaxes, recommendations } = response.data;
        setSubaxes(subaxes);
        setRecommendationsAr(recommendations);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données initiales:', error);
      });
  }, [userId]);

  const getSubaxisName = (subaxisId) => {
    const subaxis = subaxes.find(subaxis => subaxis.subaxis_id === subaxisId);
    return subaxis ? subaxis.subaxis_name : 'Nom non trouvé';
  };

  /* const getRecommendationText = (subaxisId, recommendationType) => {
    console.log(recommendationsAr)
    const recommendation = recommendationsAr.find(rec => rec.subaxis_id === subaxisId && rec.recommendation === recommendationType);
    console.log(recommendation + 'reco');
    return recommendation ? recommendation.recommendation_text : 'Recommandation non trouvée';
  }; */

  return (
    <div className='diagnostic'>
      <h2>Diagnostic des scores par sous-axe :</h2>
      <ul>
        {scores.length > 0 ? (
          scores.map((score) => (
            <div className='diag' key={score.score_id}>
              <li>
                <h5>Sous-axe: {getSubaxisName(score.subaxis_id)}</h5>
                <p>Score moyen: {score.average_score}</p>
              </li>
            </div>
          ))
        ) : (
          <p>Aucun score trouvé pour cet utilisateur.</p>
        )}
      </ul>
    </div>
  );  
};

export default Diagnostic;



