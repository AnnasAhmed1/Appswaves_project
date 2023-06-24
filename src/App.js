import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/navbar";
import Layout from "./Layout";
import "./Styles/component.css";
import "./Styles/helper.css";
import "./Styles/layout.css";
import "./Styles/component.css";
import Home from "./Pages/Home";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
