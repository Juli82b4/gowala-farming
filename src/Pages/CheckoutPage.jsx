import React from "react";
import Navigation from "../components/Navigation/Navigation";
import HeaderHeading from "../components/HeaderHeading/HeaderHeading";
import Footer from "../components/Footer/Footer";
import OrderSection from "../components/OrderSection/OrderSection";

const CheckoutPage = () => {
  return (
    <>
      <Navigation />
      <HeaderHeading
        headingtext="Gowala shopping"
        subtext="Færdiggør din bestilling"
      />

      <div>
        <h1>Bestil</h1>
        <p>Udsyld venligt formularen herunder</p>
      </div>

      <OrderSection />
      <Footer />
    </>
  );
};

export default CheckoutPage;
