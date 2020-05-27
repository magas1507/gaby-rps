import React from "react";

import "./styles.css";

const Results = (props) => {
  return (
    <div className="container-result">
      <div className="result-h1">
        <h4>ME</h4>
        <h4>CPU</h4>
      </div>
      <div className="result-points">
        <h1 className="results-point1">{props.playerPoints}</h1>
        <h1 className="result-espacio">-</h1>
        <h1 className="results-point2">{props.cpuPoints}</h1>
      </div>
    </div>
  );
};

export default Results;
