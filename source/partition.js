/**
 * Функция, разделяющая массив на две части в зависимости от предиката
 * @param {Array} array - исходный массив
 * @param {Function} predicate - функция-предикат, принимающая элемент массива
 * и возвращающая true или false
 *
 * @example
 * // returns [[1, 3], [2, 4]]
 * partition([1, 2, 3, 4], (n) => n % 2 !== 0);
 *
 * @returns {Array<Array>} массив из двух массивов: [подходящие, неподходящие]
 */
const partition = (array, predicate) => {
    const truthy = [];
    const falsy = [];

    for (const item of array) {
        if (predicate(item)) {
            truthy.push(item);
        } else {
            falsy.push(item);
        }
    }

    return [truthy, falsy];
}
