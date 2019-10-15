/**
 * Дан масив чисел (положительных, отрицательных и в перемешку)
 * Найти в массиве: sum, min and max, заменить min and max, используя методы, изученные на занятии.
 * Создать функцию которая возвращает все эти значения в объекте.
 * Примеры массивов:
 * [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1]
 * [-1,-8,-2]
 * [1,7,3]
 * [1,undefined,3,5,-3]
 * [1,NaN,3,5,-3]
 */

const isNumeric = (data) => {
  return ((data ^ 0) === data) && !Number.isNaN(parseInt(data)) && Number.isFinite(data)
}

const getNumericArray = (array) => {
  if (Array.isArray(array)) {
    const arrayCopy = []
    array.forEach((element) => {
      if (isNumeric(+element)) {
        arrayCopy.push(+element)
      }
    })
    return arrayCopy
  }
}

const getMinOfArray = (array) => {
  const numericArray = getNumericArray(array)
  return numericArray && numericArray.length ? numericArray.sort((prev, next) => prev - next)[0] : null
}

const getMaxOfArray = (array) => {
  const numericArray = getNumericArray(array)
  return numericArray && numericArray.length ? numericArray.sort((prev, next) => next - prev)[0] : null
}

const getSumOfArrayNumbers = (array) => {
  const numericArray = getNumericArray(array)
  return numericArray ? numericArray.reduce((acc, num) => acc + num, null) : null
}

const getNumericValues = (array) => {
  return {
    min: getMinOfArray(array),
    max: getMaxOfArray(array),
    sum: getSumOfArrayNumbers(array)
  }
}

console.log(getNumericValues([3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, '-35', -3, -3, 2, 1, 4, -2 - 3 - 1]))
console.log(getNumericValues([-1, -8, -2]))
console.log(getNumericValues([1, 7, '-45', 3]))
console.log(getNumericValues([1, undefined, 3, 5, -3]))
console.log(getNumericValues([1, NaN, 3, 5, -3]))
console.log(getNumericValues([]))