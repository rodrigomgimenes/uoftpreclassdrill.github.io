$( document ).ready( function() {
  // VARIABLES
  // ====================================================================
  
  // This object will have the ID and the Text to create a new Element
  // Just insert an ID and a Name for next activities and the program will do all the work!! =]
  var activity = {

    elementId: [
      "tomato-timer",
      "greater-number",
      "sum-all-numbers",
      "find-max-number",
      "number-vowels",
      "palindrome"
    ],

    elementText: [
      "Tomato Timer",
      "Greater Number",
      "Sum of All the Numbers",
      "Find Maximum Number",
      "Number of Vowels",
      "Is a Palindrome?"
    ],

  }

  // CREATE ELEMENTS OF THE WEBPAGE ( USING JQUERY )
  //==================================================================== 
  
  // Creating new Section
  var newSection = $( "<section>" );
  $( "#homepage" ).append( newSection );
  newSection.attr( "id", "pseudobutton" );

  // Creating new Div
  var newDiv = $( "<div>" );
  $( "#pseudobutton" ).append( newDiv );
  newDiv.attr( "id", "activitybutton" );

  // Creating Paragraphs and A Tags
  var newP = [ "" ]; 
  var newA = [ "" ];
  var elementColor = "buttongreen";
  activity.elementId.forEach( ( element, index ) => {
    newP[ index ] = $( "<p>" ); 
    newA[ index ] = $( "<a>" );

    $( "#activitybutton" ).append( newP[ index ] );
    newP[ index ].append( newA[ index ] );

    //Get the color of the button (Resto da divisao por 4)
    elementColor = ( ( index % 4 === 0 ) ? "buttongreen" : ( ( index % 4 === 1 ) ? "buttonred" : ( ( index % 4 === 2 ) ? "buttonyellow" : "buttonblue" ) ) );

    // Check if First element
    newA[ index ].attr( "href", ( ( index === 0 ) ? "index-timer.html" : "#" ) ).attr( "id", element ).attr( "class", ( ( index === activity.elementId.length-1 ) ? "button " + elementColor + " last" : "button " + elementColor ) );
    newA[ index ].append( "<strong>" + activity.elementText[ index ] + "</strong>" );
  });

  var newDiv_Clear = $( "<div>" );
  $( "#activitybutton" ).append( newDiv_Clear );
  newDiv_Clear.attr( "class", "clear" );


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
    createWebPageTitle ( "Greater Number" );

    let fNumber = prompt ( "Type the first number" );
    let sNumber = prompt ( "Type the second number" );

    alert( ( fNumber > sNumber ) ? fNumber + " is GREATER than " + sNumber : ( fNumber < sNumber ) ? fNumber + " is SMALLER than " + sNumber : fNumber + " is EQUAL to " + sNumber);
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
    createWebPageTitle ( "Sum of All the Numbers" );

    let userNumber = parseInt ( prompt ("Type a number") );

    if ( userNumber.length > 0 ){
      let sumOfAll = userNumber;

      for (let index = userNumber - 1; index > 0; index--) {
        sumOfAll += index;
      }

      alert ( "The sum of all the numbers of [ " + userNumber + " ] is " + sumOfAll);
    }
    else
      alert ( "Invalid data! You have to type one number to see the magic." );
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
    createWebPageTitle ( "Find Maximum Number" );

    let userNumbers = prompt ( "Type two or more numbers separated by blank spaces (' ').\n At the end press the OK button to find out the Maximum Number." );

    if ( userNumbers.length > 1 ) {
      let arrayUserNumbers = userNumbers.split ( " " );

      let maximumNumber    = parseInt ( arrayUserNumbers[0] );
      let minimumNumber    = parseInt ( arrayUserNumbers[0] );

      if ( maximumNumber >= 0 || minimumNumber >= 0 ) {
        for ( let index = 1; index < arrayUserNumbers.length; index++ ) {
          maximumNumber = ( maximumNumber < parseInt ( arrayUserNumbers[index] ) ) ? parseInt ( arrayUserNumbers[index] ) : maximumNumber;
          minimumNumber = ( minimumNumber > parseInt ( arrayUserNumbers[index] ) ) ? parseInt ( arrayUserNumbers[index] ) : minimumNumber;
        }

        alert ( "The Maximum Number is [ "     + maximumNumber + " ]\n" +
                "and the Minimum Number is [ " + minimumNumber + " ]"
              );
      }
      else
        alert ( "Invalid data! You have to type at least two numbers to amazed." );
    }
    else
      alert ( "Invalid data! You have to type at least two numbers to amazed." );
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
    createWebPageTitle ( "Number of Vowels" );

    let userString = prompt ( "Type a word or a sentence and press the OK button to find out the number of vowels (not counting 'Y')." );

    if ( userString.length > 0 ){
      let countVowels = 0;

      for ( let index = 0; index < userString.length; index++ ) {
        if ( userString.toLowerCase().charAt ( index ) === "a" || 
             userString.toLowerCase().charAt ( index ) === "e" ||
             userString.toLowerCase().charAt ( index ) === "i" || 
             userString.toLowerCase().charAt ( index ) === "o" || 
             userString.toLowerCase().charAt ( index ) === "u"  
           )
          countVowels++;
      }

      alert ( "The total Number of Vowels is [ " + countVowels + " ]" );
    }
    else
      alert ( "Invalid data! You have to type at least one word to be gawping." );
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
    createWebPageTitle ( "Is a Palindrome?" );
  })


})