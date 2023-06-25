import React from "react";
import { H4 } from "../../Helper/headings";
import { P1 } from "../../Helper/paragraphs";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import "../../Styles/component.css";

const ServiceCard = () => {
  return (
    <div className="service-card">
      <H4 text={"Android App Development"} />
      <P1
        text={
          "TekRevol develops next-gen iOS apps for businesses that ensure market disruption, growth, and scalability."
        }
      />
      <EastSharpIcon />
    </div>
  );
};

export default ServiceCard;
