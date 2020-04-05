import React, { Component } from "react";
import ColorBox from "./colorBox/ColorBox";
import "./palette.css";
class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map((color) => (
      <ColorBox background={color.color} name={color.name} />
    ));
    return (
      <div className="palette">
        {/* navbar here */}
        <div className="palette-colors">{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}

export default Palette;
