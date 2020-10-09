$(document).ready(function () {
  $(".choice").click(function () {
    $(this).removeClass("choice").addClass("selected");

    // fading out and removing the unselected choices(p elements)
    $(".choice").fadeOut("fast", function () {
      $(this).remove();
    }); 

    // looping through answerList to find a key match, then loop through and append each value for the matching key 
    for (let i = 0; i < Object.keys(answerList).length; i++) { 
    if (Object.keys(answerList)[i] === $(".selected").text()) {
        for (let choiceCounter = 0; answerList[$(".selected").text()].length > choiceCounter; choiceCounter ++) {
            $(".chatbox").append('<p class="question">'+answerList[$(".selected").text()][choiceCounter]+'</p>');
        };
    };
    };
        
  });




});

// souce for fading out and removing elements:
//https://stackoverflow.com/questions/553402/how-to-fadeout-remove-a-div-in-jquery 