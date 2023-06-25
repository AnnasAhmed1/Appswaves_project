import React from "react";
import Slider from "react-slick";
import "../../Styles/component.css";

const AwardsSlider = () => {
  const awards = [
    {
      title: "Top Developers",
      detail: "Top Entertainment App Developers",
      image: "top_developer.svg",
    },
    {
      title: "Expertise",
      detail: "Best App Developers",
      image: "expertise_logo.png",
    },
    {
      title: "Top Rated",
      detail: "Top Development Companies",
      image: "top_reated.svg",
    },
    {
      title: "Web Excellence",
      detail: "Web Excellence Awards",
      image: "web_excellence_award.png",
    },
    {
      title: "Horizon Award",
      detail: "Gold Awards Winner 2020",
      image: "horizon_created.svg",
    },
    {
      title: "Dot Comm",
      detail: "Excellence Web Creativity & Digital Communication",
      image: "dot_com.png",
    },
    {
      title: "INC. 5000",
      detail: "America's Fastest Growing Companies",
      image: "inc_5000.png",
    },
    // {
    //   title: "Top Web Development Agencies 2023",
    //   image: "rank_watch.webp",
    // },
  ];

  const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    arrows:false,
  };
  return (
    <Slider className="awards-slider" {...settings}>
      {awards.map((award, index) => {
        return (
          <div className="awards-card" key={index}>
            <img
              src={require(`../../Assets/${award.image}`)}
              alt={award.title}
            />
            <h5>{award.title}</h5>
            <p>{award.detail}</p>
            {/* <div></div> */}
          </div>
        );
      })}
    </Slider>
  );
};

export default AwardsSlider;
