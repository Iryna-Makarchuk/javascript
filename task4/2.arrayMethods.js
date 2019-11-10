/**
 * Создать новые методы для всех массивов:
 * 1) myForEach - тот же самый forEach
 * 2) myMap - тот же самый map
 * 3) mySort - тот же самый sort
 */

const compare = (a, b) => b - a

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

Array.prototype.mySort = function (compareFn) {
  const compareFunctionResult = (result) => {
    if (Math.sign(result) === -1 || result === 0) {
      return false
    }
    if (Math.sign(result) === 1) {
      return true
    }
  }

  function QuickSort (array) {
    if (!array.length) {
      return []
    }
    const low = []; const high = []; const basis = array[0]

    if (compareFn) {
      for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string') {
          return array
        }
      }
    }

    for (let i = 1; i < array.length; i++) {
      const comparator = compareFn ? compareFunctionResult(compareFn(array[i], basis))
        : compareFunctionResult(array[i].toString() > basis.toString())

      if (comparator) {
        high[high.length] = array[i]
      } else {
        low[low.length] = array[i]
      }
    }
    return [...QuickSort(low), basis, ...QuickSort(high)]
  }

  return QuickSort(this)
}

console.log('forEach');
[5, 3, 7].myForEach((value, index, array) => console.log(value, index, array));
[5, 3, 7].forEach((value, index, array) => console.log(value, index, array))

console.log('\nmap')
console.log([5, 3, 7].myMap((value, index, array) => value + ++array[index]))
console.log([5, 3, 7].map((value, index, array) => value + ++array[index]))
console.log('\nsort')
console.log([5, 3, 9, 2, 1].mySort(compare))
console.log([5, 3, 9, 2, 1].sort(compare))
console.log([1, 2, 10, 21].mySort(compare))
console.log([1, 2, 10, 21].mySort(compare))
console.log([1, 2, 10, 21].mySort())
console.log([1, 2, 10, 21].sort())
console.log(['elephant', 'Elephant', '1 Elephant', '2 Elephants'].mySort())
console.log(['elephant', 'Elephant', '1 Elephant', '2 Elephants'].sort())
console.log([].sort())
console.log([].mySort())
console.log(['elephant', 'Elephant', '1 Elephant', '2 Elephants'].mySort(compare))
console.log(['elephant', 'Elephant', '1 Elephant', '2 Elephants'].sort(compare))
console.log(['elephant', 'Elephant', 5555555, '1 Elephant', '2 Elephants'].mySort(compare))
console.log(['elephant', 'Elephant', 5555555, '1 Elephant', '2 Elephants'].sort(compare))
console.log(['crocodile', 'alligator'].mySort())
console.log(['crocodile', 'alligator'].mySort())
