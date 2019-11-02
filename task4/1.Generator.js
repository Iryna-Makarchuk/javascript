/**
 * 1.Closure - Create a constructor function which will use closure for working with private data.
 * It should have 2 private methods and 2 private props which we can change only with that private methods.
 */

function Generator () {
  let _increment = 0
  let _decrement = 0

  const increase = () => {
    return ++_increment
  }

  const reduce = () => {
    return --_decrement
  }

  return () => {
    return {
      increased: increase(),
      reduced: reduce()
    }
  }
}

const generator = new Generator()
const newGenerator = new Generator()

console.log(generator())
console.log(generator())
console.log(generator())
console.log(newGenerator())
console.log(newGenerator())
console.log(newGenerator())
