$(document).ready(function () {
  $(".choice").click(function () {
    $(this).removeClass("choice").addClass("selected");
    $(".choice").fadeOut("fast", function () {
      $(this).remove();
    });

    for (let i = 0; i < Object.keys(answerList).length; i++) { 
    if (Object.keys(answerList)[i] === $(".selected").text()) {

        console.log("I found a match!");
    };
    };
        
  });




});

// souce for fading out and removing elements:
//https://stackoverflow.com/questions/553402/how-to-fadeout-remove-a-div-in-jquery 