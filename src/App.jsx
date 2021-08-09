import React, { useState } from "react";

function App() {
  const [currentLanguage, setCurrentLanguage] = useState("Python");

  const [inputValue, setInputValue] = useState("");

  function handleLanguage(e) {
    setCurrentLanguage("JavaScript");
  }

  return (
    <div>
      <button onClick={handleLanguage}>Change Language</button>
      <h3>I Work with {currentLanguage}</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Output: {inputValue}</h2>
    </div>
  );
}

export default App;
