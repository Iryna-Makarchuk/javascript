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
    return ((data ^ 0) === data) && !isNaN(parseInt(data)) && isFinite(data);
};

const getArrayOfNumbers = (array) => {
    const arrayCopy = [];
    for (let i = 0; i < array.length; i++) {
        if (isNumeric(array[i])) {
            arrayCopy.push(array[i]);
        }
    }

    return arrayCopy;
};

const getMinOfArray = (array) => {
    return Array.isArray(array) ? Math.min(...getArrayOfNumbers(array)) : null;
};

const getMaxOfArray = (array) => {
    return Array.isArray(array) ? Math.max(...getArrayOfNumbers(array)) : null;
};

const getSumOfArrayNumbers = (array) => {
    const calculateSum = (copy) => {
        let sum = 0;
        for (let i = 0; i < copy.length; i++) {
            sum += copy[i];
        }
        return sum;
    };

    return Array.isArray(array) ? calculateSum(getArrayOfNumbers(array)) : null;
};

console.log("MIN");
console.log(getMinOfArray([3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1]));
console.log(getMinOfArray([-1, -8, -2]));
console.log(getMinOfArray([1, 7, 3]));
console.log(getMinOfArray([1, undefined, 3, 5, -3]));
console.log(getMinOfArray([1, NaN, 3, 5, -3]));

console.log("\nMAX");
console.log(getMaxOfArray([3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1]));
console.log(getMaxOfArray([-1, -8, -2]));
console.log(getMaxOfArray([1, 7, 3]));
console.log(getMaxOfArray([1, undefined, 3, 5, -3]));
console.log(getMaxOfArray([1, NaN, 3, 5, -3]));

console.log("\nSUM");
console.log(getSumOfArrayNumbers([3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1]));
console.log(getSumOfArrayNumbers([-1, -8, -2]));
console.log(getSumOfArrayNumbers([1, 7, 3]));
console.log(getSumOfArrayNumbers([1, undefined, 3, 5, -3]));
console.log(getSumOfArrayNumbers([1, NaN, 3, 5, -3]));