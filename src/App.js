import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const [isDisabled, setIsDisabled] = useState(false);
  const colorChanger = color === "red" ? "blue" : "red";
  return (
    <div className="App">
      <button
        disabled={isDisabled}
        style={{ backgroundColor: color }}
        onClick={() => setColor(colorChanger)}
      >
        {`Change to ${colorChanger}`}
      </button>
      <input
        type={"checkbox"}
        defaultChecked={isDisabled}
        onChange={(e) => setIsDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
