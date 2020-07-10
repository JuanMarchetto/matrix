import React from 'react';
import RenderCell from './cell';

const RenderRow = ({
  row, rowIndex, params, styles,
}) => (
  <div
    style={{ ...styles?.rows, ...params?.rows?.styles }}
    className={params?.rows?.classes}
    key={rowIndex}
  >
    {row.map((cell, cellIndex) => (
      <RenderCell
        cell={cell}
        cellIndex={cellIndex}
        params={params}
        styles={styles}
      >
        {cell.childs}
      </RenderCell>
    ))}
  </div>
);

export default RenderRow;
