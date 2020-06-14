import React from 'react';
import {getClasses} from './helpers';

const RenderCell = ({cell, cellIndex, params, styles, children}) => (
  <div
    style={{
      ...styles?.cells,
      ...params?.cells?.styles,
      ...cell.styles,
    }}
    className={ getClasses([params?.cells?.classes, cell.classes]) }
    key={cellIndex}
  >
    {children}
  </div>
);

export default RenderCell
