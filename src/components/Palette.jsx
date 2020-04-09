import React, { Component } from "react";
import ColorBox from "./colorBox/ColorBox";
import "./palette.css";
import NavBar from "./navBar/NavBar";
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
    const { colors, paletteName, emoji } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox key={color.id} background={color[format]} name={color.name} />
    ));
    return (
      <div className="palette">
        {/* navbar here */}
        <NavBar
          level={level}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
        />
        <div className="palette-colors">{colorBoxes}</div>
        <footer className="palette-footer">
          {paletteName}
          <span className="footer-emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default Palette;
