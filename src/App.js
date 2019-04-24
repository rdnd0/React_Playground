import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

import "./App.css";
import Toggle from "./components/Toggle";
import SpringHello from "./components/SpringHello";
import TransitionToggle from "./components/TransitionToggle";
import User from "./components/User";
import UserProvider from "./components/UserProvider";

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div style={absolute}>
          <SpringHello />
        </div>
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
            <div>
              <User />
              <TransitionToggle />
            </div>
          </header>
        </div>
      </UserProvider>
    );
  }
}

const absolute = {
  position: "absolute",
  backgroundColor: "white",
  width: "100%"
};

export default App;
