import React, { Component } from "react";
import ColorBox from "./colorBox/ColorBox";
import "./palette.css";
import NavBar from "./navBar/NavBar";
import Footer from "./Footer/Footer";
class Palette extends Component {
  state = {
    level: 500,
    format: "hex",
  };
  changeLevel = (level) => {
    this.setState({
      level,
    });
  };
  changeFormat = (format) => {
    this.setState({
      format,
    });
  };
  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        key={color.id}
        singleColorUrl={`/palette/${id}/${color.id}`}
        background={color[format]}
        name={color.name}
        showLink
      />
    ));
    return (
      <div className="palette">
        {/* navbar here */}
        <NavBar
          level={level}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
          inOneColorPalette
        />
        <div className="palette-colors">{colorBoxes}</div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default Palette;
