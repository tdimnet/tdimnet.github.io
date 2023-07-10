import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

const container = document.querySelector("#root");

if (!container) {
  throw new Error("No container to render to");
}

const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
