"use strict";
function add(value1, value2) {
    return value1 + value2;
}
console.log('Function ADD: ', add(3, 5));
function subtration(value1, value2) {
    return value1 - value2;
}
console.log('Function SUBTRATION: ', subtration(10, 8));
// anonimous function
const multiply = (value1, value2) => value1 * value2;
console.log('Function MULTIPLY:', multiply(3, 4));
// function with optional parameter
function divide(value1, value2, value3) {
    return value3 ? value1 / value2 / value3
        : value1 / value2;
}
console.log('Function DIVIDE:', divide(25, 5));
console.log('Function DIVIDE:', divide(25, 5, 5));
// function with varargs parameter
function addComplex(value1, value2, ...value3) {
    return value1 + value2 + value3.reduce((a, b) => a + b, 0);
}
const arrayNumbers = [8, 5, 1];
console.log('Function ADD COMPLEX:', addComplex(3, 2, 2));
console.log('Function ADD COMPLEX:', addComplex(3, 6, 1, 3, 3));
console.log('Function ADD COMPLEX:', addComplex(3, 6, ...arrayNumbers));
// generic functions
function concatValues(items) {
    return new Array().concat(items);
}
let vogalsLetters = ['a', 'e', 'i', 'o', 'u'];
console.log('Concating numbers: ', concatValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log('Concating vogals: ', concatValues(vogals));
