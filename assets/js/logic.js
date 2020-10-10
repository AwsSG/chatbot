$(document).ready(function () {


  $(".chatbox").on('click',".choice" ,function () {
    $(this).removeClass("choice").addClass("selected");
    $(".choice").remove();
    
    // fading out and removing the unselected choices(p elements)
    /* $(".choice").fadeOut("fast", function () {
      $(this).remove();
    });  */ // will fix the style later

    // looping through answerList to find a key match, then loop through and append each value for the matching key 
    for (let question in answerList) {
    if (question === $(".selected").text()) {
        for (let choiceCounter = 0; answerList[$(".selected").text()].length > choiceCounter; choiceCounter ++) {
            $(".chatbox").append('<p class="choice">'+answerList[question][choiceCounter]+'</p>');
            };
        };
    };
    
    $(this).removeClass("selected").addClass("history");

  });




});

// souce for fading out and removing elements:
//https://stackoverflow.com/questions/553402/how-to-fadeout-remove-a-div-in-jquery 