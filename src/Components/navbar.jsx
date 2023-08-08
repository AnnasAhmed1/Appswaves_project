import React, { useState } from "react";
import ButtonComp from "../Helper/button_comp";
import "../Styles/component.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Dropdown } from "antd";
import GradientButton from "../Helper/GradientButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = ({ gradientButton = false }) => {
  const navigate = useNavigate();

  const subContainerServices = [
    {
      key: 1,
      label: (
        <div className="sub-nav-container " href="app-development">
          <div
            style={{
              display: "flex",
            }}
            className="container"
          >
            <div>
              <h3>Our Services</h3>
              <img src={require(".././Assets/nav_image.png")} alt="" />
            </div>
            <div>
              <h3>Primary</h3>
              <div>
                <a
                  className="link-list-item"
                  href={`/services/android-app-development`}
                >
                  Android App Development
                </a>
                <a
                  className="link-list-item"
                  href={`/services/iphone-app-development`}
                >
                  IPhone App Development
                </a>
                <a
                  className="link-list-item"
                  href={`/services/game-development`}
                >
                  Game Development
                </a>
                <a
                  className="link-list-item"
                  href={`/services/web-development`}
                >
                  Web Development
                </a>
                <a
                  className="link-list-item"
                  href={`/services/custom-software-development`}
                >
                  Custom Software Development
                </a>
                <a
                  className="link-list-item"
                  href={`/services/flutter-app-development`}
                >
                  Flutter App Development
                </a>
                <a
                  className="link-list-item"
                  href={`/services/react-native-app-development`}
                >
                  React Native App Development
                </a>
              </div>
            </div>
            <div>
              <h3>Consulting</h3>
              <div>
                <a
                  className="link-list-item"
                  href={`/services/cloud-computing`}
                >
                  Cloud Computing
                </a>
                <a className="link-list-item" href={`/services/cto-consultant`}>
                  CTO Consultant
                </a>
                <a
                  className="link-list-item"
                  href={`/services/emerging-technology`}
                >
                  Emerging Technology
                </a>
                <a
                  className="link-list-item"
                  href={`/services/digital-transformation`}
                >
                  Digital Transformation
                </a>
                <a
                  className="link-list-item"
                  href={`/services/digital-marketplace`}
                >
                  Digital Marketplace
                </a>
                <a className="link-list-item" href={`/services/data-analytics`}>
                  Data Analytics
                </a>
                <a
                  className="link-list-item"
                  href={`/services/digital-strategy`}
                >
                  Digital Strategy
                </a>
              </div>
            </div>
            <div>
              <h3>Trending</h3>
              <div>
                <a className="link-list-item" href="">
                  AI Development
                </a>
                <a className="link-list-item" href="">
                  AR/VR Company
                </a>
                <a className="link-list-item" href="">
                  Automation Consultancy
                </a>
                <a className="link-list-item" href="">
                  Bluetooth App Development
                </a>
                <a className="link-list-item" href="">
                  Automation Consultancy
                </a>
                <a className="link-list-item" href="">
                  NFT Development
                </a>
                <a className="link-list-item" href="">
                  Machine Learning
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  const subContainerSolutions = [
    {
      key: 1,
      label: (
        <div className="sub-nav-container " href="app-development">
          <div
            style={{
              display: "flex",
            }}
            className="container"
          >
            <div>
              <h3>Our Solution</h3>
              <img src={require(".././Assets/nav_image.png")} alt="" />
            </div>
            <div>
              <h3>Primary</h3>
              <div>
                <a className="link-list-item" href={`/solutions/cms-solution`}>
                  CMS Solution
                </a>
                <a className="link-list-item" href={`/solutions/hrm-solution`}>
                  HRM Solution
                </a>
                <a className="link-list-item" href={`/solutions/crm-solution`}>
                  CRM Solution
                </a>
                <a className="link-list-item" href={`/solutions/erp-solution`}>
                  ERP Solution
                </a>
                <a className="link-list-item" href={`/solutions/lms-solution`}>
                  LMS Solution
                </a>
                <a className="link-list-item" href={`/solutions/pos-solution`}>
                  POS Solution
                </a>
              </div>
            </div>
            <div>
              <h3>Industries</h3>
              <div>
                <a className="link-list-item" href={`/solutions/automotive`}>
                  Automotive
                </a>
                <a className="link-list-item" href={`/solutions/healthcare`}>
                  Healthcare
                </a>
                <a className="link-list-item" href={`/solutions/on-demand`}>
                  On-Demand
                </a>
                <a className="link-list-item" href={`/solutions/education`}>
                  Education
                </a>
                <a className="link-list-item" href={`/solutions/music`}>
                  Music
                </a>
                <a className="link-list-item" href={`/solutions/fintech`}>
                  Fintech
                </a>
              </div>
            </div>
            <div>
              <h3
                style={{
                  opacity: 0,
                }}
              >
                I
              </h3>
              <div>
                <a className="link-list-item" href={`/solutions/logistics`}>
                  Logistics
                </a>
                <a className="link-list-item" href={`/solutions/retail`}>
                  Retail
                </a>
                <a className="link-list-item" href={`/solutions/ecommerce`}>
                  Ecommerce
                </a>
                <a className="link-list-item" href={`/solutions/real-estate`}>
                  Real Estate
                </a>
                <a
                  className="link-list-item"
                  href={`/solutions/staff-augmentation`}
                >
                  Staff Augmentation
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  const subContainerTech = [
    {
      key: 1,
      label: (
        <div className="sub-nav-container " href="app-development">
          <div
            style={{
              display: "flex",
            }}
            className="container"
          >
            <div>
              <h3>Our Technologies</h3>
              <img src={require(".././Assets/nav_image.png")} alt="" />
            </div>
            <div></div>
            <div>
              <h3>Languages</h3>
              <div>
                <a className="link-list-item" href={`/technology/.Net`}>
                  .Net
                </a>
                <a className="link-list-item" href={`/technology/HTML5`}>
                  HTML5
                </a>
                <a className="link-list-item" href={`/solutions/on-demand`}>
                  Java
                </a>
                <a className="link-list-item" href={`/solutions/education`}>
                  Node.Js
                </a>
                <a className="link-list-item" href={`/solutions/music`}>
                  PHP
                </a>
                <a className="link-list-item" href={`/solutions/fintech`}>
                  Python
                </a>
              </div>
            </div>
            <div>
              <h3>Platforms</h3>
              <div>
                <a className="link-list-item" href={`/solutions/cms-solution`}>
                  Azure
                </a>
                <a className="link-list-item" href={`/solutions/hrm-solution`}>
                  GCP
                </a>
                <a className="link-list-item" href={`/solutions/crm-solution`}>
                  Oracle
                </a>
                <a className="link-list-item" href={`/solutions/erp-solution`}>
                  SAP
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  const subContainerInsights = [
    {
      key: 1,
      label: (
        <div
          style={{
            marginRight: "150px",
          }}
          className="sub-nav-container "
          href="app-development"
        >
          <div
            style={{
              display: "flex",
            }}
            className="container"
          >
            <div>
              <div>
                <a className="link-list-item" href={`/about`}>
                  About Appswaves
                </a>
                <a className="link-list-item" href={`/life`}>
                  Life At Appswaves
                </a>
                <a
                  className="link-list-item"
                  // href={`/blogs`}
                >
                  Blogs
                </a>
                <a className="link-list-item" href={`/press`}>
                  Press
                </a>
                <a className="link-list-item" href={`/career`}>
                  Career
                </a>
                <a className="link-list-item" href={`/podcast`}>
                  Podcast
                </a>
                <a className="link-list-item" href={`/events`}>
                  Events
                </a>
                <a className="link-list-item" href={`/referral-program`}>
                  Referral Program
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  const navs = [
    {
      title: "Home",
      subRoutes: false,
    },
    {
      title: "Services",
      subRoutes: subContainerServices,
    },
    {
      title: "Solutions",
      subRoutes: subContainerSolutions,
    },
    {
      title: "Technologies",
      subRoutes: subContainerTech,
    },
    {
      title: "Location",
      subRoutes: false,
    },
    {
      title: "Portfolio",
      subRoutes: false,
    },
    {
      title: "Insights",
      subRoutes: subContainerInsights,
    },
    {
      title: "Payment",
      subRoutes: false,
    },
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar-head">
      <nav className="navbar">
        <div className="container">
          <Link to={"/"}>
            <img
              style={{
                display: "block",
                flex: 1,
                // width: "150px",
              }}
              src={require("../Assets/logo.png")}
              alt="logo"
              className="logo"
            />
          </Link>
          <ul className="nav-mobile">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MenuIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              className="mobile-nav"
            >
              {navs?.map((v, i) => {
                return (
                  <MenuItem>
                    <li key={i}>
                      <Link to={v.title == "home" ? "/" : `/${v.title}`}>
                        {v.title}
                      </Link>
                    </li>
                  </MenuItem>
                );
              })}
            </Menu>
          </ul>
          <ul className="nav-desktop">
            {navs?.map((v, i) => {
              return (
                <li key={i}>
                  {v.subRoutes ? (
                    <Dropdown
                      style={{
                        width: "1000px",
                      }}
                      className="nav-dropdown"
                      menu={{
                        items: v.subRoutes,
                      }}
                      placement="bottom"
                      arrow
                    >
                      <Link to={v.title !== "Insights" ? `/${v.title}` : null}>
                        {v.title}
                      </Link>
                    </Dropdown>
                  ) : (
                    <Link to={`/${v.title === "home" ? "/" : v.title}`}>
                      {v.title}
                    </Link>
                  )}
                </li>
              );
            })}

            {!gradientButton ? (
              <ButtonComp
                text="Get a quote"
                transparent={false}
                onClick={() => {
                  navigate("/contact");
                }}
              />
            ) : (
              <GradientButton
                text="Contact Us"
                transparent={false}
                onClick={() => {
                  navigate("/contact");
                }}
              />
            )}
          </ul>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
