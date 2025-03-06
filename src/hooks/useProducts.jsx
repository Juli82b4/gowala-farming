import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3042/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const createProduct = async (newProduct) => {
    try {
      const response = await fetch("http://localhost:3042/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newProduct),
      });
      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      const createdProduct = await response.json();
      setProducts((prevProducts) => [...prevProducts, createdProduct.data]);
    } catch (err) {
      setError(err.message);
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      const response = await fetch(`http://localhost:3042/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedProduct),
      });
      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      const updatedData = await response.json();
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === id ? updatedData.data : product
        )
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:3042/product/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== id)
      );
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    products,
    loading,
    error,
    createProduct,
    updateProduct,
    deleteProduct,
  };
};

export default useProducts;
