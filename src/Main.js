import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import App from "./App";
import App2 from "./App2";

export default class Main extends Component {
  render() {
    return (
      <Router>
        <header
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <Link to="/app1">
            <h3>App1</h3>
          </Link>
          <Link to="/app2">
            <h3>App2 - Hooks</h3>
          </Link>
        </header>
        <div>
          <Route exact path="/app1" component={App} />
          <Route exact path="/app2" component={App2} />
        </div>
      </Router>
    );
  }
}
