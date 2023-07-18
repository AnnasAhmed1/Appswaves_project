import React from "react";
import { H4 } from "../Helper/headings";
import { P2 } from "../Helper/paragraphs";

const TopicsCard = ({ title, details }) => {
  return (
    <div className="topics-card">
      <H4 text={title} />
      <P2 text={details} />
      <a
        style={{
          cursor: "pointer",
          color: "#ED3C5F",
        }}
        className="helper-p2"
      >
        Read More
      </a>
    </div>
  );
};

export default TopicsCard;
