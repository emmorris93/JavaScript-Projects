// Step 143
// concat() method: concatenates two or more strings
function druid_description() {
    var part_1 = "Druids harness the vast powers of nature to preserve balance and protect life.";
    var part_2 = " With experience, druids can unleash nature's raw energy against their enemeies, raining celestial fury on them from a great distance,";
    var part_3 = " binding them with enchanted vines or ensnaring them in unrelenting cyclones.";
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
    var str = "Druid's change forms to assume their different roles and they also shapeshift to travel faster on land, sea, and air.";
    var pos = str.search("roles");
    document.getElementById("locate").innerHTML = pos;
}
