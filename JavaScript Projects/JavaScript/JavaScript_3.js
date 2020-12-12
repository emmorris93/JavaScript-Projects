// Step 243
// data attribute
function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert("I play the character " + characterType + " in the MMORPG, " + character.innerHTML + ".")
}

// CHALLENGE (Step 360)
$(function() {
    $('body').removeClass('fade-out');
});