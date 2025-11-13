import { Link } from "react-router-dom";

function Accueil({ articles }) {
  return (
    <div>
      <h1 className="text-center mb-4">🗂️ Liste des articles</h1>
      <div className="row">
        {articles.map((article) => (
          <div key={article.id} className="col-md-6 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{article.titre}</h5>
                <p className="card-text text-muted">
                  {article.contenu.substring(0, 60)}...
                </p>
                <Link
                  to={`/article/${article.id}`}
                  className="btn btn-primary btn-sm"
                >
                  Voir le détail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accueil;
