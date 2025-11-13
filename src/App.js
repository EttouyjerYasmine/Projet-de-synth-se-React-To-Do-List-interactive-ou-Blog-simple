import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accueil from "./pages/Accueil";
import Article from "./pages/Article";

function App() {
  const [articles, setArticles] = useState([
    { id: 1, titre: "Premier article", contenu: "Contenu du premier article." },
    { id: 2, titre: "Deuxième article", contenu: "Contenu du deuxième article." },
  ]);

  // 🔧 Fonction pour modifier le contenu d’un article
  const handleEdit = (id, newContent) => {
    if (!newContent.trim()) {
      alert("Le contenu ne peut pas être vide !");
      return;
    }

    setArticles((prev) =>
      prev.map((article) =>
        article.id === id ? { ...article, contenu: newContent } : article
      )
    );
  };

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            📰 Mon Blog
          </Link>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Accueil articles={articles} />} />
          <Route
            path="/article/:id"
            element={<Article articles={articles} onEdit={handleEdit} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
