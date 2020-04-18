import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../styles/footerStyle";
function Footer(props) {
  const { paletteName, emoji, classes } = props;

  return (
    <footer className={classes.paletteFooter}>
      {paletteName}
      <span className={classes.footerEmoji}>{emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(Footer);
