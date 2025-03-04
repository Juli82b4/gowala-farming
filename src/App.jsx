import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import ProductSection from "./components/ProductsSection/ProductSection";
import EmployeeSection from "./components/EmployeeSection/EmployeeSection";
import NewsletterSection from "./components/NewsletterSection/NewsletterSection";
import SponsorsSection from "./components/SposorsSection/SponsorsSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <HeroSlider />
      <ServiceSection />
      <ProductSection />
      <EmployeeSection />
      <NewsletterSection />
      <SponsorsSection />
    </>
  );
}

export default App;
