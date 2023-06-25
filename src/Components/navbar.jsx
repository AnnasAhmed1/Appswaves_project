import React from "react";
import ButtonComp from "../Helper/button_comp";
import "../Styles/component.css";
import { BrowserRouter as Link } from "react-router-dom";

const Navbar = () => {
  const navs = [
    {
      title: "Home",
      subRoutes: [],
    },
    {
      title: "Services",
      subRoutes: [],
    },
    {
      title: "Solutions",
      subRoutes: [],
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
  return (
    <nav className="navbar">
      <div className="container">
        <p
          style={{
            flex: 1,
          }}
        >
          logo
        </p>
        <ul>
          {navs?.map((v, i) => {
            return (
              <li key={i}>
                <Link>{v.title}</Link>
              </li>
            );
          })}
          <ButtonComp text="Get a quote" transparent={false} />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
