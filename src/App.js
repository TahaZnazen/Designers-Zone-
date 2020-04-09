import React from "react";
import Palette from "./components/Palette";
import colorsPalettes from "./seedColor";
import { generatePalette } from "./colorHelper";
import { Route, Switch } from "react-router-dom";
import seedColor from "./seedColor";
import HomePage from "./components/HomePage/HomePage";
function App() {
  const findPalette = (id) => {
    return seedColor.find((palette) => palette.id === id);
  };
  return (
    <Switch>
      <Route exact path="/" render={() => <HomePage palettes={seedColor} />} />
      <Route
        exact
        path="/palette/:id"
        render={(routeProps) => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
    </Switch>

    // <div className="App">
    //   <Palette palette={generatePalette(colorsPalettes[4])} />
    // </div>
  );
}

export default App;
