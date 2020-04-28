import React from 'react';
import imagen from '../images/mini-p.png'
const Botones = () => {

  const isTrue = true;
  return (
    <div className="HolaMundo">
      
      <img src={imagen} alt='imag'></img>
      {isTrue ? <h4>esto esd verdadero</h4> : <h5>Soy falso</h5>}
      {isTrue && <h4>Soy verdadero</h4>}
    </div>
  );
};
export default Botones;
