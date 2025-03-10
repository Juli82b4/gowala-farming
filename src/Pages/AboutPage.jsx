import React from "react";
import Navigation from "../components/Navigation/Navigation";
import HeaderHeading from "../components/HeaderHeading/HeaderHeading";
import Footer from "../components/Footer/Footer";
import ArticlesSection from "../components/ArticlesSection/ArticlesSection";
import "../index.css";
import SponsorsSection from "../components/SposorsSection/SponsorsSection";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import AboutSection from "../components/About/AboutSection";

const AboutPage = () => {
  return (
    <>
      <Navigation />
      <HeaderHeading
        headingtext="Gowala tilbyder"
        subtext="Hvad vi tilbyder vores forbrugere"
      />
      <ArticlesSection fetchByTitle="Om Gowala Farms" />

      <AboutSection />

      <SponsorsSection />
      <ServiceSection />
      <Footer />
    </>
  );
};

export default AboutPage;
