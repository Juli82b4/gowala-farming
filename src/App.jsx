import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import ServiceSection from "./components/ServiceSection/ServiceSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <HeroSlider />
      <ServiceSection />
    </>
  );
}

export default App;
