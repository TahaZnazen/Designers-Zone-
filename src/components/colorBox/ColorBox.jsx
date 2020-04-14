import React, { Component } from "react";
import "./colorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  colorBox: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover button": {
      opacity: "1",
    },
  },

  copied: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.5 ? "#202020" : "white",
  },
  seeMore: {
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0",
    bottom: "0",
    color: (props) =>
      chroma(props.background).luminance() >= 0.5 ? "#202020" : "white",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
  },
  copieButton: {
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? "#202020" : "white",
    border: "none",
    transition: "0.5s",
    textDecoration: "none",
    opacity: "0",
  },
};

class ColorBox extends Component {
  state = {
    copied: false,
  };
  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
  };
  render() {
    const { name, background, singleColorUrl, showLink, classes } = this.props;
    const { copied } = this.state;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className={classes.colorBox}>
          <div
            style={{ background }}
            className={`copy-overlay ${copied && "show"}`}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1 className={classes.copied}> COPIED !</h1>
            <p className={classes.copied}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={classes.copied}>{name}</span>
            </div>
            <button className={classes.copieButton}>Copy</button>
          </div>
          {showLink && (
            <Link to={singleColorUrl} onClick={(e) => e.stopPropagation()}>
              <span className={classes.seeMore}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}
export default withStyles(styles)(ColorBox);
