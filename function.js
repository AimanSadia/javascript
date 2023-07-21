
//Functions are one of the fundamental building block in JavaScript
//Function is basically a set of statements that performs a task or calculate a value


//Declare function using function keyword
//Give function a name
//Add parenthesis
//Add curly braces
//Inside curly braces there is a body of the function
//Add all statements to define some kind of logic in our application


//The logic for this function is to print a message on console

//Performing a task
function greet() { //function declaration
    console.log("Hello World");//statement terminated with semicolon
}

greet(); //function calling

//Our functions can have input and these inputs can change how our function behaves

//we can add variable in between parenthesis
//we refer this variable as parameter
//person() function has one parameter
//Name is like variable which is only meaningful inside the function
//it will not be accessible outside of function
//The name is input to this function 
function person(name){
    console.log("Hello" +name);
}
person('John');
person('Mary'); //reuse function for different input
//pass value for name variable or parameter
//We refer to this as an argument 
//'John' is an argument to person function and name id a parameter of the person function

//parameter is what we have in the parenthesis at the time of declaration and
// argument is the actual value what we supplied to the parameter

//Functions can have multiple parameters

function person(name,lName){
    console.log("Hello " + name + " " + lName);
}
person('John','Smith');

//when calling this function,should pass another argument for the last name
//the default value of variable is undefined