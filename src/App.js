import React from "react";
import Palette from "./components/Palette";
import colorsPalettes from "./seedColor";
import { generatePalette } from "./colorHelper";
function App() {
  console.log(generatePalette(colorsPalettes[4]));
  return (
    <div className="App">
      <Palette {...colorsPalettes[1]} />
    </div>
  );
}

export default App;
