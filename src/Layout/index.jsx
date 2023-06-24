import React from "react";
import Navbar from "../Components/navbar";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;