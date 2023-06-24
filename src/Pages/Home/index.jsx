import React from "react";
import "../../Styles/home.css";
import ColoredHeading from "../../Components/Colored_heading";
import HomeSilder from "../../Components/Home/HomeSilder";
import DevelopmentList from "../../Components/Home/DevelopmentList";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import SquareOutlinedIcon from "@mui/icons-material/SquareOutlined";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

const Home = () => {
  const developmentItems = [
    {
      title: "Startups",
      icon: (
        <PanoramaFishEyeIcon
          sx={{
            fontSize: "20px",
            color: "#f47a1f",
          }}
        />
      ),
      items: [
        "Startup App Development",
        "Startup Prototype",
        "E-Commerce Development",
      ],
    },
    {
      title: "SMB",
      icon: (
        <SquareOutlinedIcon
          sx={{
            fontSize: "20px",
            color: "#f47a1f",
          }}
        />
      ),
      items: [
        "Flutter App Development",
        "Mobile App Support",
        "Wearable App Development",
      ],
    },
    {
      title: "Enterprise",
      icon: (
        <ChangeHistoryIcon
          sx={{
            fontSize: "20px",
            color: "#f47a1f",
          }}
        />
      ),
      items: [
        "IT Staff Augmentation",
        "Blockchain Development",
        "IP Protection",
      ],
    },
  ];
  return (
    <main className="home-main-container container">
      <HomeSilder />
      <div className="developmentListContainer">
        {developmentItems.map((v, i) => {
          return (
            <DevelopmentList
              title={v.title}
              icon={v.icon}
              listItems={v.items}
            />
          );
        })}
      </div>
      <section>
        <h2>Awards & Recognitions</h2>
        <p>We thrive on accelerating the path to disruption and implementing agile methodology to build feature-rich, user-friendly mobile apps that end users love. Our user-centric, quality-driven, and future-oriented mobile app development services are the reason why we have bagged these notorious awards and recognitions.</p>
        
      </section>
    </main>
  );
};

export default Home;
