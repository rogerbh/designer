import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "./styles.scss";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (

    <HomePage />

    
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
