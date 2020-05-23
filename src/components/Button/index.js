import React, { Component } from 'react';

import P from './paper.png';
import R from './rock.png';
import S from './scissors.png';

import './styles.css';

const images = {
  P,
  R: R,
  S: S,
};

class Button extends Component {
  render() {
    const { type, handleClick } = this.props;
    return (
      <button
        className={`option-button option-button-${type}`}
        onClick={handleClick}
      >
        <img className='option-button-img' src={images[type]} alt={type} />
      </button>
    );
  }
}

export default Button;

// {
/* <img
        className='imagen-paper'
        src={paper}
        alt='imag'
        onClick={() => imageClick('P')}
      /> */
// }
