import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../../styles/miniPaletteStyle";
import DeleteIcon from "@material-ui/icons/Delete";
function MiniPalette(props) {
  const {
    classes,
    paletteName,
    emoji,
    colors,
    goToPalette,
    deletePalettes,
    id,
  } = props;
  const miniColorBoxes = colors.map((elm) => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: elm.color }}
      key={elm.name}
    ></div>
  ));
  const deletePalette = (e) => {
    e.stopPropagation();
    deletePalettes(id);
  };
  return (
    <div className={classes.root} onClick={goToPalette}>
      <DeleteIcon onClick={deletePalette} className={classes.deleteIcon} />
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}
export default withStyles(styles)(MiniPalette);
