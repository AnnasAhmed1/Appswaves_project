import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

const Layout = ({ children, gradientButton = false }) => {
  return (
    <div className="">
      <Navbar gradientButton={gradientButton} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
