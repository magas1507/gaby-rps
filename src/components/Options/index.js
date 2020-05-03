import React from "react";
import paper from "./paper.png";
import rock from "./rock.png";
import scissors from "./scissors.png";
import { useState } from "react";
import "./style.css";
const Options = () => {
  //const [text, setText] = useState('Hola');

  async function cpuAsync() {
    let response = await fetch("https://smartplay.afiniti.com/v1/play/");

    let data = await response.json();

    return data;
  }

  const imageClick = (str) => {
    cpuAsync()
      .then((data) => {
        console.log(str, data.nextBestMove);
        let resolvetCpu = data.nextBestMove;

        if (str === "P" && resolvetCpu === "S") {
          console.log(`perdiste`);
        } else if (str === "P" && resolvetCpu === "R") {
          console.log("ganaste");
        } else if (str === "S" && resolvetCpu === "R") {
          console.log(`perdiste`);
        } else if (str === "S" && resolvetCpu === "P") {
          console.log(`Ganaste`);
        } else if (str === "R" && resolvetCpu === "P") {
          console.log("perdiste");
        } else if (str === "R" && resolvetCpu === "S") {
          console.log("ganaste");
        } else {
          console.log("Wrap");
        }
      })
      .catch((reason) => console.log(reason.message));
  };

  return (
    <div className="options-div">
      <img
        className="imagen-paper"
        src={paper}
        alt="imag"
        onClick={() => imageClick("P")}
      ></img>
      <img
        className="imagen-paper"
        src={rock}
        alt="imag"
        onClick={() => imageClick("R")}
      ></img>
      <img
        className="imagen-paper"
        src={scissors}
        alt="imag"
        onClick={() => imageClick("S")}
      ></img>
    </div>
  );
};
export default Options;
