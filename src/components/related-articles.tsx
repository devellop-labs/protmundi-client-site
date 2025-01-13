// components/RelatedArticles.tsx
import React from "react";
import ArticlePreview from "./article-preview";

interface RelatedArticlesProps {
  articles: Article[];
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articles }) => {
  return (
    <div className="related-articles">
      <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.length > 0 ? (
          articles.map((article) => (
            <ArticlePreview key={article.id} article={article} />
          ))
        ) : (
          <p>No related articles found.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedArticles;
