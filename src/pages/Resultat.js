import React from 'react'
import HeaderResultats from '../composants/HeaderResultats'
import Diagnostic from '../composants/Diagnostic'

function Resultat() {
  return (
    <div className='resultat'>
      <h1>Page résultat</h1>
      <HeaderResultats />
      <Diagnostic />
    </div>
  )
}

export default Resultat


