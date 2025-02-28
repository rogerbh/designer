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
      <div style={{ display: 'flex', height: '100%' }}>
        <nav style={{ display: 'flex', flex: '0 0 200px', flexDirection: 'column', gap: '15px', backgroundColor: '#fafafa', boxShadow: 'inset -20px 0px 15px -20px rgba(0,0,0,0.35)' }}>
          <Link to="/">Home</Link> | <Link to="/sobre">Sobre</Link> |{" "}
          <Link to="/experiencia">Experiência</Link> |{" "}
          <Link to="/contato">Contato</Link>
        </nav>
        <div style={{ display: 'flex', backgroundColor: '#fff' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/experiencia" element={<Experiencia />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
