import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="bg-primay">
      <h1 className="text-customGrey">Foo</h1>
    </div>
  )
}

const container = document.querySelector("#root");

if (!container) {
  throw new Error("No container to render to");
}

const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
