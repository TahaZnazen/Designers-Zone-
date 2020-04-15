import React, { Component } from "react";
import "./colorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  colorBox: {
    width: "20%",
    height: (props) => (props.showLink ? "25%" : "50%"),
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
  backButton: {
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
      chroma(props.background).luminance() >= 0.5 ? "#202020" : "white",
    border: "none",
    transition: "0.5s",
    textDecoration: "none",
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
      chroma(props.background).luminance() >= 0.5 ? "#202020" : "white",
    border: "none",
    transition: "0.5s",
    textDecoration: "none",
    opacity: "0",
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s ease-in-out",
    transform: "scale(0.1)",
  },
  copyOverlayShow: {
    opacity: "1",
    transform: " scale(50)",
    zIndex: " 10",
    position: " absolute",
  },
  copyMsg: {
    position: "fixed",
    top: "0",
    bottom: "0",
    right: "0",
    left: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "white",
    "& h1": {
      fontWeight: "400",
      textShadow: " 1px 2px black",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      width: "100%",
      textAlign: "center",
      marginBottom: "0",
      padding: "1rem",
      textTransform: "uppercase",
      fontFamily: "sans-serif",
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: " 100",
    },
  },
  copyMsgShow: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "11",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s",
  },
  boxContent: {
    position: "absolute",
    padding: "10px",
    width: "100%",
    left: "0",
    bottom: "0",
    color: "black",
    letterSpacing: " 1px",
    textTransform: "uppercase",
    fontSize: "12px",
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
            className={`${classes.copyOverlay} ${
              copied && classes.copyOverlayShow
            }`}
          />
          <div
            className={`${classes.copyMsg} ${copied && classes.copyMsgShow}`}
          >
            <h1 className={classes.copied}> COPIED !</h1>
            <p className={classes.copied}>{background}</p>
          </div>
          <div className="copy-container">
            <div className={classes.boxContent}>
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
