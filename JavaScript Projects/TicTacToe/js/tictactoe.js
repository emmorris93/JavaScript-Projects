// TIC TAC TOE ASSIGNMENT PART FOUR (Step 255)
    // 1) Open tictactoe.js in Visual Studio Code.
    // 2) In the tictactoe.js file, write the following code: (Step 255)
    // 3) Save tictactoe.js.
    // 4) Add the link path for the tictactoe.js file in the TicTacToe.html file.
    // 5) Save it and successfully run TicTacToe.html in the browser.
    // At this point we have called 3 functions that have not been defined yet: 'checkWinCondition', 'audio', and 'disableClick'. 
    // This is preventing our program from running correctly. The ‘checkWinCondition’ function will check which player wins, 
    // based on where an X or an O is placed, so let's define that function now.

let activePlayer = 'X';                                                         // this variable keeps track of who's turn it is
let selectedSquares = [];                                                       // this array stores an array of moves - use this to determine win conditions

function placeXorO(squareNumber) {                                              // function is for placing an "X" or "O" in a square
    if (!selectedSquares.some(element => element.includes(squareNumber))) {     // this condition ensures a square hasn't been selected already - the .some() method is used to check
                                                                                // each element of selectedSquare array to see if it contains the square number clicked on
        let select = document.getElementById(squareNumber);                     // this variable retrieves the html element id that was clicked
        if (activePlayer === 'X') {                                             // this condition checks who's turn it is
            select.style.backgroundImage = 'url("./images/x.png")';            // if activePlayer is equal to 'X', the x.png is placed in HTML
        } else {                                                                // activePlayer may only be 'X' or 'O' so, if not 'X' it must be 'O'
            select.style.backgroundImage = 'url("./images/o.png")';            // if activePlayer is equal to 'O', the o.png is placed in html
        }
        selectedSquares.push(squareNumber + activePlayer);                      // squareNumber and activePlayer are concatenated together and added to array
        checkWinConditions();                                                   // this calls a function to check for any win conditions
        if (activePlayer === 'X') {                                             // this condition is for changing the activePlayer
            activePlayer = 'O';                                                 // if activePlayer is 'X', change it to 'O'
        } else {                                                                // if activePlayer is anything other than 'X'
            activePlayer = 'X';                                                 // change the activePlayer to 'X'
        }
        audio('./media/place.mp3');                                             // this function plays placement sound
        if(activePlayer === 'O') {                                              //this condition checks to see if it is computers turn
            disableClick();                                                     // this function disables clicking for computer choice
            setTimeout(function() { computersTurn(); }, 1000);                  // this function waits 1 sec before placing the image and enabling click
        }
        return true;                                                            // returning true is needed for our computersTurn() function to work
    }
    function computersTurn() {                                                  // this function results in a random square being selected
        let success = false;                                                    // this boolean is needed for our while loop
        let pickASquare;                                                        // this variable stores a random number 0-8
        while(!success) {                                                       // this condition allows our while loop to keep trying if a square is selected already
            pickASquare = String(Math.floor(Math.random() * 9));                // a random number between 0 and 8 is selected
            if (placeXorO(pickASquare)) {                                       //if the random number evaluates returns true, the square hasn't been selected yet
                placeXorO(pickASquare);                                         // this line calls the function
                success = true;                                                 // this changes our boolean and ends the loop
            };
        }
    }

}

// TIC TAC TOE ASSIGNMENT PART FIVE (Step 256)
    // 1) In the tictactoe.js file write the following code:
    // The checkWinCondition function checks for every possible winning scenario of either an X or an O placed in a square. Each square has its own index number starting from 0 - 8 like so:
    // 2) Save tictactoe.js. Successfully run TicTacToe.html in the browser.
    // The output should look something like this when squares have been clicked:
    // Now, when you click another square an O will appear. In the next steps we will define the audio function which will allow for the playing of audio clips on click, and also the disableClick function which will allow the computer time to take its turn.

    // this function parses the selectedSquares array to search for win conditions
// drawline function is called to draw line if condition is met
function checkWinConditions() {
    if      (arrayIncludes('0X', '1X', '2X')) {drawWinLine(50,100,558,100);}        // X 0, 1, 2 condition    
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50,304,558,304);}        // X 3, 4, 5 condition
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50,508,558,508);}        // X 6, 7, 8 condition
    else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100,50,100,558);}        // X 0, 3, 6 condition
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304,50,304,558);}        // X 1, 4, 7 condition
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508,50,508,558);}        // X 2, 5, 8 condition
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100,508,510,90);}        // X 6, 4, 2 condition
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100,100,520,520);}       // X 0, 4, 8 condition
    else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50,100,558,100);}        // O 0, 1, 2 condition
    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50,304,558,304);}        // O 3, 4, 5 condition    
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50,508,558,304);}        // O 6, 7, 8 condition
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100,50,100,558);}        // O 0, 3, 6 condition
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304,50,304,558);}        // O 1, 4, 7 condition
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508,50,508,558);}        // O 2, 5, 8 condition
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100,508,510,90);}        // O 6, 4, 2 condition
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100,100,520,520);}       // O 0, 4, 8 condition
    else if (selectedSquares.length >= 9) {                                         // this condition checks for tie.  If none of the above conditions register and 9 squares are selected, the code executes.
        audio ('./media/tie.mp3');                                                  // this function plays the tie game sound
        setTimeout (function() {resetGame();}, 1000);                               // this function sets a 0.3 second timer before the resetGame is called
    }
    function arrayIncludes(squareA, squareB, squareC) {                             // this function checks if an array includes 3 strings -- used to check for each win condition
        const a = selectedSquares.includes(squareA);                                // the next 3 variables will be used to check for 3 in a row
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) {return true;}                  // if the 3 variables we pass are all include in our array true is returned and our else if condition executes the drawWinLine function
    }
}

