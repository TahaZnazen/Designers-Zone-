import React, { Component } from "react";
import "./colorBox.css";
class ColorBox extends Component {
  render() {
    const { name, background } = this.props;
    return (
      <div style={{ backgroundColor: background }} className="colorBox">
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">MORE</span>
      </div>
    );
  }
}
export default ColorBox;
