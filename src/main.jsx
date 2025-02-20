import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Experiencia from "./pages/Experiencia";
import Contato from "./pages/Contato";
import "./styles.scss";

function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/sobre">Sobre</Link> | <Link to="/experiencia">Experiência</Link> | <Link to="/contato">Contato</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </HashRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
