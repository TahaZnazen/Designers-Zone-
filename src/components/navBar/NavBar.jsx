import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./navbar.css";
class NavBar extends Component {
  render() {
    const { changeLevel, level } = this.props;
    return (
      <header className="navbar">
        <div className="logo">
          <a href="#">React Project</a>
        </div>
        <div className="slider-container">
          <span> Level : {level}</span>

          <div className="slider">
            <Slider
              step={100}
              defaultValue={level}
              min={100}
              max={900}
              onAfterChange={changeLevel}
              handleStyle={{
                backgroundColor: "#202020",
                outline: "none",
                border: "2px solid #202020",
                boxShadow: "none",
                width: "18px",
                height: "18px",
              }}
              trackStyle={{ backgroundColor: "transparent" }}
              railStyle={{ height: "8px" }}
            />
          </div>
        </div>
      </header>
    );
  }
}
export default NavBar;
