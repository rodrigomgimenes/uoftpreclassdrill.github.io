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
      "palindrome",
      "prime-number",
      "factorial-number",
      "fibonacci-sequence",
      "anagram",
      "armstrong-number",
      "triangle"
    ],

    elementText: [
      "Tomato Timer",
      "Greater Number",
      "Sum of All the Numbers",
      "Find Maximum Number",
      "Number of Vowels",
      "Is a Palindrome?",
      "Prime Number",
      "Factorial Number",
      "Fibonacci Sequence",
      "Is an Anagram?",
      "Is an Armstrong Number?",
      "Is a Triangle?"
    ],

    phrases: [
      "to see the magic.",
      "to be amazed.",
      "to be gawping.",
      "to be surprised.",
      "to be astonished.",
      "to be pleased.",
      "to be joyful.",
      "to be jolly."
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
  $( "#" + activity.elementId [ 1 ] ).on( "click", () => {
    // Creating Webpage Title
    createWebPageTitle ( activity.elementText[ 1 ] );

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
  $( "#" + activity.elementId [ 2 ] ).on( "click", () => {
    // Creating Webpage Title
    createWebPageTitle ( activity.elementText[ 2 ] );

    let userNumber = parseInt ( prompt ("Type a number") );

    if ( userNumber.length > 0 ){
      let sumOfAll = userNumber;

      for (let index = userNumber - 1; index > 0; index--) {
        sumOfAll += index;
      }

      alert ( "The sum of all the numbers of [ " + userNumber + " ] is " + sumOfAll);
    }
    else
      alert ( "Invalid data! You have to type 1 ( one ) number " + activity.phrases [ Math.floor( Math.random() * (activity.phrases.length - 1) ) ] );
  })


 /*
  *  Write a function that takes in an array of numbers and outputs the maximum number.
  *  Ex:
         Input: [ 1, 2, 3 ]           /   Output: 3
         Input: [ 3, 6, 4, 5, 2, 1 ]  /   Output: 6
         Input: [ 3, 3, 3 ]           /   Output: 3
  */
  $( "#" + activity.elementId [ 3 ] ).on( "click", () => {
    // Creating Webpage Title
    createWebPageTitle ( activity.elementText[ 3 ] );

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
        alert ( "Invalid data! You have to type at least 2 ( two ) numbers " + activity.phrases [ Math.floor( Math.random() * (activity.phrases.length - 1) ) ] );
    }
    else
      alert ( "Invalid data! You have to type at least 2 ( two ) numbers " + activity.phrases [ Math.floor( Math.random() * (activity.phrases.length - 1) ) ] );
  })


 /*
  *  Write a function that takes in a string and outputs the number of vowels (not counting y).
  *  Ex:
  *      Input: "hello"           /   Output: 2
  *      Input: "you are great!"  /   Output: 6
  *      Input: "why?"            /   Output: 0
  */
  $( "#" + activity.elementId [ 4 ] ).on( "click", () => {
    // Creating Webpage Title
    createWebPageTitle ( activity.elementText[ 4 ] );

    let userString = prompt ( "Type a single word or a sentence and press the OK button to find out the number of vowels (not counting 'Y')." );

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
      alert ( "Invalid data! You have to type at least 1 ( one ) word " + activity.phrases [ Math.floor( Math.random() * (activity.phrases.length - 1) ) ] );
  })


 /* 
  *  Write a function that takes in a single word as a string and returns true if it's a palindrome and 
  *  false otherwise (a palindrome is spelled the same way forwards and backwards).
  *  Ex:
  *      Input: "noon"      /   Output: true
  *      Input: "horse"     /   Output: false
  *      Input: "racecar"   /   Output: true
  */
  $( "#" + activity.elementId [ 5 ] ).on( "click", () => {
    // Creating Webpage Title
    createWebPageTitle ( activity.elementText[ 5 ] );

    let userPalindrome = prompt ( "Type a single word or a sentence and press the OK button to find out if it's a Palindrome." );
    let isPalindrome   = true;
    
    if ( userPalindrome.length > 0 ) {
      for ( let index = 0; index < ( userPalindrome.length - 1 ) / 2; index++ ) {
        if ( userPalindrome.charAt ( index ) != userPalindrome.charAt ( userPalindrome.length - ( index + 1 ) ) ) {
          isPalindrome = false;
          break;
        }
      }

      alert ( !isPalindrome ? "[ " + userPalindrome + " ] is NOT a Palidrome." : "[ " + userPalindrome + " ] is a Palidrome." );
    }
    else
      alert ( "Invalid data! You have to type at least 1 ( one ) word " + activity.phrases [ Math.floor( Math.random() * (activity.phrases.length - 1) ) ] );
  })


 /* 
  *  Write a function that prints prime numbers.
  *  Ex:
  *      Input: "20"   /   Output: 1 2 3 5 7 11 13 17 19
  */
 $( "#" + activity.elementId [ 6 ] ).on( "click", () => {
  // Creating Webpage Title
  createWebPageTitle ( activity.elementText[ 6 ] );

  let userNumber = parseInt ( prompt ( "Type a number and press the OK button to find out all Prime Numbers that precede it." ) );
  let count;
  let primeNumbers = "Prime Numbers = [  ";
  
  if ( userNumber > 0 ) {
    for ( let i = 1; i <= userNumber; i++ ) {
      count = 0;

      // This loop verifies Prime Numbers
      for ( let j = 2; j <= i / 2; j++ ) {
        if ( i % j === 0 ) {
          count++;
          break;
        }
      }

      if ( count === 0 )
      primeNumbers += i + "  ";
    }

    alert ( primeNumbers + "]" );
  }
  else
    alert ( "Invalid data! You have to type a number greater than 0 ( zero ) " + activity.phrases [ Math.floor( Math.random() * (activity.phrases.length - 1) ) ] );
})


 /* 
  *  Write a function that prints the factorial number.
  *  Ex:
  *      Input: "4"   /   Output: 24
  */
 $( "#" + activity.elementId [ 7 ] ).on( "click", () => {
  // Creating Webpage Title
  createWebPageTitle ( activity.elementText[ 7 ] );

  let userNumber = parseInt ( prompt ( "Type a number and press the OK button to find out their respective Factorial Number." ) );
  let factorial  = userNumber;
  
  if ( userNumber > 0 ) {
    for ( let index = ( userNumber - 1 ); index > 1; index-- )
      factorial *= index;

    alert ( "The Factorial Number of [ " + userNumber + " ] is: " + factorial );
  }
  else
    alert ( "Invalid data! You have to type a number greater than 0 ( zero ) " + activity.phrases [ Math.floor( Math.random() * (activity.phrases.length - 1) ) ] );
})


 /* 
  *  Write a function that prints the fibonacci sequence.
  *  Ex:
  *      Input: "10"   /   Output: 0 1 1 2 3 5 8 13 21 34
  */
 $( "#" + activity.elementId [ 8 ] ).on( "click", () => {
  // Creating Webpage Title
  createWebPageTitle ( activity.elementText[ 8 ] );

  let valueSize = parseInt ( prompt ( "Type a value of size and press the OK button to find out the Fibonacci Sequence." ) );
  
  if ( valueSize > 1 ) {
    let fibonacciSeq = [ 0, 1 ];

    for ( let index = 2; index < valueSize; index++ )
      fibonacciSeq [ index ] = fibonacciSeq [ index - 2 ] + fibonacciSeq [ index - 1 ];

    // alert ( "The Fibonacci Series is [ " + fibonacciSeq + " ]" );
    fibNum = "";
    fibonacciSeq.forEach( ( element ) => {
      fibNum += element + "  "
    });
    alert ( "The Fibonacci Series is [  " + fibNum + "]" );
  }
  else
    alert ( "Invalid data! You have to type a number greater than 1 ( one ) " + activity.phrases [ Math.floor( Math.random() * (activity.phrases.length - 1) ) ] );
})


 /* 
  *  Write a function that takes in a two words or two sentences as a string and returns if it's an anagram
  *  Ex:
  *      Input: "Silent Cat and Listen Act"   /   Output: "It's an Anagram"
  *      Input: "Debit Card and Bad Credit"   /   Output: "It's an Anagram"
  *      Input: "Toss and Shot"               /   Output: "It's NOT an Anagram"
  */
 $( "#" + activity.elementId [ 9 ] ).on( "click", () => {
  // Creating Webpage Title
  createWebPageTitle ( activity.elementText[ 9 ] );

  let firstString  = prompt ( "Type the first word or sentence" );
  let secondString = prompt ( "Type the second word or sentence" );
  
  if ( ( firstString.length > 0 ) && ( secondString.length > 0 ) ) {
    // Removing ANY non-alphabet character from firstString and secondString and converting case to lower case
    let copyFirst  = firstString.replace( /[^\w]/g, "" ).toLowerCase();
    let copySecond = secondString.replace( /[^\w]/g, "" ).toLowerCase();

    // Initially setting status as true
    let status = true;

    // Setting status as false if copyFirst and copySecond doesn't have same length
    if ( copyFirst.length !== copySecond.length )
      status = false; 
    else {
      // Sorting the words in the String
      if ( ( copyFirst.split('').sort().join('') ) !== ( copySecond.split('').sort().join('') ) )
        status = false;
    }

    alert ( "[ " + firstString + " ] and [ " + secondString + " ] are " + ( !status ? "NOT Anagrams." : "Anagrams." ) );
  } 
  else
    alert ( "Invalid data! You have to type 2 ( two ) words or sentences " + activity.phrases [ Math.floor( Math.random() * (activity.phrases.length - 1) ) ] );
})


 /* 
  *  Write a function that checks or find if a number is armstrong number or not.
  *  An Armstrong number of three digits is a number whose sum of cubes of its digit is equal
  *  to its number.
  *  Ex:
  *      Input: "153"   /   Output: It's a Armstrong Number ( because 1^3 + 5^3 + 3^3 or 1 + 125 + 27 = 153 )
  */
 $( "#" + activity.elementId [ 10 ] ).on( "click", () => {
  // Creating Webpage Title
  createWebPageTitle ( activity.elementText[ 10 ] );

  let armstrongNumber = parseInt ( prompt ( "Type a 3 ( three ) digit number and press the OK button to find out if it's an Armstrong Number." ) );
  
  if ( armstrongNumber >= 100 ) {
    let result        = 0;
    let copyArmstrong = armstrongNumber;
    let remainder     = 0;

    while ( copyArmstrong != 0 ) {
      remainder     = copyArmstrong % 10;
      result        = result + remainder * remainder * remainder;
      copyArmstrong = parseInt ( copyArmstrong / 10 ); // Cast to be an integer number
    }

    // Check if number is Armstrong
    alert ( "The number [ " + armstrongNumber + " ] is " + ( ( armstrongNumber === result ) ? "an Armstrong Number." : "NOT an Armstrong Number." ) );
  }
  else
    alert ( "Invalid data! You have to type a 3 ( three ) digit number " + activity.phrases [ Math.floor( Math.random() * (activity.phrases.length - 1) ) ] );
})


 /* 
  *  Write a function that takes in a 3 numbers and returns if it's a valid triangle
  *  Ex:
  *      Input: "3  4  5"    /   Output: "It's a valid Triangle"
  *      Input: "1  2  10"   /   Output: "It's NOT a valid Triangle"
  */
 $( "#" + activity.elementId [ 11 ] ).on( "click", () => {
  // Creating Webpage Title
  createWebPageTitle ( activity.elementText[ 11 ] );

  let firstSide  = parseInt ( prompt ( "Type the size of the first side of the triangle."  ) );
  let secondSide = parseInt ( prompt ( "Type the size of the second side of the triangle." ) );
  let thirdSide  = parseInt ( prompt ( "Type the size of the third side of the triangle."  ) );
  
console.log(firstSide); console.log(secondSide); console.log(thirdSide);

  if ( ( firstSide >= 0 ) && ( secondSide >= 0 ) && ( thirdSide >= 0 ) ) {
    
    if ( ( ( firstSide  + secondSide ) > thirdSide  ) && 
         ( ( firstSide  + thirdSide  ) > secondSide ) && 
         ( ( secondSide + thirdSide  ) > firstSide  ) 
       )
       alert ( "[ " + firstSide + " ], [ " + secondSide + " ] and [ " + thirdSide + "] are a valid Triangle." );
    else 
      alert ( "[ " + firstSide + " ], [ " + secondSide + " ] and [ " + thirdSide + "] are NOT a valid Triangle." );
  } 
  else
    alert ( "Invalid data! You have to type 3 ( three ) numbers " + activity.phrases [ Math.floor( Math.random() * (activity.phrases.length - 1) ) ] );
})


})