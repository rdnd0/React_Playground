import React from "react";
import { useGesture } from "react-with-gesture";

export default function Drag() {
  const [bind, { local }] = useGesture();
  const [x, y] = local;
  return (
    <div
      {...bind()}
      style={{
        transform: `translate3d(${x}px,${y}px,0)`,
        background: "white",
        borderRadius: "5px",
        padding: "15px",
        minwidth: "10rem",
        color: "black",
        margin: "20px 0"
      }}
    />
  );
}
