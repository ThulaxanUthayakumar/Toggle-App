import { useState } from "react";

function App() {

  // State
  const [isOn, setIsOn] = useState(false);

  // Toggle Function
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>

      <h1>Toggle App</h1>

      <h2>
        {isOn ? "ON" : "OFF"}
      </h2>

      <button onClick={toggleSwitch}>
        Toggle
      </button>

    </div>
  );
}

export default App;