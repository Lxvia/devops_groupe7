import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/index.scss';
import Accueil from './pages/Accueil.js';
import Resultat from "./pages/Resultat.js";
import Formulaire from "./pages/Formulaire.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/resultat" element={<Resultat />} />
          <Route path="/formulaire" element={<Formulaire />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
