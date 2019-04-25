import React, { useState } from "react";

import ToggleHooks from "./components2/ToggleHooks";

export default function App2() {
  const initialState = "";
  const [name, setName] = useState(initialState);
  return (
    <div>
      <ToggleHooks>
        {({ on, toggle }) => (
          <div>
            {on && (
              <div>
                <h2>Basic Hook</h2>
                <input
                  type="text"
                  onChange={e => setName(e.target.value)}
                  value={name}
                />
              </div>
            )}
            <button onClick={toggle}>show/hide</button>
          </div>
        )}
      </ToggleHooks>
    </div>
  );
}
