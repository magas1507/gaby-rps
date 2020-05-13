import React from 'react';

import './styles.css';

const Results = (props) => {
  return (
    <div className='container'>
      <h1>Me: {props.playerPoints}</h1>
      <h1>CPU: {props.cpuPoints}</h1>
    </div>
  );
};

export default Results;
