import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Details from "./pages/Details.jsx";
import Search from "./pages/Search.jsx";
import Error from "./pages/Error.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/detalles/:category/:id" element={<Details />} />
      <Route path="/buscar/:query" element={<Search />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
