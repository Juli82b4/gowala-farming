import React from "react"; 
import styles from "./productsection.module.css"; 
import useProducts from "../../hooks/useProducts"; 
import { FaShoppingCart } from "react-icons/fa"; 

export const ProductSection = ({
  productHeading, // Product section heading passed in as a prop
  subheading, // Subheading for the section passed as a prop
  productsubtext, // Subtext for the product section passed as a prop
}) => {
  
  // Using the 'useProducts' custom hook to fetch the product data, loading state, and any error if occurs
  const { products, loading, error } = useProducts(); 

  // Slice the products array to only display the first 5 products
  const displayedProducts = products.slice(0, 5); 
  // Slice ensures that no more than 5 products are shown in this section

  // Defining the function to handle adding a product to the cart
  const addToCart = (product) => {
    // Get the current cart from localStorage or initialize it as an empty array if not present
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product already exists in the cart based on its unique _id
    const existingProductIndex = cart.findIndex(
      (item) => item._id === product._id
    );

    // If the product is found in the cart (existingProductIndex is not -1)
    if (existingProductIndex !== -1) {
      // Increase the count of the existing product in the cart
      cart[existingProductIndex].count += 1; 
    } else {
      // If the product is not found, set the initial count to 1 and add it to the cart
      product.count = 1; 
      cart.push(product); // Push the product into the cart
    }

    // Save the updated cart back into the localStorage
    localStorage.setItem("cart", JSON.stringify(cart)); 
    // 'localStorage' stores the cart data persistently in the browser
  };

  // Check if the products are still loading, and if so, render a loading message
  if (loading) return <div>Loading...</div>;

  // Check if there's an error while fetching products, and if so, display the error message
  if (error) return <div>Error: {error}</div>;

  // The actual JSX code (rendering) will be in the return statement below



  return (
    <div className={styles.productSection}>
      <h1 className={styles.productHeading}>{productHeading}</h1>
      <h2 className={styles.subheading}>{subheading}</h2>
      <p className={styles.productsubtext}>{productsubtext}</p>

      <div className={styles.products}>
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <div key={product._id} className={styles.product}>
              <div className={styles.productImageWrapper}>
                <img
                  src={product.image}
                  alt={product.title}
                  className={styles.productImage}
                />
              </div>

              <div className={styles.productDetails}>
                <h2>{product.title}</h2>
                <p className={styles.productDescription}>
                  {product.description}
                </p>
                <h3>{product.price.toFixed(2)},-</h3>
                <button
                  className={styles.addToCartButton}
                  onClick={() => addToCart(product)}
                >
                  <FaShoppingCart className={styles.cartIcon} />
                  Tilføj til kurv
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.noProducts}>Ingen produkter tilgængelig</div>
        )}
      </div>

      <div className={styles.buttonWrapper}>
        <a href="/shop" className={styles.button}>
          Se alle produkter
        </a>
      </div>
    </div>
  );
};

export default ProductSection;
