export const toGrid = (unidimentionalArray) => {
  const rootOfLength = Math.floor(Math.sqrt(unidimentionalArray.length));
  const bidimentionalArray = [];
  unidimentionalArray.map((el, index) => {
    const remainder = index % rootOfLength;
    const row = (index - remainder) / rootOfLength;
    if (!bidimentionalArray[row]) {
      bidimentionalArray[row] = [];
    }
    bidimentionalArray[row][remainder] = el;
    return null;
  });
  return bidimentionalArray;
};

export const getClasses = (classesList = []) => classesList.reduce(((accumulator, classes) => `${accumulator} ${classes || ''}`), '').trim() || undefined;
