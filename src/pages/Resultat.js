import React from 'react';
import HeaderResultats from '../composants/HeaderResultats';
import Diagnostic from '../composants/Diagnostic';
import { useParams } from 'react-router-dom';

function Resultat() {
  const { userId } = useParams();
  console.log('Utilisateur sélectionné:', userId);

  return (
    <div className='resultat'>
      <HeaderResultats />
      <Diagnostic userId={userId} />
    </div>
  );
}

export default Resultat;



