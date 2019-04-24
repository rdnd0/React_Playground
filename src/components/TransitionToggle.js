import React from "react";
import { Transition } from "react-spring/renderprops";

import Toggle from "./Toggle";

export default function TransitionToggle() {
  return (
    <Toggle>
      {({ on, toggle }) => (
        <div>
          <Transition
            items={on}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {on =>
              on &&
              (props => (
                <div style={props}>
                  <h1>Toggle on!</h1>
                </div>
              ))
            }
          </Transition>
          <button onClick={toggle}>show/hide</button>
        </div>
      )}
    </Toggle>
  );
}
