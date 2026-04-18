import './App.css';
import { MainView } from './views/MainView.js';
import { CalculatorView } from './views/CalculatorView.js';
import { MapView } from './views/MapView.js';
import { UsView } from './views/UsView.js';
import { Header } from './components/Herader.js';
import { Footer } from './components/Footer.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/mapa" element={<MapView />} />
          <Route path="/calculadora" element={<CalculatorView />} />
          <Route path="/nosotros" element={<UsView />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
