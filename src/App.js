import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/index.scss';
import Accueil from './pages/Accueil.js';
import Navbar from './composants/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
