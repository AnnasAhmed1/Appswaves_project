import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/navbar";
import Layout from "./Layout";
import "./Styles/component.css";
import "./Styles/helper.css";
import "./Styles/layout.css";
import "./Styles/component.css";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import ScrollToTop from 'react-router-scroll-top';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceDetails from "./Pages/Services/ServiceDetails";
import AppCostCalculator from "./Pages/AppCostCalculator";
import Register from "./Pages/Register";
import Form from "./Pages/chk_for";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Solutions from "./Pages/Solutions";
import SolutionDetails from "./Pages/Solutions/SolutionDetails";
import Technologies from "./Pages/Technologies";
import TechnologyDetails from "./Pages/Technologies/TechnologyDetails";
import Location from "./Pages/Location";
import LocationDetail from "./Pages/Location/LocationDetail";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/Technologies" element={<Technologies />} />
        <Route path="/Location" element={<Location />} />

        <Route path="/services/:servicename" element={<ServiceDetails />} />  
        <Route path="/solutions/:solutionname" element={<SolutionDetails />} />
        <Route path="/technology/:technologyname" element={<TechnologyDetails />} />
        <Route path="/LocationDetail" element={<LocationDetail />} />


        <Route path="/app-cost-calculator" element={<AppCostCalculator />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chk" element={<Form />} />
      </Routes>
      <ScrollToTop />
      {/* <Layout>
        <Services />
      </Layout> */}
    </Router>
  );
}

export default App;
