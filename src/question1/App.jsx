// 1. Lista med useState (3p)
// Skapa en komponent som visar en lista med hobbies.
// Användaren ska kunna lägga till en ny hobby via ett
// inputfält och en "Lägg till"-knapp. Varje hobby i listan
// ska ha en "Ta bort"-knapp som tar bort hobbyn från listan.
// Använd useState för att hantera listan.

import React from "react";
import { useState } from "react";

let id = 0;

function HobbyList({ list, removeFn }) {
  return (
    <div>
      <ol>
        {list.map((h) => {
          return (
            <>
              <li key={h.id}>{h.hobby}</li>
              <button onClick={() => removeFn(h.id)}>Remove</button>
            </>
          );
        })}
      </ol>
    </div>
  );
}

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  function handleRemove(id) {
    const filteredHobbies = list.filter((h) => h.id != id);
    setList(filteredHobbies);
  }

  function handleOnclickBtn() {
    const hobby = {
      id: id++,
      hobby: input,
    };

    setList([...list, hobby]);
  }

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      Hobby
      <button onClick={handleOnclickBtn}>ADD</button>
      <HobbyList list={list} removeFn={handleRemove} />
    </div>
  );
}

export default App;
