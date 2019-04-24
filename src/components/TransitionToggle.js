import React from "react";
import { Transition } from "react-spring/renderprops";
import Toggle from "./Toggle";

export default function TransitionToggle() {
  return (
    // <Transition>
    //   {props => (
    <Toggle>
      {({ on, toggle }) => (
        <div>
          {on && <h1>Toggle on!</h1>}
          <button onClick={toggle}>show/hide</button>
        </div>
      )}
    </Toggle>
    //   )}
    // </Transition>
  );
}
