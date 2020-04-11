import React, { Component } from "react";
import ColorBox from "../colorBox/ColorBox";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.paletteId, this.props.colorId);
  }

  gatherShades = (palettes, selectedColor) => {
    let colorShades = [];
    let allColors = palettes.colors;
    for (let key in allColors) {
      colorShades = colorShades.concat(
        allColors[key].filter((color) => color.id === selectedColor)
      );
    }
    return colorShades.slice(1);
  };
  render() {
    let colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.id}
        background={color.hex}
        name={color.name}
        showLink={false}
      />
    ));
    return (
      <div className="palette">
        <h1>single color p</h1>
        <div className="palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
export default SingleColorPalette;
