import React from "react";
import { H1, H2 } from "../../Helper/headings";
import { P1 } from "../../Helper/paragraphs";
import "../../Styles/service.css";
import ServiceCard from "../../Components/Services/ServiceCard";
import EastSharpIcon from "@mui/icons-material/EastSharp";

const Services = () => {
  return (
    <main className="services-main-container container">
      <section className="consultation-section">
        <div>
          <div>
            <li>TekRevol</li>
            <EastSharpIcon />
            <li>Services</li>
          </div>
          <H1 text={"Transform Business Growth With Revolutionary Services"} />
          <P1
            text={
              "Our unwavering commitment to innovation and customer satisfaction drives us to deliver transformative services that effectively address the ever-evolving demands of businesses in the digital world, ensuring exceptional results and driving impactful transformations."
            }
            color={"#f47a1f"}
          />
          <ul className="helper-p1">
            <li>Strategic roadmap planning</li>
            <li>Cloud-based solutions</li>
            <li>Process automation implementation</li>
            <li>Data-driven insights</li>
          </ul>
        </div>
        <div>
          <form action="">
            <h2 className="helper-h2">
              Book A Free<span> Consultation</span>
            </h2>
            <input placeholder="Full Name"></input>
            <input placeholder="Email" />
            <input placeholder="Number" />
            <input placeholder="Describe Your Project Need" />
            {/* <p>
            <input
              type="checkbox"
              id="demoCheckbox"
              name="checkbox"
              value="1"
            />
          </p>
          Share Non Disclosure Agreement */}
          </form>
        </div>
      </section>
      <section className="primary-service-section main-section">
        <H2 text={"Primary Services"} />
        <div>
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </section>
      <section className="primary-service-section main-section">
        <H2 text={"Consulting Services"} />
        <div>
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </section>
      <section className="primary-service-section main-section">
        <H2 text={"Trending Services"} />
        <div>
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </section>
    </main>
  );
};

export default Services;