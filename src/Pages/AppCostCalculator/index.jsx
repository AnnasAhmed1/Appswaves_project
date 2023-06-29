import React, { useState } from "react";
import {
  MobileOutlined,
  AppleOutlined,
  AndroidOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "../../Styles/AppCostCalculator.css";
import GradientButton from "../../Helper/GradientButton";
import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";
const AppCostCalculator = () => {
  const [activeSection, setActiveSection] = useState(2);
  const platforms = [
    { icon: <AndroidOutlined />, title: "Android App", id: "android" },
    { icon: <AppleOutlined />, title: "iOS App", id: "ios" },
    { icon: <MobileOutlined />, title: "Both", id: "both" },
  ];
  const type = [
    { image: "cart_icon", title: "E-commerce", id: "ecommerce" },
    { image: "social_icon", title: "Social Media", id: "social_media" },
    { image: "booking_icon", title: "Booking", id: "booking" },
    { image: "cab_icon", title: "Cab App", id: "cab_app" },
    { image: "custom_app_icon", title: "Food", id: "food" },
    { image: "custom_app_icon", title: "Custom App", id: "custom_app" },
  ];
  const questions = [
    {
      question: "How would you like your users to sign-up?",

      options: [
        { title: "Email", id: "email" },
        { title: "Social Media", id: "social_media" },
        { title: "Phone Number", id: "phone_number" },
      ],
    },
    {
      question: "Would you like order tracking in your app?",

      options: [
        { title: "Yes", id: "order_tracking_yes" },
        { title: "No", id: "order_tracking_no" },
      ],
    },
    {
      question: "Would you allow others to sell their products on your app?",

      options: [
        { title: "Yes", id: "sell_products_yes" },
        { title: "No", id: "sell_products_no" },
      ],
    },
    {
      question:
        "How should your customers communicate with app administrators?",

      options: [
        { title: "Simple Inbox", id: "simple_inbox" },
        { title: "Live Chat", id: "live_chat" },
      ],
    },
    {
      question: "Do you want a payment gateway integration?",

      options: [
        { title: "Yes", id: "payment_gateway_yes" },
        { title: "No", id: "payment_gateway_no" },
      ],
    },
    {
      question: "Do you need Admin panel to manage your App?",

      options: [
        { title: "Yes", id: "admin_panel_yes" },
        { title: "No", id: "admin_panel_no" },
      ],
    },
    {
      question: "What other features would you like to have in your app?",
      options: [
        { title: "Reviews or Rating", id: "review_rating" },
        { title: "Search Bar", id: "search_bar" },
        { title: "Push Notification", id: "push_notification" },
        { title: "Shipping API", id: "shopping_api" },
      ],
    },
  ];
  function scrollToSection(e) {
    const id = activeSection;
    e.preventDefault();
    const element = document.querySelector(`#section-${id}`);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(activeSection + 1);
    // onClick={(e) => scrollToSection(e, v.link)}
  }
  return (
    <main
      style={{
        overflow: "hidden",
        height: "100vh",
      }}
      className="container app-cost-calculator-main"
    >
      <nav>logo</nav>
      <div className="fixed-container">
        <section id="section-1" className="calculator-section">
          <h1
            style={{
              textAlign: "center",
            }}
            className=""
          >
            Choose the desired platform
          </h1>
          <div>
            {platforms.map((platform, index) => {
              return (
                <label className="card-label" for="demoCheckbox">
                  <input
                    type="checkbox"
                    id={platform.id}
                    name={platform.id}
                    value={platform.id}
                  />
                  {platform.icon}
                  <h2>{platform.title}</h2>
                </label>
              );
            })}
          </div>
          <div className="buttons-container">
            <GradientButton
              text="Next"
              transparent={false}
              onClick={(e) => scrollToSection(e)}
            />
          </div>
        </section>
        <section id="section-2" className="calculator-section">
          <h1
            style={{
              marginTop: "35px",
            }}
            className=""
          >
            Choose the desired platform
          </h1>
          <div
            style={{
              marginTop: "15px",
              marginBottom: "0px",
            }}
          >
            {type.map((type, index) => {
              return (
                <label className="card-label" for="demoCheckbox">
                  <input
                    type="checkbox"
                    id={type.id}
                    name={type.id}
                    value={type.id}
                  />
                  <img src={require(`../../Assets/${type.image}.png`)} alt="" />{" "}
                  {type.icon}
                  <h2>{type.title}</h2>
                </label>
              );
            })}
          </div>
          <div className="buttons-container">
            <p>
              <KeyboardBackspaceSharpIcon fontSize="30px" />
              BACK
            </p>

            <GradientButton
              text="Next"
              transparent={false}
              onClick={(e) => scrollToSection(e)}
            />
          </div>
        </section>
        {questions.map((question, index) => {
          return (
            <section
              id={`section-${index + 3}`}
              className="calculator-section main-section1"
            >
              <p className="question-number">
                <span>{index + 1}</span>/{questions.length}
              </p>
              <h1 className="">{question.question}</h1>
              <div
                style={{
                  display: "block",
                  width: "30%",
                }}
              >
                {question.options.map((option, index) => {
                  return (
                    <label
                      className="card-label card-label-question"
                      for="demoCheckbox"
                    >
                      <input
                        type="checkbox"
                        id={option.id}
                        name={option.id}
                        value={option.id}
                      />
                      <p className="question-option">{option.title}</p>
                    </label>
                  );
                })}
              </div>
              <div className="buttons-container">
                <p>
                  <KeyboardBackspaceSharpIcon fontSize="30px" />
                  BACK
                </p>

                <GradientButton
                  text={
                    index != question.options.length - 1 ? "Next" : "Finish"
                  }
                  transparent={false}
                  onClick={(e) => scrollToSection(e)}
                />
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
};

export default AppCostCalculator;
