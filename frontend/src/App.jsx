import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [motivations, setMotivations] = useState([]);

  useEffect(() => {
    axios
      .get("/api/motivations")
      .then((res) => {
        setMotivations(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {}; // cleanup function
  });

  return (
    <>
      <h1>Super Section and FULLSTACK | youtube</h1>
      <p>MOTIVATIONS: {motivations.length}</p>

      {motivations.map((motivations, index) => (
        <div key={motivations.id}>
          <h3>{motivations.title}</h3>
          <p>{motivations.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
