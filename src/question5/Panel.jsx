import { useState } from "react";

export default function Panel({ title, collapsible, children }) {
  const [isCollapsible, setIsCollapsible] = useState(collapsible);

  function showLess() {
    if (isCollapsible) setIsCollapsible(false);
    else setIsCollapsible(true);
  }
  return (
    <div>
      <h1>{title}</h1>
      {isCollapsible && children}
      {collapsible && <button onClick={showLess}>Show less</button>}
    </div>
  );
}
