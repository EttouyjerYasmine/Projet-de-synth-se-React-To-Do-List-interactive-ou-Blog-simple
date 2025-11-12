import { useState } from 'react';

export default function Article({ articles }) {
  // State local pour gérer les modifications
  const [editedArticles, setEditedArticles] = useState(articles);

  // Fonction handleChange pour mettre à jour un article
  const handleChange = (id, newContent) => {
    if (!newContent.trim()) {
      alert("Le contenu ne peut pas être vide !");
      return;
    }

    setEditedArticles(prev =>
      prev.map(article =>
        article.id === id ? { ...article, contenu: newContent } : article
      )
    );
  };

  return (
    <div>
      {editedArticles.map(article => (
        <div key={article.id} className="article-card">
          <h2>{article.titre}</h2>
          <textarea
            value={article.contenu}
            onChange={e => handleChange(article.id, e.target.value)}
            rows={4}
            cols={50}
          />
        </div>
      ))}
    </div>
  );
}
