// Step 207
// switch statement:  a conditional statement that performs different actions based on the the conditions presented to it
function Movie_Function() {
    var Color_Output;
    var Movies = document.getElementById("Movie_Input").value;
    var Movie_String = " is one of my favorites!";
    switch(Movies) {
        case "0":
        case "LadyHawke":
            Movie_Output = "LadyHawke" + Movie_String;
        break;
        case "1":
        case "Spaceballs":
            Movie_Output = "Spaceballs" + Movie_String;
        break;
        case "2":
        case "Real Genius":
            Movie_Output = "Real Genius" + Movie_String;
        break;
        case "3":
        case "Better Off Dead":
            Movie_Output = "Better Off Dead" + Movie_String;
        break;
        case "4":
        case "Terminator":
            Movie_Output = "Terminator" + Movie_String;
        break;
        case "5":
        case "Top Gun":
            Movie_Output = "Top Gun" + Movie_String;
        break;
        case "6":
        case "Highlander":
            Movie_Output = "Highlander" + Movie_String;
        break;
        case "7":
        case "Footloose":
            Movie_Output = "Footloose" + Movie_String;
        break;
        case "8":
        case "The Princess Bride":
            Movie_Output = "The Princess Bride" + Movie_String;
        break;
        case "9":
        case "Die Hard":
            Movie_Output = "Die Hard" + Movie_String;
        break;
        default:
            Movie_Output = "Pleae enter the number from the list.";
    }
    document.getElementById("Output").innerHTML = Movie_Output;
}

// Step 216
// getElements.ByClassName:  get all elements with the specified class name
function Hello_World_Function() {
    var a = document.getElementsByClassName("Click");
    a[0].innerHTML = "OMERGOSH this text changed!";
}

// Step 218, 219, & 220
// canvas element: used to draw graphics on a web page using JavaScript; is only a container for graphics; is a rectangular area on an HTML page
// Example 2: Adding JavaScript to Draw a Line
var c = document.getElementById("Example2");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();

// Example 3: Draw a Circle
var c3 = document.getElementById("Example3");
var ctx3 = c3.getContext("2d");
ctx3.beginPath();
ctx3.arc(95,50,50,0,2*Math.PI);
ctx3.stroke();

// Example 4: Draw Text
var c4 = document.getElementById("Example4");
var ctx4 = c4.getContext("2d");
ctx4.font = "25px Cursive";
ctx4.fillText("Drawing Text",10,50);

// Example 5: Stroke Text
var c5 = document.getElementById("Example5");
var ctx5 = c5.getContext("2d")
ctx5.font = "30px Cursive";
ctx5.strokeText("Stroke Text",10,50);

// Example 6: Draw Linear Gradient
var c6 = document.getElementById("Example6");
var ctx6 = c6.getContext("2d");
// Create Gradient
var grd = ctx6.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"purple");
grd.addColorStop(1,"gold");
// Fill with Gradient
ctx6.fillStyle = grd;
ctx6.fillRect(10,10,150,80);

// Example 7: Draw Circular Gradient
var c7 = document.getElementById("Example7");
var ctx7 = c7.getContext("2d");
// Create Gradient
var grd7 = ctx7.createRadialGradient(75,50,5,90,60,100);
grd7.addColorStop(0,"black");
grd7.addColorStop(1,"white");
// Fill with Gradient
ctx7.fillStyle = grd7;
ctx7.fillRect(10,10,150,80);

// Example 8: Draw Image
function drawImage_Function() {
    var c8 = document.getElementById("Example8");
    var ctx8 = c8.getContext("2d");
    var img = document.getElementById("StarWars");
    ctx8.drawImage(img,10,10);
}
