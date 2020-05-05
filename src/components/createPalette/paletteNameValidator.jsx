import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
export default class NameValidator extends Component {
  state = {
    stage: "closed",
  };

  handleClickOpen = () => {
    this.setState({ stage: "namePicker" });
  };

  handleClose = () => {
    this.setState({ stage: "closed" });
  };
  pickEmoji = () => {
    this.setState({ stage: "emoji" });
  };
  saveCompletePalette = (emoji) => {
    const emojiPicked = emoji.native;
    this.props.savePalette(emojiPicked);
  };
  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  render() {
    const { paletteName, handlePaletteName } = this.props;
    const { stage } = this.state;
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Save
        </Button>

        <Dialog
          open={stage === "emoji"}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            PICK YOUR PALETTE EMOJI
          </DialogTitle>
          <Picker onSelect={this.saveCompletePalette} />
        </Dialog>
        <Dialog
          open={stage === "namePicker"}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Choose your Platte Name
          </DialogTitle>
          <ValidatorForm onSubmit={this.pickEmoji}>
            <DialogContent>
              <DialogContentText>
                Please Name you palette to save it , Make sure it's unique
              </DialogContentText>

              <TextValidator
                label="Palette Name"
                value={paletteName}
                onChange={handlePaletteName}
                fullWidth
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={["Enter Palette Name", "Name already used"]}
              />

              <Link to="/"></Link>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="secondary"
            style={{ margin: "0.2rem" }}
          >
            Back
          </Button>
        </Link>
      </div>
    );
  }
}
