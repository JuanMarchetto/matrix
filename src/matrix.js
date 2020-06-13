import React, { useEffect } from 'react';
import defaultStyles from './default-styles'
import renderRow from './row'

const Matrix = ({ list, params }) => {
  useEffect(() => {}, [list, params]);
  const styles = defaultStyles(list.length, list[0].length);
  return (
    <section
      style={{ ...styles?.container, ...params?.container?.styles }}
      className={'matrix-container ' + params?.container?.classes || ''}
    >
      {list.map((row, rowIndex) =>
        renderRow(row, rowIndex, params, styles))
      }
    </section>
  );
}

export default Matrix;
