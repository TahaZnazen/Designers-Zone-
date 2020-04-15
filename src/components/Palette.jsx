import React, { Component } from "react";
import ColorBox from "./colorBox/ColorBox";
import "./palette.css";
import NavBar from "./navBar/NavBar";
import Footer from "./Footer/Footer";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  paletteColors: {
    height: "90%",
  },
};
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
    const { classes } = this.props;
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
      <div className={classes.Palette}>
        {/* navbar here */}
        <NavBar
          level={level}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
          inOneColorPalette
        />
        <div className={classes.paletteColors}>{colorBoxes}</div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
