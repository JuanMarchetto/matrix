import React, { useEffect } from 'react';
import defaultStyles from './default-styles';
import RenderRow from './row';
import { getClasses } from './helpers';

const Matrix = ({ list, params }) => {
  useEffect(() => {}, [list, params]);
  const styles = defaultStyles(list.length, list[0].length);
  return (
    <section
      style={{ ...styles?.container, ...params?.container?.styles }}
      className={getClasses(['matrix-container', params?.container?.classes])}
    >
      {list.map((row, rowIndex) => (
        <RenderRow
          row={row}
          rowIndex={rowIndex}
          params={params}
          styles={styles}
        />
      ))}
    </section>
  );
};

export default Matrix;
