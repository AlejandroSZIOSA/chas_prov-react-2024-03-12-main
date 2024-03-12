import { useContext } from "react";
import { ColorContext } from "../themeProvider";

export default function ChildTwo() {
  const { color } = useContext(ColorContext);

  return (
    <div style={{ background: color }}>
      <h1>Child Two</h1>
    </div>
  );
}
