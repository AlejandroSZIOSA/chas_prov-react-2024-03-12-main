// 2. API-Anrop och Rendering (3p)
// Använd fetch för att hämta posts från https://jsonplaceholder.typicode.com/posts.
// Visa endast titlarna för de första 5 inläggen.
// Varje titel ska vara en klickbar länk som, när man klickar på den,
// loggar postens ID till konsolen. Använd <button> för den klickbara länken.

//<a> tag

import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data.slice(0, 5));
    }
    getData();
  }, []);

  return (
    <div>
      {posts.map((p) => {
        return (
          <div key={p.id} className="flex flex-row">
            <p>{p.title}</p>
            <a onClick={() => console.log(p.id)}>Show Id</a>
          </div>
        );
      })}
    </div>
  );
}

export default App;
