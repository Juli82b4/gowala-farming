import React from "react";
import styles from "./articlessection.module.css";
import useServiceArticles from "../../hooks/useServiceArticles";

const ArticlesSection = ({ sectionHeading, sectionSubtext }) => {
  const { articles, loading, error } = useServiceArticles();
  const displayedArticles = articles.slice(0, 3);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.articlesSection}>
      <div className={styles.header}>
        <h1 className={styles.sectionHeading}>{sectionHeading}</h1>
        <p className={styles.sectionSubtext}>{sectionSubtext}</p>
      </div>

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
