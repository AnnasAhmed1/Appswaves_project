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

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceDetails from "./Pages/Services/ServiceDetails";
import AppCostCalculator from "./Pages/AppCostCalculator";
import Register from "./Pages/Register";
import Form from "./Pages/chk_for";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:servicename" element={<ServiceDetails />} />
        <Route path="/app-cost-calculator" element={<AppCostCalculator />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chk" element={<Form />} />
      </Routes>
      {/* <Layout>
        <Services />
      </Layout> */}
    </Router>
  );
}

export default App;
