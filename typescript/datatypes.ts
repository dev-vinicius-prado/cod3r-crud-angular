let nameDev: string;

nameDev = 'Vinicius';

let nameDevUpperCased = nameDev.toUpperCase();

console.log(nameDevUpperCased);


// numbers

let age: number
age = 39
let ageWithMounths = '39.8'


let ageWithoutMounths = parseInt(ageWithMounths)

console.log('Age in years', age);
console.log('Age with mounths', ageWithMounths);
console.log('Age without mounths', ageWithoutMounths);

// boolean

let isValid: boolean = false;

if (age > 30) {
    isValid = true
}
console.log(isValid);

// array

let emptyArray = []
// declaring a empty array

let noTypedArray = [1, 'a', false, 12.4]
// declaring a no typed array. It allow adding any type item

let fruitList: string[]
// declaring a empty list of fruits. Only string type will be allowed in this array.
fruitList = ['Banana', 'Apple', 'Strawberry', 'Orange', 'Lemon']
let vogals = ['a', 'e', 'i', 'o', 'u']

let fruitStartedWithVogals = fruitList.filter((fruit) => vogals.includes(fruit.charAt(0).toLowerCase()))
let fruitStartedWithoutVogals = fruitList.filter((fruit) => !vogals.includes(fruit.charAt(0).toLowerCase()))
let fruitStartWithLetterO = fruitList.find((fruit) => fruit.startsWith('O'))

let numbers = [1,2,4,3,5,6,7,8,9]

let total = numbers.reduce((value, num) => value + num)

console.log(noTypedArray);
console.log(fruitList);
console.log('Filter fruits that name start with a vogal:', fruitStartedWithVogals);
console.log('Filter fruits that name start with a consonant:',fruitStartedWithoutVogals);
console.log('Find the fruit that name start with the letter "O":',fruitStartWithLetterO);
console.log('The sum of all numbers is:', total);



