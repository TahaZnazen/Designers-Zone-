import React, { Component } from "react";
import ColorBox from "../colorBox/ColorBox";
import NavBar from "../navBar/NavBar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  colors: {
    height: "90%",
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    opacity: 1,
    backgroundColor: "black",
    "& a": {
      color: "white",
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      background: "rgba(255, 255, 255, 0.3)",
      fontSize: "1rem",
      lineHeight: "30px",
      textTransform: "uppercase",
      border: "none",
      textDecoration: "none",
    },
  },
};
class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
    };
    this._shades = this.gatherShades(this.props.paletteId, this.props.colorId);
  }

  gatherShades = (palettes, selectedColor) => {
    let colorShades = [];
    let allColors = palettes.colors;
    for (let key in allColors) {
      colorShades = colorShades.concat(
        allColors[key].filter((color) => color.id === selectedColor)
      );
    }
    return colorShades.slice(1);
  };
  changeFormat = (format) => {
    this.setState({
      format,
    });
  };
  render() {
    const { paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { format } = this.state;
    let colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        background={color[format]}
        name={color.name}
        showLink={false}
      />
    ));
    return (
      <div className={classes.palette}>
        <NavBar changeFormat={this.changeFormat} inOneColorPalette={false} />
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`} className="back-button">
              GO Back
            </Link>
          </div>
        </div>

        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
export default withStyles(styles)(SingleColorPalette);
