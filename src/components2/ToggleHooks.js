import React, { useState } from "react";

function ToggleHooks(props) {
  const [isToggled, setToggle] = useState(false);

  const toggle = () => {
    setToggle(!isToggled);
  };

  const { children } = props;

  return children({
    on: isToggled,
    toggle: toggle
  });
}

export default ToggleHooks;
