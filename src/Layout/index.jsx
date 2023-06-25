import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
