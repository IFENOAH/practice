import React, { useState } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const toggleParagraph = () => {
    setShowParagraph((prevShow) => !prevShow);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is New!</p>}
      <Button onClick={toggleParagraph}>Show</Button>
    </div>
  );
}

export default App;
