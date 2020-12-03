// Step 118
function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// Step 119
function Age_Function() {
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough"
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

// Step 122
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year + ".";
}

// Step 123


// Step 125
function Character(name, level, race, classtype, role) {
    this.Character_name = name;
    this.Character_level = level;
    this.Character_race = race;
    this.Character_classtype = classtype;
    this.Character_role = role;
}
var Oslana = new Character("Oslana", 60, "Worgen", "Druid", "Resto");
var Autha = new Character("Autha", 58, "Night Elf", "Demon Hunter", "Vengeance");
var Eksavana = new Character("Eksavana", 50, "Human", "Priest", "Shadow");
function Character_Function() {
    document.getElementById("character").innerHTML = "My character is " + Oslana.Character_name + ", " + "a level " + Oslana.Character_level + " " + Oslana.Character_role + " " + Oslana.Character_classtype + ".";
}

// Step 128
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
