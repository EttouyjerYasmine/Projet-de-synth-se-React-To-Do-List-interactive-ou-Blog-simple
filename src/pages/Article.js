import { useParams, Link } from "react-router-dom";
import { useState } from "react";

function Article({ articles, onEdit }) {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));
  const [newContent, setNewContent] = useState(article.contenu);

  if (!article) return <p>Article non trouvé</p>;

  return (
    <div>
      <h2>{article.titre}</h2>
      <textarea
        className="form-control mb-3"
        rows="5"
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
      ></textarea>
      <button
        className="btn btn-success me-2"
        onClick={() => onEdit(article.id, newContent)}
      >
        💾 Enregistrer
      </button>
      <Link to="/" className="btn btn-secondary">
        ⬅️ Retour à l’accueil
      </Link>
    </div>
  );
}

export default Article;
