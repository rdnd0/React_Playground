import React from "react";
import { Transition, animated } from "react-spring/renderprops";

import Toggle from "./Toggle";

export default function AltTransitionToggle() {
  return (
    <Toggle>
      {({ on, toggle }) => (
        <div onClick={toggle} style={{ minHeight: "50px" }}>
          <Transition
            native
            config={{ tension: 260, friction: 100 }}
            items={on}
            from={{ position: "absolute", overflow: "hidden", height: 0 }}
            enter={[{ height: "auto" }]}
            leave={{ height: 0 }}
          >
            {on =>
              !on &&
              (props => (
                <animated.div style={props}>
                  <h1>Hello!</h1>
                </animated.div>
              ))
            }
          </Transition>
        </div>
      )}
    </Toggle>
  );
}
