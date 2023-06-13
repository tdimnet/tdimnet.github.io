import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./pages/Home";
import UnderConstruction from "./pages/UnderConstruction";

function App() {
  return <UnderConstruction />;
}

const container = document.querySelector("#root");

if (!container) {
  throw new Error("No container to render to");
}

const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
