import React from "react";
import "./App.css";
import Toggle from "./components/Toggle";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Toggle>
          {({ on, toggle }) => (
            <div>
              {on && <h1>Toggle on!</h1>}
              <button onClick={toggle}>show/hide</button>
            </div>
          )}
        </Toggle>
      </header>
    </div>
  );
}

export default App;
