// 1. odwróć liczbę
// np dla 12345, funkcja powinna zwrócić 54321
function reverseNumber(number) {
  return parseFloat(number.toString().split("").reverse().join("")) * Math.sign(number);
}

console.log("1.", reverseNumber(12345));

// 2. doodaj do siebie wszystkie wartości z tablicy, które są parzyste
// dla tablicy tab powinniśmy otrzymać 2 + 4 + 6 + 8 = 20
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function addEven(array) {
  let sum = 0;
  array.forEach(element => {
    if (element % 2 === 0) sum += element;
  });
  return sum;
}

console.log("2.", addEven(tab));
