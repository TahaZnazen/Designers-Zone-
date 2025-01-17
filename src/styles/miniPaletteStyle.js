const styles = {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",

    "&:hover svg": {
      opacity: "1",
      transition: "all 0.4s ease-in-out",
    },
  },
  colors: {
    height: "150px",
    width: "100%",
    backgroundColor: "#dae1e4",
    borderRadius: "5px",
    overflow: "hidden",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
    margin: "0",
    fontSize: "1rem",
    paddingTop: "0.5rem",
    position: "relative",
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
  miniColor: {
    height: "25%",
    width: "20%",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px",
    display: "inline-block",
  },
  deleteIcon: {
    color: "white",
    backgroundColor: "#ab3d30",
    width: "20px",
    height: "20px",
    position: "absolute",
    right: "0px",
    top: "0px",
    padding: "10px",
    zIndex: "2",
    opacity: "0",
    transition: "all 0.4s ease-in-out",
  },
};
export default styles;
