//Write a JavaScript function called `sumArray` that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.

const arr=[1,2,3,4,5];
var sum=0;
function sumArray(arr){
    for(let i=0;i<=arr.length;i++){
        sum = sum+i;
    }
    return sum;
}
console.log(sumArray(arr));

//Create an object called `person` with the following properties: `name`, `age`, and `email`. Write a JavaScript function called `printPersonDetails` that takes a person object as a parameter and prints their name, age, and email.
const person={
    name:"rashi",
    age:22,
    email:"rashi@gmail.com"
};
function printPersonDetails(person){
    console.log(person.name);
    console.log(person.age);
    console.log(person.email);
}
printPersonDetails(person);

//Create a variable called `greeting` and assign it a function that takes a name as a parameter and returns a greeting message. The greeting message should include the name parameter.
var greeting = function(name){
    return "hello " +name + "!";
}
greeting("rashi");
