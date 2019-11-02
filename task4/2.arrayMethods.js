/**
 * Создать новые методы для всех массивов:
 * 1) myForEach - тот же самый forEach
 * 2) myMap - тот же самый map
 * 3) mySort - тот же самый sort
 */

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

Array.prototype.myMap = function (callback) {
  const array = []
  for (let i = 0; i < this.length; i++) {
    array[i] = callback(this[i], i, this)
  }

  return array
}

console.log('forEach');
[5, 3, 7].myForEach((value, index, array) => console.log(value, index, array));
[5, 3, 7].forEach((value, index, array) => console.log(value, index, array))

console.log('\nmap')
console.log([5, 3, 7].myMap((value, index, array) => {
  return value + ++array[index]
}))
console.log([5, 3, 7].map((value, index, array) => {
  return value + ++array[index]
}))
