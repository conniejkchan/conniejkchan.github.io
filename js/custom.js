$(document).ready( function(){
  
    /*$("#intro").hover(function(){
      $(this).css("font-size", "150px");
  });*/
  
  $("#description").dblclick(function(){
    $("#description").html("I LOVE BTS!");
  });
  
  $("#hide").click(function(){
      $("#photo").hide();
  });
  $("#show").click(function(){
      $("#photo").show();
  });
  
    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    function myFunction() {
        var x = $("#myTopnav")[0];
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
  
  })