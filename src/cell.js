import React from 'react';
import { getClasses } from './helpers';

const RenderCell = ({
  cell, params, styles, children,
}) => (
  <div
    style={{
      ...styles?.cells,
      ...params?.cells?.styles,
      ...cell.styles,
    }}
    className={getClasses([params?.cells?.classes, cell.classes])}
  >
    {children}
  </div>
);

export default RenderCell;
