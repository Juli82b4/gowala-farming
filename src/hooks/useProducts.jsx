import { useState, useEffect, useContext } from "react"; 
import { AuthContext } from "../context/AuthContext"; 


const useProducts = () => {
  // Declaring the useProducts custom hook to manage product data

  const [products, setProducts] = useState([]); 
  // State to store the products array fetched from the API

  const [loading, setLoading] = useState(true); 
  // State to track loading status (true while fetching data)

  const [error, setError] = useState(null); 
  // State to store any error messages if the API request fails

  const { token } = useContext(AuthContext); 
  // Extracting the token from the AuthContext to use it for authorized API requests

  useEffect(() => {
    // useEffect hook to run the fetchProducts function when the component mounts

    const fetchProducts = async () => {
      // Defining an async function to fetch products from the API
      try {
        const response = await fetch("http://localhost:3042/products");
        // Sending a GET request to fetch the products

        if (!response.ok) {
          // If the response is not OK (status code not in the 200 range), throw an error
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        // Parsing the JSON response

        setProducts(data.data);
        // Setting the products state with the fetched data
      } catch (err) {
        setError(err.message);
        // If there is an error, set the error message state
      } finally {
        setLoading(false);
        // Set loading state to false after the request is complete (whether successful or not)
      }
    };

    fetchProducts();
    // Calling the fetchProducts function when the component mounts
  }, []); 
  // Empty dependency array means this effect will run only once when the component mounts

  // Function to create a new product
  const createProduct = async (newProduct) => {
    // Defining an async function to create a new product by sending a POST request
    const formData = new FormData();
    // Creating a FormData object to send the new product as form data (can handle file uploads)

    Object.keys(newProduct).forEach((key) => {
      formData.append(key, newProduct[key]);
    });
    // Looping over the newProduct object and appending its key-value pairs to the FormData object

    try {
      const response = await fetch("http://localhost:3042/product", {
        method: "POST", 
        // The HTTP method is POST since we're creating a new product
        headers: {
          Authorization: `Bearer ${token}`, 
          // Adding the Authorization header with the token for authentication
        },
        body: formData, 
        // Sending the FormData object as the body of the request
      });

      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      const createdProduct = await response.json();
      // Parsing the response to get the created product data

      setProducts((prevProducts) => [...prevProducts, createdProduct.data]);
      // Updating the products state by adding the newly created product to the array
    } catch (err) {
      setError(err.message);
      // If there's an error, set the error message state
    }
  };

  // Function to update an existing product
  const updateProduct = async (id, updatedProduct) => {
    // Defining an async function to update an existing product using a PUT request
    const formData = new FormData();
    // Creating a FormData object to send the updated product data as form data

    Object.keys(updatedProduct).forEach((key) => {
      formData.append(key, updatedProduct[key]);
    });
    formData.append("id", id);
    // Adding the product ID to the form data (which is needed for updating the product)

    try {
      const response = await fetch(`http://localhost:3042/product`, {
        method: "PUT", 
        // The HTTP method is PUT since we're updating an existing product
        headers: {
          Authorization: `Bearer ${token}`, 
          // Adding the Authorization header with the token for authentication
        },
        body: formData, 
        // Sending the FormData object as the body of the request
      });

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      const updatedData = await response.json();
      // Parsing the response to get the updated product data

      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === id ? updatedData.data : product
        )
      );
      // Updating the products state by replacing the old product with the updated one
    } catch (err) {
      setError(err.message);
      // If there's an error, set the error message state
    }
  };

  // Function to delete a product
  const deleteProduct = async (id) => {
    // Defining an async function to delete a product using a DELETE request
    try {
      const response = await fetch(`http://localhost:3042/product/${id}`, {
        method: "DELETE", 
        // The HTTP method is DELETE since we're deleting a product
        headers: {
          Authorization: `Bearer ${token}`, 
          // Adding the Authorization header with the token for authentication
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== id)
      );
      // Updating the products state by filtering out the deleted product
    } catch (err) {
      setError(err.message);
      // If there's an error, set the error message state
    }
  };

  // Returning the state and functions so that they can be used by the component that calls this hook
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
// Exporting the custom hook for use in other components
