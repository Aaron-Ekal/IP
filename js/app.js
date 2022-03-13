$(document).ready(function(){
   // Hide the descriptions in the what we do section on initial load
  $("#designDescription").hide()
  $("#developmentDescription").hide()
  $("#productDescription").hide()



  // Crreating toggle functionality on what we do section
  $("#designImage").click(function () {
    $("#designImage").hide();
    $("#designDescription").show();
  });

  $("#designDescription").click(function () {
    $("#designDescription").hide();
    $("#designImage").show();
  });

  $("#developmentImage").click(function () {
    $("#developmentImage").hide();
    $("#developmentDescription").show();
  });

  $("#developmentDescription").click(function () {
    $("#developmentDescription").hide();
    $("#developmentImage").show();
  });

  $("#productImage").click(function () {
    $("#productImage").hide();
    $("#productDescription").show();
  });

  $("#productDescription").click(function () {
    $("#productDescription").hide();
    $("#productImage").show();
  });
})
