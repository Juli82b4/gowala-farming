import { useState, useEffect } from "react"; 

const useServiceArticles = () => { 
  // Defining a custom hook `useServiceArticles` for fetching articles.

  const [articles, setArticles] = useState([]); 
  // State for storing fetched articles, initialized as an empty array.

  const [loading, setLoading] = useState(true); 
  // State for tracking loading status, initially set to `true`.

  const [error, setError] = useState(null); 
  // State for tracking errors, initially set to `null`.

  useEffect(() => { 
    // `useEffect` hook runs when the component mounts (empty dependency array means it runs only once).

    const fetchArticles = async () => { 
      // Asynchronous function to fetch articles from the API.

      try {
        const response = await fetch("http://localhost:3042/articles"); 
        // Fetching data from the backend API endpoint.

        if (!response.ok) { 
          // Checking if the response status is not OK (e.g., 404 or 500 errors).
          throw new Error("Network response was not ok"); 
          // Throwing an error to be caught in the catch block.
        }

        const data = await response.json(); 
        // Parsing the JSON response.

        setArticles(data.data); 
        // Updating the `articles` state with fetched data.
      } catch (error) {
        setError(error.message); 
        // If an error occurs, update the `error` state with the error message.
      } finally {
        setLoading(false); 
        // Once the fetching is complete (either success or failure), set `loading` to `false`.
      }
    };

    fetchArticles(); 
    // Calling the `fetchArticles` function inside `useEffect`.

  }, []); 
  // Empty dependency array ensures this effect runs only once when the component mounts.

  return { articles, loading, error }; 
  // Returning the articles, loading state, and error to be used in `ArticlesSection`.
};

export default useServiceArticles; 
// Exporting the `useServiceArticles` hook to be used in components.
