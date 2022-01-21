console.log('Hello World');
// var, let, const
let score;

score=10;

console.log(score);

// String, Numbers, Boolean, null, undefined, Symbol
const rating = 4.5;
const isCool = true;
const x = null; 
const y = undefined; 
let z; 

console.log(typeof z)

const name = 'John'; 
const age = 35;

// Concatenation
console.log('My name is '+name+' and I am ' + age);

// Template String
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

const s = 'technology, computers, it, code';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 5));

// Arrays 
/* multi
line
comment */

//Arrays - variables that hold multiple values

const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits= ['apples','oranges', 'pears'];

fruits[3] = 'grapes';
fruits.push('mangos');
fruits.unshift('strawberries');
fruits.pop();

console.log(Array.isArray(fruits))
console.log(Array.isArray(hello))
console.log(fruits.indexOf('oranges'))

console.log(fruits);

const person = {
    firstName: 'John',
    lastName: "Doe",
    age: 30,
    hobbies: ['music','movies','sports'],
    address: {
        street:'50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
const{firstName, lastName, address: {city}}= person
console.log(firstName, city)
console.log(person.firstName, person.lastName, person.hobbies[1],person.address.city)

person.email ='john@gmail.com';

console.log(person);

const todos = [
    {
        id: 1,
        text:'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text:'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text:'Dentist appt',
        isCompleted: false
    }
]

console.log(todos[1].text)

const todoJSON = JSON.stringify(todos)
console.log(todoJSON)

// For 
for(let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`)
}

// While
let i = 0;
while(i < 10){
    console.log(`While Loop Number: ${i}`);
    i++;
}

for(let i = 0; i <= todos.length; i++) {
    console.log(todos.text)
}

for(let todo of todos) {
    console.log(todo)
}

// forEach, map, filter 
todos.forEach(function(todo) {
    console.log(todo.text);
});

todos.map(function(todo) {
    return todo.text
});

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted);

const j = 5
const l = 10;

if(j > 5 || l > 10) {
    console.log('j is more than 5 or l is more than 10')
} else if(j > 10) {
    console.log('j is greater than 10');
} else {
    console.log('j is less than 10')
}

// Turnary Op
const pl = 11

const color = pl > 10 ? 'red' : 'blue';

console.log(color);

switch(color) {
    case 'red':
        console.log('color is red')
        break;
    case 'blue':
        console.log('color is blue')
        break
    default:
        console.log('color is not red or blue')
    }

// Functions
/* function can also be const (var)
*/

function addNums (num1 = 1, num2 = 1) {
    return num1 + num2
}

//Class
class Person {
    constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName = function() {
        return`${this.firstName} ${this.lastName}`;
    }

}
// Instantiate object
const person1 = new Person ('John', 'Doe','4/3/1980');
const person2 = new Person ('Mary', 'Smith','3/6/1970');

console.log(person2.getFullName());
console.log(person1)

// Single Element
const form = document.getElementById('my-form;');
console.log(form)