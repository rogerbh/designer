import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Experiencia from "./pages/Experiencia";
import Contato from "./pages/Contato";
import "./App.css";
import "./styles.scss";
import { motion } from "framer-motion";

function App() {
  return (
    <HashRouter>
      <div style={{ display: "flex", height: "100%" }}>
        <div
          style={{
            paddingTop: "100px",
            flex: "0 0 200px",
          }}
        >
          <motion.nav
            className="text-4xl md:text-5xl text-gray-900 font-sans font-thin"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              boxShadow: "inset -20px 0px 15px -20px rgba(0,0,0,0.35)",
            }}
          >
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/experiencia">Experiência</Link>
            <Link to="/contato">Contato</Link>
          </motion.nav>
        </div>
        <div style={{ display: "flex", backgroundColor: "#fff", zIndex: '1' }}>
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
