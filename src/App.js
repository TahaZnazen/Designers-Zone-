import React, { useState } from "react";
import Palette from "./components/Palette";
import colorsPalettes from "./seedColor";
import { generatePalette } from "./colorHelper";
import { Route, Switch } from "react-router-dom";
import seedColor from "./seedColor";
import HomePage from "./components/HomePage/HomePage";
import SingleColorPalette from "./components/singleColorPalette/SingleColorPalette";
import NewPalette from "./components/createPalette/NewPalette";

function App() {
  const [paletteList, newPaletteList] = React.useState(seedColor);
  const findPalette = (id) => {
    return paletteList.find((palette) => palette.id === id);
  };

  const savePalette = (newPalette) => {
    newPaletteList([...paletteList, newPalette]);
  };
  return (
    <Switch>
      <Route
        exact
        path="/palette/new"
        render={(routeProps) => (
          <NewPalette
            palettes={paletteList}
            savePalette={savePalette}
            {...routeProps}
          />
        )}
      />
      <Route
        exact
        path="/"
        render={(routeProps) => (
          <HomePage palettes={paletteList} {...routeProps} />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={(routeProps) => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={(routeProps) => (
          <SingleColorPalette
            palette={generatePalette(
              findPalette(routeProps.match.params.paletteId)
            )}
            colorId={routeProps.match.params.colorId}
            paletteId={generatePalette(
              findPalette(routeProps.match.params.paletteId)
            )}
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
