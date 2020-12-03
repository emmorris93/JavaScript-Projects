// Step 131
// 3. Create a JS folder within your Project7_scope_time_function. Create a new file within the JS folder and name it main.js. In it, do the following:
        // Write a global variable.
        // Write a local variable.
        // Intentionally write a function with an error in it and use console.log() method to debug it within the console in Chrome Dev Tools.
        // Save the file.
// 4. Successfully execute the index.html file in the browser. 

// global variable:  variables declared outside of functions
document.write("Step 131")
document.write("<br>")
document.write("<br>");
document.write("Global Variable");
document.write("<br>");
var x = 10;
function Add_numbers_1() {
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();

document.write("<br>");

// // local variable:  variables declared inside of functions
document.write("Local Variable");
document.write("<br>");
function Add_numbers_3() {
    var y = 10;
    document.write(20 + y + "<br>");
}
function Add_numbers_4() {
    var y = 10;
    document.write(y + 100);
}
Add_numbers_3();
Add_numbers_4();

document.write("<br>");
document.write("<br>");
document.write("<br>");

// // use console.log() method to debug code --- will get the error, "x" is not defined 
// function Add_numbers_1() {
//     var x = 10;
//     console.log(15 + x);
// }
// function Add_numbers_2() {
//     console.log(x + 100);
// }
// Add_numbers_1();
// Add_numbers_2();

// Step 134 
// IF Statement
function get_Date() {
    if (new Date().getHours() > 12) {
        document.getElementById("Greeting").innerHTML = "Good Afternoon!";
    } else {
        document.getElementById("Greeting").innerHTML = "Good Morning";
    }
}

// Step 135
// IF Statement
    // 1. Open the main.js file and write your own if statement. Save the file.
    // 2. Successfully execute the index.html file in the browser.
function hourFunction() {
    var hour = new Date().getHours();
    var greeting;
    if (hour < 18) {
        greeting = "Good Day!";
    } else {
        greeting = "Good Evening!";
    }
    document.getElementById("example").innerHTML = greeting;
}

// Step 137
// ELSE statement
function lvl_Function() {
    lvl = document.getElementById("lvl").value;
    if (lvl >= 45) {
        dungeon = "Your character may enter The Haunted Castle scenario!";
    }
    else {
        dungeon = "Your character must be at least level 45 to enter The Haunted Castle scenario!";
    }
    document.getElementById("what_lvl_are_you?").innerHTML = dungeon;
}

// Step 139
// ELSE IF statement
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time.";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
