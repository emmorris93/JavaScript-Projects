// Step 143
// concat() method: concatenates two or more strings
function druid_description() {
    var part_1 = "Druids harness the vast powers of nature to preserve balance and protect life." + "<br>";
    var part_2 = " With experience, druids can unleash nature's raw energy against their enemeies, raining celestial fury on them from a great distance," + "<br>";
    var part_3 = " binding them with enchanted vines or ensnaring them in unrelenting cyclones." + "<br>";
    var part_4 = " Druids are versatile combatants, in that they can fullfill nearly every role - healing, tanking and damage dealing.";
    var paragraph = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Description").innerHTML = paragraph;
}

// Step 145
// slice() method: displays a section of a string 
function slice_Method() {
    var sentence = "Druid's change forms to assume their different roles and they also shapeshift to travel faster on land, sea, and air.";
    var section = sentence.slice(47,52); //the numbers are the location of the characters to cut and display
    document.getElementById("slice").innerHTML = section;
}

// Step 146
// convert string toUpperCase() method
function to_upper_case() {
    var text = document.getElementById("example").innerHTML;
    document.getElementById("example").innerHTML = text.toUpperCase();
}

// search() method:  searches a string for a specified value and returns the position of the match
function find_str() {
    var str = "Druid talents focus on improving the powers of their natural and animal forms, enhancing their ability to summon forth natural phenomena, or increase the potency of their life-giving healing magic.";
    var pos = str.search("forms");
    document.getElementById("locate").innerHTML = pos;
}

// Step 148
// to.String() method:  returns a number as a string
function string_Method() {
    var x = 2007;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

// Step 150
// toPrecision() method:  formats a number to a specified length
function precision_Method() {
    var x = 1995.2020;
    document.getElementById("Precision").innerHTML = x.toPrecision(5);
}

// Step 151
// toFixed() method: convert a number into a string, rounding the number to keep to a specified length
function fixed_Method() {
    var num = 123.456789;
    var n = num.toFixed(2);
    document.getElementById("fixed").innerHTML = n;
}

// valueOf() method:  return the primitive value of a number
function valueof_Method() {
    var num2 = 1998;
    var n2 = num2.valueOf()
    document.getElementById("primitive").innerHTML = n2;
}
