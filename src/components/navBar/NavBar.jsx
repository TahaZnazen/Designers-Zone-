import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./navbar.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {
    format: "hex",
    open: false,
  };
  handleChange = (e) => {
    this.setState({
      format: e.target.value,
      open: true,
    });
    this.props.changeFormat(e.target.value);
  };
  closeSnackbar = () => {
    this.setState({
      open: false,
    });
  };
  render() {
    const { changeLevel, level, inOneColorPalette } = this.props;
    return (
      <header className="navbar">
        <div className="logo">
          <Link to="/">React Project</Link>
        </div>
        {inOneColorPalette && (
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
        )}
        <div className="select-container">
          <Select onChange={this.handleChange}>
            <MenuItem value="hex">Hex - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={3000}
          message={
            <span> Format Change to {this.state.format.toUpperCase()}</span>
          }
          onClose={this.closeSackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </header>
    );
  }
}
export default NavBar;
