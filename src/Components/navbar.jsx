import React, { useState } from "react";
import ButtonComp from "../Helper/button_comp";
import "../Styles/component.css";
import { Link } from "react-router-dom";
import { Button, Dropdown } from "antd";
import GradientButton from "../Helper/GradientButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = ({ gradientButton = false }) => {
  const subContainer = [
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
              <img src={require(".././Assets/nav_image.webp")} alt="" />
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
              <img src={require(".././Assets/nav_image.webp")} alt="" />
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
  const navs = [
    {
      title: "Home",
      subRoutes: [],
    },
    {
      title: "Services",
      // {
      //   key: '2',
      //   label: (
      //     <a target="" href="https://www.aliyun.com">
      //       2nd menu item
      //     </a>
      //   ),
      // },
      subRoutes: [
        // "Primary",

        // "",
        // {
        //   key: 1,
        //   label: <a href="">Primary</a>,
        // },
        {
          key: 1,
          label: (
            <div className="link-list-item" href="app-development">
              Android App Development
            </div>
          ),
        },
        {
          key: 2,
          label: (
            <a className="link-list-item" href="">
              {" "}
              IPhone App Development
            </a>
          ),
        },
        {
          key: 3,
          label: (
            <a className="link-list-item" href="">
              {" "}
              Game Development
            </a>
          ),
        },
        {
          key: 4,
          label: (
            <a className="link-list-item" href="">
              {" "}
              Web Development
            </a>
          ),
        },
        {
          key: 5,
          label: (
            <a className="link-list-item" href="">
              {" "}
              Custom Software Development
            </a>
          ),
        },
        {
          key: 6,
          label: (
            <a className="link-list-item" href="">
              {" "}
              Flutter App Development
            </a>
          ),
        },
        {
          key: 7,
          label: (
            <a className="link-list-item" href="">
              {" "}
              React Native App Development
            </a>
          ),
        },
        // { key: 1, label: <a className="link-list-item" href=""> Consulting</a> },
        {
          key: 8,
          label: (
            <a className="link-list-item" href="">
              {" "}
              Cloud Computing
            </a>
          ),
        },
        {
          key: 9,
          label: (
            <a className="link-list-item" href="">
              {" "}
              CTO Consultant
            </a>
          ),
        },
        {
          key: 10,
          label: (
            <a className="link-list-item" href="">
              Emerging Technology
            </a>
          ),
        },
        {
          key: 11,
          label: (
            <a className="link-list-item" href="">
              {" "}
              Digital Transformation
            </a>
          ),
        },
        {
          key: 12,
          label: (
            <a className="link-list-item" href="">
              {" "}
              Digital Marketplace
            </a>
          ),
        },
        {
          key: 13,
          label: (
            <a className="link-list-item" href="">
              {" "}
              Data Analytics
            </a>
          ),
        },
        {
          key: 14,
          label: (
            <a className="link-list-item" href="">
              {" "}
              Digital Strategy
            </a>
          ),
        },
        // { key: 1, label: <a className="link-list-item" href="">Trending</a> },
        {
          key: 15,
          label: (
            <a className="link-list-item" href="">
              AI Development
            </a>
          ),
        },
        {
          key: 16,
          label: (
            <a className="link-list-item" href="">
              AR/VR Company
            </a>
          ),
        },
        {
          key: 17,
          label: (
            <a className="link-list-item" href="">
              Automation Consultancy
            </a>
          ),
        },
        {
          key: 18,
          label: (
            <a className="link-list-item" href="">
              Bluetooth App Development
            </a>
          ),
        },
        {
          key: 19,
          label: (
            <a className="link-list-item" href="">
              Automation Consultancy
            </a>
          ),
        },
        {
          key: 20,
          label: (
            <a className="link-list-item" href="">
              NFT Development
            </a>
          ),
        },
        {
          key: 21,
          label: (
            <a className="link-list-item" href="">
              Machine Learning
            </a>
          ),
        },
      ],
    },
    {
      title: "Solutions",
      subRoutes: [1, 2, 3],
    },
    {
      title: "Technologies",
      subRoutes: [],
    },
    {
      title: "Location",
      subRoutes: [],
    },
    {
      title: "Portfolio",
      subRoutes: [],
    },
    {
      title: "Insights",
      subRoutes: [],
    },
  ];
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
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
          {/* <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            arrow
          >
            <Button>{"chck"}</Button>
          </Dropdown> */}
          <p
            style={{
              flex: 1,
            }}
          >
            logo
          </p>
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
                      <Link to={v.title == "home" ? "/" : v.title}>
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
                  {v.subRoutes.length > 0 ? (
                    <Dropdown
                      style={{
                        width: "1000px",
                      }}
                      className="nav-dropdown"
                      menu={{
                        items:
                          v.title == "Services"
                            ? subContainer
                            : subContainerSolutions,
                      }}
                      placement="bottom"
                      arrow
                    >
                      <Link to={`/${v.title}`}>{v.title}</Link>
                    </Dropdown>
                  ) : (
                    <Link to={"/"}>{v.title}</Link>
                  )}
                </li>
              );
            })}

            {!gradientButton ? (
              <ButtonComp text="Get a quote" transparent={false} />
            ) : (
              <GradientButton text="Contact Us" transparent={false} />
            )}
          </ul>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
