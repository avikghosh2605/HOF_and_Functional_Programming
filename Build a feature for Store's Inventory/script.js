const items = {
  apple: 2.5,
  banana: 1.75,
  orange: 3.0,
  grapes: 4.5,
  watermelon: 7.25,
};
const exchangeRate = 80;

const pricesInRupees = Object.keys(items).map((item) => {
  return { [item]: items[item] * exchangeRate };
});
const pricesObject = Object.assign({}, ...pricesInRupees);
