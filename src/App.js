import React, { useState } from 'react';

import Title from './components/Title';
import Options from './components/Options';
import Results from './components/Results';

function App() {
  const [cpuPoints, setCpuPoints] = useState(0); // ESTADO const cpuPoints = 0;
  const [playerPoints, setPlayerPoints] = useState(0); // ESTADO

  const addOneCpu = () => {
    setCpuPoints(cpuPoints + 1);
  };
  const addOnePlayer = () => {
    setPlayerPoints(playerPoints + 1);
  };

  return (
    <div className='App'>
      <Title />
      <Options addOneCpu={addOneCpu} addOnePlayer={addOnePlayer} />
      <Results playerPoints={playerPoints} cpuPoints={cpuPoints} />
    </div>
  );
}

export default App;
