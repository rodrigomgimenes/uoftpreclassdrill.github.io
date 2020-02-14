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
      newH1.attr( "id", "title" );
    $( "#title" ).append( titleWebPage );
    
  }


  /*
   *  Write a function that takes in two numbers and outputs the max (the greater of the two numbers).
   *  Ex: 
   *      Input: 1, 2     /   Output: 2
   *      Input: 6, -4    /   Output: 6
   *      Input: 3.4, 2   /   Output: 3.4 
   */
  $( "#greater-number" ).on( "click", () => {
    // Creating Webpage Title
    createWebPageTitle( "Greater Number" );

    let fNumber = prompt("Type the first number");
    let sNumber = prompt("Type the second number");

    alert( ( fNumber > sNumber ) ? fNumber + " is greater than " + sNumber : ( fNumber < sNumber ) ? fNumber + " is smaller than " + sNumber : fNumber + " is equal to " + sNumber);
  })


 /*
  *  Write a function that takes in an integer and outputs the sum of all the numbers from 1 to that integer.
  *  Ex:
  *      Input: 2    /   Output: 3 (because 1 + 2 = 3)
  *      Input: 4    /   Output: 10  (because 1 + 2 + 3 + 4 = 10)
  *      Input: 10   /   Output: 55
  */
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


 /*
  *  Write a function that takes in an array of numbers and outputs the maximum number.
  *  Ex:
         Input: [ 1, 2, 3 ]           /   Output: 3
         Input: [ 3, 6, 4, 5, 2, 1 ]  /   Output: 6
         Input: [ 3, 3, 3 ]           /   Output: 3
  */
  $( "#find-max-number" ).on( "click", () => {
    // Creating Webpage Title
    createWebPageTitle( "Find Maximum Number" );
  })


 /*
  *  Write a function that takes in a string and outputs the number of vowels (not counting y).
  *  Ex:
  *      Input: "hello"           /   Output: 2
  *      Input: "you are great!"  /   Output: 6
  *      Input: "why?"            /   Output: 0
  */
  $( "#number-vowels" ).on( "click", () => {
    // Creating Webpage Title
    createWebPageTitle( "Number of Vowels" );
  })


 /* 
  *  Write a function that takes in a single word as a string and returns true if it's a palindrome and 
  *  false otherwise (a palindrome is spelled the same way forwards and backwards).
  *  Ex:
  *      Input: "noon"      /   Output: true
  *      Input: "horse"     /   Output: false
  *      Input: "racecar"   /   Output: true
  */
  $( "#palindrome" ).on( "click", () => {
    // Creating Webpage Title
    createWebPageTitle( "Is a Palindrome?" );
  })


})