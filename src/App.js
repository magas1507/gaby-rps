import React, { useState } from "react";
import "./app.css";
import Title from "./components/Title";
import Options from "./components/Options";
import Results from "./components/Results";
import Timeline from "./components/Timeline";

function App() {
  const [loading, setLoading] = useState(false);
  const [cpuPoints, setCpuPoints] = useState(0); // ESTADO const cpuPoints = 0;
  const [playerPoints, setPlayerPoints] = useState(0); // ESTADO
  const [partidas, setPartidas] = useState([]);

  const addOneCpu = (partida) => {
    setCpuPoints(cpuPoints + 1);
  };
  const addOnePlayer = (partida) => {
    setPlayerPoints(playerPoints + 1);
  };
  const contPartidas = (partida) => {
    setPartidas([partida, ...partidas]);
  };
  return (
    <div className="app-container">
      <Title />
      <div className="app-linear"></div>
      <Options
        loading={loading}
        setLoading={(action) => setLoading(action)}
        addOneCpu={addOneCpu}
        addOnePlayer={addOnePlayer}
        contPartidas={contPartidas}
      />

      <Results playerPoints={playerPoints} cpuPoints={cpuPoints} />
      <div className="timeline">
        <Timeline partidas={partidas} />
      </div>
    </div>
  );
}

export default App;
