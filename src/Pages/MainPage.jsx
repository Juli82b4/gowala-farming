import React from "react";

import Navigation from "../components/Navigation/Navigation";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import ProductSection from "../components/ProductsSection/ProductSection";
import EmployeeSection from "../components/EmployeeSection/EmployeeSection";
import NewsletterSection from "../components/NewsletterSection/NewsletterSection";
import SponsorsSection from "../components/SposorsSection/SponsorsSection";
import Footer from "../components/Footer/Footer";

const MainPage = () => {
  return (
    <>
      <Navigation />
      <HeroSlider />
      <ServiceSection />
      <ProductSection />
      <EmployeeSection />
      <NewsletterSection />
      <SponsorsSection />
      <Footer />
    </>
  );
};

export default MainPage;
