import React, { useState } from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddToPhotos from "@material-ui/icons/AddToPhotos";
import NameValidator from "./paletteNameValidator";

const styles = {
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
};
function PaletteFormNav(props) {
  const [paletteName, newPaletteName] = React.useState("");

  const { classes, open, colors, palettes, handleDrawerOpen } = props;
  const handlePaletteName = (e) => {
    newPaletteName(e.target.value);
  };
  const savePalette = (emoji) => {
    const newPalette = {
      paletteName: paletteName,
      id: paletteName.toLowerCase().replace(/ /g, "-"),
      colors: colors,
      emoji: emoji,
    };
    props.savePalettes(newPalette);
    props.history.push("/");
  };
  return (
    <div>
      <CssBaseline />
      <AppBar
        color="default"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{ display: "flex" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <AddToPhotos />
          </IconButton>
          <div className={classes.navContainer}>
            <Typography variant="h6" noWrap>
              Create Palette
            </Typography>
            <NameValidator
              paletteName={paletteName}
              handlePaletteName={handlePaletteName}
              savePalette={savePalette}
              palettes={palettes}
            />
          </div>
        </Toolbar>

        {/* / */}
      </AppBar>
    </div>
  );
}
export default withStyles(styles)(PaletteFormNav);
