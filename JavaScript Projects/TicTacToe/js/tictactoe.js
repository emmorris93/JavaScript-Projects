// TIC TAC TOE ASSIGNMENT PART FOUR (Step 255)
    // 1) Open tictactoe.js in Visual Studio Code.
    // 2) In the tictactoe.js file, write the following code: (Step 255)
    // 3) Save tictactoe.js.
    // 4) Add the link path for the tictactoe.js file in the TicTacToe.html file.
    // 5) Save it and successfully run TicTacToe.html in the browser.
    // At this point we have called 3 functions that have not been defined yet: 'checkWinCondition', 'audio', and 'disableClick'. 
    // This is preventing our program from running correctly. The ‘checkWinCondition’ function will check which player wins, 
    // based on where an X or an O is placed, so let's define that function now.
// TIC TAC TOE ASSIGNMENT PART FIVE (Step 256)
    // 1) In the tictactoe.js file write the following code:
    // The checkWinCondition function checks for every possible winning scenario of either an X or an O placed in a square. Each square has its own index number starting from 0 - 8 like so:
    // 2) Save tictactoe.js. Successfully run TicTacToe.html in the browser.
    // The output should look something like this when squares have been clicked:
    // Now, when you click another square an O will appear. In the next steps we will define the audio function which will allow for the playing of audio clips on click, and also the disableClick function which will allow the computer time to take its turn.

let activePlayer = 'X';                                                     // this variable keeps track of who's turn it is
let selectedSquares = [];                                                   // this array stores an array of moves - use this to determine win conditions

function placeXorO(squareNumber) {                                          // function is for placing an "X" or "O" in a square
    if (!selectedSquares.some(element => element.inclues(squareNumber))) {  // this condition ensures a square hasn't been selected already - the .some() method is used to check
                                                                            // each element of selectedSquare array to see if it contains the square number clicked on
        let select = document.getElementById(squareNumber);                 // this variable retrieves the html element id that was clicked
        if (activePlayer === 'X') {                                         // this condition checks who's turn it is
            select.style.backgroundImage = 'url ("images/x.png")';          // if activePlayer is equal to 'X', the x.png is placed in HTML
        } else {                                                            // activePlayer may only be 'X' or 'O' so, if not 'X' it must be 'O'
            select.style.backgroundImage = 'url ("images/o.png")';          // if activePlayer is equal to 'O', the o.png is placed in html
        }
        selectedSquares.push(squareNumber + activePlayer);                  // squareNumber and activePlayer are concatenated together and added to array
        checkWinConditions();                                               // this calls a function to check for any win conditions
        if (activePlayer === 'X') {                                         // this condition is for changing the activePlayer
            activePlayer = 'O';                                             // if activePlayer is 'X', change it to 'O'
        } else {                                                            // if activePlayer is anything other than 'X'
            activePlayer = 'X';                                             // change the activePlayer to 'X'
        }
        Audio('./media/place.mp3');                                         // this function plays placement sound
        if(activePlayer === 'O') {                                          //this condition checks to see if it is computers turn
            disableClick();                                                 // this function disables clicking for computer choice
            setTimeout(function() { computersTurn(); }, 1000);              // this function waits 1 sec before placing the image and enabling click
        }
        return true;                                                        // returning true is needed for our computersTurn() function to work
    }
    function computersTurn() {                                              // this function results in a random square being selected
        let success = false;                                                // this boolean is needed for our while loop
        let pickASquare;                                                    // this variable stores a random number 0-8
        while(!success) {                                                   // this condition allows our while loop to keep trying if a square is selected already
            pickASquare = String(Math.floor(Math.random() * 9));            // a random number between 0 and 8 is selected
            if (placeXorO(pickASquare)) {                                   //if the random number evaluates returns true, the square hasn't been selected yet
                placeXorO(pickASquare);                                     // this line calls the function
                success = true;                                             // this changes our boolean and ends the loop
            };
        }
    }

}

