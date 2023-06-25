import React from "react";
import ButtonComp from "../Helper/button_comp";
import { P1 } from "../Helper/paragraphs";
import { H2 } from "../Helper/headings";
import { Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const servicesList = [
    "Custom Software Development",
    "Android App Development",
    "IPhone App Development",
    "Web Development",
    "Game Development",
    "Mobile App Support",
    "Startup App Development",
    "Flutter App Development",
    "Cross Platform App Development",
    "React Native App Development",
  ];
  const solutionsList = [
    "Automotive App Development",
    "Healthcare App Development",
    "On-Demand App Development",
    "Ecommerce App Development",
    "Real Estate App Development",
    "Music App Development",
    "IT Staff Augmentation",
  ];
  const aboutList = [
    "About TekRevol",
    "Referral Program",
    "Blogs",
    "Press",
    "Events",
  ];

  const locationList = [
    "HOU",
    "ATX",
    "DTX",
    "SF",
    "MIA",
    "CHI",
    "NYC",
    "DC",
    "LA",
    "DXB",
    "QA",
    "BH",
    "KSA",
  ];

  return (
    <footer>
      <section className="container">
        <P1 text={"Have a Project To Discuss?"} color="#ffffff" center={true} />
        <H2 text={"We’re Ready!"} color="#ffffff" center={true} />
        <ButtonComp text="LET’S CONNECT!" center={true} />
        <div>
          <div>
            <h4>Services</h4>
            <div className="grid-container">
              {servicesList.map((service, index) => {
                return (
                  <p className="grid-item" key={index}>
                    {service}
                  </p>
                );
              })}
            </div>
          </div>
          <div>
            <h4>Solutions</h4>
            <div className="grid-container">
              {solutionsList.map((solution, index) => {
                return (
                  <p className="grid-item" key={index}>
                    {solution}
                  </p>
                );
              })}
            </div>
          </div>
          <div>
            <h4>About Us</h4>
            {aboutList.map((about, index) => {
              return (
                <p className="grid-item" key={index}>
                  {about}
                </p>
              );
            })}
          </div>
        </div>
        <section className="location-section">
          <div>
            <h4>Locations</h4>
            <ul>
              {locationList.map((v, i) => {
                return <li>{v}</li>;
              })}
            </ul>
          </div>
          <div>
            <FacebookIcon />
            <TwitterIcon />
            <YouTubeIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </section>
        <section className="bottom-section">
          <p>© Tekrevol 2023. All rights reserved</p>
          <div>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact Us</p>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
