/**
 * Дан масив чисел (положительных, отрицательных и в перемешку)
 * Найти max, min, sum
 * Залить на github решение
 * Нельзя использовать методы массива, а только циклы for, while*
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

const getMinOfArray = (array) => {
  if (Array.isArray(array)) {
    let minimum
    for (let i = 0; i < array.length; i++) {
      const data = +array[i]

      if (isNumeric(data) && (!minimum || data < minimum)) {
        minimum = data
      }
    }
    return minimum
  }

  return null
}

const getMaxOfArray = (array) => {
  if (Array.isArray(array)) {
    let maximum
    for (let i = 0; i < array.length; i++) {
      const data = +array[i]

      if (isNumeric(data) && (!maximum || data > maximum)) {
        maximum = data
      }
    }
    return maximum
  }

  return null
}

const getSumOfArrayNumbers = (array) => {
  if (Array.isArray(array)) {
    let sum = null
    for (let i = 0; i < array.length; i++) {
      const data = +array[i]

      if (isNumeric(data)) {
        sum += data
      }
    }

    return sum
  }
}

console.log('MIN')
console.log(getMinOfArray([3, 0, -5, 1, 44, -12, 3, 0, 0, '-35', 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1]))
console.log(getMinOfArray([-1, -8, -2]))
console.log(getMinOfArray([1, 7, 3]))
console.log(getMinOfArray([1, undefined, 3, 5, -3]))
console.log(getMinOfArray([1, NaN, 3, 5, -3]))

console.log('\nMAX')
console.log(getMaxOfArray([3, 0, -5, 1, 44, -12, 3, 0, 0, '-35', '45', 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1]))
console.log(getMaxOfArray([-1, -8, -2]))
console.log(getMaxOfArray([1, 7, 3]))
console.log(getMaxOfArray([1, undefined, 3, 5, -3]))
console.log(getMaxOfArray([1, NaN, 3, 5, -3]))

console.log('\nSUM')
console.log(getSumOfArrayNumbers([3, 0, -5, 1, 44, -12, 3, 0, 0, 1, '-35', '45', 2, -3, -3, 2, 1, 4, -2 - 3 - 1]))
console.log(getSumOfArrayNumbers([3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1]))
console.log(getSumOfArrayNumbers([-1, -8, -2]))
console.log(getSumOfArrayNumbers([1, 7, 3]))
console.log(getSumOfArrayNumbers([1, undefined, 3, 5, -3]))
console.log(getSumOfArrayNumbers([1, NaN, 3, 5, -3]))