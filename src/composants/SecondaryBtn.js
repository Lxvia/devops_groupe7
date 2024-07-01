import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SecondaryBtn = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      });
  }, []);

  const handleSelectChange = (e) => {
    setSelectedUserId(e.target.value);
  };

  const handleGoClick = () => {
    if (selectedUserId) {
      navigate(`/resultat/${selectedUserId}`);
    }
  };

  return (
    <div className="secondaryBtn">
      <select value={selectedUserId} onChange={handleSelectChange}>
        <option value="" disabled>Diagnostiques entreprises</option>
        {users.map(user => (
          <option key={user.userId} value={user.userId}>
            {user.name}
          </option>
        ))}
      </select>
      <button onClick={handleGoClick}>Go</button>
    </div>
  );
};

export default SecondaryBtn;






