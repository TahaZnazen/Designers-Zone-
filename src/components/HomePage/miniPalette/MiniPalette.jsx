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
    backgroundColor: "grey",
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
};
function MiniPalette(props) {
  const { classes, paletteName, emoji } = props;
  return (
    <div className={classes.root}>
      <div className={classes.colors}></div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}
export default withStyles(styles)(MiniPalette);
