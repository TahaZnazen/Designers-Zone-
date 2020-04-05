import React from "react";
import Palette from "./components/Palette";
import colorsPalettes from "./seedColor";
import { generatePalette } from "./colorHelper";
function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(colorsPalettes[4])} />
    </div>
  );
}

export default App;
