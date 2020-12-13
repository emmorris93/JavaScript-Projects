// JAVASCRIPT TODO APP ASSIGNMENT (Step 386)
    // 1. Open the todo.js file in Visual Studio Code.
    // 2. Write this code: (Step386)
    // 3. Save your code.
    // 4. Execute index.html in the browser.
// JAVASCRIPT TODO APP CHALLENGE
    // Add the ability to remove a todo item from the list when the user clicks on the button to the right of each item.

function get_todos() {                                                                      // function to get the task fro input
    var todos = new Array;                                                                  // created array of inputed tasks
    var todos_str = localStorage.getItem('todo');                                           // pulls task that saved in web browser memory
    if (todos_str !== null) {                                                               // if input is not null then JSON.parse will 
        todos = JSON.parse(todos_str);                                                          //communicate with the web browswer to make the task a JavaScript Object
    }
    return todos;
}

function add() {                                                                            // function to add inputed task to get_todos function array
    var task = document.getElementById('task').value;                                       // takes inputed task and creates a variable of it
    var todos = get_todos();                                                                 
    todos.push(task);                                                                       // adds a new task to the end of the array
    localStorage.setItem('todo', JSON.stringify(todos));                                    // converts the task input to a JSON string
    document.getElementById("task").value = "";
    show();

    return false;
}

function show() {                                                                           // function keeps the tasks permanently displayed on the the screen
    var todos = get_todos();                                                                // sets the task that was retrieved as a variable
    var html = '<ul>';                                                                      // sets up each task as an unordered list
    var buttons = document.getElementsByClassName('remove');                                // tells the browswer how to display the todo array after an item is removed
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
    for (var i = 0; i < todos.length; i++) {                                                // displays a task tot he list in the order that it's inputed
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button><li>'; // also, displays the task as a list and creates the button with the "x"
    };
    html += '<ul>';
        document.getElementById('todos').innerHTML = html;                                  // displays the task as a list
}
document.getElementById('add').addEventListener('click', add);                              // displays the inputed tasks when the 'Add Item' button is clicked
show();                                                                                     // keeps the inputs displayed permanentaly on the screen

function remove() {                                                                         // function for removing a todo item from the array
    var id = this.getAttribute('id');
    var todos = get_todos;
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();                                                                                 // looks in the show() how to display a removed item on the screen

    return false;
}
