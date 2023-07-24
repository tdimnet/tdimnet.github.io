import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import About from "./pages/About";
import AllProjects from "./pages/AllProjects";
import Home from "./pages/Home";
import Programming from "./pages/Programming";
import Project from "./pages/Project";
import Teaching from "./pages/Teaching";
import Writing from "./pages/Writing";

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
            <Route path="/programming" element={<Programming />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/writing" element={<Writing />} />
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
