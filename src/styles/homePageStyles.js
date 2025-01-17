const styles = {
  root: {
    backgroundColor: "#202020",
    height: "100vh",
    display: "flex",
    alignItem: "flex-start",
    justifyContent: "center ",
  },
  container: {
    width: "50%",
    disply: "flex",
    alignItem: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& a": {
      color: "white",
      textDecoration: "none",
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
};

export default styles;
