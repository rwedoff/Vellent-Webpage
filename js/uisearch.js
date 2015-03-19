$( "#search" ).click(function() {
    $("#search-bar-txt").css('visibility', 'visible');
    $("#search-button").css('visibility', 'visible');
    $("#search-bar-txt").focus();
    $("#search").hide();
});

   $("#search-bar-txt").focusout(function(){
      $("#search").show();
       $("#search-bar-txt").css('visibility', 'hidden');
       $("#search-button").css('visibility', 'hidden');
   });


