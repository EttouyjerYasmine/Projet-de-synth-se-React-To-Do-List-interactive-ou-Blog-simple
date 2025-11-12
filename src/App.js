import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Accueil from './pages/Accueil';
import Article from './pages/Article';

function App() {
  const [articles] = useState([
    { id: 1, titre: 'Premier article', contenu: 'Contenu du premier article.' },
    { id: 2, titre: 'Deuxième article', contenu: 'Contenu du deuxième article.' }
  ]);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Accueil</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Accueil articles={articles} />} />
        <Route path="/article/:id" element={<Article articles={articles} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
