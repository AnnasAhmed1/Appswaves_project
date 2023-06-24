import React from "react";
import Slider from "react-slick";
import ColoredHeading from "../Colored_heading";
const HomeSilder = () => {
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
  const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
        {/* <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div> */}
        {/* <p>annas</p> */}
        {/* <p>annas</p> */}
      </Slider>
    </div>
  );
};

export default HomeSilder;
