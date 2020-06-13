
import React from 'react';
import {getClasses} from './helpers';

const renderCell = (cell,rowIndex, cellIndex, params, styles) => (
  <div
    style={{
      ...styles?.childs,
      ...params?.childs?.styles,
      ...cell.styles,
    }}
    className={ getClasses([params?.childs?.classes, cell.classes]) }
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

export default renderCell