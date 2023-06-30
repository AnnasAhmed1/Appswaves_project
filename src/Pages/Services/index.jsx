import React, { useRef } from "react";
import { H1, H2 } from "../../Helper/headings";
import { P1 } from "../../Helper/paragraphs";
import "../../Styles/service.css";
import ServiceCard from "../../Components/Services/ServiceCard";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import Layout from "../../Layout";
import ButtonComp from "../../Helper/button_comp";

const Services = () => {
  const formRef = useRef(null);

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbzFjN1X4WfQrCPFUlAeP5G1jk1tXgcYMRig8koSf5iIA7zoJU7wGMhX-fhLkQV-UkYa0w/exec";
  const handleSubmit = (e) => {
    console.log("formsubmit");
    e.preventDefault();

    fetch(scriptUrl, { method: "POST", body: new FormData(formRef.current) })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
      })
      .catch((err) => console.log(err));
  };
  return (
    <Layout>
      <main className="services-main-container container">
        <section className="consultation-section">
          <div>
            <div>
              <li>Appsnade</li>
              <EastSharpIcon />
              <li>Services</li>
            </div>
            <H1
              text={"Transform Business Growth With Revolutionary Services"}
            />
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
            <form ref={formRef} onSubmit={handleSubmit} action="">
              <h2 className="helper-h2">
                Book A Free<span> Consultation</span>
              </h2>
              <input placeholder="Full Name"></input>
              <input placeholder="Email" />
              <input placeholder="Number" />
              <input placeholder="Describe Your Project Need" />
              <p>
                <input
                  type="checkbox"
                  id="demoCheckbox"
                  name="checkbox"
                  value="1"
                />
                <label htmlFor="">Share Non Disclosure Agreement</label>
              </p>
              <ButtonComp text="Get in Touch" center={true} />
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
    </Layout>
  );
};

export default Services;
