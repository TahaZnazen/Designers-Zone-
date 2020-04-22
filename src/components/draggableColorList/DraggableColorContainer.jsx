import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableBox from "../draggableColorBox/DraggableBox";

function DraggableColorContainer({ colors, deleteColor }) {
  return (
    <div style={{ height: "100%" }}>
      {colors.map((elm, i) => (
        <DraggableBox
          index={i}
          deleteColor={() => deleteColor(elm.name)}
          key={elm.name}
          color={elm.color}
          name={elm.name}
        />
      ))}
    </div>
  );
}
export default SortableContainer(DraggableColorContainer);
