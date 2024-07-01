import React from 'react';
import PrimaryBtn from './PrimaryBtn';
import SecondaryBtn from './SecondaryBtn';

const Header = () => {
  const handleUserSelect = (event) => {
    const selectedUserId = event.target.value;
    console.log('Utilisateur sélectionné:', selectedUserId);
  };

  return (
    <div className="header">
      <h1>Découvrez où se situe votre entreprise dans sa transformation numérique.</h1>
      <p>Recevez un rapport complet avec des recommandations personnalisées pour améliorer votre stratégie digitale.</p>
      <div className='divBtns'>
        <PrimaryBtn path="/formulaire">
          Commencez votre diagnostic maintenant !
        </PrimaryBtn>
        <SecondaryBtn path="/resultat" onClick={handleUserSelect} /> 
      </div>
    </div>
  );
};

export default Header;
