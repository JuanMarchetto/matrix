export const defaultStyles = (rowsLength, cellsByRow) => ({
  container: {
    display: 'block',
    width: '100%',
    height: '100%',
  },
  rows: {
    display: 'flex',
    height: `${100 / rowsLength}%`,
  },
  cells: {
    width: `${100 / cellsByRow}%`,
  },
});

export default defaultStyles;
