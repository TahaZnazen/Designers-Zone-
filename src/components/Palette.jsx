import React, { Component } from "react";
import ColorBox from "./colorBox/ColorBox";
import "./palette.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
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
        <Slider
          step={100}
          defaultValue={level}
          min={100}
          max={900}
          onAfterChange={this.changeLevel}
        />
        {/* navbar here */}
        <div className="palette-colors">{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}

export default Palette;
