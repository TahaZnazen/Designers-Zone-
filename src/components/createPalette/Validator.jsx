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
      <ValidatorForm
        onSubmit={handleColor}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <TextValidator
          value={name}
          onChange={handleName}
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "Enter a color name",
            "Color name must be unique",
            "Color already used!",
          ]}
          style={{ width: "90%", marginTop: "1rem" }}
          variant="filled"
          placeholder="Color Name"
        />
        <Button
          variant="contained"
          type="submit"
          disabled={isFull}
          style={{
            width: "90%",
            padding: "1rem",
            marginTop: "1rem",
            fontSize: "2rem",
            backgroundColor: isFull ? "grey" : pickedColor,
          }}
        >
          {isFull ? "Palette Full" : "Add Color"}
        </Button>
      </ValidatorForm>
    );
  }
}
