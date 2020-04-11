import React from "react";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
    },
  },
  colors: {
    height: "150px",
    width: "100%",
    backgroundColor: "#dae1e4",
    borderRadius: "5px",
    overflow: "hidden",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
    margin: "0",
    fontSize: "1rem",
    paddingTop: "0.5rem",
    position: "relative",
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
  miniColor: {
    height: "25%",
    width: "20%",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px",
    display: "inline-block",
  },
};
function MiniPalette(props) {
  const { classes, paletteName, emoji, colors, goToPalette } = props;
  const miniColorBoxes = colors.map((elm) => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: elm.color }}
      key={elm.name}
    ></div>
  ));
  return (
    <div className={classes.root} onClick={goToPalette}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}
export default withStyles(styles)(MiniPalette);
