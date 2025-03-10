import React from "react"; 
// Importing React library to use JSX syntax and build components.

import Navigation from "../components/Navigation/Navigation"; 
// Importing the `Navigation` component, which is typically used to render the site’s navigation menu.

import ProductSection from "../components/ProductsSection/ProductSection"; 
// Importing the `ProductSection` component, where the main products will be displayed.

import Footer from "../components/Footer/Footer"; 
// Importing the `Footer` component, which is typically used to display the footer of the webpage.

import HeaderHeading from "../components/HeaderHeading/HeaderHeading"; 
// Importing the `HeaderHeading` component, which is used to display a page heading and subheading.

const ProductsPage = () => { 
  // Defining the `ProductsPage` functional component, which will represent the page displaying the products.

  return (
    <> 
      {/* React.Fragment shorthand: Allows wrapping multiple elements without adding extra DOM nodes. */}

      <Navigation /> 
      {/* Renders the Navigation component that contains the site's navigation menu. */}
      
      <HeaderHeading 
        headingtext="Gowala Shopping" 
        subtext="Vi er taknemmelige for dit bidrag" 
      /> 
      {/* Renders the HeaderHeading component with specific `headingtext` and `subtext` props passed to it. */}
      {/* `headingtext` displays the main title of the page, and `subtext` displays the subtitle. */}
      
      <ProductSection 
        productHeading="Alle vores produkter" 
        subheading="Alt på ét sted" 
        productsubtext="Her på siden finder du alle vores friske mejeriprodukter og kvalitetskød fra Gowala Farms – direkte fra gården til dit bord." 
        displayAllProducts={true} 
      /> 
      {/* Renders the ProductSection component to display the products. 
          It receives props for the heading, subheading, description (`productsubtext`), and 
          a boolean `displayAllProducts` to likely indicate whether to show all available products. */}
      
      <Footer /> 
      {/* Renders the Footer component that typically contains contact information, copyright details, etc. */}
    </>
  );
};

export default ProductsPage; 
// Exports the ProductsPage component to be used in other parts of the app, such as in routing.
