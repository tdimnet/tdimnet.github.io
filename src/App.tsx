import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div>Hello, Thomas</div>
  )
}

const container = document.querySelector('#root')

if (!container) {
  throw new Error("No container to render to")
}

const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))

