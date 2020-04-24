import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";

export default class Validator extends Component {
  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      this.props.colors.every(({ color }) => color !== this.props.pickedColor)
    );
  }
  render() {
    const { handleColor, name, handleName, pickedColor, isFull } = this.props;
    return (
      <ValidatorForm onSubmit={handleColor}>
        <TextValidator
          value={name}
          onChange={handleName}
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "Enter a color name",
            "Color name must be unique",
            "Color already used!",
          ]}
        />
        <Button
          variant="contained"
          type="submit"
          style={{ backgroundColor: isFull ? "grey" : pickedColor }}
          disabled={isFull}
        >
          {isFull ? "Palette Full" : "Add Color"}
        </Button>
      </ValidatorForm>
    );
  }
}
