import React from "react";
import styles from "./productsection.module.css";
import useProducts from "../../hooks/useProducts";

export const ProductSection = () => {
  const { products, loading, error } = useProducts();
  const displayedProducts = products.slice(0, 5);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.productSection}>
      <div className={styles.header}>
        <h1>Our Products</h1>
        <span>Check out our products</span>
      </div>

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
                <h3>${product.price.toFixed(2)}</h3>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.noProducts}>No products available</div>
        )}
      </div>
    </div>
  );
};

export default ProductSection;
