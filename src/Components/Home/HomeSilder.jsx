import React, { useState } from "react";
import Slider from "react-slick";
import ColoredHeading from "../Colored_heading";
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
// import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
// import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import WestSharpIcon from "@mui/icons-material/WestSharp";
import EastSharpIcon from "@mui/icons-material/EastSharp";
const HomeSilder = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const silderContentArr = [
    {
      text: "Development Services",
      coloredText: "Full-Fledged Mobile App",
      subText:
        "We strive to offer cutting edge mobile development services that assist businesses attain their maximum potential.",
      reverse: true,
    },
    {
      text: "A Company With",
      coloredText: "Global Presence",
      subText:
        "We're constantly evolving and creating digital solutions for businesses across the globe",
    },
    {
      text: "Primed For The Future With",
      coloredText: "Our Innovative Approach",
      subText:
        "From AI to wearable devices, we leverage emerging technologies to transform lives and redefine industry standards.",
    },
  ];
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <p
        className={"arrows next-arrow"}
        style={{ ...style, display: "inline-block/" }}
        onClick={onClick}
      >
        <EastSharpIcon />
      </p>
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <p
        className={"arrows prev-arrow"}
        style={{ ...style, display: "inline-block/" }}
        onClick={onClick}
      >
        <WestSharpIcon />0{activeSlide + 1}
      </p>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
    afterChange: (currentSlide) => {
      setActiveSlide(currentSlide);
      console.log("Active slide:", currentSlide);
    },

    appendDots: (dots) => (
      <div
        style={{
          // backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            margin: "0px",
            position: "absolute",
            left: "0px",
            bottom: "10px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid",
        }}
      >
        {i + 1}
      </div>
    ),
  };
  const SliderContent = ({ text, coloredText, subText, reverse = false }) => {
    return (
      <div
        className="
      home-main-slider
      "
      >
        {/* anns */}
        <ColoredHeading
          text={text}
          coloredText={coloredText}
          reverse={reverse}
          dataText={"Experience"}
        />
        <p>{subText}</p>
      </div>
    );
  };
  return (
    <div>
      <Slider {...settings}>
        {silderContentArr.map((content, index) => {
          console.log(content);
          return (
            // <p>annas</p>
            <SliderContent
              text={content.text}
              coloredText={content.coloredText}
              subText={content.subText}
              reverse={content.reverse ? content.reverse : false}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default HomeSilder;
