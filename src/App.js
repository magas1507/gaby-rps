import React, { useState, useEffect } from "react";

import Title from "./components/Title";
import Options from "./components/Options";
import Results from "./components/Results";

function App() {
  const [cpuPoints, setCpuPoints] = useState(0); // ESTADO const cpuPoints = 0;
  const [playerPoints, setPlayerPoints] = useState(0); // ESTADO
  const [partidas, setPartidas] = useState([]);
  //console.log(partidas);
  const addOneCpu = (partida) => {
    setCpuPoints(cpuPoints + 1);
    //console.log(partida);
  };
  const addOnePlayer = (partida) => {
    setPlayerPoints(playerPoints + 1);
    //console.log(partida);
  };
  const contPartidas = (partida) => {
    setPartidas(partidas.concat([partida]));
  };
  useEffect(() => {
    console.log(partidas);
  }, [partidas]);
  return (
    <div className="App">
      <Title />
      <Options
        addOneCpu={addOneCpu}
        addOnePlayer={addOnePlayer}
        contPartidas={contPartidas}
      />

      <Results playerPoints={playerPoints} cpuPoints={cpuPoints} />
    </div>
  );
}

export default App;
