import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import HeroSlider from "./components/HeroSlider/HeroSlider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <HeroSlider />
    </>
  );
}

export default App;
