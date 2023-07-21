//in programming we use variables to store data temporarily in computers memory
//so we store our data somewhere and give that memory location and name and 
//with this name we can read the data at the given location in the future here
//Think of the boxes you use to organize your stuff you put your stuff in different boxes and put a label on each box with this you can easily find your stuff
//a variable is like what we put inside the box is the value that we assign to the variable
//and the label that we put on  the box is the name of our variable

let name = 'Mosh';
console.log(name);
//bydefault the variables we define in javascript their value is undefined
//we can optionally initialized this variable to a string

//Rules for naming variables

// 1. cannot be reserved keywords
// 2. should be meaningful
// 3. cannot start with a number (1name)
// 4. cannot contain a space or hyphen(-)
// 5. are case-sensitive

//declare multiple variables in one line
//declare them in one line and separate them by using a comma
//they are both undefined
//optionally initialized one or both variables

let firstName1 = "Mosh" , lastName1 = "Smith";

//The modern best practice is to declare each variable in a single line
let firstName = "Mosh";
let lastName = "Smith"; //follow camel notation