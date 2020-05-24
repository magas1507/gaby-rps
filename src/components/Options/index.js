import React from "react";

import "./style.css";

import Button from "../Button";

const Options = ({ addOneCpu, addOnePlayer, contPartidas }) => {
  // const { addOneCpu, addOnePlayer } = props;

  async function cpuAsync() {
    let response = await fetch("https://smartplay.afiniti.com/v1/play/");
    let data = await response.json();
    return data;
  }

  const imageClick = async (str) => {
    try {
      let data = await cpuAsync();

      console.log("immprimiendo", str, data.nextBestMove);
      let resolvetCpu = data.nextBestMove;
      const partida = { player: str, cpu: data.nextBestMove };
      contPartidas(partida);
      if (str === "P" && resolvetCpu === "S") {
        console.log(`perdiste`);
        addOneCpu();
      } else if (str === "P" && resolvetCpu === "R") {
        console.log("ganaste");
        addOnePlayer();
      } else if (str === "S" && resolvetCpu === "R") {
        console.log(`perdiste`);
        addOneCpu();
      } else if (str === "S" && resolvetCpu === "P") {
        console.log(`Ganaste`);
        addOnePlayer();
      } else if (str === "R" && resolvetCpu === "P") {
        console.log("perdiste");
        addOneCpu();
      } else if (str === "R" && resolvetCpu === "S") {
        console.log("ganaste");
        addOnePlayer();
      } else {
        console.log("Draw");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="options-div">
      <Button type="P" handleClick={() => imageClick("P")} />
      <Button type="R" handleClick={() => imageClick("R")} />
      <Button type="S" handleClick={() => imageClick("S")} />
    </div>
  );
};
export default Options;
