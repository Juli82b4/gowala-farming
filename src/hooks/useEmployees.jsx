// Import React hooks for managing state and side effects
import { useState, useEffect } from "react";

// Define a custom hook to fetch employee data
const useEmployees = () => {
  // State to store the list of employees
  const [employees, setEmployees] = useState([]);

  // State to track loading status
  const [loading, setLoading] = useState(true);

  // State to store any errors that occur during fetching
  const [error, setError] = useState(null);

  // useEffect hook to fetch employees when the component using this hook mounts
  useEffect(() => {
    // Define an async function to fetch employee data
    const fetchEmployees = async () => {
      try {
        // Send a request to the API to fetch employees
        const response = await fetch("http://localhost:3042/employees");

        // Check if the response is successful, otherwise throw an error
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Parse the JSON response
        const data = await response.json();

        // Update the employees state with the fetched data
        setEmployees(data.data);
      } catch (error) {
        // If an error occurs, update the error state with the error message
        setError(error.message);
      } finally {
        // Set loading state to false after fetching is complete
        setLoading(false);
      }
    };

    // Call the fetchEmployees function
    fetchEmployees();
  }, []); // Empty dependency array ensures this effect runs only once when mounted

  // Return employees data, loading status, and error state
  return { employees, loading, error };
};

// Export the custom hook for use in other components
export default useEmployees;
