import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./miniPalette/MiniPalette";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  root: {
    backgroundColor: "#202020",
    height: "100vh",
    display: "flex",
    alignItem: "flex-start",
    justifyContent: "center ",
  },
  container: {
    width: "50%",
    disply: "flex",
    alignItem: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
};
class HomePage extends Component {
  goToPalette = (id) => {
    this.props.history.push(`/palette/${id}`);
  };
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((palette) => (
              <MiniPalette
                {...palette}
                goToPalette={() => this.goToPalette(palette.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(HomePage);