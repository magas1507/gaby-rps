import React, { useState } from 'react';

import './styles.css';

// FUNCTIONAL COMPONENT
const Title = (props) => {
  const [text, setText] = useState('Hola');

  const handleClickOnSpan = (event) => {
    console.log('HOLA');
    setText('HOLA GABY');
  };

  return (
    <h1 className='title'>
      <span className='title-rock'>Rock</span>,{' '}
      <span className='title-paper'>Paper</span> &{' '}
      <span className='title-scissors'>Scissors</span>
      <span onClick={handleClickOnSpan}>{text}</span>
    </h1>
  );
};

export default Title;
