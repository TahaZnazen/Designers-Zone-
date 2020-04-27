import React, { useState } from "react";
import clsx from "clsx";

import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NameValidator from "./paletteNameValidator";

export default function PaletteFormNav(props) {
  const [paletteName, newPaletteName] = React.useState("");

  const { classes, open, colors, palettes, handleDrawerOpen } = props;
  const handlePaletteName = (e) => {
    newPaletteName(e.target.value);
  };
  const savePalette = () => {
    const newPalette = {
      paletteName: paletteName,
      id: paletteName.toLowerCase().replace(/ /g, "-"),
      colors: colors,
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
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
          <NameValidator
            paletteName={paletteName}
            handlePaletteName={handlePaletteName}
            savePalette={savePalette}
            palettes={palettes}
          />
        </Toolbar>

        {/* / */}
      </AppBar>
    </div>
  );
}
