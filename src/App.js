import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const colorChanger = color === "red" ? "blue" : "red";
  return (
    <div className="App">
      <button
        style={{ backgroundColor: color }}
        onClick={() => setColor(colorChanger)}
      >
        {`Change to ${colorChanger}`}
      </button>
    </div>
  );
}

export default App;
