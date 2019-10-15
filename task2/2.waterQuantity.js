/**
 * Дан масив чисел, которые представляют собой показатели высоты скал: [2,1,5,0,3,4,7,2,3,1,0]
 * (для примера дан этот масив, но может быть любой, Ваш алгоритм должен решать все случаи)
 * Посчитать количество воды (количество синих йчеек), набранной в ямы после дождя.
 * Нужно по возможности использовать методы массива, а не обычные циклы.
 * Например, в даном примере правильный ответ: 10
 * https://docs.google.com/spreadsheets/d/1ew5KhvXAhaB-CxWpYDd_OBYz4yKnaW9k25aCGP0gDG4/edit#gid=0
 */

const getWaterQuantity = (array) => {
  let length = array.length; let waterCubes = 0; let leftPeak = 0; let rightPeak = 0; let left = 0; let right = length - 1

  while (length--) {
    array[left] > leftPeak ? leftPeak = array[left] : leftPeak
    array[right] > rightPeak ? rightPeak = array[right] : rightPeak

    if (rightPeak > leftPeak) {
      waterCubes += leftPeak - array[left]
      left++
    } else {
      waterCubes += rightPeak - array[right]
      right--
    }
  }

  return waterCubes
}

console.log(getWaterQuantity([2, 5, 1, 3, 1, 2, 1, 7, 7, 6], ' => 17'))
console.log(getWaterQuantity([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0], ' => 10'))
console.log(getWaterQuantity([7, 0, 1, 3, 4, 1, 2, 1], ' => 9'))
console.log(getWaterQuantity([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0], ' => 10'))
console.log(getWaterQuantity([2, 2, 1, 2, 2, 3, 0, 1, 2], ' => 4'))
console.log(getWaterQuantity([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8], ' => 24'))
console.log(getWaterQuantity([2, 2, 2, 2, 2], ' => 0'))