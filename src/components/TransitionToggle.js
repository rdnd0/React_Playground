import React from "react";
import { Transition } from "react-spring/renderprops";

import Toggle from "./Toggle";

export default function TransitionToggle() {
  return (
    <Transition
      from={{ opacity: 0, marginTop: -500 }}
      enter={{ opacity: 1, marginTop: 0 }}
      config={{ delay: 1000, duration: 1000 }}
    >
      {props => (
        <Toggle>
          {({ on, toggle }) => (
            <div>
              {on && <h1>Toggle on!</h1>}
              <button onClick={toggle}>show/hide</button>
            </div>
          )}
        </Toggle>
      )}
    </Transition>
  );
}
