import React from "react";
import Palette from "./components/Palette";
import colorsPalettes from "./seedColor";
function App() {
  return (
    <div className="App">
      <Palette {...colorsPalettes[1]} />
    </div>
  );
}

export default App;
