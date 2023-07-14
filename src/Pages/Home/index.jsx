import React, { useState } from "react";
import "../../Styles/home.css";
import ColoredHeading from "../../Components/Colored_heading";
import HomeSilder from "../../Components/Home/HomeSilder";
import DevelopmentList from "../../Components/Home/DevelopmentList";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import SquareOutlinedIcon from "@mui/icons-material/SquareOutlined";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import { H2, H3, H4, H5 } from "../../Helper/headings";
import { P1 } from "../../Helper/paragraphs";
import ButtonComp from "../../Helper/button_comp";
import GradeSharpIcon from "@mui/icons-material/GradeSharp";
import AwardsSlider from "../../Components/Home/AwardsSlider";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import AppTypes from "../../Components/Home/AppTypes";
import PersonalInfo from "../../Components/Home/PersonalInfo";
import Layout from "../../Layout";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";
import { Link } from "react-router-dom";
import OurClients from "../../Components/OurClients";
import FeaturedSlider from "../../Components/FeaturedSlider";

const Home = () => {
  const [active, setActive] = useState(0);
  const developmentItems = [
    {
      title: "Startups",
      icon: (
        <PanoramaFishEyeIcon
          sx={{
            fontSize: "20px",
            color: "#f47a1f",
          }}
        />
      ),
      items: [
        "Startup App Development",
        "Startup Prototype",
        "E-Commerce Development",
      ],
    },
    {
      title: "SMB",
      icon: (
        <SquareOutlinedIcon
          sx={{
            fontSize: "20px",
            color: "#f47a1f",
          }}
        />
      ),
      items: [
        "Flutter App Development",
        "Mobile App Support",
        "Wearable App Development",
      ],
    },
    {
      title: "Enterprise",
      icon: (
        <ChangeHistoryIcon
          sx={{
            fontSize: "20px",
            color: "#f47a1f",
          }}
        />
      ),
      items: [
        "IT Staff Augmentation",
        "Blockchain Development",
        "IP Protection",
      ],
    },
  ];

  const expertise = [
    {
      title: "Healthcare",
      description:
        "Creating healthcare applications and helping businesses optimize workflows, improve interoperability, automate appointment scheduling, and other features to save doctors’ and patients’ time and improve care quality.",
      details: [
        {
          heading: "Remote care",
          para: "Making appointments and filling out documents remotely.",
        },
        {
          heading: "Accessibility",
          para: "Access to lab results and medical history via digital personal health records",
        },
        {
          heading: "Reminders & alerts",
          para: "Remind users to take pills, and control rehabilitation plans and appointments.",
        },
      ],
    },
    {
      title: "Fintech",
      description:
        "Creating healthcare applications and helping businesses optimize workflows, improve interoperability, automate appointment scheduling, and other features to save doctors’ and patients’ time and improve care quality.",
      details: [
        {
          heading: "Remote care",
          para: "Making appointments and filling out documents remotely.",
        },
        {
          heading: "Accessibility",
          para: "Access to lab results and medical history via digital personal health records",
        },
        {
          heading: "Reminders & alerts",
          para: "Remind users to take pills, and control rehabilitation plans and appointments.",
        },
      ],
    },
    {
      title: "Retail",
      description:
        "Creating healthcare applications and helping businesses optimize workflows, improve interoperability, automate appointment scheduling, and other features to save doctors’ and patients’ time and improve care quality.",
      details: [
        {
          heading: "Remote care",
          para: "Making appointments and filling out documents remotely.",
        },
        {
          heading: "Accessibility",
          para: "Access to lab results and medical history via digital personal health records",
        },
        {
          heading: "Reminders & alerts",
          para: "Remind users to take pills, and control rehabilitation plans and appointments.",
        },
      ],
    },
    {
      title: "Real State",
      description:
        "Creating healthcare applications and helping businesses optimize workflows, improve interoperability, automate appointment scheduling, and other features to save doctors’ and patients’ time and improve care quality.",
      details: [
        {
          heading: "Remote care",
          para: "Making appointments and filling out documents remotely.",
        },
        {
          heading: "Accessibility",
          para: "Access to lab results and medical history via digital personal health records",
        },
        {
          heading: "Reminders & alerts",
          para: "Remind users to take pills, and control rehabilitation plans and appointments.",
        },
      ],
    },
    {
      title: "Education",
      description:
        "Creating healthcare applications and helping businesses optimize workflows, improve interoperability, automate appointment scheduling, and other features to save doctors’ and patients’ time and improve care quality.",
      details: [
        {
          heading: "Remote care",
          para: "Making appointments and filling out documents remotely.",
        },
        {
          heading: "Accessibility",
          para: "Access to lab results and medical history via digital personal health records",
        },
        {
          heading: "Reminders & alerts",
          para: "Remind users to take pills, and control rehabilitation plans and appointments.",
        },
      ],
    },
    {
      title: "Logistics",
      description:
        "Creating healthcare applications and helping businesses optimize workflows, improve interoperability, automate appointment scheduling, and other features to save doctors’ and patients’ time and improve care quality.",
      details: [
        {
          heading: "Remote care",
          para: "Making appointments and filling out documents remotely.",
        },
        {
          heading: "Accessibility",
          para: "Access to lab results and medical history via digital personal health records",
        },
        {
          heading: "Reminders & alerts",
          para: "Remind users to take pills, and control rehabilitation plans and appointments.",
        },
      ],
    },
    {
      title: "On-Demand",
      description:
        "Creating healthcare applications and helping businesses optimize workflows, improve interoperability, automate appointment scheduling, and other features to save doctors’ and patients’ time and improve care quality.",
      details: [
        {
          heading: "Remote care",
          para: "Making appointments and filling out documents remotely.",
        },
        {
          heading: "Accessibility",
          para: "Access to lab results and medical history via digital personal health records",
        },
        {
          heading: "Reminders & alerts",
          para: "Remind users to take pills, and control rehabilitation plans and appointments.",
        },
      ],
    },
    {
      title: "Ecommerce",
      description:
        "Creating healthcare applications and helping businesses optimize workflows, improve interoperability, automate appointment scheduling, and other features to save doctors’ and patients’ time and improve care quality.",
      details: [
        {
          heading: "Remote care",
          para: "Making appointments and filling out documents remotely.",
        },
        {
          heading: "Accessibility",
          para: "Access to lab results and medical history via digital personal health records",
        },
        {
          heading: "Reminders & alerts",
          para: "Remind users to take pills, and control rehabilitation plans and appointments.",
        },
      ],
    },
    {
      title: "Music",
      description:
        "Creating healthcare applications and helping businesses optimize workflows, improve interoperability, automate appointment scheduling, and other features to save doctors’ and patients’ time and improve care quality.",
      details: [
        {
          heading: "Remote care",
          para: "Making appointments and filling out documents remotely.",
        },
        {
          heading: "Accessibility",
          para: "Access to lab results and medical history via digital personal health records",
        },
        {
          heading: "Reminders & alerts",
          para: "Remind users to take pills, and control rehabilitation plans and appointments.",
        },
      ],
    },
  ];

  const insights = [
    {
      text: "ASIM RAIS SIDDIQUI’S ARTICLE ON HOW ARTIFICIAL INTELLIGENCE DRIVES AUTOMATION & REDUCE COSTS IN RECRUITMENT INDUSTRY IS LIVE NOW ON HACKERNOON",
      date: "May 5, 2023",
    },
    {
      text: "TOP 10 FACIAL RECOGNITION APPS IN 2023",
      date: "May 3, 2022",
    },
    {
      text: "LISTING DOWN THE 13 APPS LIKE OMEGLE THAT YOU SHOULD CHECKOUT IN 2023",
      date: "March 5, 2021",
    },
    {
      text: "50 Game Development Ideas for Future Game Startups and Entrepreneurs",
      date: "February 1, 2023",
    },
    {
      text: "10 Offline Music Apps To Try in 2023",
      date: "December 1, 2021",
    },
    {
      text: "The 12 Best Image Recognition Apps That You Should Try In 2023",
      date: "March 4, 2021",
    },
  ];

  return (
    <>
      <Layout>
        <main className="home-main-container ">
          <div className="container">
            <section className="main-section">
              <HomeSilder />
              <div className="developmentListContainer">
                {developmentItems.map((v, i) => {
                  return (
                    <DevelopmentList
                      title={v.title}
                      icon={v.icon}
                      listItems={v.items}
                    />
                  );
                })}
              </div>
            </section>
            <section className="awards-section main-section">
              <div className="awards">
                <H2 text={"Awards & Recognitions"} dataText="Winning Awards" />
                <P1
                  text={
                    "We thrive on accelerating the path to disruption and implementing agile methodology to build feature-rich, user-friendly mobile apps that end users love. Our user-centric, quality-driven, and future-oriented mobile app development services are the reason why we have bagged these notorious awards and recognitions."
                  }
                />
                <ButtonComp text="Check Reviews" />
              </div>
              <div className="ratings">
                <p>65+ reviews on clutch</p>
                <h1>4.9</h1>
                <div>
                  <GradeSharpIcon />
                  <GradeSharpIcon />
                  <GradeSharpIcon />
                  <GradeSharpIcon />
                  <GradeSharpIcon />
                </div>
              </div>
            </section>
            <AwardsSlider />
            <section className="crafting-section main-section">
              <div>
                <H2
                  text={"Crafting ROI-Centric Solutions Right!"}
                  dataText="ROI-Centric"
                />
                <P1
                  text={
                    "Build future-ready applications through primary, consulting, and trending services to accelerate growth and agile transformation. With a strong command of native, cross-platform, and hybrid mobile app development, we offer top-tier mobile app development services tailored to the stakeholders’ goals and objectives. We help businesses innovate complex application landscapes with a mixture of digital, SaaS, and legacy systems through speed and agility."
                  }
                />
              </div>
              <img src={require("../../Assets/calendar.webp")} alt="" />
            </section>
          </div>
          <div className="container/ estimation-section">
            <section className=" main-section container">
              <H2
                text={
                  "Helping Startups Achieve Exponential Growth & Sustainability"
                }
                dataText="Sustainability"
                color="#ffffff"
              />
              <div>
                <P1
                  text={
                    "After bagging the industry's most notorious awards and getting featured in Forbes, Inc. Entrepreneur Media, and other top publications as an industry leader in mobile app development, we have established ourselves from a mere silicon valley startup to one of the fastest-growing digital transformation companies worldwide"
                  }
                  color="#ffffff"
                />
                <Link to={"/app-cost-calculator"}>
                  {" "}
                  <ButtonComp text="Estimate Your Project's Cost" />
                </Link>
              </div>
            </section>
          </div>
          <div
            style={{
              backgroundColor: "#f8f8fb",
            }}
          >
            <div
              style={{
                zIndex: "2",
              }}
              className="container"
            >
              <section className="main-section">
                <H2 text={"Case Studies"} dataText="Our Portfolio" />
                <P1
                  text={
                    "See the list below for the completed and delivered projects for our clients in different industries. Appsnade’s team of agile developers and project managers follow a defined methodology to undertake projects and cater to the client’s requirements. Our culture is rightly crafted to deliver a rewarding experience for our engineering team and client as we emphasize tightly integrating with your team for top-tier development."
                  }
                />
              </section>
              <section className="AMJ-section">
                <AppTypes
                  image={"amj.png"}
                  color={"rgb(157, 19, 23"}
                  margin="20px"
                />
                <H2 text={"The Idea Behind AMJ Wellness"} />
                <P1
                  text={
                    "The app had to have an interface, super-friendly and less distracting for corporate employees who already have stressful jobs. It had to be feature-packed and targeted at promoting wellness actions including drinking enough water, exercising, taking time off the screens, participating in workouts, and eating healthy breakfasts, lunches, and dinners. We performed meticulous research on the target market, projected users, and the overall scope of the project."
                  }
                />
                <img src={require("../../Assets/amj_mobiles.webp")} alt="" />
              </section>

              <PersonalInfo
                text={`“They love creating apps to help better the world, help better the society, so they immediately had a connection with my idea."`}
                name={"Andrea Eimers"}
                designation={"AMJ Wellness , Co-Founder & COO"}
                image={"amj_owner.png"}
              />
              <section className="soundly-section">
                <div>
                  <AppTypes image={"soundly.png"} color={"#DA2024"} />
                  <H2 text={"The Idea Behind Soundly"} />
                  <P1
                    text={
                      "Soundly has revolutionized the way people experience music. Designed to enable music lovers to stream millions of songs from new artists through the app, the Soundly app lets you save songs for later by creating countless playlists, uploading your own tracks, supporting your favorite artists, and experiencing a next-gen technology and music collaboration in perfect harmony."
                    }
                  />
                  <P1
                    text={
                      "The idea was based not only on building a revolutionary entertainment app but also on ensuring predictive, user-friendly, and seamless navigation and controls that would let the users instantly tap their way to their favorite songs coming directly from new artists or upload their songs."
                    }
                  />
                </div>
                <div className="image-container">
                  <img
                    src={require("../../Assets/soundly_mobile.webp")}
                    alt=""
                  />
                </div>
              </section>
              <PersonalInfo
                text={`“We truly appreciate how much Appsnade cares about our project, from the beginning point to the deployment, they delivered everything efficiently."`}
                name={"Ethan Dobbins"}
                designation={"Soundly, CEO"}
                image={"soundly_ceo.png"}
              />
              <section
                style={{
                  backgroundColor: "#212529",
                }}
                className="soundly-section"
              >
                <div>
                  <AppTypes image={"pure_plank_logo.png"} color={"#8EF08B"} />
                  <H2 text={"The Idea Behind Soundly"} color="#ffffff" />
                  <P1
                    text={
                      "Plank is an online platform for fitness and exercise enthusiasts aiming to look after their health and exercise at home. With video tutorials and challenges, this platform brings a new idea to life. Appsnade has developed several digital solutions, including mobile apps, pertaining to the fitness and healthcare sector."
                    }
                    color="#ffffff"
                  />
                  <P1
                    text={
                      "The Plank app is a complete solution surrounding the planking exercise where users get all the functions and features in one place to get the ideal results. The app also had video tutorials and instructions for the users, as well as the option to buy accessories with complete payment integration options."
                    }
                    color="#ffffff"
                  />
                </div>
                <div className="image-container">
                  <img src={require("../../Assets/pure_plank.webp")} alt="" />
                </div>
              </section>
              <PersonalInfo
                text={`“I had the pleasure of working with Appsnade on the development of our fitness app, and I am extremely impressed with the level of service they provided. Their team was incredibly knowledgeable, professional, and dedicated to ensuring that our app was developed to the highest standard."`}
                name={"Ari Marinovsky"}
                designation={"Pure Plank, CEO"}
                image={"pure_plank_ceo.jpeg"}
              />
            </div>
          </div>

          <div className="container">
            <section className="main-section services-section">
              <div>
                <H2
                  text={"Custom Software & Mobile App Development Company"}
                  dataText="App Development"
                />
              </div>
              <div>
                <P1
                  text={
                    "The future is digital, there's no doubt about it. At Appsnade, we believe that each digital touch-point is an opportunity to create meaningful interactions and build a mutually beneficial connection between a brand and its audience. We offer a wide range of software development services that has helped us attain a strong digital presence in the highly competitive market."
                  }
                />
                <H4 text={"Custom Software Development"} />
                <p className="helper-p1">
                  Our <span>custom software development</span> team onboards
                  versatile developers and technical personnel capable of
                  acknowledging your project’s custom requirements.
                </p>
                <H4 text={"Android Application Development"} />
                <p className="helper-p1">
                  Craft the ideal product by redirecting your strategy in the
                  right direction. Start ahead with your
                  <span> Android application development</span> journey. With
                  your insights in mind, our collaborative sentiment will
                  continue to grow – building robust and custom applications for
                  you.
                </p>
                <H4 text={"Top-Rated iOS App Development Services"} />
                <p className="helper-p1">
                  Hire iOS app developers from top-tier
                  <span> iOS app development company</span> to kick-start your
                  app entrepreneurial journey like never before!
                </p>
                <H4 text={"Game Development"} />
                <p className="helper-p1">
                  <span>Hire game developers </span> who will create{" "}
                  <span> cross-platform game development </span> solutions that
                  engage, and captivate users to the fullest.
                </p>
              </div>
            </section>
          </div>
          <section
            style={{
              backgroundColor: "#f8f8fb",
            }}
            className="main-section expertise-section"
          >
            <div className="container">
              <H2 text={"Our Industry Expertise"} dataText="Our Expertise" />
              <div className="expertise container">
                <div className="expertiseList">
                  {expertise.map((v, i) => {
                    return (
                      <H3
                        text={v.title}
                        pointer={true}
                        onClick={() => {
                          setActive(i);
                        }}
                      />
                    );
                  })}
                </div>
                <div className="expertiseDetails">
                  <>
                    <p>{expertise[active]?.description}</p>
                    {expertise[active]?.details.map((detail, index) => {
                      return (
                        <>
                          <H4 text={detail.heading} />
                          <P1 text={detail.para} />
                        </>
                      );
                    })}
                  </>
                </div>
              </div>
            </div>
          </section>

          <section className="main-section/ insights-section">
            <div className="container">
              <div className="insights-list">
                <div>
                  {/* <H5 text={insights[0].text} />
              <p>{insights[0].date}</p>
              <H5 text={insights[1].text} />
              <p>{insights[1].date}</p> */}
                </div>
              </div>
              {/* <div>
            {insights.slice(3).map((v, i) => {
              console.log(v);
              return (
                <div className="insights-second-half">
                  <H5 text={v.text} />
                  <p>{v.date}</p>
                </div>
              );
            })}
          </div> */}
            </div>
          </section>
          <FeaturedSlider />
          <OurClients
            imagesArr={[
              "legend.png",
              "waste.png",
              "teemates.png",
              "nurse.webp",
              "kinder.png",
              "saudi_bell.png",
              "san_university.png",
              "save_win.png",
              "al_husaani.png",
              "nde.webp",
              "stock_ship.png",
              "soundly.png",
              "legend.png",
              "waste.png",
              "teemates.png",
              "nurse.webp",
              "kinder.png",
              "saudi_bell.png",
            ]}
          />
          {/* <section className="main-section featured-section">
        <div className="container">
          <H2 text={"We're Featured In"} />
        </div>
      </section> */}
        </main>
      </Layout>
    </>
  );
};

export default Home;
