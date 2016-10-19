$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var fNameInput = $("input#fName").val();//looks for the "id person" inside the input html. Then creates a method that sets the inputted value and assigns that to a variable named "person1Input"
    var lNameInput = $("input#lName").val();
    var destInput= $("input#dest").val();
    var depInput = $("input#dep").val();
    var returnInput = $("input#return").val();
    var emailInput = $("input#email").val();

    $(".fName").text(fNameInput); //this jQuery function selects the "person1 class inside the span tag. Then it runs the text method, which converts the variable to text "
    $(".lName").text(lNameInput);
    $(".dest").text(destInput);
    $(".dep").text(depInput);
    $(".return").text(returnInput);
    $(".email").text(emailInput);

    $("#confirm").show();
    


    event.preventDefault();
  });

});
