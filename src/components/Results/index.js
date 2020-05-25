import React from "react";

import "./styles.css";

const Results = (props) => {
  return (
    <div className="container-result">
      <h1 className="results-point">
        Me
        <br /> {props.playerPoints}{" "}
      </h1>
      <h1 className="result-espacio">-</h1>
      <h1 className="results-point">
        CPU
        <br />
        {props.cpuPoints}
      </h1>
    </div>
  );
};

export default Results;
