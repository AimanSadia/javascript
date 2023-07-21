//Object is like an object in real life
//A person has name, age, address and so on, these are the properties of a person
//we have the same concept in javascript
//so when dealing with multiple related variables,
//we can put these variables inside of an object
//variables are part of representation of a variable
//instead of declaring two variables, we can declare a person object
//instead of referencing these two different variables, we can reference the person object

//declare a person object
//start with let with object name and set it to object literal
//curly brackets is called object literals
//btw curly braces we add key value pairs
//keys are called the properties of the object
//person has two properties name and age
//key : value => key value pair

// let name = "Mosh";
// let age = 30;

let person = { //object literal
    name : "Mosh",
    age : 30
}

person.name = "John";
console.log(person);

//Two ways to work with these properties

//Dot Notation
console.log(person.name);

//Bracket Notation
person['name'] = 'Mary'; // ['the name of the property']
console.log(person.name);

//Dot notation is concise, better that should be your default choice

//using this way we can access the bracket notation in dynam  ic way
let selection = 'name';
person['name'] = 'Mary';  
console.log(person.name);
