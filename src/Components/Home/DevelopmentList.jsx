import React from "react";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
const DevelopmentList = ({ title, listItems, icon }) => {
  return (
    <div className="developmentList">
      <h4>
        {icon}
        {title}
      </h4>
      <ul>
        {listItems?.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default DevelopmentList;
