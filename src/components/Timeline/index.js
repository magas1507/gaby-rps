import React from "react";
import Line from "../Line";
import "./styles.css";

const Timeline = (props) => {
  return (
    <div className="container">
      {props.partidas.reverse().map(function (partida, index) {
        let { player, cpu } = partida;

        return (
          <div className="container-timeline" key={index}>
            <Line type={player} />
            <div className="timeline-line-linear"></div>
            <Line type={cpu} />
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
