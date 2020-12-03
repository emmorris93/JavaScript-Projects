document.write("ASSIGNMENTS:")
document.write("<br>");
document.write("<br>");

//  ASSIGNMENT (Step 94)
        // 1. Within the “Basic JavaScript Projects” folder, create a “Project5_comparisons_type_coercion” folder. Then, within this folder, create a new file and name it “index.html”.
        // 2. Within the index.html file, do the following:
                // a. Write out the basic HTML template.
                // b. Within the <head> or <body> element, write the following code:       <script src="./JS/main.js"></script>
        // 3. Create a “JS” folder within the “Project5_comparisons_type_coercion” folder. Create a new file within the “JS” folder and name it “main.js”.
        // 4. Write the “document.write()” method and “type of” operator to display the data type of a variable of your choosing.
        // 5. Successfully execute the index.html file in the browser.
document.write("(Step 94)") 
document.write("<br>");       
var myword = "popcorn";
document.write(typeof myword);
document.write("<br>");
var mynum = 1995;
document.write(typeof mynum);
document.write("<br>");
document.write("<br>");

//  ASSIGNMENT (Step 100)
        // 1. Open the main.js file and, using the document.getElementById() method, write a large enough number and negative number to display “Infinity” and “-Infinity” respectively. Save the file.
        // 2. Successfully execute index.html in the browser.
document.write("(Step 100)");
document.write("<br>");     
document.write(2E310);
document.write("<br>");
document.write(-3E310);
document.write("<br>");
document.write("<br>");

//  ASSIGNMENT (Step 102)
        // 1. Open the main.js file and use Boolean logic (i.e. the greater than operator and/or lesser than operator) to display true and false. Save the file.
        // 2. Successfully execute index.html in the browser.
document.write("(Step 102)");
document.write("<br>");
document.write(115 > 12); //returns "true"
document.write("<br>");
document.write(115 < 12); //returns "false"
document.write("<br>");
document.write("<br>");

//  ASSIGNMENT (Step 104)
        // console.log() Method
        // a. clicking “F12” and then clicking on “Console,”
        // b. clicking the three upright dots in the top-right of the browser and then clicking on “More tools.” Finally, click “Developer tools” and then click “Console”, or
        // c. Type Ctrl+Shift+I and then click on “Console”.
document.write("(Step 104)")
document.write("<br>");
document.write("91 + 93 in console = 184")
console.log(91 + 93); //returns the sum 184
document.write("<br>");
document.write("<br>");

//  ASSIGNMENT (Step 106)
        // 1. Open the main.js file and utilize type coercion. Save the file.
        // 2. Successfully execute index.html in the browser.
document.write("(Step 106)");
document.write("<br>");
document.write("20" + 20); //"Type coercion" when operands of an operator are differnt data types
document.write("<br>");
document.write("<br>");

//  ASSIGNMENT (Step 109)
        // 1. Open the main.js file and utilize == to return “true” and “false”. Save the file.
        // 2. Successfully execute index.html in the browser.
document.write("(Step 109)");
document.write("<br>");
document.write(93 == 93); //returns "true"
document.write("<br>");
document.write(93 == 95); //returns "false"
document.write("<br>");
document.write("<br>");

// ASSIGNMENT (Step 111)
    // 1. Open the main.js file and utilize === to return “true” and “false” in the following ways:
            // Return true by ensuring to match the data type and value.
            // Return false by writing a different data type and different value.
            // Return false by writing a different data type but the same value for both.
            // Return false by writing the same data type but a different value for both.
            // Save the file.
    // 2. Successfully execute index.html in the browser.
document.write("(Step 111)");
document.write("<br>");
x = 2007
y = 2007
document.write(x === y); //returns "true"
document.write("<br>");

a = 14
b = 27
document.write(a === b); // returns "false"
document.write("<br>");

c = 95
d = "95"
document.write(c === d); // returns "false"
document.write("<br>");

e = "popcorn";
f = "caramel";
document.write(e === f); // returns "false"
document.write("<br>");
document.write("<br>");

// ASSIGNMENT (Step 113)
        // 1. Open the main.js file and utilize the AND operator to display true and false.
        // 2. Utilize the OR operator to display true and false. Save the file.
        // 3. Successfully execute index.html in the browser.
document.write("(Step 113)");
document.write("<br>");
document.write(77 > 7 && 14 > 2);   //both must be true with the && operator to return "true"
document.write("<br>");
document.write(77 > 7 && 14 > 22);  //returns "false"
document.write("<br>");
document.write(77 > 7 || 14 > 2);   //returns "true" if one of the || is true
document.write("<br>");
document.write(7 > 77 || 14 > 22);  //returns "false" when neither is true
document.write("<br>");

// ASSIGNMENT (Step 115)
        // 1. Open the main.js file and utilize the NOT operator to display true and false.
        // 2. Successfully execute index.html in the browser.
function not_Function() {
    document.getElementById("step115a").innerHTML = !(22 > 12); //returns "false"
}
function doublenot_Function() {
    document.getElementById("step115b").innerHTML = !(12 > 22); //returns "true" (double-negative)
}
