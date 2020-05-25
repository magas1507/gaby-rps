import React, { Component } from "react";

import P from "./mini-p.png";
import R from "./mini-r.png";
import S from "./mini-s.png";

import "./styles.css";

const images = {
  P,
  R: R,
  S: S,
};

class Line extends Component {
  render() {
    const { type } = this.props;
    return (
      <div className="line-figure">
        <img className="line-img" src={images[type]} alt={type} />
      </div>
    );
  }
}

export default Line;
