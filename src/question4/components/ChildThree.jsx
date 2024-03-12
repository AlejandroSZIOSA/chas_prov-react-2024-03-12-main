import { useContext, useState } from "react";

import { ColorContext } from "../themeProvider";

export default function ChildThree() {
  const { color, setColor } = useContext(ColorContext);

  function switchBgColor() {
    if (color == "yellow") {
      setColor("blue");
    } else setColor("yellow");
  }

  return (
    <>
      <div>
        <button onClick={switchBgColor}> Change Bg Color</button>
      </div>
    </>
  );
}
