import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal";
import Toggle from "./components/Toggle";
import SpringHello from "./components/SpringHello";
import TransitionToggle from "./components/TransitionToggle";
import AltTransitionToggle from "./components/AltTransitionToggle";
import Drag from "./components/Drag";
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
            <Toggle>
              {({ on, toggle }) => (
                <div>
                  <Modal on={on} toggle={toggle}>
                    Beautiful little orange screen
                  </Modal>
                  <button onClick={toggle}>Show</button>
                </div>
              )}
            </Toggle>
            <Drag />
            <div>
              <TransitionToggle />
              <User />
            </div>
          </header>
          <div>
            <AltTransitionToggle />
          </div>
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
