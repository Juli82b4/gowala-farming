import React from "react";
import Navigation from "../components/Navigation/Navigation";
import HeaderHeading from "../components/HeaderHeading/HeaderHeading";
import NewsletterSection from "../components/NewsletterSection/NewsletterSection";
import Footer from "../components/Footer/Footer";
import ArticlesSection from "../components/ArticlesSection/ArticlesSection";

const ServicesPage = () => {
  return (
    <>
      <Navigation />
      <HeaderHeading
        headingtext="Gowala tilbyder"
        subtext="Hvad vi tilbyder vores forbrugere"
      />
      <ArticlesSection />
      <NewsletterSection />
      <Footer />
    </>
  );
};

export default ServicesPage;
