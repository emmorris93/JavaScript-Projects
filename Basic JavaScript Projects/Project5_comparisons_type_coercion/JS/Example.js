function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

// isNaN() function display "true"
function nan_true() {
    document.getElementById("TestA").innerHTML = isNaN('This is a string');
}

// isNaN() function display "false"
function nan_false() {
    document.getElementById("TestB").innerHTML = isNaN('007');
}
