import chroma from "chroma-js";
import sizes from "./sizes";

const styles = {
  colorBox: {
    width: "20%",
    height: (props) => (props.showLink ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    "&:hover button": {
      opacity: "1",
    },
    [sizes.down("lg")]: {
      width: "33.3333%",
      height: (props) => (props.showLink ? "20%" : "30%"),
      marginBottom: "-4px",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: (props) => (props.showLink ? "10%" : "20%"),
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: (props) => (props.showLink ? "5%" : "10%"),
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
      [sizes.down("xs")]: {
        fontSize: "6rem",
      },
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
export default styles;
