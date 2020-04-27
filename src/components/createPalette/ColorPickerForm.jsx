import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { withStyles } from "@material-ui/core/styles";
import Validator from "./Validator";
const styles = {
  picker: {
    width: "90% !important",
    marginTop: "2rem",
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
function ColorPickerForm(props) {
  const { colors, addColor, maxColors, classes } = props;
  const [pickedColor, newColor] = React.useState("green");
  const [name, newName] = React.useState("");

  const handleName = (e) => {
    newName(e.target.value);
  };
  const handleColor = () => {
    const newColor = { color: pickedColor, name: name };
    addColor([...colors, newColor]);
  };
  return (
    <div className={classes.container}>
      <ChromePicker
        color={pickedColor}
        onChangeComplete={(color) => newColor(color.hex)}
        className={classes.picker}
      />
      <Validator
        handleColor={handleColor}
        name={name}
        handleName={handleName}
        pickedColor={pickedColor}
        colors={colors}
        isFull={colors.length >= maxColors}
      />
    </div>
  );
}
export default withStyles(styles)(ColorPickerForm);
