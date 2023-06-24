import React from "react";

const ColoredHeading = ({ text, coloredText, reverse = false }) => {
  return (
    <h1 className="coloredHeading">
      {!reverse ? text : null}
      <span>{" " + coloredText + " "}</span>
      {reverse ? text : null}
    </h1>
  );
};

export default ColoredHeading;
