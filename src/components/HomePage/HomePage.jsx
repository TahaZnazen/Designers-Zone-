import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./miniPalette/MiniPalette";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../styles/homePageStyles";
class HomePage extends Component {
  goToPalette = (id) => {
    this.props.history.push(`/palette/${id}`);
  };
  render() {
    const { palettes, classes, deletePalettes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to="/palette/new">Create New Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((palette) => (
              <MiniPalette
                {...palette}
                goToPalette={() => this.goToPalette(palette.id)}
                deletePalettes={deletePalettes}
                key={palette.id}
                id={palette.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(HomePage);
