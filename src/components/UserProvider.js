import React, { Component } from "react";

import { UserContext } from "./UserContext";

export default class UserProvider extends Component {
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
