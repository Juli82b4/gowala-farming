import React from "react";
import Navigation from "../components/Navigation/Navigation";
import HeaderHeading from "../components/HeaderHeading/HeaderHeading";
import Footer from "../components/Footer/Footer";
import ArticlesSection from "../components/ArticlesSection/ArticlesSection";
import "../index.css";
import SponsorsSection from "../components/SposorsSection/SponsorsSection";
import ServiceSection from "../components/ServiceSection/ServiceSection";

const AboutPage = () => {
  return (
    <>
      <Navigation />
      <HeaderHeading
        headingtext="Gowala tilbyder"
        subtext="Hvad vi tilbyder vores forbrugere"
      />
      <ArticlesSection fetchByTitle="Om Gowala Farms" />

      <div className="about">
        <h1>Vores partnere er vi solte af</h1>
        <p>
          Hos Gowala Farms samarbejder vi med nøje udvalgte partnere, der deler
          vores værdier om kvalitet, bæredygtighed og dyrevelfærd. Gennem disse
          partnerskaber sikrer vi, at vores produkter altid lever op til de
          højeste standarder.
        </p>
      </div>

      <SponsorsSection />
      <ServiceSection />
      <Footer />
    </>
  );
};

export default AboutPage;
