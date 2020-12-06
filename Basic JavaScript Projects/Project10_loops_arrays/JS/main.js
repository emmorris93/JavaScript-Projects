// Step 179
// while loop
function Call_Loop() {
    var Loop = "";
    var x = 1;
    while (x < 11) {
        Loop += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = Loop;
}

// Step 180
// string length property: returns the number of characters in a string
function str_length_Function() {
    var str = "Hello. My name is Inigo Montoya. You killed my father. Prepare to die!";
    var num = str.length;
    document.getElementById("str_length").innerHTML = num;
}

// Step 183
// for loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var y;
function for_Loop() {
    for (y = 0; y < Instruments.length; y++) {
        Content += Instruments[y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Step 187
// array method
function array_Function() {
    var pb_char_Array = [];
    pb_char_Array[0] = "Buttercup";
    pb_char_Array[1] = "Westley";
    pb_char_Array[2] = "Inigo";
    pb_char_Array[3] = "Fezzik";
    document.getElementById("pb_char_Array").innerHTML = pb_char_Array[1] + " is a character from the movie The Princess Bride."
}

// Step 195
// const keyword: creates a constant whose scope can be either global or local to the block in which is is declared
function constant_function() {
    const my_characters = {race: "Worgen", class:"Druid", spec:"Restoration"};
    my_characters.class = "Priest";
    my_characters.level = "60";
    document.getElementById("constant").innerHTML = "My character is a level " + my_characters.level + " " + my_characters.class + ".";
}

// Step 197
// let keyword: declares variables that can have block scope
// Working within the Project10_loops_arrays folder:
// 1. Open the main.js file and utilize the let keyword.
// 2. Successfully execute index.html in the browser. -->
document.write("Step 197" + "<br>")
var x = 1995;
document.write(x);
{
    let x = 2020;
    document.write("<br>" + x);
}
document.write("<br>" + x);

// Step 200
// return statement:  stops the execution of a function and returns a value from that function
function name_Function(name) {
    return "Hello " + name;
}
var el = document.getElementById("example");
el.innerHTML = name_Function("Maudi");

// Step 203
let car = {
    make: "Ford",
    model: "EcoSport",
    year: "2019",
    color: "silver",
    description : function() {
        return "My new car is a " + this.year + " " + this.color + " " + this.make +  " " + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

// Step 204
// break statement:  "jumps out" of a loop; breaks the loop and continues executing the code after the loop (if any)
var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 5) {break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("example2").innerHTML = text;

// continue statement: "jumps over" one iteration in the loop; breaks one iteration in the loop, if a specified condition occurs, and continues with the next iteration in the loop
var text2 = "";
var j;
for (j = 0; j < 10; j++) {
    if (j === 3) {continue; }
    text2 += "The number is " + j + "<br>";
}
document.getElementById("example3").innerHTML = text2