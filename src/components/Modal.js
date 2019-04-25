import React, { Component } from "react";
import { Transition } from "react-spring/renderprops";

import Portal from "./Portal";

export default class Modal extends Component {
  render() {
    const { on, toggle, children } = this.props;
    return (
      <Portal>
        <Transition
          items={on}
          config={{ tension: 260, friction: 60 }}
          from={{ opacity: 0, y: -100 }}
          enter={{ opacity: 1, y: 0 }}
          leave={{ opacity: 0, y: 100 }}
        >
          {on =>
            on &&
            (props => (
              <div style={mainWrapper} onClick={toggle}>
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "5rem",
                    borderRadius: "1rem",
                    position: "relative",
                    transform: `translate3D(0, ${props.y}px , 0)`,
                    opacity: `${props.opacity}`
                  }}
                >
                  <div>{children}</div>
                  <button style={button} onClick={toggle}>
                    X
                  </button>
                </div>
              </div>
            ))
          }
        </Transition>
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
