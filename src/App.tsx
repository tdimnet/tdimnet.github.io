import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import Experimentations from "./pages/Experimentations";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import Teaching from "./pages/Teaching";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-primay">
        <div className="max-w-screen-lg mx-auto pt-5 px-5 lg:px-0 min-h-screen grid">
          <div className="mb-5">
            <Header />
          </div>
          <Routes>
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/experimentations" element={<Experimentations />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

const container = document.querySelector("#root");

if (!container) {
  throw new Error("No container to render to");
}

const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
