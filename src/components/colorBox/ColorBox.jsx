import React, { Component } from "react";
import "./colorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../styles/colorBoxStyles";

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
