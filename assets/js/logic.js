$(document).ready(function () {
  $(".choice").click(function () {
    $(this).removeClass("choice").addClass("selected");
    $(".choice").fadeOut("fast", function () { //https://stackoverflow.com/questions/553402/how-to-fadeout-remove-a-div-in-jquery
      $(this).remove();
    });
  });




});
