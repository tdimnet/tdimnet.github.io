import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-primay pb-16">
        <div className="max-w-screen-lg mx-auto pt-5 px-5 lg:px-0 min-h-screen">
          <div className="mb-5">
            <Header />
          </div>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/project/:id" element={<Project />} />
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
