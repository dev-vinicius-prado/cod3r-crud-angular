"use strict";
let nameDev;
nameDev = 'Vinicius';
let nameDevUpperCased = nameDev.toUpperCase();
console.log(nameDevUpperCased);
// numbers
let age;
age = 39;
let ageWithMounths = '39.8';
let ageWithoutMounths = parseInt(ageWithMounths);
console.log('Age in years', age);
console.log('Age with mounths', ageWithMounths);
console.log('Age without mounths', ageWithoutMounths);
// boolean
let isValid = false;
if (age > 30) {
    isValid = true;
}
console.log(isValid);
