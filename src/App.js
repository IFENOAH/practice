import React, { useState } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutput from "./components/UI/Button/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const toggleParagraph = () => {
    setShowParagraph((prevShow) => !prevShow);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraph}>Show Paragraph</Button>
    </div>
  );
}

export default App;
