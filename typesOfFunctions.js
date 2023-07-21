
//calculating a value

//declare a function with function keyword
//named the function as square
//this function should have parameter named number
//now we need to calculate the square of number => number * number
//return this value who ever is calling this function, for that we use return keyword
//call the square function
//this returns a value, so we can use a value to initialize a variable
//When js engine executes, it gets the value and pass it to the console.log

function square(number){
    return number * number; //return this value who ever is calling this function
}

let number = square(2);
console.log(number);

// console.log(square(2));

//How many function calls in this code 
// two function calls => console.log || square(2)