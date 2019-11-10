/**
 * https://docs.google.com/document/d/1EVXSnzesZxeoNwvTG23jmKW2E5BePoT0VSofLvZ14oA/edit?usp=sharing
 p.s. внутри нельзя использовать готовые методы массива

 On a 2 dimensional grid with R rows and C columns, we start at (r0, c0) facing east.
 Here, the north-west corner of the grid is at the first row and column, and the south-east corner of the grid
 is at the last row and column.
 Now, we walk in a clockwise spiral shape to visit every position in this grid.
 Whenever we would move outside the boundary of the grid, we continue our walk outside the grid
 (but may return to the grid boundary later.)
 Eventually, we reach all R * C spaces of the grid.
 Return a list of coordinates representing the positions of the grid in the order they were visited.
 1 <= R <= 100
 1 <= C <= 100
 0 <= r0 < R
 0 <= c0 < C
 */

const 3 = (row = 1, column = 1, r0 = 0, c0 = 0) => {
  const BOUNDARY = {
    MIN: 0,
    MAX: 100
  }
  const DIRECTION = {
    EAST: 'east',
    SOUTH: 'south',
    WEST: 'west',
    NORTH: 'north'
  }
  const cells = row * column; const result = []

  let directionState = DIRECTION.EAST
  let rowPosition = r0; let columnPosition = c0

  let eastStep = columnPosition + 1
  let southStep = rowPosition + 1
  let westStep = columnPosition - 1
  let northStep = rowPosition - 1

  if (row <= BOUNDARY.MIN || row > BOUNDARY.MAX || column <= BOUNDARY.MIN || column > BOUNDARY.MAX) {
    return []
  }

  while (result.length < cells) {
    if (rowPosition >= 0 && columnPosition >= 0 && rowPosition < row && columnPosition < column) {
      result[result.length] = [rowPosition, columnPosition]
    }

    if (directionState === DIRECTION.EAST) {
      if (columnPosition === eastStep) {
        eastStep++
        directionState = DIRECTION.SOUTH
      } else {
        columnPosition++
      }
    }

    if (directionState === DIRECTION.SOUTH) {
      if (rowPosition === southStep) {
        southStep++
        directionState = DIRECTION.WEST
      } else {
        rowPosition++
      }
    }

    if (directionState === DIRECTION.WEST) {
      if (columnPosition === westStep) {
        westStep--
        directionState = DIRECTION.NORTH
      } else {
        columnPosition--
      }
    }

    if (directionState === DIRECTION.NORTH) {
      if (rowPosition === northStep) {
        northStep--
        directionState = DIRECTION.EAST
        columnPosition++
      } else {
        rowPosition--
      }
    }
  }

  return result
}
console.log('\n', 3(5, 6, 1, 4))
console.log('\n', 3(1, 4, 0, 0))
console.log('\n', 3(1, 101, 0, 0))
