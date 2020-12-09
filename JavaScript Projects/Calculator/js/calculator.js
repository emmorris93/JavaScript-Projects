// ASSIGNMENT (Step 270)
    // 1. In your JavaScript folder, create a new file and name it Calculator_JavaScript.js.
    // 2. In this file, write the JavaScript code from the previous course step.
    // 3. Save your code and successfully execute it in the browser.
    // You should now have a fully functional calculator!


const Calculator = {                                                                            // creates an object to keep track of values
    Display_Value: '0',                                                                         // this displays 0 on the screen
    First_Operand: null,                                                                        // this will hold the first operand for any expressions, its set to null for now
    Wait_Second_Operand: false,                                                                 // this checks whether or not the second operand has been input
    operator: null,                                                                             // this will hold the operator that is set to null for now
};

function Input_Digit(digit) {                                                                   // this modifies values each time a button is clicked
    const{Display_Value, Wait_Second_Operand} = Calculator;                                     
    if (Wait_Second_Operand === true) {                                                         // checks to see if Wait_Second_Operand is true and set
        Calculator.Display_Value = digit;                                                       // Display_Value to the key that was clicked
        Calculator.Wait_Second_Operand = false;
    } else {                                                                                    // this overwrites Display_Value if the current value is 0 -- otherwise it adds onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

function Input_Decimal(dot) {                                                                   // this section handles decimal points
    if (Calculator.Wait_Second_Operand === true) return;                                        // this ensures that accidental clicking of the decimal point doesn't cause bugs in your operation
    if (!Calculator.Display_Value.includes(dot)) {                                              //says that if Display_Value doesn't contain a decimal point, add a decimal point
        Calculator.Display_Value += dot;
    }
}

function Handle_Operator(Next_Operator) {                                                       // this section handles operators
    const {First_Operand, Display_Value, operator} = Calculator                                 // when an operator key is pressed, converts the current number displayed on the screen to a number and then stores the result in
    const Value_of_Input = parseFloat(Display_Value);                                           // Calculator.First_Operand if it doesn't already exist
    if (operator && Calculator.Wait_Second_Operand) {                                           // checks if an operator already exists and if Wait_Second_Operand is true, then
        Calculator.operator = Next_Operator;                                                    // updates the operator and exits from the function
        return;
    }
    if (First_Operand === null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {                                                                      // checks if an operator already exists
        const Value_Now = First_Operand || 0;                                                   // if operator exists, property lookup is performed for the operator in the Perform_Calculation object
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);                  // and the function that matches the operator is executed  
        result = Number(result).toFixed(9)                                                      // add a fixed amount of numbers after the decimal               
        result = (result * 1).toString()                                                        // this will remove any trailing 0s
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/':(First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*':(First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+':(First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-':(First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=':(First_Operand, Second_Operand) => Second_Operand,
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display() {                                                                     // this function updates the screen with the contents of Display_Value
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();   

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
console.log("click event called");
    const {target} = event;                                                                     // the target variable is anobject that represents the element that was clicked
    if (!target.matches('button')) {                                                            // if the element that was clicked on is not a button, exit the function
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('all-clear')) {                                               // ensures that AC clears the numbers from the calculator
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})
