// var todoInput = document.querySelector("#todo-text");
// var todoForm = document.querySelector("#todo-form");
// var todoList = document.querySelector("#todo-list");
// var todoCountSpan = document.querySelector("#todo-count");

// var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

// renderTodos();

// function renderTodos() {
//   // Clear todoList element and update todoCountSpan
//   todoList.innerHTML = "";
//   todoCountSpan.textContent = todos.length;

//   // Render a new li for each todo
//   for (var i = 0; i < todos.length; i++) {
//     var todo = todos[i];

//     var li = document.createElement("li"); 
//     li.textContent = todo;
//     li.setAttribute("data-index", i); // <li dat-index="0">Learn HTML</li>

//     var button = document.createElement("button");
//     button.textContent = "Complete";

//     li.appendChild(button);
//     todoList.appendChild(li);
//   }
// }

// // When form is submitted...
// todoForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   var todoText = todoInput.value.trim();

//   // Return from function early if submitted todoText is blank
//   if (todoText === "") {
//     return;
//   }

//   // Add new todoText to todos array, clear the input
//   todos.push(todoText);
//   todoInput.value = "";

//   // Re-render the list
//   renderTodos();
// });

// // When a element inside of the todo list is clicked
// todoForm.addEventListener("click", function(event) {
//   var element = event.target;

//   //If that element is a button
//   if (element.matches ("button") === true){
//     //...
//   }
// }





$( document ).ready( function() {

  // CREATE ELEMENTS OF THE WEBPAGE ( USING JQUERY )
  //====================================================================


  // VARIABLES
  // ====================================================================


  // FUNCTIONS
  // ====================================================================
  
  function createWebPageTitle( titleWebPage ) {
    /// CREATE THE SPECIFIC WEBPAGE TITLE OF THE FUNCTION ( JQUERY ) 
    //====================================================================
    if( $("#title").length )
      $( "#title" ).remove();
      
    var newH1 = $( "<h1>" );
    $( "#homepage" ).append( newH1 );
      newH1.attr( "id", "title" );//.attr( "style", "color: #fff; text-align: center;" );
    $( "#title" ).append( titleWebPage );
    
  }


  /*
   *  Write a function that takes in two numbers and outputs the max (the greater of the two numbers).
   *  Ex: 
   *    Input: 1, 2     /   Output: 2
   *    Input: 6, -4    /   Output: 6
   *    Input: 3.4, 2   /   Output: 3.4 
  */
  $( "#greater-number" ).on( "click", () => {
    // Creating Webpage Title
    createWebPageTitle( "Greater Number" );

    let fNumber = prompt("Type the first number");
    let sNumber = prompt("Type the second number");

    alert( ( fNumber > sNumber ) ? fNumber + " is greater than " + sNumber : ( fNumber < sNumber ) ? fNumber + " is smaller than " + sNumber : fNumber + " is equal to " + sNumber);

  })

  // Write a function that takes in an integer and outputs the sum of all the numbers from 1 to that integer.
  $( "#sum-all-numbers" ).on( "click", () => {
    // Creating Webpage Title
    createWebPageTitle( "Sum of All the Numbers" );

    let userNumber = parseInt ( prompt("Type a number") );
    let sumOfAll = userNumber;

    for (let index = userNumber - 1; index > 0; index--) {
      sumOfAll += index;
    }

    alert ( "The sum of all the numbers of [ " + userNumber + " ] is " + sumOfAll);
  })

  // Write a function that takes in an array of numbers and outputs the maximum number.
  // Write a function that takes in a string and outputs the number of vowels (not counting y).
  // Write a function that takes in a single word as a string and returns true if it's a palindrome and false 
  //    otherwise (a palindrome is spelled the same way forwards and backwards).
})