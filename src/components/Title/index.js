import React, { useState } from "react";

import "./styles.css";

// FUNCTIONAL COMPONENT
const Title = (props) => {
  return (
    <h1 className="title">
      <span className="title-rock">Rock</span>,{" "}
      <span className="title-paper">Paper</span> &{" "}
      <span className="title-scissors">Scissors</span>
    </h1>
  );
};

export default Title;
