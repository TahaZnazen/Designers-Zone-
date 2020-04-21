import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";

export default class NameValidator extends Component {
  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }
  render() {
    const { savePalette, paletteName, handlePaletteName } = this.props;
    return (
      <ValidatorForm onSubmit={savePalette}>
        <TextValidator
          label="Palette Name"
          value={paletteName}
          onChange={handlePaletteName}
          validators={["required", "isPaletteNameUnique"]}
          errorMessages={["Enter Palette Name", "Name already used"]}
        />
        <Button variant="contained" color="primary" type="submit">
          Save Palette
        </Button>
      </ValidatorForm>
    );
  }
}
