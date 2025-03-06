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
    const formData = new FormData();
    Object.keys(newProduct).forEach((key) => {
      formData.append(key, newProduct[key]);
    });

    try {
      const response = await fetch("http://localhost:3042/product", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
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
    const formData = new FormData();
    Object.keys(updatedProduct).forEach((key) => {
      formData.append(key, updatedProduct[key]);
    });
    formData.append("id", id);

    try {
      const response = await fetch(`http://localhost:3042/product`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
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
