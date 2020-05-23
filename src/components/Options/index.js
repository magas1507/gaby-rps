import React from 'react';
import paper from './paper.png';
import rock from './rock.png';
import scissors from './scissors.png';
import { useState } from 'react';
import './style.css';

const Options = ({ addOneCpu, addOnePlayer }) => {
  // const { addOneCpu, addOnePlayer } = props;

  async function cpuAsync() {
    let response = await fetch('https://smartplay.afiniti.com/v1/play/');
    let data = await response.json();
    return data;
  }

  const imageClick = async (str) => {
    try {
      let data = await cpuAsync();

      console.log(str, data.nextBestMove);
      let resolvetCpu = data.nextBestMove;

      if (str === 'P' && resolvetCpu === 'S') {
        console.log(`perdiste`);
        addOneCpu();
      } else if (str === 'P' && resolvetCpu === 'R') {
        console.log('ganaste');
        addOnePlayer();
      } else if (str === 'S' && resolvetCpu === 'R') {
        console.log(`perdiste`);
        addOneCpu();
      } else if (str === 'S' && resolvetCpu === 'P') {
        console.log(`Ganaste`);
        addOnePlayer();
      } else if (str === 'R' && resolvetCpu === 'P') {
        console.log('perdiste');
        addOneCpu();
      } else if (str === 'R' && resolvetCpu === 'S') {
        console.log('ganaste');
        addOnePlayer();
      } else {
        console.log("Draw");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className='options-div'>
      <img
        className='imagen-paper'
        src={paper}
        alt='imag'
        onClick={() => imageClick('P')}
      ></img>
      <img
        className='imagen-paper'
        src={rock}
        alt='imag'
        onClick={() => imageClick('R')}
      ></img>
      <img
        className='imagen-paper'
        src={scissors}
        alt='imag'
        onClick={() => imageClick('S')}
      ></img>
    </div>
  );
};
export default Options;
