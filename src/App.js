import React, { Component } from "react";
import "./App.css";
import Toggle from "./components/Toggle";
import User from "./components/User";
import { UserContext } from "./components/UserContext";

class UserProvider extends Component {
  state = {
    name: "Dave",
    surname: "Round",
    email: "dave@round.com"
  };

  logout = () => {
    this.setState({
      name: "",
      surname: "",
      email: ""
    });
  };
  render() {
    return (
      <UserContext.Provider value={{ user: this.state, logout: this.logout }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <UserProvider>
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
              <Toggle>
                {({ on, toggle }) => (
                  <div>
                    {on && <h1>Toggle on!</h1>}
                    <button onClick={toggle}>show/hide</button>
                  </div>
                )}
              </Toggle>
            </div>
          </header>
        </div>
      </UserProvider>
    );
  }
}

export default App;
