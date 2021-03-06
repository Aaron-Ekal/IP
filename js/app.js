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

   // Hover effect on portfolio section
  $('.hoverElement').hover(function () {
    $('.companyTitle', this).slideToggle('fast');
  }, function () {
    $('.companyTitle', this).slideToggle('fast');
  });

  
   // Form Validation
  $("#submit").click(function () {
    
    let name = $("input#name").val();
    let email = $("input#email").val();
    let message = $("textarea#message").val();
    if (name && email !== null) {
      alert ("Hey " + name + ", Thank you for reaching out to us. One of our representatives will get back to you as soon as possible.");
  }
    else {
      alert("Please provide your correct name and email!")
  }
  });
})
