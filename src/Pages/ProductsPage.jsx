import React from "react";
import Navigation from "../components/Navigation/Navigation";
import ProductSection from "../components/ProductsSection/ProductSection";
import Footer from "../components/Footer/Footer";
import HeaderHeading from "../components/HeaderHeading/HeaderHeading";

const ProductsPage = () => {
  return (
    <>
      <Navigation />
      <HeaderHeading
        headingtext="Gowala Shopping"
        subtext="Vi er taknemmelige for dit bidrag"
      />
      <ProductSection
        productHeading="Alle vores produkter"
        subheading="Alt på ét sted"
        productsubtext="Her på siden finder du alle vores friske mejeriprodukter og kvalitetskød fra Gowala Farms – direkte fra gården til dit bord."
        displayAllProducts={true} // Pass the prop to display all products
      />
      <Footer />
    </>
  );
};

export default ProductsPage;