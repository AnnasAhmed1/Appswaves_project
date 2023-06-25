import React from "react";
import "../Styles/helper.css";

const ButtonComp = ({
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
      className={`buttonComp ${transparent ? "transparent" : "solid"}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonComp;
