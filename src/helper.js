const padNum = (str) => str.padStart(3, "0");
const randomItem = (array) => array[Math.floor(Math.random() * array.length)];
const accumulateExp = function (exp, mon) {
  exp = exp + mon.base_experience;
  return exp;
};
export { padNum, randomItem, accumulateExp };
