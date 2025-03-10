import React from "react"; 
import styles from "./articlessection.module.css"; 
import useServiceArticles from "../../hooks/useServiceArticles"; 

const ArticlesSection = ({ fetchByTitle = null }) => { 
  // Functional component `ArticlesSection` that optionally filters articles by title.
  
  const { articles, loading, error } = useServiceArticles(); 
  // Using the custom hook `useServiceArticles` to retrieve articles, loading state, and errors.

  const displayedArticles = fetchByTitle 
    ? articles.filter((article) => article.title === fetchByTitle) 
    : articles.slice(0, 3); 
  // If `fetchByTitle` is provided, filter the articles by title; otherwise, display the first 3 articles.

  if (loading) return <div>Loading...</div>; 
  // Display a loading message while data is being fetched.

  if (error) return <div>Error: {error}</div>; 
  // Display an error message if fetching articles fails.
  return (
    <div className={styles.articlesSection}>
      <div className={styles.articles}>
        {displayedArticles.length > 0 ? (
          displayedArticles.map((article) => (
            <div key={article._id} className={styles.article}>
              <div className={styles.articleImageWrapper}>
                <img
                  src={article.image}
                  alt={article.title}
                  className={styles.articleImage}
                />
              </div>
              <div className={styles.articleDetails}>
                <h2>{article.title}</h2>
                <p className={styles.articleDescription}>
                  {article.description}
                </p>
                <ul className={styles.articleList}>
                  {article.list.map((item, index) => (
                    <li key={index}>
                      <input type="checkbox" checked />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.noArticles}>Ingen artikler tilgængelig</div>
        )}
      </div>
    </div>
  );
};

export default ArticlesSection;
