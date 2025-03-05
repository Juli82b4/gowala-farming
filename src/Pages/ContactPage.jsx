import React from "react";
import Navigation from "../components/Navigation/Navigation";
import HeaderHeading from "../components/HeaderHeading/HeaderHeading";
import Footer from "../components/Footer/Footer";
import ArticlesSection from "../components/ArticlesSection/ArticlesSection";
import "../index.css";
import SponsorsSection from "../components/SposorsSection/SponsorsSection";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import EmployeeSection from "../components/EmployeeSection/EmployeeSection";
import ContactSection from "../components/Contact/Contact";

const ContactPage = () => {
  return (
    <>
      <Navigation />
      <HeaderHeading
        headingtext="Kontakt Gowala"
        subtext="Vores kontaktinformationer"
      />

      <ContactSection />

      <EmployeeSection />
      <Footer />
    </>
  );
};

export default ContactPage;
