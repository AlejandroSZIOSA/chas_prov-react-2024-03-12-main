import { createContext, useState } from "react";

export const ColorContext = createContext();

//2
export function ColorProvider({ children }) {
  const [color, setColor] = useState("yellow");
  //1.3 Return "provider" with "children" :)
  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
}
