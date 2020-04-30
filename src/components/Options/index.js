import React from 'react';
import paper from './paper.png'
import rock from './rock.png'
import scissors from './scissors.png'
import { useState } from 'react';
import './style.css';
const Options = () => {
  //const [text, setText] = useState('Hola');
  const imageClick = () => {
    console.log('Click');
  }
  const isTrue = true;
  return (
    <div className="options-div">
      
      <img className='imagen-paper' src={paper} alt='imag'  onClick={() => imageClick()} ></img>
      <img className='imagen-paper' src={rock} alt='imag'  onClick={() => imageClick()} ></img>
      <img className='imagen-paper' src={scissors} alt='imag'  onClick={() => imageClick()} ></img>
      {isTrue ? <h4>esto esd verdadero</h4> : <h5>Soy falso</h5>}
      {isTrue && <h4>Soy verdadero</h4>}
    </div>
  );
};
export default Options;
