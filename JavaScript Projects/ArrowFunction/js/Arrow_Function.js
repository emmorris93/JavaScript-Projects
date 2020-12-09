// Step 252
// arrow function: allows you to write shorter function syntax

// function before
var hello1;
hello1 = function() {
    return "Hello World!";
}
document.getElementById("example1").innerHTML = hello1();

// with arrow function
var hello2;
hello2 = () => {
    return "Hello World!";
}
document.getElementById("example2").innerHTML = hello2();

// arrow functions return value by default
// if the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword
var hello3;
hello3 = () => "Hello World!";
document.getElementById("example3").innerHTML = hello3();

// arrow function with parameters: if you have parameters, you pass them inside the parentheses
var hello4;
hello4 = (val) => "Hello " + val;
document.getElementById("example4").innerHTML = hello4("Friend!")

// arrow function w/out parentheses: if you have only one parameter, you can skip the parentheses
var hello5
hello5 = val2 => "Hello " + val2;
document.getElementById("example5").innerHTML = hello5("Nurse!")

// Step 254
// array.some() method: checks if some array values pass a test
var numbers = [45, 4, 9, 16, 25]
var someOver18 = numbers.some(numbersFunction);
document.getElementById("some_method").innerHTML = "Some over 18 is " +someOver18;
function numbersFunction(value, index, array) {
    return value > 18;
}