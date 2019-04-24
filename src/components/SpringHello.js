import React from "react";
import { Spring } from "react-spring/renderprops";

export default function SpringHello() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
      config={{ delay: 1000, duration: 1000 }}
    >
      {props => <div style={props}>hello</div>}
    </Spring>
  );
}
