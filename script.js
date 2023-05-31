// #1-1
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]);

// #1-2
let personArray = [
    person1 = {
        name: 'John',
        age: 22,
        address: 'rustavi'
    },
    person2 = {
        name: 'luka',
        age: 25,
        address: 'rustavi'
    },
    person3 = {
        name: 'giorgi',
        age: 20,
        address: 'tbilisi'
    }
];

// #1-3
console.log(`my name is ${personArray[0].name}, my age is ${personArray[0].age}, my address is ${personArray[0].address}`);

// #1-4
if (personArray[1].age < 19) {
    console.log('I am a teenager');
}else {
    console.log ('I am an adult');
}

// #1-5
let numbersArray = [1, 23, 46, 67, 89];
for (let i = 0; i < numbersArray.length; i++) {
    console.log (numbersArray[i]);
}

// #1-6
const currentDay = new Date().getDay();
switch (currentDay) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default: ('Today is not a day');
}
console.log(currentDay);
// -------------------------------------------

// #2-1
for (let i = 0; i <=100; i ++) {
    console.log (i);
}

// #2-2
let num = 0;
while (num <= 50) {
    console.log (num);
    num++;
}

// #2-3
let fruits = ['banana', 'apple', 'orange', 'carrot'];
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift('pear');
console.log(fruits);
fruits.push('pear');
console.log(fruits);

// #2-4
let mainArray = [];
for (let i = 1; i < 10000; i++) {
    mainArray.push(i * i);
}
console.log(mainArray);

// #2-5
let sumArray = [20, 24, 24, 56, 66];
let sum = 0;
for (let i = 0; i < sumArray.length; i++) {
    sum += sumArray[i];
}
console.log(sum);

// #2-6
const getEvenOrOdd = (item) => {
    if (item % 2 === 0) {
        return  true;
    }else {
        return false;
    }
}
console.log(getEvenOrOdd(4));

// #2-7
const getNewName = (name2) => {
    let newName = name2.toUpperCase();
    if (newName.length < 20) {
        return newName;
    }else {
        return ('kk')
    }
}
getNewName('my name is luka');
console.log(getNewName('my name is luka'));

// #2-8
let filterArray = [123, 24, 535, 646, 643];
let filteredNumbers = filterArray.filter((item) => item % 2 === 0);
console.log(filteredNumbers);
// ------------------------------------------------------------------------

// #3-1
function getTrueOrFalse(i) {
    if (i % 3 === 0) {
        return true;
    }else {
        return false;
    }
}

console.log(getTrueOrFalse(9));

// #3-2
function getCurrencySymbolFromCode (i) {
    if (i === 'USD') {
        return '$';
    }else if (i === 'EUR') {
        return '€';
    }
    else if (i === 'GEO') {
        return 'ლ';
    }else {
        return 'code';
    }
}
let dollar = 'USD'
let euro = 'EUR'
let geo = 'GEO'
console.log(getCurrencySymbolFromCode(dollar));
console.log(getCurrencySymbolFromCode(euro));
console.log(getCurrencySymbolFromCode(geo));

// #3-3
const getLowerOrUpperCase = (i) => {
    if (i.length < 20) {
        let upperCaseWord = i.toUpperCase();
        return upperCaseWord;
    }else {
        let lowerCaseWord = i.toLowerCase();
        return lowerCaseWord;
    }
}

console.log(getLowerOrUpperCase('my name is joe'));

// #3-4
function profit() {
    return `this is profit ${sale - collectedPrice}$`;
}

let sale = 100
let collectedPrice = 70
console.log(profit());

// #3-5 
let justArray = [123, 33, 55, 631, 44, 77, 88, 124];

let filteredArray = justArray.filter((value) => value % 2 === 0);
console.log(filteredArray);

// #3-6
function personInfo(firstName) {
    return {[firstName]: 'joe'};
    const objName = firstName.find(firstName => firstName === 'joe'); //meore piroba rayac vergamomivida
    return objName;
}

let firstName =  'name';
console.log(personInfo(firstName));
console.log(personInfo(objName));





