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
            from={{ opacity: 0, value: 0 }}
            enter={{ opacity: 1, value: 10 }}
            leave={{ opacity: 0, value: 0 }}
            config={{ duration: 1000, delay: 1000 }}
          >
            {on =>
              on &&
              (props => (
                <div style={props}>
                  <h1>Toggle on!</h1>
                  <h1>{props.value.toFixed()}</h1>
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
