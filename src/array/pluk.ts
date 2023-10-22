export const pluk = (elements: Array<any>, ...indexes: Array<number>): Array<any> => {
  return indexes.map((index) => elements[index]);
};
