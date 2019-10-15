/**
 * Задание состоит в том, чтобы рассчитать сдачу.
 * У вас есть цена какого-либо товара, продукта. Неважно.
 * Вы по сути просто на ввод даете Цену, И на ввод у вас есть Купюра, которую вы получили за этот продукт.
 * Вам нужно рассчитать все возможные варианты сдачи.
 * И у вас должен быть по сути определенный стек купюр, которыми вы располагаете.
 * Например, [1, 2, 5, 10, 20, 50, 100], статический.
 * И уже в зависимости от вашего стека вам нужно просчитать возможные варианты сдачи.
 */

const calculateChange = (price, sum) => {
  const cash = {
    ONE: 1,
    TWO: 2,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    FIFTY: 50,
    HUNDRED: 100,
    TWO_HUNDRED: 200,
    FIVE_HUNDRED: 500,
  }

  let change = sum - price;
  let left = 0;
  const tempChange = {};

  while (change > 0) {
    if (change >= cash.FIVE_HUNDRED) {
      left = change % cash.FIVE_HUNDRED;
      tempChange.FIVE_HUNDRED = Math.floor(change / cash.FIVE_HUNDRED);
    } else if (change >= cash.TWO_HUNDRED) {
      left = change % cash.TWO_HUNDRED;
      tempChange.TWO_HUNDRED = Math.floor(change / cash.TWO_HUNDRED);
    } else if (change >= cash.HUNDRED) {
      left = change % cash.HUNDRED;
      tempChange.HUNDRED = Math.floor(change / cash.HUNDRED);
    } else if (change >= cash.FIFTY) {
      left = change % cash.FIFTY;
      tempChange.FIFTY = Math.floor(change / cash.FIFTY);
    } else if (change >= cash.TWENTY) {
      left = change % cash.TWENTY;
      tempChange.TWENTY = Math.floor(change / cash.TWENTY);
    } else if (change >= cash.TEN) {
      left = change % cash.TEN;
      tempChange.TEN = Math.floor(change / cash.TEN);
    } else if (change >= cash.FIVE) {
      left = change % cash.FIVE;
      tempChange.FIVE = Math.floor(change / cash.FIVE);
    } else if (change >= cash.TWO) {
      left = change % cash.TWO;
      tempChange.TWO = Math.floor(change / cash.TWO);
    } else if (change >= cash.ONE) {
      left = change % cash.ONE;
      tempChange.ONE = Math.floor(change / cash.ONE);
    }
    change = left;
  }

  return tempChange;
};

console.log(calculateChange(255, 500), '=> 245');
console.log(calculateChange(12, 50), '=> 38');
console.log(calculateChange(44, 100), '=> 56');
console.log(calculateChange(5, 20), '=> 15');