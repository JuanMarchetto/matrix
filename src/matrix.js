import React, { useEffect } from 'react';
import defaultStyles from './default-styles';
import RenderRow from './row';
import { getClasses } from './helpers';

const Matrix = ({ list, params }) => {
  useEffect(() => {}, [list, params]);
  const styles = params?.disableDefaultStyles ? {} : defaultStyles(list.length, list[0].length);
  return (
    <section
      style={{ ...styles?.container, ...params?.container?.styles }}
      className={getClasses([params?.disableDefaultClass ? "" : 'matrix-container', params?.container?.classes])}
    >
      {list.map((row, rowIndex) => (
        <RenderRow
          row={row}
          params={params}
          styles={styles}
          key={rowIndex}
        />
      ))}
    </section>
  );
};

export default Matrix;
