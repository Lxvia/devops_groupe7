import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate depuis react-router-dom

import SubAxis from './SubAxis';

const Axes = () => {
  const navigate = useNavigate(); // Initialisez useNavigate pour la redirection

  const [axes, setAxes] = useState([]);
  const [subaxes, setSubaxes] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/api/data')
      .then(response => {
        console.log('Réponse du backend:', response.data);
        const { axes, subaxes, recommendations, questions } = response.data;
        setAxes(axes);
        setSubaxes(subaxes);
        setRecommendations(recommendations);
        setQuestions(questions);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
        setError('Erreur lors de la récupération des données');
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResponses({
      ...responses,
      [name]: value
    });
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3001/api/users', { name: username })
      .then(response => {
        const newUserId = response.data.userId;
        setUserId(newUserId);

        axios.post('http://localhost:3001/api/responses', { responses, userId: newUserId })
          .then(response => {
            console.log('Réponses enregistrées:', response.data);
            // Redirection vers une autre route après la soumission réussie
            navigate('/'); // Remplacez par le chemin vers lequel vous souhaitez rediriger
          })
          .catch(error => {
            console.error('Erreur lors de l\'enregistrement des réponses:', error);
          });
      })
      .catch(error => {
        console.error('Erreur lors de la création de l\'utilisateur:', error);
      });
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur: {error}</div>;
  }

  return (
    <div className="diagnostic">
      <h1>Questions du diagnostic :</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nom de votre entreprise :
            <input type="text" value={username} onChange={handleUsernameChange} required />
          </label>
        </div>
        <br></br>
        <div className="axis-list">
          {axes.length > 0 ? (
            axes.map((axis, index) => (
              <div key={index} className="axis">
                <h2>{axis.axis_name}</h2>
                <SubAxis
                  subaxes={subaxes.filter(sub => sub.axis_id === axis.axis_id)}
                  questions={questions}
                  handleInputChange={handleInputChange}
                />
              </div>
            ))
          ) : (
            <div>Aucune donnée disponible</div>
          )}
        </div>
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
};

export default Axes;








