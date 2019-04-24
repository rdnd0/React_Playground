import React, { Component } from "react";
import Portal from "./Portal";

export default class Modal extends Component {
  render() {
    const { on, toggle, children } = this.props;
    return (
      <Portal>
        <div style={mainWrapper} onClick={toggle}>
          <div style={window}>
            {children}
            <button style={button} onClick={toggle}>
              X
            </button>
          </div>
        </div>
      </Portal>
    );
  }
}

const mainWrapper = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "orange",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const window = {
  backgroundColor: "white",
  padding: "5rem",
  borderRadius: "1rem",
  position: "relative"
};

const button = {
  position: "absolute",
  top: "0",
  right: "0",
  margin: "0.3rem"
};
