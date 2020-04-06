import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./navbar.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
class NavBar extends Component {
  state = {
    format: "hex",
  };
  handleChange = (e) => {
    this.setState({
      format: e.target.value,
    });
    this.props.changeFormat(e.target.value);
  };
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
        <div className="select-container">
          <Select onChange={this.handleChange}>
            <MenuItem value="hex">Hex - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}
export default NavBar;
