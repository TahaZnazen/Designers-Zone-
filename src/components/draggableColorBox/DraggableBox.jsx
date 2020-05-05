import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";
import styles from "../../styles/draggableColorBoxStyle";

const DraggableBox = SortableElement((props) => {
  const { classes, deleteColor } = props;

  return (
    <div
      className={props.classes.root}
      style={{ backgroundColor: props.color }}
    >
      <div className={classes.boxContent}>
        <span> {props.name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={deleteColor} />
      </div>
    </div>
  );
});
export default withStyles(styles)(DraggableBox);
