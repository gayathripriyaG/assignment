import React from "react";
import "./App.css";
import { Timer } from "./components/Timer";

function App() {
  const [start, setStart] = React.useState(0);
  const end = 10;
  const [show, setShow] = React.useState(false);
  return (
    <div className="App">
      {show ? (
        <Timer start={start} setStart={setStart} end={end} />
      ) : (
        <h1>No Timer</h1>
      )}
      <br />
      <div>
        <button onClick={() => setShow(!show)}>
          {show ? "Don't Show" : "Show"}
        </button>
      </div>
    </div>
  );
}

export default App;
