import React, { Component } from "react";
import "./colorBox.css";
class ColorBox extends Component {
  render() {
    return (
      <div
        style={{ backgroundColor: this.props.background }}
        className="colorBox"
      >
        <span>{this.props.name}</span>
        <span>More</span>
      </div>
    );
  }
}
export default ColorBox;
