
$(document).ready(function () {

var reset = $(".chatbox").html();

  $(".chatbox").on('click',".choice" ,function () {
    $(this).removeClass("choice").addClass("selected");

    var selectedValue = $(".selected").text();

    $(".choice").removeClass("choice").addClass("unselected");

    // looping through answerList to find a key match, then loop through and append each value for the matching key 
    for (let question in answerList) {
        if (question == selectedValue) {
            if (questionsList[question] !== undefined){$(".chatbox").append('<p class="bot-icon"></p><p class="question">'+questionsList[question]+'</p>');}; //if there is a qustion in the question list for the selected text, then append the question.
    

            if (answerList[question].length > 1){ //this if statement is to check that the answer is NOT the last answer (followup question comes after)
                for (let choiceCounter = 0; answerList[selectedValue].length > choiceCounter; choiceCounter++) { //loop to add each one of the followup  questions
                    $(".chatbox").append($('<div class="d-flex flex-row-reverse"><p class="choice">'+answerList[question][choiceCounter]+'</p></div>').hide().fadeIn("fast")); //append new html element with fadeIn effect
                    
                }
            } else { // in the case that it is the last answer
                $(".chatbox").append($('<p class="bot-icon"><p class="lastAnswer">'+answerList[question]+'</p>').hide().fadeIn("fast"));
            };
        };
    };


    $(this).before('<p class="person-icon"></p><br>'); // inserting the person icon before the selected choice
    // source for the animated scrolldown:
    // https://www.geeksforgeeks.org/how-to-scroll-automatically-to-the-bottom-of-the-page-using-jquery/#:~:text=To%20auto%20scroll%20a%20page,%2D1%3A%20Scroll%20without%20animation.
    $(this).removeClass("selected").addClass("history");
    $("html, body").animate({ 
                    scrollTop: $( 
                      'html, body').get(0).scrollHeight 
                }, 2000); 

  });

  $("#restoreAll").click(function(){
      $(".chatbox").html(reset);
  })


});

// souce for fading out and removing elements:
//https://stackoverflow.com/questions/553402/how-to-fadeout-remove-a-div-in-jquery 