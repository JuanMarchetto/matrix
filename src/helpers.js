export const toGrid = (unidimentionalArray) => {
  let rootOfLength = Math.floor(Math.sqrt(unidimentionalArray.length));
  let bidimentionalArray = [];
  unidimentionalArray.map((el, index) => {
    let remainder = index % rootOfLength;
    let row = (index - remainder) / rootOfLength;
    if (!bidimentionalArray[row]) {
      bidimentionalArray[row] = [];
    }
    bidimentionalArray[row][remainder] = el;
    return null;
  });
  return bidimentionalArray;
};
