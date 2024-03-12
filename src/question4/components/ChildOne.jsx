import { useContext } from "react";
import { ColorContext } from "../themeProvider";

export default function ChildOne() {
  const { color } = useContext(ColorContext);

  return (
    <div style={{ background: color }}>
      <h1>Child One</h1>
    </div>
  );
}
