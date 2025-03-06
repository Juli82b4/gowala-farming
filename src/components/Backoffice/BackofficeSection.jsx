import React, { useState } from "react";
import useProducts from "../../hooks/useProducts";
import styles from "./backoffice.module.css";

const Backoffice = () => {
  const { products, createProduct, updateProduct, deleteProduct } = useProducts();
  const [productForm, setProductForm] = useState({
    title: "",
    price: 0,
    discount: 0,
    image: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editProductId, setEditProductId] = useState(null);

  // Handle create or update product
  const handleCreateOrUpdate = () => {
    if (isEditing) {
      updateProduct(editProductId, productForm);
    } else {
      createProduct(productForm);
    }
    setProductForm({ title: "", price: 0, discount: 0, image: "" });
    setIsEditing(false);
    setEditProductId(null);
  };

  // Handle edit product
  const handleEdit = (product) => {
    setProductForm(product);
    setIsEditing(true);
    setEditProductId(product._id);
  };

  // Handle delete product
  const handleDelete = (id) => {
    deleteProduct(id);
  };

  return (
    <div className={styles.backoffice}>
      <h1>Product Management</h1>
      <div className={styles.productForm}>
        <label>
          Title:
          <input
            type="text"
            placeholder="Title"
            value={productForm.title}
            onChange={(e) =>
              setProductForm({ ...productForm, title: e.target.value })
            }
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            placeholder="Price"
            value={productForm.price}
            onChange={(e) =>
              setProductForm({
                ...productForm,
                price: parseFloat(e.target.value),
              })
            }
          />
        </label>
        <label>
          Discount:
          <input
            type="number"
            placeholder="Discount"
            value={productForm.discount}
            onChange={(e) =>
              setProductForm({
                ...productForm,
                discount: parseFloat(e.target.value),
              })
            }
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            placeholder="Image URL"
            value={productForm.image}
            onChange={(e) =>
              setProductForm({ ...productForm, image: e.target.value })
            }
          />
        </label>
        <button className={isEditing ? styles.update : styles.create} onClick={handleCreateOrUpdate}>
          {isEditing ? "Update Product" : "Create Product"}
        </button>
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
                <td>{product.price},-</td>
                <td>{product.discount}%</td>
                <td>
                  <img src={product.image} alt={product.title} width="50" />
                </td>
                <td>
                  <button className={styles.edit} onClick={() => handleEdit(product)}>Edit</button>
                  <button className={styles.delete} onClick={() => handleDelete(product._id)}>Delete</button>
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
