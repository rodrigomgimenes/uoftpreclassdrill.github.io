var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

$(document).ready(function() {

  var totalSeconds = 0;
  var secondsElapsed = 0;
  var status = "working";
  var interval;

  /* 
    create a loop function to countdown from 60 seconds each time 
    everytime the timer reaches 0, dock 1 from the minutes count so long as minutes is not 0.
  */

    $( "#play" ).on( "click", () => {
      var timer = 60;
      var currentMinute = ( statusSpan.textContent === "Working" ) ? parseInt ( workMinutesInput.value ) : parseInt ( restMinutesInput.value );
      // var currentMinute = parseInt ( restMinutesInput.value );
      var subMinute = true;

      var internal = setInterval( () => {
        timer--;
        if ( timer < 10 ){
          timer = "0" + timer;
        }

        renderTime( timer, subMinute, currentMinute );
        if (subMinute){
          currentMinute--;
          subMinute = false;
        }

        if ( parseInt ( timer ) === 0 ) {
          if ( parseInt ( currentMinute ) === 0 )
            clearInterval(internal);// console.log("EMERGENCY STOP!!!")

          subMinute = true;
          timer = 60;
        }
      }, 1000)
    })

    function renderTime( setSeconds, boolMinutes, setMinutes ){
      $( "#seconds" ).text( setSeconds );

      if ( boolMinutes ){
        setMinutes--;

        if ( setMinutes < 10 )
          setMinutes = "0" + setMinutes;

        $( "#minutes" ).text( setMinutes );
      }
 
    }

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }

})