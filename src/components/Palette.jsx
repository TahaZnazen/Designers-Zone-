import React, { Component } from "react";
import ColorBox from "./colorBox/ColorBox";
import "./palette.css";
import NavBar from "./navBar/NavBar";
class Palette extends Component {
  state = {
    level: 500,
  };
  changeLevel = (level) => {
    this.setState({
      level,
    });
  };
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className="palette">
        {/* navbar here */}
        <NavBar level={level} changeLevel={this.changeLevel} />
        <div className="palette-colors">{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}

export default Palette;
