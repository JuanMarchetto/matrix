import React from 'react';
import renderCell from './cell'

const renderRow = (row, rowIndex, params, styles) =>(
  <div
    style={{ ...styles?.rows, ...params?.rows?.styles }}
    className={params?.rows?.classes}
    key={rowIndex}
  >
    {row.map((cell, cellIndex) =>
      renderCell(cell,rowIndex, cellIndex, params, styles)
    )}
  </div>
)

export default renderRow;