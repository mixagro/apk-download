import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>QSpray</h1>
        <h3>fornecido por Mixagro</h3>

        <p>
          Clique no botão abaixo para fazer donwnload do aplicativo Android:
        </p>

        <a
          href="/"
          style={{
            textDecoration: "none",
            background: "#52BE21",
            padding: "8px 16px",
            color: "#fff",
            borderRadius: "5px",
          }}
        >
          Download
        </a>
      </header>
    </div>
  );
}

export default App;
