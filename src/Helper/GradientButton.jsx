import React from "react";

const GradientButton = ({
  text = "",
  onClick = () => {},
  transparent = true,
  center = false,
}) => {
  return (
    <button
      style={{
        margin: center ? "0 auto" : null,
      }}
      className={`gradientButton ${transparent ? "transparent" : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default GradientButton;
