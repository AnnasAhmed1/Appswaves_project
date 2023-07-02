import React from "react";
import { H4 } from "../../Helper/headings";
import { P1 } from "../../Helper/paragraphs";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import "../../Styles/component.css";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="service-card">
      <H4 text={title} />
      <P1 text={description} />
      <EastSharpIcon />
    </div>
  );
};

export default ServiceCard;
