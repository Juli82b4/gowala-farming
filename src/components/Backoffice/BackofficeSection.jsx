import React, { useState } from "react";
import useProducts from "../../hooks/useProducts";
import styles from "./backoffice.module.css"; // Import the CSS module

const Backoffice = () => {
  const { products, createProduct, updateProduct, deleteProduct } =
    useProducts();
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: 0,
    discount: 0,
    image: "",
  });

  const handleCreate = () => {
    createProduct(newProduct);
    setNewProduct({ title: "", price: 0, discount: 0, image: "" });
  };

  const handleUpdate = (id) => {
    const updatedProduct = products.find((product) => product._id === id);
    updateProduct(id, updatedProduct);
  };

  const handleDelete = (id) => {
    deleteProduct(id);
  };

  return (
    <div className={styles.backoffice}>
      <h1>Product Management</h1>
      <div className={styles.productForm}>
        <input
          type="text"
          placeholder="Title"
          value={newProduct.title}
          onChange={(e) =>
            setNewProduct({ ...newProduct, title: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })
          }
        />
        <input
          type="number"
          placeholder="Discount"
          value={newProduct.discount}
          onChange={(e) =>
            setNewProduct({
              ...newProduct,
              discount: parseFloat(e.target.value),
            })
          }
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={(e) =>
            setNewProduct({ ...newProduct, image: e.target.value })
          }
        />
        <button onClick={handleCreate}>Create Product</button>
      </div>
      <div className={styles.productList}>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>{product.discount}%</td>
                <td>
                  <img src={product.image} alt={product.title} width="50" />
                </td>
                <td>
                  <button onClick={() => handleUpdate(product._id)}>
                    Update
                  </button>
                  <button onClick={() => handleDelete(product._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Backoffice;
