import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/index.scss';
import Accueil from './pages/Accueil.js';
import Navbar from './composants/Navbar.js';
import Resultat from "./pages/Resultat.js";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/resultat" element={<Resultat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
