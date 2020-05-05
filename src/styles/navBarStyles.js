import sizes from "./sizes";

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh",
  },
  logo: {
    marginRight: "50px",
    padding: "0 30px",
    fontSize: "22px",
    backgroundColor: "#eceff1",
    fontFamily: "sans-serif",
    height: "100%",
    display: "flex",
    alignItems: "center",
    [sizes.down("xs")]: {
      display: "none",
    },
    "& a": {
      textDecoration: "none",
      color: "#202020",
    },
  },

  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
  },
  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    [sizes.down("md")]: {
      width: "150px",
    },
  },
};
export default styles;
