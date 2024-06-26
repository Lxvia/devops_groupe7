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
      <main>
        <h1>Résultats et Recommandations</h1>
        {data.map((item, index) => (
          <Axis key={index} axis={item.axis} questions={item.questions} />
        ))}
      </main>
    </div>
  );
}

export default App;
