import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../../styles/miniPaletteStyle";
import DeleteIcon from "@material-ui/icons/Delete";
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
      <div className={classes.delete}>
        <DeleteIcon className={classes.deleteIcon} />
      </div>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}
export default withStyles(styles)(MiniPalette);
