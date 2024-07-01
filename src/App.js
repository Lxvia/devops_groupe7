import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/index.scss';
import Accueil from './pages/Accueil.js';
import Resultat from "./pages/Resultat.js";
import Axes from "./composants/Axes.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/resultat/:userId" element={<Resultat />} />
          <Route path="/formulaire" element={<Axes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;