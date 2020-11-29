window.alert("Hello, World! ");                                    //creates an alert window

document.write("Hello, World! ");                                 //displays text

var A = "This is a string. ";                                   //assigning a variable with a string value
document.write(A);

document.write("Lisa told bart, \"Knock it off, Bart! or I'll tell dad!\"<br>\"Eat my shorts!\" Bart responded. ");  //insert the \ before single and double quotes to get them to print

document.write("\"Be who you are and say what you feel,"       //use + to combine strings (concatenate)
+ " because those who mind don\'t matter and those who matter don\'t mind.\"" 
+ " -Dr. Seuss ");

var B = "Concatenated" + " String ";                            //assigning a concatenated string value to a variable
document.write(B);

var family = "The Morris\'", dad = "Eric ", mom = "Maudi ", daughter = "Hannah ", son1 = "Jackson ", son2 = "Aubrey ", gramson = "Bradley ", dog1 = "Geddy ", dog2 = "Stella ", cat1 = "Mr. Bob E Sox ", cat2 = "Runa ";
var dad = dad.fontcolor("green"), mom = mom.fontcolor("gray"), daughter = daughter.fontcolor("red"), son1 = son1.fontcolor("black"), son2 = son2.fontcolor("orange"), gramson = gramson.fontcolor("blue"), dog1 = dog1.fontcolor("brown"), dog2 = dog2.fontcolor("yellow"), cat1 = cat1.fontcolor("purple"), cat2 = cat2.fontcolor("pink");
document.write(dad, dog1, daughter, cat2, gramson);             //assigning multiple variable values in one statement AND assigning each variable a differnt font color

document.write(5 + 2 + 8 + 2);

function My_First_Function() {                                  //defining a function and naming it
    var str = "This text is green!";                            //defining a variable and giving in a string value
    var result = str.fontcolor("green");                        //using the fontcolor method on the str variable
    document.getElementById("Green_Text").innerHTML = result;   //putting the value of result into HTML element with "Green_Text" id
}

