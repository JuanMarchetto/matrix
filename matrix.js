import React from "react";

function Matrix({ list, params }) {
  const styles = {
    container: {
      display: "block",
      width: "100%",
      height: "100%"
    },
    rows: {
      display: "flex",
      height: 100 / list.length + "%"
    },
    childs: {
      width: 100 / list[0].length + "%"
    }
  };
  return (
    <section
      style={{ ...styles?.container, ...params?.container?.styles }}
      className={"matrix-container " + params?.container?.classes}
    >
      {list.map((row, index) => (
        <div
          style={{ ...styles?.rows, ...params?.rows?.styles }}
          className={"matrix-container " + params?.rows?.classes}
          key={index}
        >
          {row.map((cell, index) => (
            <div
              style={{
                ...styles?.childs,
                ...params?.childs?.styles,
                ...cell.styles
              }}
              className={
                "matrix-container " +
                params?.childs?.classes +
                " " +
                cell.classes
              }
              key={index}
            >
              <div dangerouslySetInnerHTML={{ __html: cell.html }} />
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

export default Matrix;
