import React from "react";
import Line from "../Line";
import "./styles.css";

const Timeline = (props) => {
  return (
    <div className="container">
      {props.partidas.map(function (partida, index) {
        let { player, cpu } = partida;

        return (
          <div className="container-timeline" key={index}>
            <Line type={cpu} />
            <div className="timeline-line-linear"></div>

            <Line type={player} />
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
