$(document).ready( function() {

    $("#image-1").click(function(){
        $(".image-1").addClass("d-none");
        $("#review-content-1").removeClass("d-none");
      });
    
    $("#review-content-1").click( function() {
       $("#review-content-1").addClass("d-none");
       $(".image-1").removeClass("d-none");
    })

    $("#image-2").click(function(){
        $(".image-2").addClass("d-none");
        $("#review-content-2").removeClass("d-none");

      });
    
    $("#review-content-2").click( function() {
       $("#review-content-2").addClass("d-none");
       $(".image-2").removeClass("d-none");
    })

    $("#image-3").click(function(){
        $(".image-3").addClass("d-none");
        $("#review-content-3").removeClass("d-none");

      });
    
    $("#review-content-3").click( function() {
       $("#review-content-3").addClass("d-none");
       $(".image-3").removeClass("d-none");
    })


});