// TIC TAC TOE ASSIGNMENT PART SIX (Step 257)
// Earlier we set the function computersTurn() but it doesn’t do anything yet. We also called the function disableClick() and now we need to define what that does (it will disable the current player from being able to click a square until the computer has had its turn).
    // 1) In the tictactoe.js file write the following code:
    // 2) Save tictactoe.js. Successfully run TicTacToe.html in the browser.
    // You can continue to click squares after you’ve won and the computer will not place anymore O’s since the checkWinConditions function has determined that there is a winner.

// this function makes the body element temporarily unclickable
function disableClick() {
    body.style.pointerEvents = 'none';                                              // this make the body unclickable
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);              // this make the body clickable again after 1 sec
}

// this function takes a string parameter of the path you set earlier for placement sound ('./media/pace.mp3)
function audio(audioURL) {
    let audio = new Audio(audioURL);                                                // created a new audio object and we pass the path as a parameter
    audio.play();                                                                   // play method plays our audio sound
}

// TIC TAC TOE ASSIGNMENT PART SEVEN (Step 258)
// Now we will define the drawWinLine function that is called when a win condition is met. This function will draw a line through the HTML canvas showing where the win condition was met.
// 1) In the tictactoe.js file write the following code: (Step 258)
// The checkWinCondition function checks for every possible winning scenario of either an X or an O placed in a square. Each square has its own index number starting from 0 - 8.
// The second if statement in animateDrawingLine was needed for the 6, 4, and 2 index squares if either X or O won on the diagonal line from right to left.
// 2) Save tictactoe.js and successfully run TicTacToe.html in the browser. The output should look something like this:

// this function utilizes html canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');                            // this line accesses our html canvas element
    const c = canvas.getContext('2d');                                              // this line gives us access to methods and properties to use on canvas
    let x1 = coordX1,                                                               // this line indicates where the start of a lines x axis is
        y1 = coordY1,                                                               // this line indicates where the start of a lines y axis is
        x2 = coordX2,                                                               // this line indicates where the end of a lines x axis is
        y2 = coordY2,                                                               // this line indicates where the end of a lines y axis is
        x = x1,                                                                     // this variable stores temporary x axis data while it updates in the animation loop
        y = y1;                                                                     // this variable stores temporary y axis data while it updates in the animation loop


    // this function ineracts with the canvas
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);                // this variable creates the loop for when the game ends it restarts
        c.clearRect(0, 0, 608, 608);                                                    // this method clears content from last loop iteration
        c.beginPath();                                                                  // this method starts a new path
        c.moveTo(x1, y1);                                                               // this method moves to a starting point for the line
        c.lineTo(x, y);                                                                 // this method indicates the end point in the line
        c.lineWidth = 10;                                                               // this method sets the width of the line
        c.strokeStyle = 'rgba(70, 255, 33, 0.8';                                        // the methods sets the color of the line
        c.stroke();                                                                     // this method draws everything that was laid out above
        if (x1 <= x2 && y1 <= y2) {                                                     // this condition checks if the endpoint is reached
            if (x < y2) {x += 10;}                                                      // this condition adds 10 to the previous end x point
            if (y < y2) {y += 10;}                                                      // this condition adds 10 to the previous end y point
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}              // this condition cancels the animation loop if end points are reached
        }
        if (x1 <= x2 && y1 >= y2) {                                                     // this condition is similar to above -- it's necessary for the 6, 4, 2 win condition
            if (x < x2) {x += 10;}
            if (y > y2) {y -= 10;}
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
        }
    }

    // this function clears the canvas after the win line is drawn
    function clear() {
        const animationLoop = requestAnimationFrame(clear);                             // this line starts the animation loop
        c.clearRect(0, 0, 608, 608);                                                    // this line clears the canvas
        cancelAnimationFrame(animationLoop);                                            // this line stops the animation loop
    }
    disableClick();                                                                 //this line disallows clicking while the win sound is playing
    audio('./media/winGame.mp3');                                                   // this line plays the win sounds
    animateLineDrawing();                                                           // this line calls the main animation loop
    setTimeout (function() {clear(); resetGame();}, 1000);                          // this line waits 1 sec, then clears the canvas, resets the game and allows clicking again
}

    // ASSIGNMENT TIC TAC TOE PART EIGHT (Step 259)
        // The game is now stuck in a loop and doesn't end – so let’s fix that.
        // At the end of each game we will have the canvas reset automatically through our resetGame function.
            // 1) In the tictactoe.js file write the following code: (Step 259)
            // 2) Save tictactoe.js and successfully run TicTacToe.html in the browser.

    // this function resets the game in a tie or win
function resetGame() {
    for (let i = 0; i < 9; i++) {                                                   // this for loop iterates through each HTML square element
        let square = document.getElementById(String(i));                            // this variable gets the HTML element of i
        square.style.backgroundImage = '';                                          // this removes our elements backgroundImage
    }   
    selectedSquares = [];                                                           // this rests the array so it is empty and can then start over
}

