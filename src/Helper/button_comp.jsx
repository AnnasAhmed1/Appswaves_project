import React from "react";
import "../Styles/helper.css";

const ButtonComp = ({ text = "", onClick = () => {} }) => {
  return (
    <button className="buttonComp" onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonComp;
