import React, { Component } from "react";
import ColorBox from "../colorBox/ColorBox";
import NavBar from "../navBar/NavBar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
    };
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
  changeFormat = (format) => {
    this.setState({
      format,
    });
  };
  render() {
    const { paletteName, emoji, id } = this.props.palette;

    const { format } = this.state;
    let colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        background={color[format]}
        name={color.name}
        showLink={false}
      />
    ));
    return (
      <div className="palette">
        <NavBar changeFormat={this.changeFormat} inOneColorPalette={false} />
        <div className="singleColor palette-colors">
          {colorBoxes}
          <div className="go-back colorBox">
            <Link to={`/palette/${id}`} className="back-button">
              GO Back
            </Link>
          </div>
        </div>

        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
export default SingleColorPalette;
