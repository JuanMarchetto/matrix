import React, { useEffect } from "react";
import { defaultStyles } from "./default-styles"

const renderRow = (row, rowIndex, params, styles) =>(
  <div
    style={{ ...styles?.rows, ...params?.rows?.styles }}
    className={"matrix-container " + params?.rows?.classes || ""}
    key={rowIndex}
  >
    {row.map((cell, cellIndex) =>
       renderCell(cell,rowIndex, cellIndex, params, styles)
    )}
  </div>
)

const renderCell = (cell,rowIndex, cellIndex, params, styles) => (
  <div
    style={{
      ...styles?.childs,
      ...params?.childs?.styles,
      ...cell.styles,
    }}
    className={
      "matrix-container " +
      (params?.childs?.classes || "") +
      " " +
      (cell.classes || "")
    }
    key={cellIndex}
    onClick={
      cell.onClick
        ? () => {
            cell.onClick(rowIndex, cellIndex);
          }
        : params?.childs?.onClick
        ? () => params.childs.onClick(rowIndex, cellIndex)
        : undefined
    }
  >
    <div dangerouslySetInnerHTML={{ __html: cell.html }} />
  </div>
);


const Matrix = ({ list, params }) => {
  useEffect(() => {}, [list, params]);
  const styles = defaultStyles(list.length, list[0].length);
  console.log(styles);
  return (
    <section
      style={{ ...styles?.container, ...params?.container?.styles }}
      className={"matrix-container " + params?.container?.classes || ""}
    >
      {list.map((row, rowIndex) =>
        renderRow(row, rowIndex, params, styles))
      }
    </section>
  );
}

export default Matrix;
