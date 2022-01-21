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