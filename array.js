
//A list of objects for example the list of products in a shopping cart or the list of colors the user has selected that you use an array to store that list


// declare meaningful variable name selectedColors
//initialized this to an empty array [] 
//initialized array and add couple of items  
//each element in the array has the index that determines the position of that element in the array
//index of first element is 0 and index of second element is 1
//so if you want to access elements in array use the index
//the length of arrays as well as the type of objects we have in the array are dynamic they can change
//in javascript, we can add different items in array
//technically an array is an object so just like the personal object it has a bunch of key value pairs or properties that we can access using the dot notation
//so array is an object in javascript
//we can look at the properties of this array or this object using the dot notation
//Every time we declare an array using square bracket, that array will automatically receive these properties

//An array is a data structure that we use to represent a list of elements


let selectedColors = []; //square brackets are called array literal and they indicate empty array
selectedColors = ['red','blue'];
selectedColors[2] = 'green';
selectedColors[3] = 1;
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors[1]);
console.log(selectedColors[2]);
console.log(selectedColors[3]);
console.log(typeof(selectedColors));
console.log(selectedColors.length);