export const extractNumberFromString = (source: string) => {
  const numbersArray = source.match(/\d/g);
  if (!numbersArray) {
    return NaN;
  }
  return parseInt(numbersArray.join(''), 10);
};
